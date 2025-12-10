#!/usr/bin/env python3
"""
FREd - Facial Emotion Recognition System
Real-time classroom emotion recognition using CNN
"""

from flask import Flask, render_template, request, jsonify, Response
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
import json
import sqlite3
from datetime import datetime
import os

app = Flask(__name__)

# Emotion labels
EMOTIONS = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']

class EmotionRecognizer:
    def __init__(self):
        # Initialize face cascade
        self.face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
        # In a real implementation, you would load a trained model
        # self.model = load_model('emotion_model.h5')
        
    def detect_emotion(self, frame):
        """Detect emotions in a frame"""
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = self.face_cascade.detectMultiScale(gray, 1.3, 5)
        
        emotions_detected = []
        
        for (x, y, w, h) in faces:
            # Extract face ROI
            face_roi = gray[y:y+h, x:x+w]
            face_roi = cv2.resize(face_roi, (48, 48))
            
            # Simulate emotion prediction (in real app, use trained model)
            # emotion_prediction = self.model.predict(face_roi.reshape(1, 48, 48, 1))
            # For demo, return random emotion
            emotion_idx = np.random.randint(0, len(EMOTIONS))
            emotion = EMOTIONS[emotion_idx]
            confidence = np.random.uniform(0.7, 0.95)
            
            emotions_detected.append({
                'emotion': emotion,
                'confidence': confidence,
                'bbox': [int(x), int(y), int(w), int(h)]
            })
            
            # Draw rectangle and label
            cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
            cv2.putText(frame, f'{emotion}: {confidence:.2f}', 
                       (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 0), 2)
        
        return frame, emotions_detected

# Initialize emotion recognizer
emotion_recognizer = EmotionRecognizer()

# Database setup
def init_db():
    conn = sqlite3.connect('emotions.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS emotion_logs
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  timestamp TEXT,
                  emotion TEXT,
                  confidence REAL,
                  session_id TEXT)''')
    conn.commit()
    conn.close()

init_db()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/api/emotions', methods=['GET'])
def get_emotions():
    """Get emotion statistics"""
    conn = sqlite3.connect('emotions.db')
    c = conn.cursor()
    
    # Get emotion counts
    c.execute('''SELECT emotion, COUNT(*) as count 
                 FROM emotion_logs 
                 WHERE date(timestamp) = date('now') 
                 GROUP BY emotion''')
    
    emotion_counts = dict(c.fetchall())
    
    # Get recent emotions
    c.execute('''SELECT timestamp, emotion, confidence 
                 FROM emotion_logs 
                 ORDER BY timestamp DESC 
                 LIMIT 10''')
    
    recent_emotions = [{'timestamp': row[0], 'emotion': row[1], 'confidence': row[2]} 
                      for row in c.fetchall()]
    
    conn.close()
    
    return jsonify({
        'emotion_counts': emotion_counts,
        'recent_emotions': recent_emotions
    })

@app.route('/api/log_emotion', methods=['POST'])
def log_emotion():
    """Log detected emotion"""
    data = request.json
    
    conn = sqlite3.connect('emotions.db')
    c = conn.cursor()
    c.execute('''INSERT INTO emotion_logs (timestamp, emotion, confidence, session_id)
                 VALUES (?, ?, ?, ?)''',
              (datetime.now().isoformat(), data['emotion'], 
               data['confidence'], data.get('session_id', 'default')))
    conn.commit()
    conn.close()
    
    return jsonify({'status': 'success'})

def generate_frames():
    """Generate video frames for streaming"""
    camera = cv2.VideoCapture(0)
    
    while True:
        success, frame = camera.read()
        if not success:
            break
        
        # Process frame for emotion detection
        processed_frame, emotions = emotion_recognizer.detect_emotion(frame)
        
        # Encode frame
        ret, buffer = cv2.imencode('.jpg', processed_frame)
        frame = buffer.tobytes()
        
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    """Video streaming route"""
    return Response(generate_frames(),
                   mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)