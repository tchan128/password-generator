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

// Setting constants and global variables

MIN_LENGTH = 8;
MAX_LENGTH = 128;

var alphabet = ["abcdefghijklmnopqrstuvwxyz"];
// var special = [" !\"$%&'()*+,-./:;<=>?@[]\^_`{|}~"];


// Function to generate password

function generatePassword() {
  var passwordLength = prompt("Please indicate length of password (min: 8, max:128)");

  // Prompting for length of password 
  if (passwordLength < MIN_LENGTH || passwordLength > MAX_LENGTH) {
    alert("Please enter a number between 0 and 128.");
    // Prompt password length again
  } else if (passwordLength.includes(".")) {
    alert("Please enter a whole number.")
    // Prompt password length again
  } // Condition to check if letters are in it - have yet to figure out how to code this.

  // Prompting for character requirements 

  alert("Thank you for indicating length of password. Next, you will be asked to confirm whether to include certain characters. \n \nPress 'OK' for Yes and 'Cancel' for No");

  var conditionNames = [];
  var conditions = [lowercase, uppercase, numeric, specialLetters]

  var lowercase = confirm ("Would you like to include lowercase letters in your password?");

  if (lowercase === true) {
    alert("Lowercase will be included.");
    lowercase = true;
    conditionNames.push("lowercase");
  } else {
    alert("Lowercase will not be included.");
    lowercase = false;
  }

  var uppercase = confirm ("Would you like to include uppercase letters in your password?");

  if (uppercase === true) {
    alert("Uppercase will be included.");
    uppercase = true;
    conditionNames.push("uppercase");
  } else {
    alert("Uppercase will not be included.");
    uppercase = false;
  }

  var numeric = confirm ("Would you like to include numbers in your password?");

  if (numeric === true) {
    alert("Numbers will be included.");
    numeric = true;
    conditionNames.push("numeric");
  } else {
    alert("Numbers will not be included.");
    numeric = false;
  }

  var specialLetters = confirm ("Would you like to include special letters in your password?");

  if (specialLetters === true) {
    alert("Special letters will be included.");
    specialLetters = true;
    conditionNames.push("specialLetters");
  } else {
    alert("Special letters will not be included.");
    specialLetters = false;
  }

  var allFalse = conditions.every(val => val === false);
  
  if (allFalse) { 
    alert("At least one of the characters has to be included.");
    // Prompt to select again.
  }

  var password = "";

  for (var count = 0; count < passwordLength; count++) {
  // Generate random number form 0-n (depending on which is true)
    var n = conditionNames.length;
    var selector = Math.floor(Math.random() * n);

    if (conditionNames[selector] === "numeric") {
      ranNum = Math.floor(Math.random() * 10);
      ranNum = (ranNum).toString();
      password = password.concat(ranNum);
    }

  // Generate random alphabet from a-z (both lower & uppercase)
    if (conditionNames[selector] === "lowercase") {
      lowerChar = Math.floor(Math.random() * 26);
      password = password.concat(alphabet[0][lowerChar]);
    }

  // Generate random special letters 
  
  //Generate randomly from that list
  
  // While loop?
  }
  console.log(password);
  return password;

}
