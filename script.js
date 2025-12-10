// Typing Animation
const typingText = document.querySelector('.typing-text');
const phrases = [
    'AI/ML Engineer',
    'Deep Learning Developer',
    'Full-Stack ML Developer',
    'Computer Vision Specialist',
    'Data Science Enthusiast',
    'Python Developer',
    'AI Problem Solver',
    'NLP Enthusiast',
    'Data Analyst',
'Predictive Modeling Expert'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
setTimeout(typeEffect, 1000);

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-card')) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const progress = progressBar.dataset.progress;
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 200);
            }
            
            // Animate stats counter
            if (entry.target.classList.contains('stat-item')) {
                const statNumber = entry.target.querySelector('.stat-number');
                const target = parseInt(statNumber.dataset.target);
                animateCounter(statNumber, target);
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Counter animation
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// EmailJS Configuration - CONFIGURED WITH YOUR ACTUAL VALUES
const EMAILJS_CONFIG = {
    serviceID: 'service_0g7drqi',      // Your Gmail service ID
    templateID: 'template_8o2f13l',    // Your template ID
    publicKey: '0ayShdLxjHBRNYQzY'     // Your public key
};

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// Enhanced Form submission with EmailJS
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;
    
    // Get submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    try {
        // Send email using EmailJS
        const result = await emailjs.send(
            EMAILJS_CONFIG.serviceID,
            EMAILJS_CONFIG.templateID,
            {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'neellohitdsgpt@gmail.com'
            }
        );
        
        console.log('Email sent successfully:', result);
        
        // Show success message
        showNotification('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        console.error('Email sending failed:', error);
        
        // Show error message with fallback
        showNotification('❌ Failed to send message. Please email me directly at neellohitdsgpt@gmail.com', 'error');
        
        // Fallback to mailto
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:neellohitdsgpt@gmail.com?subject=${subject}&body=${body}`;
        
        setTimeout(() => {
            window.open(mailtoLink, '_blank');
        }, 2000);
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 400px;
        font-weight: 500;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// Normal cursor - no trail effect

// Add floating particles to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

createParticles();

// Add tilt effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

console.log('Portfolio loaded successfully! 🚀');

// Create starry night sky background
function createStarryNight() {
    const hero = document.querySelector('.hero');
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    starsContainer.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
    `;
    
    // Create multiple layers of stars
    for (let layer = 0; layer < 3; layer++) {
        const starCount = layer === 0 ? 200 : layer === 1 ? 100 : 50;
        const starSize = layer === 0 ? 1 : layer === 1 ? 2 : 3;
        const animationDuration = layer === 0 ? 100 : layer === 1 ? 150 : 200;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = `star star-layer-${layer}`;
            star.style.cssText = `
                position: absolute;
                width: ${starSize}px;
                height: ${starSize}px;
                background: white;
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.7 + 0.3};
                animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
                box-shadow: 0 0 ${starSize * 2}px rgba(255, 255, 255, 0.8);
            `;
            starsContainer.appendChild(star);
        }
    }
    
    hero.insertBefore(starsContainer, hero.firstChild);
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

createStarryNight();

// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.textContent = '☀️';
}

// Functions to show/hide stars
function hideStars() {
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
        starsContainer.style.opacity = '0';
        starsContainer.style.visibility = 'hidden';
    }
}

function showStars() {
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
        starsContainer.style.opacity = '1';
        starsContainer.style.visibility = 'visible';
    }
}

// Initialize stars visibility based on current theme
if (document.body.classList.contains('light-mode')) {
    // Wait for stars to be created, then hide them
    setTimeout(hideStars, 100);
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
        // Hide stars in light mode
        hideStars();
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
        // Show stars in dark mode
        showStars();
    }
});

