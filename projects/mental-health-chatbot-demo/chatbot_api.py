"""
Mental Health Chatbot AI Backend
Uses Hugging Face Inference API for intelligent responses
Provides empathetic, varied, and helpful mental health support
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Hugging Face API configuration
HF_API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill"
HF_API_KEY = "hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  # Replace with your key from huggingface.co

# Conversation memory (stores last 5 messages per session)
conversation_memory = {}

# Crisis keywords detection
CRISIS_KEYWORDS = [
    'suicide', 'kill myself', 'end my life', 'want to die', 
    'hurt myself', 'self harm', 'no reason to live', 'better off dead'
]

def detect_crisis(message):
    """Detect if message contains crisis keywords"""
    message_lower = message.lower()
    return any(keyword in message_lower for keyword in CRISIS_KEYWORDS)

def get_crisis_response():
    """Return immediate crisis intervention response"""
    return {
        'response': """I'm really concerned about what you're sharing. Your safety is the most important thing right now. Please reach out to these resources immediately:

🆘 National Suicide Prevention Lifeline: 988
🆘 Crisis Text Line: Text HOME to 741741
🆘 Emergency Services: 911

These services have trained professionals available 24/7 who can help you right now. You don't have to face this alone. Will you reach out to them?""",
        'is_crisis': True,
        'resources': {
            'suicide_lifeline': '988',
            'crisis_text': 'HOME to 741741',
            'emergency': '911'
        }
    }

def get_ai_response(message, session_id='default'):
    """Get AI-powered response from Hugging Face"""
    try:
        # Build conversation context
        if session_id not in conversation_memory:
            conversation_memory[session_id] = []
        
        # Add current message to memory
        conversation_memory[session_id].append(message)
        
        # Keep only last 5 messages for context
        if len(conversation_memory[session_id]) > 5:
            conversation_memory[session_id] = conversation_memory[session_id][-5:]
        
        # Create context from conversation history
        context = " ".join(conversation_memory[session_id])
        
        # Call Hugging Face API
        headers = {"Authorization": f"Bearer {HF_API_KEY}"}
        payload = {
            "inputs": context,
            "parameters": {
                "max_length": 200,
                "temperature": 0.9,
                "top_p": 0.95,
                "do_sample": True
            }
        }
        
        response = requests.post(HF_API_URL, headers=headers, json=payload, timeout=30)
        
        if response.status_code == 200:
            result = response.json()
            if isinstance(result, list) and len(result) > 0:
                ai_response = result[0].get('generated_text', '')
                # Clean up response
                ai_response = ai_response.replace(context, '').strip()
                return ai_response
        
        # Fallback if API fails
        return get_fallback_response(message)
        
    except Exception as e:
        print(f"AI API Error: {e}")
        return get_fallback_response(message)

