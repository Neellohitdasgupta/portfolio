#!/usr/bin/env python3
"""
Mental Health Support Chatbot
NLP-based chatbot with MySQL database and Flask API
"""

from flask import Flask, render_template, request, jsonify, session
import sqlite3
import json
import re
import random
from datetime import datetime
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import uuid

# Download required NLTK data
try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt')

try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords')

try:
    nltk.data.find('corpora/wordnet')
except LookupError:
    nltk.download('wordnet')

app = Flask(__name__)
app.secret_key = 'mental_health_chatbot_secret_key'

class MentalHealthChatbot:
    def __init__(self):
        self.lemmatizer = WordNetLemmatizer()
        self.stop_words = set(stopwords.words('english'))
        
        # Mental health response patterns
        self.patterns = {
            'greeting': {
                'patterns': ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
                'responses': [
                    "Hello! I'm here to listen and support you. How are you feeling today?",
                    "Hi there! I'm glad you reached out. What's on your mind?",
                    "Hello! Welcome to our safe space. How can I help you today?",
                    "Hi! I'm here to provide support and listen. What would you like to talk about?"
                ]
            },
            'anxiety': {
                'patterns': ['anxious', 'anxiety', 'worried', 'nervous', 'panic', 'stress', 'overwhelmed'],
                'responses': [
                    "I understand you're feeling anxious. That's completely valid. Try taking slow, deep breaths. Would you like to talk about what's causing these feelings?",
                    "Anxiety can be overwhelming. Remember that you're not alone. Let's try a grounding technique: name 5 things you can see around you.",
                    "It's okay to feel anxious. These feelings are temporary. Would you like some coping strategies that might help?",
                    "I hear that you're struggling with anxiety. That takes courage to share. What usually helps you feel more calm?"
                ]
            },
            'depression': {
                'patterns': ['depressed', 'depression', 'sad', 'hopeless', 'empty', 'worthless', 'down'],
                'responses': [
                    "I'm sorry you're going through this difficult time. Your feelings are valid, and you matter. Have you been able to talk to anyone about how you're feeling?",
                    "Depression can make everything feel heavy. Please know that you're not alone and that things can get better. What's one small thing that usually brings you comfort?",
                    "Thank you for sharing something so personal. It shows strength. Have you considered reaching out to a mental health professional?",
                    "I want you to know that your life has value. These feelings, while real and difficult, are not permanent. What support systems do you have?"
                ]
            },
            'crisis': {
                'patterns': ['suicide', 'kill myself', 'end it all', 'not worth living', 'hurt myself'],
                'responses': [
                    "I'm very concerned about you. Please reach out to a crisis helpline immediately: National Suicide Prevention Lifeline: 988. You matter and help is available.",
                    "Your life has value and meaning. Please contact emergency services (911) or the Crisis Text Line (text HOME to 741741) right now. You don't have to go through this alone.",
                    "I'm worried about your safety. Please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. There are people who want to help you."
                ]
            },
            'coping': {
                'patterns': ['coping', 'strategies', 'help', 'techniques', 'manage', 'deal with'],
                'responses': [
                    "Here are some coping strategies: deep breathing, mindfulness meditation, gentle exercise, journaling, or talking to someone you trust. What resonates with you?",
                    "Coping strategies that many find helpful include: progressive muscle relaxation, grounding techniques, creative activities, or spending time in nature. Would you like me to explain any of these?",
                    "Some effective techniques include: the 5-4-3-2-1 grounding method, box breathing, positive self-talk, or reaching out to support networks. What would you like to try?"
                ]
            },
            'support': {
                'patterns': ['lonely', 'alone', 'isolated', 'no one understands', 'support'],
                'responses': [
                    "Feeling alone can be really painful. You're not truly alone - I'm here, and there are people who care. Have you considered joining a support group or reaching out to friends/family?",
                    "Isolation can make everything feel worse. You've taken a brave step by reaching out here. What connections in your life feel most supportive?",
                    "I want you to know that you're not alone in this. Many people struggle with similar feelings. Would you like help finding local support resources?"
                ]
            },
            'resources': {
                'patterns': ['therapist', 'counselor', 'professional help', 'therapy', 'treatment'],
                'responses': [
                    "Seeking professional help is a sign of strength. You can find therapists through Psychology Today, your insurance provider, or by calling 211 for local resources.",
                    "Therapy can be incredibly helpful. Many therapists offer sliding scale fees or telehealth options. Would you like help finding resources in your area?",
                    "Professional support can make a real difference. Consider reaching out to your doctor for referrals, or check with your employer's EAP program if available."
                ]
            }
        }
        
        self.default_responses = [
            "I hear you. Can you tell me more about what you're experiencing?",
            "That sounds difficult. I'm here to listen. What's been the hardest part?",
            "Thank you for sharing that with me. How long have you been feeling this way?",
            "I want to understand better. Can you describe what that feels like for you?",
            "It takes courage to talk about these things. What kind of support would be most helpful right now?"
        ]
    
    def preprocess_text(self, text):
        """Preprocess user input"""
        text = text.lower()
        tokens = word_tokenize(text)
        tokens = [self.lemmatizer.lemmatize(token) for token in tokens if token.isalpha()]
        tokens = [token for token in tokens if token not in self.stop_words]
        return tokens
    
    def detect_intent(self, text):
        """Detect user intent from input"""
        tokens = self.preprocess_text(text)
        
        # Check for crisis keywords first
        for token in tokens:
            if token in self.patterns['crisis']['patterns']:
                return 'crisis'
        
        # Check other patterns
        for intent, data in self.patterns.items():
            if intent == 'crisis':
                continue
            for pattern in data['patterns']:
                if pattern in text.lower():
                    return intent
        
        return 'general'
    
    def generate_response(self, text, user_id):
        """Generate appropriate response"""
        intent = self.detect_intent(text)
        
        if intent in self.patterns:
            response = random.choice(self.patterns[intent]['responses'])
        else:
            response = random.choice(self.default_responses)
        
        # Log conversation
        self.log_conversation(user_id, text, response, intent)
        
        return response, intent
    
    def log_conversation(self, user_id, user_message, bot_response, intent):
        """Log conversation to database"""
        conn = sqlite3.connect('chatbot.db')
        c = conn.cursor()
        c.execute('''INSERT INTO conversations 
                     (user_id, user_message, bot_response, intent, timestamp)
                     VALUES (?, ?, ?, ?, ?)''',
                  (user_id, user_message, bot_response, intent, datetime.now().isoformat()))
        conn.commit()
        conn.close()

