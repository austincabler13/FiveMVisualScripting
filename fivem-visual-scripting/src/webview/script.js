// src/webview/script.js

// Acquire the VS Code API
const vscode = acquireVsCodeApi();

// Theme Switching
function switchTheme(themeName) {
    document.getElementById('themeStylesheet').href = `themes/${themeName}.css`;
}

// Change Text Size
function changeTextSize(size) {
    document.body.style.fontSize = size;
}

// Load settings from the extension
vscode.postMessage({ command: 'getSettings' });

// Receive messages from the extension
window.addEventListener('message', event => {
    const message = event.data;
    switch (message.command) {
        case 'settings':
            applySettings(message.settings);
            break;
        // Handle other messages if necessary
    }
});

function applySettings(settings) {
    switchTheme(settings.theme);
    changeTextSize(settings.textSize);
}

// Navigation Functions
function openSettings() {
    window.location.href = 'settings.html';
}

function openFeedback() {
    window.location.href = 'feedback.html';
}

function openBlockly() {
    window.location.href = 'blockly.html';
}

function startTutorial() {
    showNextTutorialStep();
}

// Placeholder functions
function openHelp() {
    alert('Help section is under development.');
}

// Add this to src/webview/script.js

function submitFeedback() {
    const feedback = document.getElementById('feedbackText').value;
    vscode.postMessage({
        command: 'submitFeedback',
        feedback: feedback
    });
    alert('Feedback submitted. Thank you!');
    document.getElementById('feedbackText').value = '';
}
