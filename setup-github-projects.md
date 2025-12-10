# GitHub Projects Setup Guide

## 🚀 Quick Setup Instructions

Follow these steps to create 4 separate GitHub repositories for your projects:

### 1. FREd - Facial Emotion Recognition

```bash
# Create new repository on GitHub: FREd
# Then run these commands:

cd portfolio/projects/fred-demo
git init
git add .
git commit -m "Initial commit: FREd demo with camera integration"
git branch -M main
git remote add origin https://github.com/Neellohitdasgupta/FREd.git
git push -u origin main

# Enable GitHub Pages:
# Go to Settings → Pages → Source: Deploy from branch → main
# Your demo will be live at: https://neellohitdasgupta.github.io/FREd/
```

### 2. PredictStox - Stock Forecasting

```bash
# Create new repository on GitHub: PredictStox
# Then run these commands:

cd portfolio/projects/predictstox-demo
git init
git add .
git commit -m "Initial commit: PredictStox demo with interactive charts"
git branch -M main
git remote add origin https://github.com/Neellohitdasgupta/PredictStox.git
git push -u origin main

# Enable GitHub Pages:
# Go to Settings → Pages → Source: Deploy from branch → main
# Your demo will be live at: https://neellohitdasgupta.github.io/PredictStox/
```

### 3. Mental Health Chatbot

```bash
# Create new repository on GitHub: mental-health-chatbot
# Then run these commands:

cd portfolio/projects/mental-health-chatbot-demo
git init
git add .
git commit -m "Initial commit: Mental health chatbot with NLP"
git branch -M main
git remote add origin https://github.com/Neellohitdasgupta/mental-health-chatbot.git
git push -u origin main

# Enable GitHub Pages:
# Go to Settings → Pages → Source: Deploy from branch → main
# Your demo will be live at: https://neellohitdasgupta.github.io/mental-health-chatbot/
```

### 4. ResQMap - Community Resource Locator

```bash
# Create new repository on GitHub: ResQMap
# Then run these commands:

cd portfolio/projects/resqmap-demo
git init
git add .
git commit -m "Initial commit: ResQMap Android app demo"
git branch -M main
git remote add origin https://github.com/Neellohitdasgupta/ResQMap.git
git push -u origin main

# Enable GitHub Pages:
# Go to Settings → Pages → Source: Deploy from branch → main
# Your demo will be live at: https://neellohitdasgupta.github.io/ResQMap/
```

## 📋 Step-by-Step Process

### For Each Project:

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: Use the names above (FREd, PredictStox, etc.)
   - Description: Copy from the README files
   - Make it Public
   - Don't initialize with README (we already have one)

2. **Navigate to Project Folder**
   ```bash
   cd portfolio/projects/[project-name]-demo
   ```

3. **Initialize Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: [Project description]"
   git branch -M main
   ```

4. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/Neellohitdasgupta/[repository-name].git
   git push -u origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to Pages section
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

6. **Wait 5-10 minutes** for GitHub Pages to deploy

## 🔗 Final URLs

After setup, your projects will be live at:

- **FREd**: https://neellohitdasgupta.github.io/FREd/
- **PredictStox**: https://neellohitdasgupta.github.io/PredictStox/
- **Mental Health Chatbot**: https://neellohitdasgupta.github.io/mental-health-chatbot/
- **ResQMap**: https://neellohitdasgupta.github.io/ResQMap/

## 📝 Repository Descriptions

Use these descriptions when creating repositories:

### FREd
```
Real-time facial emotion recognition system for classroom engagement monitoring. Built with CNN, JavaScript, and WebRTC for live emotion detection and analytics.
```

### PredictStox
```
Advanced stock forecasting system using LSTM/RNN neural networks. Interactive demo with Plotly.js charts, real-time predictions, and market analysis.
```

### Mental Health Chatbot
```
NLP-based mental health support chatbot with crisis detection and resource recommendations. Provides empathetic conversations and emergency intervention.
```

### ResQMap
```
Android app demo for locating essential community resources. Features GPS-based service discovery, emergency mode, and interactive mobile interface.
```

## 🏷️ Repository Topics

Add these topics to each repository for better discoverability:

### FREd
`machine-learning`, `computer-vision`, `emotion-recognition`, `cnn`, `javascript`, `webrtc`, `education`, `demo`

### PredictStox
`machine-learning`, `lstm`, `stock-prediction`, `plotly`, `javascript`, `finance`, `data-visualization`, `demo`

### Mental Health Chatbot
`nlp`, `chatbot`, `mental-health`, `javascript`, `crisis-intervention`, `healthcare`, `ai`, `demo`

### ResQMap
`android`, `mobile-app`, `gps`, `community-resources`, `javascript`, `location-services`, `emergency`, `demo`

## ✅ Verification Checklist

After setup, verify each project:

- [ ] Repository is public and accessible
- [ ] README.md displays correctly with project information
- [ ] GitHub Pages is enabled and working
- [ ] Live demo loads without errors
- [ ] All interactive features work as expected
- [ ] Links in portfolio point to correct GitHub Pages URLs

## 🔧 Troubleshooting

### Common Issues:

1. **GitHub Pages not working**
   - Check if Pages is enabled in Settings
   - Ensure branch is set to 'main'
   - Wait 5-10 minutes for deployment

2. **Demo not loading**
   - Check browser console for errors
   - Ensure all file paths are correct
   - Verify HTTPS is being used

3. **Interactive features not working**
   - Check JavaScript console for errors
   - Ensure all dependencies are loaded
   - Test in different browsers

## 📞 Support

If you encounter issues:
1. Check the GitHub Pages documentation
2. Verify all file paths are relative
3. Test locally before pushing to GitHub
4. Check browser developer tools for errors

---

**Next Steps**: After setting up all repositories, update your portfolio links to point to the live GitHub Pages URLs instead of local paths.