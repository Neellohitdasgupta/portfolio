# 🧪 Project Testing Checklist

## 📋 **Pre-Upload Testing**

Before uploading to GitHub, test each project locally:

### **🎭 FREd Testing**
**File:** `portfolio/projects/fred-demo/index.html`

**Test Steps:**
1. ✅ Open in browser
2. ✅ Click "Start Camera" - should request permission
3. ✅ Allow camera access - should show live video
4. ✅ Verify emotion detection updates every 2-3 seconds
5. ✅ Check statistics panel updates
6. ✅ Click "Take Snapshot" - should download image
7. ✅ Test on mobile device
8. ✅ Check browser console for errors (F12)

**Expected Results:**
- Live camera feed displays
- Emotion labels change (Happy, Sad, Neutral, etc.)
- Statistics bars animate
- No console errors

---

### **📈 PredictStox Testing**
**File:** `portfolio/projects/predictstox-demo/index.html`

**Test Steps:**
1. ✅ Open in browser
2. ✅ Try searching "Apple" or "AAPL"
3. ✅ Verify auto-complete suggestions appear
4. ✅ Select a stock and click "Generate Prediction"
5. ✅ Check charts render properly
6. ✅ Test different currencies (try "Toyota" for JPY, "Reliance" for INR)
7. ✅ Adjust prediction period slider
8. ✅ Verify statistics update correctly

**Expected Results:**
- Search suggestions appear as you type
- Charts display with proper currency symbols
- Japanese stocks show ¥, Indian stocks show ₹
- Predictions generate smoothly

---

### **🤗 Mental Health Chatbot Testing**
**File:** `portfolio/projects/mental-health-chatbot-demo/index.html`

**Test Steps:**
1. ✅ Open in browser
2. ✅ Type "I'm feeling anxious" and send
3. ✅ Verify appropriate response appears
4. ✅ Try quick response buttons
5. ✅ Test crisis keywords like "I'm sad" or "I need help"
6. ✅ Check if resources panel appears
7. ✅ Verify typing indicator works
8. ✅ Test on mobile

**Expected Results:**
- Bot responds contextually to emotions
- Resources appear for relevant topics
- Typing animation shows before responses
- Interface is mobile-friendly

---

### **🗺️ ResQMap Testing**
**File:** `portfolio/projects/resqmap-demo/index.html`

**Test Steps:**
1. ✅ Open in browser
2. ✅ Should request location permission
3. ✅ Allow location - should detect your real location
4. ✅ Click on a service category (Hospitals, Police, etc.)
5. ✅ Verify service results appear
6. ✅ Click "Get Directions"
7. ✅ Check if navigation starts with live distance
8. ✅ Click "Full Map View"
9. ✅ Verify map displays with markers

**Expected Results:**
- Real location detected and displayed
- Service categories work when clicked
- Navigation shows decreasing distance
- Maps display with user and service markers

---

## 🔧 **Common Issues & Fixes**

### **Camera Not Working (FREd):**
- **Issue:** Camera permission denied
- **Fix:** Use HTTPS or localhost, refresh and allow permission

### **Location Not Working (ResQMap):**
- **Issue:** Location permission denied
- **Fix:** Allow location access, or it will use demo mode

### **Charts Not Loading (PredictStox):**
- **Issue:** Plotly.js not loading
- **Fix:** Check internet connection, CDN should load automatically

### **Chatbot Not Responding:**
- **Issue:** JavaScript errors
- **Fix:** Check browser console (F12) for errors

---

## 🌐 **Post-Upload Testing**

After uploading to GitHub and enabling Pages:

### **Test Live URLs:**
1. ✅ `https://YOUR-USERNAME.github.io/FREd/`
2. ✅ `https://YOUR-USERNAME.github.io/PredictStox/`
3. ✅ `https://YOUR-USERNAME.github.io/mental-health-chatbot/`
4. ✅ `https://YOUR-USERNAME.github.io/ResQMap/`

### **Verify Each Project:**
- ✅ Loads without errors
- ✅ All features work the same as locally
- ✅ Mobile responsive
- ✅ HTTPS security (GitHub Pages uses HTTPS)

---

## 📱 **Mobile Testing**

**Test on mobile devices:**
1. ✅ Open each project on your phone
2. ✅ Verify touch interactions work
3. ✅ Check responsive design
4. ✅ Test camera/GPS permissions on mobile

---

## 🎯 **Employer Demo Script**

**When showing to employers:**

### **FREd Demo (30 seconds):**
"This is FREd, a real-time facial emotion recognition system I built. It uses your camera to detect emotions live - watch as it identifies different expressions. This could be used in classrooms to monitor student engagement."

### **PredictStox Demo (45 seconds):**
"PredictStox is my stock forecasting system supporting global markets. I can search any company - let me try Toyota - see how it displays in Japanese Yen? It uses LSTM neural networks to predict prices up to 10 years ahead with interactive charts."

### **Mental Health Chatbot Demo (30 seconds):**
"This is my mental health support chatbot with NLP capabilities. Watch how it recognizes when I say 'I'm feeling anxious' and provides appropriate resources. It has crisis detection for emergency situations."

### **ResQMap Demo (45 seconds):**
"ResQMap uses real GPS to find community resources. It detected my actual location and shows nearby services. When I start navigation, watch the live distance tracking - just like Google Maps or Uber."

---

## ✅ **Final Checklist**

Before presenting to employers:

**Technical:**
- [ ] All 4 projects work perfectly
- [ ] No console errors in any project
- [ ] Mobile responsive on all projects
- [ ] GitHub Pages deployed successfully
- [ ] Professional README files

**Presentation:**
- [ ] Can demo each project in under 1 minute
- [ ] Know the key technologies used
- [ ] Can explain the problem each project solves
- [ ] Have GitHub links ready to share

**Professional:**
- [ ] Repositories have proper descriptions
- [ ] Commit messages are professional
- [ ] Topics/tags added to repositories
- [ ] Projects pinned on GitHub profile

**You're ready to impress employers with real, working projects! 🚀**