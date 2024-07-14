// Define the arithmetic functions

function add(number1, number2) {
    return number1 + number2;
}
// This function takes two parameters and returns their sum
// It uses the + operator to perform addition
// The function is named 'add' to clearly indicate its purpose

function subtract(number1, number2) {
    return number1 - number2;
}
// This function takes two parameters and returns their difference
// It uses the - operator to perform subtraction
// The function is named 'subtract' to clearly indicate its purpose

function multiply(number1, number2) {
    return number1 * number2;
}
// This function takes two parameters and returns their product
// It uses the * operator to perform multiplication
// The function is named 'multiply' to clearly indicate its purpose

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}
// This function takes two parameters and returns their quotient
// It first checks if the second number is zero to avoid division by zero
// If number2 is zero, it returns an error message
// Otherwise, it uses the / operator to perform division
// The function is named 'divide' to clearly indicate its purpose

// Helper function to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}
// This helper function retrieves the values from both input fields
// It uses document.getElementById to access the input elements
// parseFloat is used to convert the input string to a number
// The || 0 ensures that if the input is empty or invalid, 0 is used instead
// The function returns an array with both numbers for easy use in event listeners

// Helper function to display the result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}
// This helper function updates the result display
// It uses document.getElementById to access the result span element
// The textContent property is used to set the text of the span to the result

// Attach event listeners to buttons
document.getElementById('add').addEventListener('click', function() {
    const [number1, number2] = getInputValues();
    const result = add(number1, number2);
    displayResult(result);
});
// This code adds a click event listener to the add button
// When clicked, it retrieves the input values using the helper function
// It then calls the add function with these values
// Finally, it displays the result using the helper function

document.getElementById('subtract').addEventListener('click', function() {
    const [number1, number2] = getInputValues();
    const result = subtract(number1, number2);
    displayResult(result);
});
// This code adds a click event listener to the subtract button
// It follows the same pattern as the add button listener
// It uses the subtract function instead of the add function

document.getElementById('multiply').addEventListener('click', function() {
    const [number1, number2] = getInputValues();
    const result = multiply(number1, number2);
    displayResult(result);
});
// This code adds a click event listener to the multiply button
// It follows the same pattern as the previous listeners
// It uses the multiply function to perform the calculation

document.getElementById('divide').addEventListener('click', function() {
    const [number1, number2] = getInputValues();
    const result = divide(number1, number2);
    displayResult(result);
});
// This code adds a click event listener to the divide button
// It follows the same pattern as the previous listeners
// It uses the divide function, which includes error handling for division by zero