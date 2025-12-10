# Mental Health Support Chatbot

## 🤗 Overview
An NLP-based mental health support chatbot designed to provide empathetic, supportive conversations for users seeking emotional support. The system features intelligent intent recognition, crisis detection, and comprehensive resource recommendations.

## 🚀 Features
- **NLP Processing**: Advanced natural language understanding with NLTK
- **Intent Recognition**: Detects anxiety, depression, crisis situations, and support needs
- **Crisis Detection**: Immediate crisis intervention with emergency resources
- **Secure Database**: SQLite/MySQL integration for conversation logging
- **Resource Recommendations**: Context-aware mental health resource suggestions
- **Analytics Dashboard**: Conversation insights and usage statistics
- **Privacy-Focused**: Secure data handling with user anonymization

## 🛠️ Technologies Used
- **Backend**: Flask (Python), SQLite/MySQL
- **NLP**: NLTK, Natural Language Processing
- **Frontend**: HTML5, CSS3, JavaScript
- **Database**: SQLite for development, MySQL for production
- **API**: RESTful Flask API endpoints

## 🧠 NLP Capabilities

### Intent Recognition
- **Anxiety**: Stress, worry, panic, overwhelm detection
- **Depression**: Sadness, hopelessness, emptiness recognition
- **Crisis**: Suicide ideation and self-harm detection
- **Support**: Loneliness and isolation identification
- **Coping**: Help-seeking and strategy requests

### Response Patterns
- Empathetic and supportive language
- Crisis intervention protocols
- Resource recommendations
- Coping strategy suggestions
- Professional help guidance

## 🏃‍♂️ Quick Start

### Prerequisites
```bash
pip install flask nltk sqlite3 uuid
```

### NLTK Setup
```python
import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
```

### Running the Application
```bash
python app.py
```

Visit `http://localhost:5001` to access the chatbot.

## 📁 Project Structure
```
mental-health-chatbot/
├── app.py                    # Main Flask application
├── templates/
│   ├── index.html           # Chat interface
│   ├── resources.html       # Resource directory
│   └── analytics.html       # Usage analytics
├── static/
│   ├── css/
│   └── js/
├── database/
│   ├── schema.sql          # Database schema
│   └── seed_data.sql       # Initial data
├── models/
│   └── nlp_processor.py    # NLP processing utilities
└── README.md
```

## 🔒 Privacy & Security
- **Data Anonymization**: User IDs are generated, no personal information stored
- **Secure Sessions**: Flask session management
- **Crisis Protocols**: Immediate intervention for high-risk situations
- **HIPAA Considerations**: Designed with healthcare privacy in mind

## 📊 Database Schema

### Conversations Table
- `id`: Primary key
- `user_id`: Anonymous user identifier
- `user_message`: User input
- `bot_response`: Chatbot response
- `intent`: Detected intent category
- `timestamp`: Conversation timestamp

### Users Table
- `id`: Primary key
- `user_id`: Anonymous identifier
- `first_visit`: Initial session timestamp
- `last_visit`: Most recent session
- `total_messages`: Message count

### Resources Table
- `id`: Primary key
- `title`: Resource name
- `description`: Resource description
- `url`: Resource link
- `category`: Resource category

## 🎯 Use Cases
- **Mental Health Support**: 24/7 emotional support availability
- **Crisis Intervention**: Immediate response to crisis situations
- **Resource Discovery**: Mental health resource recommendations
- **Therapy Supplement**: Support between therapy sessions
- **Educational Tool**: Mental health awareness and education

## 📈 Analytics Features
- Conversation volume tracking
- Intent distribution analysis
- User engagement metrics
- Crisis detection statistics
- Resource utilization tracking

## 🚨 Crisis Response Protocol
1. **Immediate Detection**: Keywords trigger crisis response
2. **Emergency Resources**: National Suicide Prevention Lifeline (988)
3. **Crisis Text Line**: Text HOME to 741741
4. **Emergency Services**: 911 recommendation for immediate danger
5. **Follow-up Resources**: Professional help recommendations

## 🔮 Future Enhancements
- **Machine Learning**: Advanced ML models for better intent recognition
- **Multilingual Support**: Multiple language capabilities
- **Voice Integration**: Speech-to-text and text-to-speech
- **Mobile App**: Native iOS/Android applications
- **Therapist Integration**: Professional oversight features
- **Sentiment Analysis**: Emotional state tracking over time

## ⚠️ Important Disclaimers
- This chatbot is not a replacement for professional mental health care
- In crisis situations, users are directed to emergency services
- All conversations are logged for quality improvement (anonymously)
- Users should seek professional help for ongoing mental health concerns

## 🤝 Mental Health Resources
- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **NAMI**: National Alliance on Mental Illness
- **Psychology Today**: Therapist directory
- **SAMHSA**: Substance Abuse and Mental Health Services

## 👨‍💻 Developer
**Neellohit Dasgupta**
- Email: neellohitdsgpt@gmail.com
- LinkedIn: [neellohit-dasgupta395](http://linkedin.com/in/neellohit-dasgupta395)
- GitHub: [Neellohitdasgupta](https://github.com/Neellohitdasgupta)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
*Built with 💙 to provide support and hope to those who need it most*