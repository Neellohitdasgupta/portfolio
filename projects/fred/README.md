# FREd - Facial Emotion Recognition System

## 🎭 Overview
FREd is a real-time facial emotion recognition system designed for classroom engagement monitoring. It uses Convolutional Neural Networks (CNN) to detect and analyze student emotions during learning sessions.

## 🚀 Features
- **Real-time Emotion Detection**: Live video processing with instant emotion recognition
- **CNN Architecture**: Deep learning model trained on facial expressions
- **Analytics Dashboard**: Comprehensive emotion analytics and insights
- **Secure Data Storage**: MySQL database integration for emotion logging
- **Full-stack Interface**: Flask backend with responsive web interface

## 🛠️ Technologies Used
- **Machine Learning**: TensorFlow/Keras, OpenCV, CNN
- **Backend**: Flask (Python), MySQL
- **Frontend**: HTML5, CSS3, JavaScript
- **Additional**: PHP for database management

## 📊 Supported Emotions
- Happy 😊
- Sad 😢
- Angry 😠
- Surprise 😮
- Fear 😨
- Disgust 🤢
- Neutral 😐

## 🏃‍♂️ Quick Start

### Prerequisites
```bash
pip install flask opencv-python tensorflow numpy sqlite3
```

### Running the Application
```bash
python app.py
```

Visit `http://localhost:5000` to access the application.

## 📁 Project Structure
```
fred/
├── app.py                 # Main Flask application
├── templates/
│   ├── index.html        # Main interface
│   └── dashboard.html    # Analytics dashboard
├── static/
│   ├── css/
│   └── js/
├── models/
│   └── emotion_model.h5  # Trained CNN model
└── README.md
```

## 🎯 Use Cases
- **Educational**: Monitor student engagement in classrooms
- **Healthcare**: Emotional state monitoring for therapy sessions
- **Research**: Emotion analysis for psychological studies
- **Security**: Behavioral analysis in surveillance systems

## 🔮 Future Enhancements
- Multi-face detection and tracking
- Emotion trend analysis over time
- Integration with learning management systems
- Mobile app development
- Advanced CNN architectures (ResNet, VGG)

## 👨‍💻 Developer
**Neellohit Dasgupta**
- Email: neellohitdsgpt@gmail.com
- LinkedIn: [neellohit-dasgupta395](http://linkedin.com/in/neellohit-dasgupta395)
- GitHub: [Neellohitdasgupta](https://github.com/Neellohitdasgupta)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
*Built with ❤️ for enhancing educational experiences through AI*