# Initialize chatbot
chatbot = MentalHealthChatbot()

# Database setup
def init_db():
    conn = sqlite3.connect('chatbot.db')
    c = conn.cursor()
    
    # Conversations table
    c.execute('''CREATE TABLE IF NOT EXISTS conversations
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  user_id TEXT,
                  user_message TEXT,
                  bot_response TEXT,
                  intent TEXT,
                  timestamp TEXT)''')
    
    # Users table
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  user_id TEXT UNIQUE,
                  first_visit TEXT,
                  last_visit TEXT,
                  total_messages INTEGER DEFAULT 0)''')
    
    # Resources table
    c.execute('''CREATE TABLE IF NOT EXISTS resources
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  title TEXT,
                  description TEXT,
                  url TEXT,
                  category TEXT)''')
    
    # Insert sample resources
    resources = [
        ("National Suicide Prevention Lifeline", "24/7 crisis support", "988", "Crisis"),
        ("Crisis Text Line", "Text-based crisis support", "Text HOME to 741741", "Crisis"),
        ("NAMI", "National Alliance on Mental Illness", "https://nami.org", "Support"),
        ("Psychology Today", "Find a therapist directory", "https://psychologytoday.com", "Professional Help"),
        ("Headspace", "Meditation and mindfulness app", "https://headspace.com", "Self-Care"),
        ("7 Cups", "Free emotional support", "https://7cups.com", "Support")
    ]
    
    for resource in resources:
        c.execute('''INSERT OR IGNORE INTO resources (title, description, url, category)
                     VALUES (?, ?, ?, ?)''', resource)
    
    conn.commit()
    conn.close()

init_db()

@app.route('/')
def index():
    # Generate or get user ID
    if 'user_id' not in session:
        session['user_id'] = str(uuid.uuid4())
        
        # Log new user
        conn = sqlite3.connect('chatbot.db')
        c = conn.cursor()
        c.execute('''INSERT OR REPLACE INTO users (user_id, first_visit, last_visit, total_messages)
                     VALUES (?, ?, ?, 0)''',
                  (session['user_id'], datetime.now().isoformat(), datetime.now().isoformat()))
        conn.commit()
        conn.close()
    
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '')
    user_id = session.get('user_id', 'anonymous')
    
    if not user_message.strip():
        return jsonify({'response': 'I\'m here to listen. Please share what\'s on your mind.'})
    
    # Generate response
    response, intent = chatbot.generate_response(user_message, user_id)
    
    # Update user stats
    conn = sqlite3.connect('chatbot.db')
    c = conn.cursor()
    c.execute('''UPDATE users SET last_visit = ?, total_messages = total_messages + 1
                 WHERE user_id = ?''',
              (datetime.now().isoformat(), user_id))
    conn.commit()
    conn.close()
    
    return jsonify({
        'response': response,
        'intent': intent,
        'resources': get_relevant_resources(intent)
    })

@app.route('/resources')
def resources():
    conn = sqlite3.connect('chatbot.db')
    c = conn.cursor()
    c.execute('SELECT title, description, url, category FROM resources ORDER BY category, title')
    resources_data = c.fetchall()
    conn.close()
    
    return render_template('resources.html', resources=resources_data)

@app.route('/analytics')
def analytics():
    conn = sqlite3.connect('chatbot.db')
    c = conn.cursor()
    
    # Get conversation stats
    c.execute('SELECT COUNT(*) FROM conversations')
    total_conversations = c.fetchone()[0]
    
    c.execute('SELECT COUNT(DISTINCT user_id) FROM users')
    total_users = c.fetchone()[0]
    
    c.execute('''SELECT intent, COUNT(*) as count 
                 FROM conversations 
                 GROUP BY intent 
                 ORDER BY count DESC''')
    intent_stats = c.fetchall()
    
    conn.close()
    
    return render_template('analytics.html', 
                         total_conversations=total_conversations,
                         total_users=total_users,
                         intent_stats=intent_stats)

def get_relevant_resources(intent):
    """Get resources relevant to detected intent"""
    resource_mapping = {
        'crisis': 'Crisis',
        'anxiety': 'Self-Care',
        'depression': 'Professional Help',
        'support': 'Support'
    }
    
    category = resource_mapping.get(intent, 'Support')
    
    conn = sqlite3.connect('chatbot.db')
    c = conn.cursor()
    c.execute('SELECT title, description, url FROM resources WHERE category = ? LIMIT 2', (category,))
    resources = c.fetchall()
    conn.close()
    
    return [{'title': r[0], 'description': r[1], 'url': r[2]} for r in resources]

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)