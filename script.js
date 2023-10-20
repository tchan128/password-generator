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

// var numbers = ["0123456789"];
var alphabet = ["abcdefghijklmnopqrstuvwxyz"];
// var special = [" !\"$%&'()*+,-./:;<=>?@[]\^_`{|}~"];


//This should all be in the generatePassword() function

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

  var lowercase;
  
  if (confirm ("Would you like to include lowercase letters in your password?") === true) {
    alert("Lowercase will be included.");
    lowercase = true;
  } else {
    alert("Lowercase will not be included.");
    lowercase = false;
  }

  console.log(lowercase);

  var uppercase = prompt("Would you like to include uppercase letters in your password? Enter: Y or N");
  var numeric = prompt("Would you like to include numbers in your password? Enter: Y or N")
  var specialLetters = prompt("Would you like to include special letters in your password? Enter: Y or N")
  
  // Try to make Yes = True, No = False

  var conditions = []
  
  if (lowercase === "N" && uppercase === "N" && numeric === "N" && specialLetters === "N") {
    alert("At least one of the characters has to be included.")}
    // Prompt again
  // } else if (lowercase.toUpperCase === "Y" || lowercase.toUpperCase === "YES") {
  //   conditions.push("lowercase");
  // } else if (uppercase.toUpperCase === "Y" || uppercase.toUpperCase === "YES") {
  //   conditions.push("uppercase");
  // } else if (numeric.toUpperCase === "Y" || numeric.toUpperCase === "YES") {
  //   conditions.push("numeric");
  // } else if (specialLetters.toUpperCase === "Y" || specialLetters.toUpperCase === "YES") {
  //   conditions.push("special");
 
    // } else {
  //   alert("Please try again and enter valid responses.")
  //   // Prompt again
  // }
  
  var password = "";

  for (var count = 0; count < passwordLength; count++) {
  // Generate random number form 0-9
    var ranNum = Math.floor(Math.random() * 10);
    ranNum = (ranNum).toString();
    password = password.concat(ranNum);

  // Generate random alphabet from a-z (both lower & uppercase)
  // Generate random special letters 
  
  //Generate randomly from that list
  
  // While loop?
  }
  console.log(password);
  return password;

}
