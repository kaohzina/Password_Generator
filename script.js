//defining the values in the array lists. 
const array1 = []
const newArray = [""]
// 0 to 25 in the array 
const Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// 0 to 10 in the array
const Numbers = [0,1,2,3,4,5,6,7,8,9]
// 0 to 12 in the array 
const specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","_","+"]
// capital letters are the same amount as the lowercase letters. 
const capitalLetters = Letters.map(function(x){return x.toUpperCase();});

//functions to receive requested criteria
function getLowerLetter (){return Letters[Math.floor(Math.random() * Letters.length)];}
function getUpperLetter (){return capitalLetters[Math.floor(Math.random() * capitalLetters.length)];}
function getNumber (){return Numbers[Math.floor(Math.random() * Numbers.length)];}
function getSymbol (){return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];}


function generatePassword(){
  //this will determine the length of the password.
  const lengthCase = window.prompt("How many characters do you want in your password? Choose from 8-128 characters.")
  if (lengthCase < 8 || lengthCase > 128 || null){ window.alert("Your generated password needs to have a length of 8-128 characters."); 
  generatePassword();
  } 
  const lc = window.confirm("Do you want lowercase letters in your generated password?");
  const uc = window.confirm("Do you want uppercase letters in your generated password?");
  const nc = window.confirm("Do you want numbers in your generated password?");
  const sc = window.confirm("Do you want special letters in your generated password?");

  //requestedCriteria is an array that lists the following as true or false and applies the rules to make a new password. 
  const requestedCriteria = {
    length: lengthCase,
    lower: lc,
    upper: uc,
    number: nc,
    symbol: sc
  };

  console.log(requestedCriteria);
  console.log(getLowerLetter());
  console.log(getUpperLetter());
  console.log(getNumber());
  console.log(getSymbol());
  console.log(lengthCase);

// make a new array with the criteria values 
 
if (lc) {
}

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