def get_fallback_response(message):
    """Provide empathetic fallback responses when AI is unavailable"""
    message_lower = message.lower()
    
    # Anxiety responses
    if any(word in message_lower for word in ['anxious', 'anxiety', 'worried', 'panic', 'nervous']):
        responses = [
            "I hear that you're feeling anxious. Anxiety can be really overwhelming. Would you like to try a quick breathing exercise? Or would you prefer to talk about what's making you feel this way?",
            "Thank you for sharing that you're feeling anxious. Remember, it's okay to feel this way. Have you noticed any specific triggers that make your anxiety worse?",
            "Anxiety is tough to deal with. Let's work through this together. What helps you feel calmer usually? Sometimes grounding techniques like the 5-4-3-2-1 method can help."
        ]
    
    # Sadness responses
    elif any(word in message_lower for word in ['sad', 'depressed', 'down', 'hopeless', 'empty']):
        responses = [
            "I'm sorry you're feeling sad. Your feelings are valid, and it's okay to not be okay sometimes. Would you like to talk about what's been weighing on your mind?",
            "Sadness can feel heavy. I'm here to listen without judgment. Sometimes just talking about it can help. What's been going on?",
            "I hear you, and I want you to know that it's completely normal to feel sad. You're taking a positive step by reaching out. How long have you been feeling this way?"
        ]
    
    # Stress responses
    elif any(word in message_lower for word in ['stress', 'overwhelm', 'pressure', 'too much']):
        responses = [
            "Stress can really take a toll on us. You're doing the right thing by acknowledging it. What's been the main source of your stress lately?",
            "I understand that you're feeling stressed. Let's break this down together. What's the most pressing thing on your mind right now?",
            "It sounds like you're dealing with a lot. Stress is your body's way of responding to challenges. Have you been able to take any breaks or do something you enjoy recently?"
        ]
    
    # Loneliness responses
    elif any(word in message_lower for word in ['lonely', 'alone', 'isolated', 'no one']):
        responses = [
            "Feeling lonely can be really painful. I want you to know that I'm here with you right now, and you're not alone in this moment. Would you like to talk about it?",
            "Loneliness is a difficult feeling. Thank you for trusting me with this. Even though it might not feel like it, there are people who care about you. What would help you feel more connected?",
            "I hear that you're feeling lonely. That's a valid and common feeling. Sometimes reaching out, like you're doing now, is the hardest but most important step."
        ]
    
    # Sleep issues
    elif any(word in message_lower for word in ['sleep', 'insomnia', 'tired', 'exhausted']):
        responses = [
            "Sleep difficulties can really affect how we feel. Some things that might help: maintaining a consistent sleep schedule, avoiding screens before bed, trying relaxation techniques, and creating a calm sleep environment. Have you noticed what might be keeping you awake?",
            "Not getting enough sleep can make everything feel harder. Let's talk about your sleep routine. What time do you usually try to go to bed? Are there things on your mind that keep you awake?"
        ]
    
    # Default empathetic responses
    else:
        responses = [
            "I hear you, and what you're sharing matters. Can you tell me more about how this is affecting you?",
            "Thank you for opening up to me. That takes courage. How long have you been dealing with this?",
            "I'm listening, and I want to understand better. What would be most helpful for you right now?",
            "Your feelings are completely valid. Would you like to explore this further, or is there something specific you'd like support with?",
            "I appreciate you sharing this with me. It sounds like you're going through a lot. What's been the hardest part for you?"
        ]
    
    import random
    return random.choice(responses)

@app.route('/api/chat', methods=['POST'])
def chat():
    """Main chat endpoint"""
    try:
        data = request.json
        message = data.get('message', '').strip()
        session_id = data.get('session_id', 'default')
        
        if not message:
            return jsonify({'error': 'Message is required'}), 400
        
        # Check for crisis
        if detect_crisis(message):
            return jsonify(get_crisis_response())
        
        # Get AI response
        response_text = get_ai_response(message, session_id)
        
        return jsonify({
            'response': response_text,
            'is_crisis': False,
            'timestamp': datetime.now().isoformat()
        })
        
    except Exception as e:
        return jsonify({
            'error': str(e),
            'response': "I'm having trouble processing that right now. Could you try rephrasing your message?"
        }), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'Mental Health Chatbot API',
        'ai_model': 'BlenderBot-400M',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/', methods=['GET'])
def home():
    """Home endpoint"""
    return jsonify({
        'service': 'Mental Health Chatbot API',
        'version': '1.0',
        'endpoints': {
            '/api/chat': 'POST - Send message and get response',
            '/api/health': 'GET - Health check'
        },
        'features': [
            'AI-powered responses',
            'Crisis detection',
            'Conversation memory',
            'Empathetic support'
        ]
    })

if __name__ == '__main__':
    print("🤗 Starting Mental Health Chatbot API...")
    print("💚 Server running on http://localhost:5001")
    print("✅ CORS enabled for all origins")
    print("\n⚠️  IMPORTANT: Get your free API key from https://huggingface.co/settings/tokens")
    print("   Then update HF_API_KEY in this file\n")
    app.run(host='0.0.0.0', port=5001, debug=True)
