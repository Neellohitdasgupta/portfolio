# ResQMap - Community Resource Locator

## 🗺️ Overview
ResQMap is an Android application designed to help users locate essential public services and community resources in their area. Built with Java and Firebase, it provides real-time access to healthcare facilities, emergency services, government offices, and other critical community resources.

## 🚀 Features
- **Location-Based Discovery**: GPS-powered service location with real-time updates
- **Firebase Integration**: Secure authentication and real-time database synchronization
- **Interactive Maps**: Detailed maps with directions and service information
- **Emergency Access**: Quick access to emergency services and crisis resources
- **Community-Driven**: User-generated content and service reviews
- **Offline Support**: Critical information available without internet connection
- **Accessibility**: Designed for users with diverse needs and abilities

## 🛠️ Technologies Used
- **Mobile Development**: Java, Android SDK
- **Backend**: Firebase (Authentication, Realtime Database, Cloud Messaging)
- **Design**: Figma for UI/UX design and prototyping
- **Maps**: Google Maps API integration
- **Database**: Firebase Realtime Database with offline persistence

## 📱 Supported Services

### Emergency Services
- 🏥 Hospitals and Medical Centers
- 🚔 Police Stations
- 🚒 Fire Departments
- 🚑 Ambulance Services

### Government Services
- 🏛️ Government Offices
- 📋 DMV Locations
- 🏛️ Court Houses
- 📮 Post Offices

### Community Resources
- 🏫 Schools and Universities
- 📚 Public Libraries
- 🏪 Pharmacies
- 🚌 Public Transportation

### Support Services
- 🏠 Homeless Shelters
- 🍽️ Food Banks
- ⚖️ Legal Aid Centers
- 🏥 Mental Health Services

## 🏗️ Architecture

### Frontend (Android)
```
app/
├── src/main/java/com/resqmap/
│   ├── activities/
│   │   ├── MainActivity.java
│   │   ├── MapActivity.java
│   │   └── ServiceDetailActivity.java
│   ├── fragments/
│   │   ├── ServiceListFragment.java
│   │   └── MapFragment.java
│   ├── adapters/
│   │   └── ServiceAdapter.java
│   ├── models/
│   │   ├── Service.java
│   │   └── User.java
│   └── utils/
│       ├── LocationHelper.java
│       └── FirebaseHelper.java
├── res/
│   ├── layout/
│   ├── drawable/
│   └── values/
└── AndroidManifest.xml
```

### Backend (Firebase)
- **Authentication**: User registration and login
- **Realtime Database**: Service data and user preferences
- **Cloud Storage**: Service images and documents
- **Cloud Messaging**: Push notifications for updates

## 🎯 Key Features

### Location Services
- **GPS Integration**: Automatic location detection
- **Custom Locations**: Manual location entry and bookmarks
- **Radius Search**: Configurable search distance
- **Route Planning**: Turn-by-turn directions to services

### User Experience
- **Intuitive Interface**: Material Design principles
- **Voice Search**: Hands-free service discovery
- **Favorites**: Save frequently used services
- **History**: Track previously accessed resources

### Community Features
- **User Reviews**: Rate and review services
- **Real-time Updates**: Community-driven service information
- **Contribution System**: Add new services and updates
- **Verification**: Community and admin verification system

## 🚀 Installation & Setup

### Prerequisites
- Android Studio 4.0+
- Android SDK 21+ (Android 5.0+)
- Firebase account and project setup
- Google Maps API key

### Setup Instructions
1. **Clone Repository**
   ```bash
   git clone https://github.com/Neellohitdasgupta/ResQMap.git
   cd ResQMap
   ```

2. **Firebase Configuration**
   - Create Firebase project
   - Add Android app to project
   - Download `google-services.json`
   - Place in `app/` directory

3. **API Keys**
   - Obtain Google Maps API key
   - Add to `local.properties`:
     ```
     MAPS_API_KEY=your_api_key_here
     ```

4. **Build & Run**
   ```bash
   ./gradlew assembleDebug
   ./gradlew installDebug
   ```

## 📊 Database Structure

### Services Collection
```json
{
  "services": {
    "serviceId": {
      "name": "Service Name",
      "category": "healthcare",
      "location": {
        "latitude": 40.7128,
        "longitude": -74.0060
      },
      "address": "123 Main St, City, State",
      "phone": "+1-555-0123",
      "hours": "9:00 AM - 5:00 PM",
      "verified": true,
      "rating": 4.5,
      "reviews": 25
    }
  }
}
```

### Users Collection
```json
{
  "users": {
    "userId": {
      "email": "user@example.com",
      "preferences": {
        "searchRadius": 10,
        "favoriteServices": ["serviceId1", "serviceId2"]
      },
      "contributions": 5,
      "joinDate": "2024-01-01"
    }
  }
}
```

## 🎨 Design System

### Color Palette
- **Primary**: #4CAF50 (Green)
- **Secondary**: #2196F3 (Blue)
- **Accent**: #FF9800 (Orange)
- **Background**: #FAFAFA (Light Gray)
- **Surface**: #FFFFFF (White)

### Typography
- **Headers**: Roboto Bold
- **Body**: Roboto Regular
- **Captions**: Roboto Light

### Components
- Material Design components
- Custom service cards
- Interactive map markers
- Floating action buttons

## 🔒 Security & Privacy
- **Data Encryption**: All data encrypted in transit and at rest
- **Location Privacy**: Optional location sharing with granular controls
- **User Anonymization**: Personal data protection and anonymization options
- **Secure Authentication**: Firebase Auth with multi-factor authentication support

## 📈 Performance Optimization
- **Lazy Loading**: Services loaded on-demand
- **Image Caching**: Efficient image loading and caching
- **Offline Support**: Critical data cached for offline access
- **Battery Optimization**: Efficient location services usage

## 🔮 Future Enhancements
- **iOS Version**: Native iOS application
- **Web Portal**: Browser-based access
- **Advanced Filters**: More granular service filtering
- **Social Features**: User communities and groups
- **Integration APIs**: Third-party service integrations
- **Analytics Dashboard**: Usage insights and service analytics

## 🎯 Use Cases
- **Emergency Situations**: Quick access to emergency services
- **New Residents**: Discover essential services in new areas
- **Travelers**: Find services while traveling
- **Community Planning**: Identify service gaps and needs
- **Accessibility**: Help users with disabilities find accessible services

## 👨‍💻 Developer
**Neellohit Dasgupta**
- Email: neellohitdsgpt@gmail.com
- LinkedIn: [neellohit-dasgupta395](http://linkedin.com/in/neellohit-dasgupta395)
- GitHub: [Neellohitdasgupta](https://github.com/Neellohitdasgupta)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing
Contributions are welcome! Please read the contributing guidelines and submit pull requests for any improvements.

---
*Built with 🗺️ to connect communities with essential resources*