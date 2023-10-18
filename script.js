// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Setting constants for min and max length of password

MIN_LENGTH = 0;
MAX_LENGTH = 128;

// Prompting for length of password 

var passwordLength = prompt("Please indicate length of password (min: 0, max:128)");

if (passwordLength < MIN_LENGTH || passwordLength > MAX_LENGTH) {
  alert("Please enter a number between 0 and 128.");
  // Prompt password length again
} else if (passwordLength.includes(".")) {
  alert("Please enter a whole number.")
  // Prompt password length again
} // Condition to check if letters are in it - have yet to figure out how to code this.