// Animate elements on scroll
const observeElements = () => {
    const elements = document.querySelectorAll('.cert-card, .timeline-item, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
};

observeElements();

// Add achievement badges animation
const badges = document.querySelectorAll('.cert-badge');
badges.forEach((badge, index) => {
    badge.style.animationDelay = `${index * 0.2}s`;
});

console.log('🚀 Portfolio fully loaded with all features!');

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic Weather and Season Backgrounds
let currentSeason = 0;
let currentNightEffect = 0;
const seasons = ['sunny', 'rainy', 'windy', 'snowy'];
const nightEffects = ['starShower', 'aurora', 'snowfall'];
let nightTransitionInterval;

// Create weather effects container
function createWeatherContainer() {
    const hero = document.querySelector('.hero');
    let weatherContainer = hero.querySelector('.weather-container');
    
    if (!weatherContainer) {
        weatherContainer = document.createElement('div');
        weatherContainer.className = 'weather-container';
        weatherContainer.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            pointer-events: none;
            z-index: 1;
        `;
        hero.insertBefore(weatherContainer, hero.firstChild);
    }
    
    return weatherContainer;
}

const weatherContainer = createWeatherContainer();

// Sunny Day - Sun and Clouds with Birds
function createSunnyDay() {
    weatherContainer.innerHTML = '';
    
    // Sun
    const sun = document.createElement('div');
    sun.className = 'sun';
    sun.style.cssText = `
        position: absolute;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, #FFD700, #FFA500);
        border-radius: 50%;
        top: 10%;
        right: 15%;
        box-shadow: 0 0 60px #FFD700, 0 0 100px #FFA500;
        animation: sunPulse 4s ease-in-out infinite;
    `;
    weatherContainer.appendChild(sun);
    
    // Realistic Clouds with multiple puffs
    for (let i = 0; i < 6; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        const cloudWidth = 120 + Math.random() * 150;
        cloud.style.cssText = `
            position: absolute;
            width: ${cloudWidth}px;
            height: 50px;
            top: ${5 + Math.random() * 45}%;
            left: -${cloudWidth}px;
            animation: floatCloudForward ${25 + Math.random() * 25}s linear infinite;
            animation-delay: ${Math.random() * 10}s;
            filter: drop-shadow(0 8px 15px rgba(0, 0, 0, 0.15));
        `;
        
        // Create multiple cloud puffs for realistic look
        const puffCount = 4 + Math.floor(Math.random() * 3);
        for (let j = 0; j < puffCount; j++) {
            const puff = document.createElement('div');
            const puffSize = 40 + Math.random() * 40;
            puff.style.cssText = `
                position: absolute;
                width: ${puffSize}px;
                height: ${puffSize}px;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 50%;
                top: ${-10 - Math.random() * 20}px;
                left: ${j * (cloudWidth / puffCount) + Math.random() * 20}px;
                box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.05);
            `;
            cloud.appendChild(puff);
        }
        
        // Add base
        const base = document.createElement('div');
        base.style.cssText = `
            position: absolute;
            width: 100%;
            height: 30px;
            background: rgba(255, 255, 255, 0.85);
            border-radius: 50px;
            bottom: 0;
            box-shadow: inset 0 -3px 8px rgba(0, 0, 0, 0.08);
        `;
        cloud.appendChild(base);
        weatherContainer.appendChild(cloud);
    }
    
    // Realistic Flying Birds with wing flapping
    for (let i = 0; i < 12; i++) {
        const bird = document.createElement('div');
        bird.className = 'bird-container';
        const birdSize = 20 + Math.random() * 15;
        const speed = 12 + Math.random() * 15;
        
        bird.style.cssText = `
            position: absolute;
            top: ${15 + Math.random() * 35}%;
            left: -50px;
            animation: flyBirdForward ${speed}s linear infinite;
            animation-delay: ${Math.random() * 8}s;
        `;
        
        // Create bird SVG with flapping wings
        bird.innerHTML = `
            <svg width="${birdSize}" height="${birdSize}" viewBox="0 0 50 50" class="bird-svg">
                <g class="bird-wings">
                    <path d="M 25 25 Q 15 15, 5 20" stroke="#333" stroke-width="2" fill="none" class="wing-left"/>
                    <path d="M 25 25 Q 35 15, 45 20" stroke="#333" stroke-width="2" fill="none" class="wing-right"/>
                </g>
                <circle cx="25" cy="25" r="4" fill="#333"/>
                <path d="M 25 25 L 30 25" stroke="#FF6B35" stroke-width="2"/>
            </svg>
        `;
        
        weatherContainer.appendChild(bird);
    }
}

// Rainy Day
function createRainyDay() {
    weatherContainer.innerHTML = '';
    
    // Dark clouds
    for (let i = 0; i < 3; i++) {
        const cloud = document.createElement('div');
        cloud.style.cssText = `
            position: absolute;
            width: ${150 + Math.random() * 100}px;
            height: 60px;
            background: rgba(100, 100, 120, 0.7);
            border-radius: 100px;
            top: ${5 + i * 15}%;
            left: ${Math.random() * 80}%;
            animation: floatCloud ${25 + Math.random() * 15}s linear infinite;
        `;
        weatherContainer.appendChild(cloud);
    }
    
    // Rain drops
    for (let i = 0; i < 100; i++) {
        const rain = document.createElement('div');
        rain.className = 'raindrop';
        rain.style.cssText = `
            position: absolute;
            width: 2px;
            height: ${10 + Math.random() * 20}px;
            background: linear-gradient(transparent, rgba(174, 194, 224, 0.8));
            top: -20px;
            left: ${Math.random() * 100}%;
            animation: fall ${0.5 + Math.random() * 0.5}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        weatherContainer.appendChild(rain);
    }
}

