/* ui/script.js */

// Theme Switching
function switchTheme(themeName) {
    document.getElementById('themeStylesheet').href = `themes/${themeName}.css`;
    localStorage.setItem('theme', themeName);
}

// Load saved theme and text size
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    switchTheme(savedTheme);

    const savedSize = localStorage.getItem('textSize') || '16px';
    changeTextSize(savedSize);

    // Initialize Tutorial
    showNextTutorialStep();

    // Update profiles if on settings page
    if (document.getElementById('profileList')) {
        updateProfileList();
    }
};

// Change Text Size
function changeTextSize(size) {
    document.body.style.fontSize = size;
    localStorage.setItem('textSize', size);
}

// Text-to-Speech
function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

// Speech Recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase();
    if (command.includes('start game')) {
        startGame();
    } else if (command.includes('open settings')) {
        openSettings();
    }
};

function startListening() {
    recognition.start();
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'F1') {
        openHelp();
    } else if (event.ctrlKey && event.key === 's') {
        openSettings();
    }
});

// Function Placeholders
function startGame() {
    alert('Starting game...');
}

function openSettings() {
    window.location.href = 'settings.html';
}

function openHelp() {
    alert('Opening help...');
}

function goHome() {
    window.location.href = 'index.html';
}

// Profile Management
let profiles = JSON.parse(localStorage.getItem('profiles')) || [];

function saveProfile(name) {
    const profile = {
        name: name,
        theme: localStorage.getItem('theme'),
        textSize: localStorage.getItem('textSize')
    };
    profiles.push(profile);
    localStorage.setItem('profiles', JSON.stringify(profiles));
    updateProfileList();
}

function loadProfile(name) {
    const profile = profiles.find(p => p.name === name);
    if (profile) {
        switchTheme(profile.theme);
        changeTextSize(profile.textSize);
    }
}

function updateProfileList() {
    const profileList = document.getElementById('profileList');
    profileList.innerHTML = '<option value="">Select Profile</option>'; // Reset options
    profiles.forEach(profile => {
        const option = document.createElement('option');
        option.value = profile.name;
        option.text = profile.name;
        profileList.add(option);
    });
}

// Memory Usage Display
window.addEventListener('message', function(event) {
    if (event.data.action === 'updateMemory') {
        document.getElementById('memoryUsage').innerText = `Memory Usage: ${event.data.memory} KB`;
    }
});
