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

generateBtn.addEventListener('click', function() {
  var passwordLength = prompt("Please indicate length of password (min: 0, max:128)");

  if (passwordLength < MIN_LENGTH || passwordLength > MAX_LENGTH) {
    alert("Please enter a number between 0 and 128.");
    // Prompt password length again
  } else if (passwordLength.includes(".")) {
    alert("Please enter a whole number.")
    // Prompt password length again
  } // Condition to check if letters are in it - have yet to figure out how to code this.
  
  // Prompting for character requirements 
  
  var lowercase = prompt("Would you like to include lowercase letters in your password? Enter: Y or N");
  var uppercase = prompt("Would you like to include uppercase letters in your password? Enter: Y or N");
  var numeric = prompt("Would you like to include numbers in your password? Enter: Y or N")
  var specialLetters = prompt("Would you like to include special letters in your password? Enter: Y or N")
  
  // Try to make Yes = True, No = False
  
  function responseTranslator(response) {
    if (response === "Yes" || response === "Y") {
      response = true;
      console.log("test 1");
    } else {
      response = false;
      console.log("test 2");
    }
  }
  
  if (lowercase === "N" || uppercase === "N" || numeric === "N" || specialLetters === "N" ) {
    alert("At least one of the characters has to be included.")
  }
  
  // Generate random number form 0-9
  // Generate random alphabet from a-z (both lower & uppercase)
  // Generate random special letters 
  
  //Generate randomly from that list
  
  // While loop?

})