// Windy Day
function createWindyDay() {
    weatherContainer.innerHTML = '';
    
    // Leaves
    for (let i = 0; i < 30; i++) {
        const leaf = document.createElement('div');
        leaf.innerHTML = '🍂';
        leaf.style.cssText = `
            position: absolute;
            font-size: ${15 + Math.random() * 15}px;
            top: -50px;
            left: ${Math.random() * 100}%;
            animation: windBlow ${3 + Math.random() * 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        weatherContainer.appendChild(leaf);
    }
    
    // Wind lines
    for (let i = 0; i < 20; i++) {
        const wind = document.createElement('div');
        wind.style.cssText = `
            position: absolute;
            width: ${50 + Math.random() * 100}px;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
            top: ${Math.random() * 100}%;
            left: -100px;
            animation: windMove ${1 + Math.random()}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        weatherContainer.appendChild(wind);
    }
}

// Snowy Day
function createSnowyDay() {
    weatherContainer.innerHTML = '';
    
    // Snowflakes
    for (let i = 0; i < 50; i++) {
        const snow = document.createElement('div');
        snow.innerHTML = '❄️';
        snow.style.cssText = `
            position: absolute;
            font-size: ${10 + Math.random() * 20}px;
            top: -50px;
            left: ${Math.random() * 100}%;
            animation: snowFall ${5 + Math.random() * 5}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            opacity: ${0.6 + Math.random() * 0.4};
        `;
        weatherContainer.appendChild(snow);
    }
}

// Night Mode Effects

