const Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const Numbers = [0,1,2,3,4,5,6,7,8,9]
const specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","_","+"]
const capitalLetters = Letters.map(function(x){return x.toUpperCase();});

//functions to receive requested criteria
function getLowerLetter (){return Letters[Math.floor(Math.random() * Letters.length)];}
function getUpperLetter (){return capitalLetters[Math.floor(Math.random() * capitalLetters.length)];}
function getNumber (){return Numbers[Math.floor(Math.random() * Numbers.length)];}
function getSymbol (){return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];}
function getLength (){return lengthCase}

function passwordCriteria(){
      const lengthCase = window.prompt("How many characters do you want in your password? Choose from 8-128 characters.")
      if (lengthCase < 8 || lengthCase > 128){ window.alert("Your generated password needs to have a length of 8-128 characters.");
      }
      else { const lengthcase = length;
      }

      const upperCase = window.confirm("Do you want uppercase letters in your generated password?");
      const lowerCase = window.confirm("Do you want lowercase letters in your generated password?");
      const numberCase = window.confirm("Do you want numbers in your generated password?");
      const symbolCase = window.confirm("Do you want special letters in your generated password?");

      //requestedCriteria is an array that lists the following as true or false and applies the rules to make a new password. 
    const requestedCriteria = {
      length: getLength,
      lower: lowerCase,
      upper: upperCase,
      number: numberCase,
      symbol: symbolCase
    };
} 
    
  function test(){
  const Criteria = passwordCriteria()
  console.log(criteria)
}console.log(test());

function generatePassword(){
  requestedCriteria;
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


