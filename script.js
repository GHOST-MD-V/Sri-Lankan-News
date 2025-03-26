// Display current date
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
}

// Update date every minute
updateCurrentDate();
setInterval(updateCurrentDate, 60000);

// Simulate weather data (in a real app, you would fetch this from an API)
function updateWeather() {
    // This is just a simulation - replace with actual API call
    const weatherData = {
        temp: 32,
        description: "Sunny",
        humidity: "65%",
        icon: "sun"
    };
    
    const weatherIcon = document.querySelector('.weather-content i');
    const tempElement = document.querySelector('.temp');
    const descElement = document.querySelector('.description');
    const humidityElement = document.querySelector('.humidity');
    
    tempElement.textContent = `${weatherData.temp}°C`;
    descElement.textContent = weatherData.description;
    humidityElement.textContent = `Humidity: ${weatherData.humidity}`;
    
    // Change icon based on weather
    if (weatherData.icon === "sun") {
        weatherIcon.className = "fas fa-sun";
        weatherIcon.style.color = "#ff9900";
    } else if (weatherData.icon === "cloud") {
        weatherIcon.className = "fas fa-cloud";
        weatherIcon.style.color = "#777";
    } else if (weatherData.icon === "rain") {
        weatherIcon.className = "fas fa-cloud-rain";
        weatherIcon.style.color = "#0066cc";
    }
}

// Initialize weather
updateWeather();

// Simulate breaking news ticker (in a real app, you would fetch this from a server)
function updateBreakingNews() {
    const newsItems = [
        "Sri Lanka reaches agreement with IMF on economic reforms - More details soon",
        "Major accident on Southern Expressway - 5 injured",
        "Cabinet approves new education reforms bill",
        "Sri Lanka cricket team wins ODI series against India"
    ];
    
    let currentIndex = 0;
    const newsElement = document.querySelector('.breaking-news-content p');
    
    function rotateNews() {
        newsElement.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % newsItems.length;
            newsElement.textContent = newsItems[currentIndex];
            newsElement.style.opacity = 1;
        }, 500);
    }
    
    // Rotate news every 10 seconds
    setInterval(rotateNews, 10000);
}

// Initialize breaking news ticker
updateBreakingNews();

// Mobile menu toggle (for smaller screens)
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    navToggle.style.display = 'none';
    navToggle.style.cursor = 'pointer';
    navToggle.style.fontSize = '1.5rem';
    document.querySelector('header').prepend(navToggle);
    
    const nav = document.querySelector('nav ul');
    
    function toggleNav() {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    }
    
    navToggle.addEventListener('click', toggleNav);
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            navToggle.style.display = 'block';
            nav.style.display = 'none';
        } else {
            navToggle.style.display = 'none';
            nav.style.display = 'flex';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});
