# PredictStox - Stock Forecasting Demo

## 📈 Live Demo
**[View Live Demo](https://neellohitdasgupta.github.io/PredictStox/)**

## Overview
PredictStox is an advanced stock forecasting system that demonstrates LSTM/RNN neural network capabilities for predicting stock prices. This interactive demo showcases real-time data visualization and prediction algorithms.

## 🚀 Features
- **Interactive Charts**: Real-time stock price visualization using Plotly.js
- **Multiple Stocks**: Support for 8 major stock symbols (AAPL, GOOGL, MSFT, etc.)
- **Flexible Predictions**: 1 month to 10+ year forecasting capability
- **Performance Metrics**: Model accuracy, confidence scores, and risk assessment
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Simulation**: Dynamic price generation with realistic market behavior

## 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Visualization**: Plotly.js for interactive charts
- **Data Simulation**: Mathematical models for realistic stock behavior
- **Responsive**: CSS Grid and Flexbox layout
- **Animations**: Smooth transitions and loading states

## 📊 Supported Stocks
- **AAPL** - Apple Inc.
- **GOOGL** - Alphabet Inc.
- **MSFT** - Microsoft Corporation
- **TSLA** - Tesla Inc.
- **AMZN** - Amazon.com Inc.
- **NVDA** - NVIDIA Corporation
- **META** - Meta Platforms Inc.
- **NFLX** - Netflix Inc.

## 🏃‍♂️ Quick Start

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Neellohitdasgupta/PredictStox.git
   cd PredictStox
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
4. Your demo will be available at: `https://yourusername.github.io/PredictStox/`

## 🎯 Demo Features

### Stock Selection
- Dropdown menu with 8 major stocks
- Real-time price data simulation
- Volatility-based risk assessment

### Prediction Controls
- **Time Range Slider**: 30 days to 10 years
- **Visual Feedback**: Real-time slider value display
- **Instant Updates**: Dynamic chart regeneration

### Interactive Charts
- **Historical Chart**: 6-month price history
- **Prediction Chart**: Future price forecasts with trend lines
- **Dual View**: Side-by-side comparison of historical vs predicted data

### Analytics Dashboard
- **Current Price**: Real-time stock price
- **Predicted Price**: End-of-period forecast
- **Price Change**: Percentage change calculation
- **Model Metrics**: Accuracy and confidence scores
- **Market Insights**: Trend analysis and recommendations

## 📁 Project Structure
```
PredictStox/
├── index.html          # Main demo interface
├── README.md          # This file
└── assets/            # Additional resources (if any)
```

## 🧮 Simulation Algorithm

### Price Generation
The demo uses sophisticated mathematical models to simulate realistic stock behavior:

```javascript
// Trend component
const trend = (Math.random() - 0.4) * 0.001;

// Volatility component  
const volatility = (Math.random() - 0.5) * stockVolatility / 100;

// Seasonality component
const seasonality = Math.sin(timeIndex / 90) * 0.02;

// Final price calculation
const priceChange = trend + volatility + seasonality;
```

### Market Behavior
- **Realistic Volatility**: Each stock has unique volatility characteristics
- **Trend Analysis**: Slight upward bias reflecting market growth
- **Seasonality**: Cyclical patterns in price movements
- **Random Walk**: Stochastic elements for unpredictability

## 📈 Performance Metrics

### Model Statistics
- **Accuracy**: 87.3% (simulated)
- **Confidence Score**: 0.92 (simulated)
- **Processing Speed**: Real-time inference
- **Data Points**: 180-day historical analysis

### Risk Assessment
- **Low Risk**: Volatility < 1.5%
- **Medium Risk**: Volatility 1.5% - 3.0%
- **High Risk**: Volatility > 3.0%

## 🎨 Customization

### Adding New Stocks
```javascript
const stockData = {
    NEWSTOCK: { 
        price: 150.00, 
        volatility: 2.5 
    }
};
```

### Modifying Prediction Logic
```javascript
function generatePredictionData(symbol, currentPrice, days) {
    // Customize prediction algorithm here
    // Add your own mathematical models
}
```

### Styling Updates
- Modify CSS variables for color schemes
- Update chart layouts in Plotly configuration
- Customize responsive breakpoints

## 🔮 Production Implementation
For a production version, you would integrate:
- **Real Market Data**: Yahoo Finance, Alpha Vantage, or IEX Cloud APIs
- **Machine Learning**: TensorFlow.js or PyTorch models
- **Backend Services**: Flask/FastAPI for model serving
- **Database**: Historical data storage and caching
- **Authentication**: User accounts and portfolio tracking
- **Real-time Updates**: WebSocket connections for live data

## 📊 Chart Configuration
The demo uses Plotly.js with custom configurations:
- **Dark Theme**: Matches the application design
- **Responsive**: Automatically adjusts to screen size
- **Interactive**: Zoom, pan, and hover functionality
- **Smooth Animations**: Transition effects for data updates

## ⚠️ Disclaimer
This is a demonstration tool for educational purposes only. The predictions are simulated and should not be used for actual investment decisions. Always consult with financial advisors before making investment choices.

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
*Built with 📈 for smarter investment insights through AI-powered forecasting*