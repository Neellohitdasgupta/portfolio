# FREd - Facial Emotion Recognition Demo

## 🎭 Live Demo
**[View Live Demo](https://neellohitdasgupta.github.io/FREd/)**

## Overview
FREd is a real-time facial emotion recognition system designed for classroom engagement monitoring. This demo showcases the core functionality using browser-based camera access and simulated emotion detection.

## 🚀 Features
- **Real-time Camera Access**: Uses browser WebRTC API for live video feed
- **Emotion Detection Simulation**: Demonstrates CNN-based emotion recognition
- **Interactive Interface**: Live emotion statistics and detection history
- **Responsive Design**: Works on desktop and mobile devices
- **Privacy-Focused**: All processing happens locally in the browser

## 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Camera API**: WebRTC getUserMedia API
- **Animations**: CSS animations and transitions
- **Responsive**: CSS Grid and Flexbox

## 📊 Supported Emotions
- 😊 Happy
- 😢 Sad  
- 😠 Angry
- 😮 Surprise
- 😨 Fear
- 😐 Neutral

## 🏃‍♂️ Quick Start

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Neellohitdasgupta/FREd.git
   cd FREd
   ```

2. Open `index.html` in a modern web browser
   - **Note**: Camera access requires HTTPS or localhost
   - For local testing, use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx serve .
     ```

3. Visit `http://localhost:8000` and allow camera permissions

### GitHub Pages Deployment
1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your demo will be available at: `https://yourusername.github.io/FREd/`

## 🎯 Demo Features

### Camera Controls
- **Start Camera**: Activates webcam for live emotion detection
- **Stop Camera**: Deactivates camera and stops detection
- **Take Snapshot**: Captures and downloads current frame

### Real-time Analytics
- Live emotion percentage display
- Recent detection history
- Confidence scores for each detection
- Animated emotion statistics

### Simulated AI Processing
- Randomized emotion detection (for demo purposes)
- Realistic confidence scores (70-100%)
- Smooth transitions and animations
- Real-time statistics updates

## 📁 Project Structure
```
FREd/
├── index.html          # Main demo interface
├── README.md          # This file
└── assets/            # Additional resources (if any)
```

## 🔒 Privacy & Security
- **Local Processing**: All camera data stays in your browser
- **No Data Collection**: No personal data is stored or transmitted
- **Secure Access**: Requires user permission for camera access
- **HTTPS Required**: Camera API requires secure connection for deployment

## 🎨 Customization
The demo can be easily customized by modifying:
- **Emotions**: Update the `emotions` array in JavaScript
- **Styling**: Modify CSS variables and classes
- **Detection Logic**: Enhance the `simulateEmotionDetection()` function
- **UI Elements**: Add new controls or information panels

## 🔮 Production Implementation
For a production version, you would need:
- **Trained CNN Model**: TensorFlow.js or ONNX.js model
- **Face Detection**: MediaPipe or face-api.js integration  
- **Backend API**: Flask/FastAPI server for model inference
- **Database**: Store emotion analytics and user sessions
- **Authentication**: User management and privacy controls

## 📈 Performance Notes
- **Browser Compatibility**: Modern browsers with WebRTC support
- **Camera Requirements**: Any USB/built-in camera
- **Processing**: Lightweight simulation runs smoothly on most devices
- **Memory Usage**: Minimal footprint with efficient DOM updates

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
*Built with 🎭 for enhanced learning experiences through emotion recognition*