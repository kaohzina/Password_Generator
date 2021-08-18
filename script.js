//defining the values in the array lists. 
var newPassword = ""
var combinedArray = [];
// 0 to 25 in the array 
const Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// 0 to 10 in the array
const Numbers = ["0","1","2","3","4","5","6","7","8","9"]
// 0 to 12 in the array 
const Symbols = ["~","!","@","#","$","%","^","&","*","(",")","_","+"]
// capital letters are the same amount as the lowercase letters. 
const capitalLetters = Letters.map(function(x){return x.toUpperCase();});

//functions to receive requested criteria
function getLowerLetter (){return Letters[Math.floor(Math.random() * Letters.length)];}
function getUpperLetter (){return capitalLetters[Math.floor(Math.random() * capitalLetters.length)];}
function getNumber (){return Numbers[Math.floor(Math.random() * Numbers.length)];}
function getSymbol (){return Symbols[Math.floor(Math.random() * Symbols.length)];}


function generatePassword(){
  newPassword = ""
  //this will determine the length of the password.
  const lengthCase = window.prompt("How many characters do you want in your password? Choose from 8-128 characters.")
  if (lengthCase < 8 || lengthCase > 128 || null){ window.alert("Your generated password needs to have a length of 8-128 characters."); return;
  } 
  const lowerCase = window.confirm("Do you want lowercase letters in your generated password?");
  const upperCase = window.confirm("Do you want uppercase letters in your generated password?");
  const numberCase = window.confirm("Do you want numbers in your generated password?");
  const symbolCase = window.confirm("Do you want special letters in your generated password?");

  //requestedCriteria is an array that lists the following as true or false and applies the rules to make a new password. 
  const requestedCriteria = {
    lower: lowerCase,
    upper: upperCase,
    number: numberCase,
    symbol: symbolCase};
  
    if (lowerCase == true) {
      combinedArray = combinedArray.concat(Letters)
    }
    if (upperCase == true) {
      combinedArray = combinedArray.concat(capitalLetters)
    }
    if (numberCase == true) {
      combinedArray = combinedArray.concat(Numbers)
    }
    if (symbolCase == true) {
      combinedArray = combinedArray.concat(Symbols)
    }
  
    for (var i = 0; i < lengthCase; i ++) {
      newPassword = newPassword + combinedArray[Math.floor(Math.random() * combinedArray.length)];
    }
    
  console.log(combinedArray);
  console.log(requestedCriteria);
  console.log(getLowerLetter());
  console.log(getUpperLetter());
  console.log(getNumber());
  console.log(getSymbol());
  console.log(lengthCase);
  return newPassword;
// make a new array with the criteria values 
}
// Everything below this line is given 
// _______________________

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
  //Define the constants for each prompt
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


