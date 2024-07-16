// Get values from the screen and display them
function getValues() {
    let inputMessage = document.getElementById("message").value;
    let alertMessage = document.getElementById("alertMessage");

    let reverseMessage = reverse(inputMessage);

    let checkPalindrome = checkForPalindrome(inputMessage, reverseMessage);

    alertMessage.innerHTML = displayMessage(inputMessage, reverseMessage, checkPalindrome);
}

// Return the message in reverse
function reverse(message) {
    let reverseMessage = "";

    for (let index = message.length - 1; index >= 0; index--) {
        reverseMessage += message[index];
    }

    return reverseMessage;
}

// Check if the message is a palindrome
function checkForPalindrome(message, reverseMessage) {
    let formattedMessage = message.toLowerCase().replace(/\s/g, '');
    let reversedMessage = reverseMessage.toLowerCase().replace(/\s/g, '');
    if (formattedMessage == reversedMessage) {
        return true;
    } else {
        return false;
    }
}


// Display message and reversed message
function displayMessage(inputMessage, reverseMessage, checkPalindrome) {
    // Remove the d-none class from the alert.

    let message = "";

    if (checkPalindrome) {
        message += `<div class = isPal border border-bottom><strong>Well done! You entered a Palindrome!</strong></div><div class = isPal>Your phrase reversed is: <strong>${reverseMessage}</strong></div>`;
    } else {
        message += `<div class = notPal><strong>Sorry! You did not enter a Palindrome!</strong></div><div class = notPal>Your phrase reversed is: <strong>${reverseMessage}</strong></div>`;
    }
    
    return message;
}