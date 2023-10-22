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

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var special = " !$%&'()*+,-./:;<=>?@[]\^_`{|}~";
special += '"';

// Helper functions 

function passLength() {
  var response = prompt("Please indicate length of password (min: 8, max:128)");
  return response;
}

function includeLowercase() {
  var response = confirm ("Would you like to include lowercase letters in your password?");

  if (response === true) {
    alert("Lowercase will be included.");
    return true;
    conditionNames.push("lowercase");
  } else {
    alert("Lowercase will not be included.");
    return false;
  }
}

function includeUppercase() {
  var response = confirm ("Would you like to include uppercase lowercase letters in your password?");

  if (response === true) {
    alert("Uppercase will be included.");
    return true;
  } else {
    alert("Uppercase will not be included.");
    return false;
  }
}

function includeNumeric() {
  var response = confirm ("Would you like to include numbers letters in your password?");

  if (response === true) {
    alert("Numbers will be included.");
    return true;
  } else {
    alert("Numbers will not be included.");
    return false;
  }
}

function includeSpecial() {
  var response = confirm ("Would you like to include special letters in your password?");

  if (response === true) {
    alert("Special letters will be included.");
    return true;
  } else {
    alert("Special letters will not be included.");
    return false;
  }
}

// Function to generate password

function generatePassword() {

  // Prompting for length of password 
  var passwordLength = passLength();
  var needsCheck = true;

  while (needsCheck) 
    if (isNaN(Number(passwordLength))) {
      alert("Please enter a valid number.");
      passwordLength = passLength();
    } else if (passwordLength < MIN_LENGTH || passwordLength > MAX_LENGTH) {
      alert("Please enter a number between 0 and 128.");
      passwordLength = passLength();
    } else if (passwordLength.includes(".")) {
      alert("Please enter a whole number.");
      passwordLength = passLength();
    } else {
      needsCheck = false;
    }

  // Prompting for character requirements 

  alert("Thank you for indicating length of password. Next, you will be asked to confirm whether to include certain characters. \n \nPress 'OK' for Yes and 'Cancel' for No");

  var lowercase = includeLowercase();
  var uppercase = includeUppercase();
  var numeric = includeNumeric();
  var specialLetters = includeSpecial();
  
  var conditionNames = ["lowercase", "uppercase", "numeric", "specialLetters"];
  var conditions = [lowercase, uppercase, numeric, specialLetters];

  for (var i = 0; i < conditions.length; i++) {
    if (conditions[i] === false) {
      delete conditionNames[i];
    }
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
      password = password.concat(alphabet[lowerChar]);
    }

    if (conditionNames[selector] === "uppercase") {
      specialChar = Math.floor(Math.random() * special.length);
      password = password.concat(special[specialChar].toUpperCase());
    }

  // Generate random special letters 

  if (conditionNames[selector] === "specialLetters") {
    upperChar = Math.floor(Math.random() * 26);
    password = password.concat(alphabet[upperChar].toUpperCase());
  }

  }

  console.log(password);
  return password;

}