// 1. Intense Star Shower with Streams
function createStarShower() {
    weatherContainer.innerHTML = '';
    
    // Create multiple streams of shooting stars
    function createStarStream() {
        // Random stream starting point
        const streamStartX = Math.random() * 100;
        const streamStartY = Math.random() * 30;
        
        // Create a burst of stars in the stream
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const shootingStar = document.createElement('div');
                shootingStar.className = 'shooting-star';
                const starSize = 2 + Math.random() * 2;
                const angle = 45 + Math.random() * 20; // Diagonal angle
                
                shootingStar.style.cssText = `
                    position: absolute;
                    width: ${starSize}px;
                    height: ${starSize}px;
                    background: white;
                    border-radius: 50%;
                    top: ${streamStartY + i * 2}%;
                    left: ${streamStartX + i * 1}%;
                    box-shadow: 0 0 15px white, 0 0 30px white, 0 0 45px rgba(255, 255, 255, 0.6);
                    opacity: 0;
                    animation: shootingStarStream ${1.5 + Math.random()}s ease-out;
                    transform: rotate(${angle}deg);
                `;
                
                // Add tail
                const tail = document.createElement('div');
                tail.style.cssText = `
                    position: absolute;
                    width: ${30 + Math.random() * 40}px;
                    height: 2px;
                    background: linear-gradient(to right, white, transparent);
                    top: 50%;
                    right: 100%;
                    transform: translateY(-50%);
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
                `;
                shootingStar.appendChild(tail);
                
                weatherContainer.appendChild(shootingStar);
                
                setTimeout(() => shootingStar.remove(), 3000);
            }, i * 100);
        }
    }
    
    // Create initial streams
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createStarStream(), i * 400);
    }
    
    // Keep creating star streams continuously
    const streamInterval = setInterval(() => {
        if (!document.body.classList.contains('light-mode')) {
            createStarStream();
        }
    }, 2000);
    
    // Also create individual shooting stars
    const singleStarInterval = setInterval(() => {
        if (!document.body.classList.contains('light-mode')) {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            shootingStar.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: white;
                border-radius: 50%;
                top: ${Math.random() * 40}%;
                left: ${Math.random() * 100}%;
                box-shadow: 0 0 15px white, 0 0 25px white;
                opacity: 0;
                animation: shootingStar ${2 + Math.random() * 2}s ease-out;
            `;
            weatherContainer.appendChild(shootingStar);
            setTimeout(() => shootingStar.remove(), 4000);
        }
    }, 800);
}

// 2. Aurora Borealis
function createAuroraBorealis() {
    const aurora = document.createElement('div');
    aurora.className = 'aurora-effect';
    aurora.style.cssText = `
        position: absolute;
        width: 100%;
        height: 70%;
        top: 0;
        left: 0;
        background: linear-gradient(
            to bottom,
            rgba(0, 255, 150, 0) 0%,
            rgba(0, 255, 150, 0.4) 20%,
            rgba(0, 200, 255, 0.3) 40%,
            rgba(150, 0, 255, 0.3) 60%,
            rgba(255, 0, 150, 0.2) 80%,
            transparent 100%
        );
        animation: auroraWave 8s ease-in-out infinite;
        filter: blur(50px);
        opacity: 0;
        transition: opacity 60s ease-in-out;
    `;
    weatherContainer.appendChild(aurora);
    
    // Fade in aurora
    setTimeout(() => {
        aurora.style.opacity = '0.8';
    }, 100);
}

// 3. Gentle Snowfall for Night
function createNightSnowfall() {
    for (let i = 0; i < 40; i++) {
        const snow = document.createElement('div');
        snow.innerHTML = '❄️';
        snow.style.cssText = `
            position: absolute;
            font-size: ${8 + Math.random() * 15}px;
            top: -50px;
            left: ${Math.random() * 100}%;
            animation: gentleSnowFall ${8 + Math.random() * 8}s linear infinite;
            animation-delay: ${Math.random() * 8}s;
            opacity: 0;
            transition: opacity 60s ease-in-out;
        `;
        weatherContainer.appendChild(snow);
        
        // Fade in snow
        setTimeout(() => {
            snow.style.opacity = `${0.4 + Math.random() * 0.4}`;
        }, 100);
    }
}

// Add all animation styles
const weatherStyles = document.createElement('style');
weatherStyles.textContent = `
    @keyframes sunPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    @keyframes floatCloud {
        0% { transform: translateX(0); }
        100% { transform: translateX(100vw); }
    }
    
    @keyframes flyBird {
        0% { transform: translateX(0) translateY(0); }
        25% { transform: translateX(25vw) translateY(-20px); }
        50% { transform: translateX(50vw) translateY(0); }
        75% { transform: translateX(75vw) translateY(-20px); }
        100% { transform: translateX(100vw) translateY(0); }
    }
    
    @keyframes fall {
        to { transform: translateY(100vh); }
    }
    
    @keyframes windBlow {
        0% { transform: translateX(0) translateY(0) rotate(0deg); }
        100% { transform: translateX(100vw) translateY(100vh) rotate(360deg); }
    }
    
    @keyframes windMove {
        to { transform: translateX(100vw); }
    }
    
    @keyframes snowFall {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(360deg); }
    }
    
    @keyframes auroraWave {
        0%, 100% { 
            transform: translateY(0) scaleY(1);
            opacity: 0.7;
        }
        50% { 
            transform: translateY(-30px) scaleY(1.2);
            opacity: 0.9;
        }
    }
    
    body.light-mode .hero {
        background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
    }
`;
document.head.appendChild(weatherStyles);

// Initialize with appropriate effect
function initializeWeatherEffect() {
    const isLightMode = document.body.classList.contains('light-mode');
    
    // Clear any existing intervals
    if (nightTransitionInterval) {
        clearInterval(nightTransitionInterval);
    }
    
    if (isLightMode) {
        createSunnyDay();
    } else {
        // Start with star shower
        currentNightEffect = 0;
        createStarShower();
        
        // Transition through night effects every 1 minute
        nightTransitionInterval = setInterval(() => {
            if (!document.body.classList.contains('light-mode')) {
                transitionNightEffect();
            }
        }, 60000); // 1 minute
    }
}

// Smooth transition between night effects
function transitionNightEffect() {
    currentNightEffect = (currentNightEffect + 1) % nightEffects.length;
    
    // Fade out current effects
    const currentEffects = weatherContainer.querySelectorAll('.aurora-effect, .shooting-star');
    currentEffects.forEach(effect => {
        effect.style.transition = 'opacity 5s ease-out';
        effect.style.opacity = '0';
    });
    
    // Wait a bit then add new effect
    setTimeout(() => {
        switch(nightEffects[currentNightEffect]) {
            case 'starShower':
                weatherContainer.innerHTML = '';
                createStarShower();
                break;
            case 'aurora':
                weatherContainer.innerHTML = '';
                createStarShower(); // Keep some shooting stars
                createAuroraBorealis();
                break;
            case 'snowfall':
                weatherContainer.innerHTML = '';
                createNightSnowfall();
                break;
        }
    }, 5000);
}

// Cycle through seasons (light mode only)
function cycleWeatherEffects() {
    const isLightMode = document.body.classList.contains('light-mode');
    
    if (isLightMode) {
        currentSeason = (currentSeason + 1) % seasons.length;
        
        switch(seasons[currentSeason]) {
            case 'sunny':
                createSunnyDay();
                break;
            case 'rainy':
                createRainyDay();
                break;
            case 'windy':
                createWindyDay();
                break;
            case 'snowy':
                createSnowyDay();
                break;
        }
    }
}

// Initialize weather effect
initializeWeatherEffect();

// Change weather effect every 5 minutes for light mode
setInterval(() => {
    if (document.body.classList.contains('light-mode')) {
        cycleWeatherEffects();
    }
}, 300000);

// Update weather when theme changes
themeToggle.addEventListener('click', () => {
    setTimeout(() => {
        initializeWeatherEffect();
        // Also handle stars visibility
        if (document.body.classList.contains('light-mode')) {
            hideStars();
        } else {
            showStars();
        }
    }, 100);
});

console.log('🌤️ Dynamic weather system activated!');
console.log('🌙 Night mode: Star showers → Aurora → Snowfall (1 min transitions)');
console.log('☀️ Day mode: Seasons change every 5 minutes');

// Resume Download Handler
document.getElementById('downloadResume').addEventListener('click', function(e) {
    // Open resume in new tab where user can print to PDF
    // User can use Ctrl+P or Cmd+P to save as PDF
    setTimeout(() => {
        alert('💡 Tip: Press Ctrl+P (or Cmd+P on Mac) and select "Save as PDF" to download the resume as PDF!');
    }, 500);
});

// Multilingual Name Animation
function animateMultilingualName() {
    const nameElement = document.getElementById('heroName');
    if (!nameElement) return;
    
    // Your name in different languages/scripts
    const nameTranslations = [
        { text: "こんにちは、ニーロヒット・ダスグプタです", lang: "Japanese" },
        { text: "你好，我是尼洛希特·达斯古普塔", lang: "Chinese" },
        { text: "नमस्ते, मैं नीलोहित दासगुप्ता हूं", lang: "Hindi" },
        { text: "হ্যালো, আমি নীলোহিত দাশগুপ্ত", lang: "Bengali" },
        { text: "வணக்கம், நான் நீலோஹித் தாஸ்குப்தா", lang: "Tamil" },
        { text: "Hi, I'm Neellohit Dasgupta", lang: "English" }
    ];
    
    let currentIndex = 0;
    let isAnimating = true;
    
    // Disable glitch effect during language animation
    nameElement.classList.remove('glitch');
    
    function changeLanguage() {
        if (currentIndex >= nameTranslations.length) {
            // Animation complete - restore glitch effect
            nameElement.classList.add('glitch');
            isAnimating = false;
            return;
        }
        
        const current = nameTranslations[currentIndex];
        
        // Fade out
        nameElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        nameElement.style.opacity = '0';
        nameElement.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            // Change text
            nameElement.textContent = current.text;
            nameElement.setAttribute('data-text', current.text);
            
            // Add language indicator directly after the name
            if (currentIndex < nameTranslations.length - 1) {
                // Remove old indicator if exists
                const oldIndicator = document.querySelector('.lang-indicator');
                if (oldIndicator) oldIndicator.remove();
                
                const langIndicator = document.createElement('div');
                langIndicator.className = 'lang-indicator';
                langIndicator.textContent = current.lang;
                langIndicator.style.cssText = `
                    display: block;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.6);
                    margin-top: 10px;
                    font-weight: normal;
                    text-align: center;
                `;
                
                // Insert right after the name element
                nameElement.insertAdjacentElement('afterend', langIndicator);
            } else {
                // Remove indicator for English
                const oldIndicator = document.querySelector('.lang-indicator');
                if (oldIndicator) oldIndicator.remove();
            }
            
            // Fade in
            nameElement.style.transform = 'translateY(0)';
            nameElement.style.opacity = '1';
            
            currentIndex++;
            
            // Continue animation or stop
            if (currentIndex < nameTranslations.length) {
                setTimeout(changeLanguage, 1500); // Show each language for 1.5 seconds
            } else {
                // Final English version - add glitch back
                setTimeout(() => {
                    nameElement.classList.add('glitch');
                }, 500);
            }
        }, 300);
    }
    
    // Start animation after a brief delay
    setTimeout(() => {
        changeLanguage();
    }, 1000);
}

// Run multilingual animation on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        animateMultilingualName();
    }, 500);
});

// Certificate Modal Functions
function openCertificate(certFileName) {
    const modal = document.getElementById('certificateModal');
    const frame = document.getElementById('certificateFrame');
    const downloadBtn = document.getElementById('certificateDownload');
    
    // Set the certificate source
    frame.src = certFileName;
    downloadBtn.href = certFileName;
    downloadBtn.download = certFileName;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    const frame = document.getElementById('certificateFrame');
    
    // Hide modal
    modal.classList.remove('active');
    frame.src = ''; // Clear iframe
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside
document.getElementById('certificateModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCertificate();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCertificate();
    }
});

console.log('📜 Certificate viewer ready!');
