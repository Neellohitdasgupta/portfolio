# ResQMap - Community Resource Locator Demo

## 🗺️ Live Demo
**[View Live Demo](https://neellohitdasgupta.github.io/ResQMap/)**

## Overview
ResQMap is an interactive Android app demo that helps users locate essential public services and community resources. This web-based demonstration showcases the mobile interface and core functionality of the location-based service discovery system.

## 🚀 Features
- **Interactive Mobile Interface**: Realistic Android app simulation
- **Service Categories**: Hospitals, Police, Fire Dept, Schools, Government, Pharmacies
- **Location Simulation**: Dynamic location updates and service discovery
- **Emergency Mode**: Priority highlighting for emergency services
- **Map Integration**: Toggle between list and map views
- **Real-time Updates**: Live service counts and location data
- **Demo Controls**: Interactive buttons to test all features

## 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Mobile UI**: CSS-based Android interface simulation
- **Animations**: Smooth transitions and interactive feedback
- **Responsive**: Adapts to different screen sizes
- **Geolocation**: Simulated GPS functionality

## 📱 Supported Services

### Emergency Services
- 🏥 **Hospitals** - Medical centers and clinics
- 🚔 **Police** - Police stations and emergency response
- 🚒 **Fire Department** - Fire stations and emergency services

### Community Services
- 🏫 **Schools** - Educational institutions
- 🏛️ **Government Offices** - Public administration services
- 🏪 **Pharmacies** - Medical supplies and prescriptions

## 🏃‍♂️ Quick Start

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Neellohitdasgupta/ResQMap.git
   cd ResQMap
   ```

2. Open `index.html` in a web browser
   - No server required for basic functionality
   - For best experience, use a local server:
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
4. Your demo will be available at: `https://yourusername.github.io/ResQMap/`

## 🎯 Demo Features

### Mobile Interface Simulation
- **Android Design**: Material Design principles
- **Status Bar**: Realistic mobile status indicators
- **App Header**: ResQMap branding and location display
- **Service Grid**: Touch-friendly service selection
- **Search Bar**: Visual search interface (demo only)

### Interactive Controls
- **📍 Update Location**: Simulates GPS location changes
- **🚨 Emergency Mode**: Highlights critical services
- **🗺️ Toggle Map**: Switches between list and map views
- **🧭 Get Directions**: Simulates navigation functionality
- **👤 User Login**: Demonstrates authentication flow
- **🔄 Reset Demo**: Returns to initial state

### Service Discovery
- **Real-time Counts**: Dynamic service availability numbers
- **Distance Calculation**: Simulated proximity measurements
- **Service Details**: Name, address, and distance information
- **Category Filtering**: Service type selection

## 📁 Project Structure
```
ResQMap/
├── index.html          # Main demo interface
├── README.md          # This file
└── assets/            # Additional resources (if any)
```

## 🎮 Interactive Demo Guide

### Getting Started
1. **Select a Service**: Click on any service category (Hospitals, Police, etc.)
2. **View Results**: See nearby services with distances
3. **Try Controls**: Use the demo control buttons to test features
4. **Emergency Mode**: Click "Emergency Mode" to see priority highlighting
5. **Map View**: Toggle map view to see location visualization

### Demo Controls Explained

#### 📍 Update Location
- Changes current location simulation
- Updates service counts dynamically
- Demonstrates GPS functionality

#### 🚨 Emergency Mode
- Highlights emergency services in red
- Simulates crisis response interface
- Auto-deactivates after 3 seconds

#### 🗺️ Toggle Map
- Switches between list and map views
- Shows location-based visualization
- Demonstrates navigation interface

#### 🧭 Get Directions
- Simulates route calculation
- Shows navigation information
- Requires service selection first

## 🔧 Customization

### Adding New Services
```javascript
const serviceData = {
    newService: [
        { 
            name: "Service Name", 
            address: "Service Address", 
            distance: "1.2 km" 
        }
    ]
};
```

### Modifying Locations
```javascript
const locations = [
    "📍 Current Location: New City, State",
    "📍 Current Location: Another City, State"
];
```

### Styling Updates
- Modify CSS variables for color schemes
- Update service card layouts
- Customize mobile interface elements

## 📊 Simulated Data

### Service Locations (Bhopal, India)
- **AIIMS Bhopal** - 2.3 km
- **Hamidia Hospital** - 3.1 km
- **MP Nagar Police Station** - 1.8 km
- **VIT Bhopal University** - 1.5 km
- **Apollo Pharmacy** - 0.8 km

### Location Updates
- MP Nagar, Bhopal
- Arera Colony, Bhopal
- Shahpura, Bhopal
- BHEL, Bhopal

## 🎨 Design System

### Color Palette
- **Primary**: #4CAF50 (Green)
- **Background**: Linear gradient (#667eea to #764ba2)
- **Cards**: Semi-transparent white overlays
- **Emergency**: #ff4444 (Red)

### Mobile UI Elements
- **Status Bar**: Time, signal, battery indicators
- **Search Bar**: Rounded input with placeholder
- **Service Cards**: Grid layout with icons and counts
- **Results**: List view with distance information

## 🔮 Production Implementation
For a real Android app, you would need:
- **Native Development**: Java/Kotlin with Android SDK
- **Google Maps API**: Real mapping and navigation
- **Firebase Backend**: User authentication and data storage
- **GPS Integration**: Actual location services
- **Database**: Real service data and user preferences
- **Push Notifications**: Service updates and alerts

## 📱 Mobile Features (Production)
- **Offline Maps**: Cached map data for offline use
- **Voice Search**: Speech-to-text service discovery
- **Favorites**: Save frequently used services
- **Reviews**: User-generated service ratings
- **Social Features**: Community-driven updates

## 🔒 Privacy Considerations
- **Location Data**: User consent for GPS access
- **Data Storage**: Secure user preference storage
- **Anonymous Usage**: Optional analytics and usage tracking
- **Permissions**: Granular control over app permissions

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
*Built with 🗺️ to connect communities with essential resources*