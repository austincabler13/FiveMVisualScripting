/* ui/tutorial.js */

const tutorialSteps = [
    'Step 1: Move forward by pressing W.',
    'Step 2: Open your inventory by pressing I.',
    'Step 3: Interact with objects using E.'
];
let currentStep = 0;

function showNextTutorialStep() {
    if (currentStep < tutorialSteps.length) {
        displayTutorialMessage(tutorialSteps[currentStep]);
        currentStep++;
    } else {
        endTutorial();
    }
}

function displayTutorialMessage(message) {
    document.getElementById('tutorialMessage').innerText = message;
    speak(message); // Use text-to-speech for the message
}

function endTutorial() {
    document.getElementById('tutorialMessage').innerText = 'Tutorial Completed!';
    speak('Tutorial Completed!');
}
