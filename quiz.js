// This is the JavaScript file for adding interactivity to our quiz application

// Define the checkAnswer function to evaluate the user's answer
function checkAnswer() {
    // This function will be called when the user submits their answer
    
    // Define the correct answer
    const correctAnswer = "4";
    // We store the correct answer as a string because radio button values are strings

    // Get the user's selected answer
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    // This line finds the radio button that is checked and has the name "quiz"
    // If no radio button is checked, selectedAnswer will be null

    // Get the feedback element where we'll display our message
    const feedbackElement = document.getElementById('feedback');
    // This line finds the HTML element with the ID 'feedback'

    // Check if an answer was selected
    if (selectedAnswer) {
        // This if statement ensures that the user has selected an answer before proceeding
        
        // Get the value of the selected answer
        const userAnswer = selectedAnswer.value;
        // We retrieve the value attribute of the selected radio button

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            // This if statement checks if the user's answer matches the correct answer
            
            // If the answer is correct, display a success message
            feedbackElement.textContent = "Correct! Well done.";
            // We update the text content of the feedback element with a success message
            // This will display "Correct! Well done." on the user's screen
        } else {
            // If the answer is incorrect, display an error message
            feedbackElement.textContent = "That's incorrect. Try again!";
            // We update the text content of the feedback element with an error message
            // This will display "That's incorrect. Try again!" on the user's screen
        }
    } else {
        // If no answer was selected, prompt the user to choose an answer
        feedbackElement.textContent = "Please select an answer before submitting.";
        // This updates the feedback element to prompt the user to make a selection
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
// This line finds the submit button by its ID 'submit-answer'
// It then adds a click event listener to the button
// When the button is clicked, it will call the checkAnswer function

// Note: We don't use checkAnswer() with parentheses here because we want to pass the function itself,
// not the result of calling the function. The function will be called when the button is clicked.