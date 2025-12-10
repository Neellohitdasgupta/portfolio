# Mental Health Support Chatbot Demo

## 🤗 Live Demo
**[View Live Demo](https://neellohitdasgupta.github.io/mental-health-chatbot/)**

## Overview
An intelligent mental health support chatbot that provides empathetic conversations and crisis intervention. This demo showcases advanced NLP capabilities, intent recognition, and resource recommendations for mental health support.

## 🚀 Features
- **Intent Recognition**: Detects anxiety, depression, crisis situations, and support needs
- **Crisis Detection**: Immediate intervention with emergency resources
- **Empathetic Responses**: Contextually appropriate and supportive conversations
- **Resource Recommendations**: Mental health resources based on detected needs
- **Quick Response Options**: Pre-defined conversation starters
- **Typing Indicators**: Realistic chat experience with typing animations
- **Privacy-Focused**: All conversations happen locally in the browser

## 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **NLP**: Pattern matching and keyword detection
- **UI/UX**: Modern chat interface with smooth animations
- **Responsive**: Mobile-first design approach
- **Accessibility**: Screen reader friendly and keyboard navigation

## 🧠 Supported Intents

### Mental Health Categories
- **Anxiety**: Stress, worry, panic, overwhelm
- **Depression**: Sadness, hopelessness, emptiness
- **Crisis**: Suicide ideation and self-harm (immediate intervention)
- **Support**: Loneliness and isolation
- **Coping**: Help-seeking and strategy requests
- **General**: Supportive conversation and active listening

### Crisis Response Protocol
1. **Immediate Detection**: Keywords trigger crisis response
2. **Emergency Resources**: National Suicide Prevention Lifeline (988)
3. **Crisis Text Line**: Text HOME to 741741
4. **Emergency Services**: 911 recommendation for immediate danger

## 🏃‍♂️ Quick Start

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Neellohitdasgupta/mental-health-chatbot.git
   cd mental-health-chatbot
   ```

2. Open `index.html` in a web browser
   - No server required - runs entirely in browser
   - For development, use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx serve .
     ```

3. Visit `http://localhost:8000`

### GitHub Pages Deployment
1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your demo will be available at: `https://yourusername.github.io/mental-health-chatbot/`

## 🎯 Demo Features

### Chat Interface
- **Modern Design**: Clean, accessible chat interface
- **Real-time Responses**: Instant message processing
- **Typing Animation**: Realistic conversation flow
- **Message History**: Persistent conversation within session

### Quick Response Buttons
- 😰 "Feeling anxious"
- 😢 "Feeling sad"  
- 🛠️ "Need help"
- 😔 "Feeling lonely"

### Resource Integration
- **Context-Aware**: Resources match detected emotional state
- **Immediate Access**: Direct links to crisis resources
- **Comprehensive**: Mental health organizations and tools
- **Emergency Contacts**: Quick access to crisis helplines

## 📁 Project Structure
```
mental-health-chatbot/
├── index.html          # Main chat interface
├── README.md          # This file
└── assets/            # Additional resources (if any)
```

## 🔍 NLP Implementation

### Intent Detection Algorithm
```javascript
function detectIntent(message) {
    const text = message.toLowerCase();
    
    // Crisis keywords (highest priority)
    if (text.includes('suicide') || text.includes('kill myself')) {
        return 'crisis';
    }
    
    // Anxiety detection
    if (text.includes('anxious') || text.includes('worried')) {
        return 'anxiety';
    }
    
    // Continue pattern matching...
}
```

### Response Generation
- **Pattern Matching**: Keyword-based intent classification
- **Contextual Responses**: Appropriate replies for each emotional state
- **Randomization**: Multiple response options to avoid repetition
- **Escalation**: Crisis situations receive immediate intervention

### Supported Keywords

#### Anxiety Triggers
- anxious, anxiety, worried, nervous, panic, stress, overwhelmed

#### Depression Triggers  
- depressed, depression, sad, hopeless, empty, worthless, down

#### Crisis Triggers
- suicide, kill myself, end it all, not worth living, hurt myself

#### Support Triggers
- lonely, alone, isolated, no one understands, support

## 🎨 Customization

### Adding New Intents
```javascript
const responses = {
    newIntent: [
        "Response option 1",
        "Response option 2", 
        "Response option 3"
    ]
};
```

### Modifying Resources
```javascript
const resources = {
    newCategory: [
        {
            title: "Resource Name",
            description: "Resource description",
            url: "https://resource-url.com"
        }
    ]
};
```

### Styling Updates
- Modify CSS variables for color schemes
- Update chat bubble styles
- Customize animations and transitions

## 🔒 Privacy & Security

### Data Protection
- **Local Processing**: All conversations stay in the browser
- **No Data Storage**: No personal information is collected or stored
- **Session-Based**: Conversation history cleared on page refresh
- **Anonymous**: No user identification or tracking

### Crisis Safety
- **Immediate Response**: Crisis keywords trigger instant intervention
- **Resource Provision**: Direct access to professional help
- **Clear Disclaimers**: Limitations clearly communicated to users
- **Emergency Contacts**: Multiple crisis intervention options

## 📊 Mental Health Resources

### Crisis Support
- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **Emergency Services**: 911

### Professional Help
- **Psychology Today**: Therapist directory
- **NAMI**: National Alliance on Mental Illness
- **SAMHSA**: Substance Abuse and Mental Health Services

### Self-Care Tools
- **Headspace**: Meditation and mindfulness
- **7 Cups**: Free emotional support
- **Mental Health America**: Resources and screening tools

## ⚠️ Important Disclaimers
- This chatbot provides support but is not a replacement for professional care
- In crisis situations, users are directed to emergency services
- All conversations are for demonstration purposes only
- Users should seek professional help for ongoing mental health concerns

## 🔮 Production Implementation
For a production version, you would need:
- **Advanced NLP**: Machine learning models for better intent recognition
- **Professional Oversight**: Licensed mental health professionals
- **Secure Backend**: Encrypted data storage and HIPAA compliance
- **Crisis Integration**: Direct connection to crisis intervention services
- **User Accounts**: Secure authentication and conversation history
- **Analytics**: Usage patterns and effectiveness metrics (anonymized)

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer
**Neellohit Dasgupta**
- Email: neellohitdsgpt@gmail.com
- LinkedIn: [neellohit-dasgupta395](http://linkedin.com/in/neellohit-dasgupta395)
- GitHub: [Neellohitdasgupta](https://github.com/Neellohitdasgupta)

---
*Built with 💙 to provide support and hope to those who need it most*