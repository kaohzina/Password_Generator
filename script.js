// Assignment code here

//Define the constants for each prompt
var Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Numbers = [0,1,2,3,4,5,6,7,8,9]
var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","_","+"]
var capitalLetters = Letters.map(function(x){return x.toUpperCase();});
//console.log(capitalLetters);
function getLowerLetter (){return Letters[Math.floor(Math.random() * Letters.length)];}
function getUpperLetter (){return capitalLetters[Math.floor(Math.random() * capitalLetters.length)];}
function getNumber (){return Numbers[Math.floor(Math.random() * Numbers.length)];}
function getSymbol (){return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];}



console.log(getLowerLetter());
console.log(getUpperLetter());
console.log(getNumber());
console.log(getSymbol());



//console.log(Math.random()*26);
//var characterCount = window.prompt("How many characters do you want in your password? Choose from 8-128 characters.")

//Start with informing the user to select the criteria needed for a generated password.
//window.alert("Select the criteria you would like for your generated password.");


var uppercaseStyle = function() {
    var upperCase = window.confirm("Do you want uppercase letters in your generated password?");
    if (upperCase === true) {
  }
    else {
  }
}
//uppercaseStyle();

    var lowercaseStyle = function() {
    var lowerCase = window.confirm("Do you want lowercase letters in your generated password?");
    if (lowerCase === true) {
  }
    else {
  }
}
//lowercaseStyle();

    var numberStyle = function() {
    var numberCase = window.confirm("Do you want numbers in your generated password?");
    if (numberCase === true) {
    }
    else {
   
  }
}
//numberStyle();

    var specialStyle = function() {
    var specialCase = window.confirm("Do you want special letters in your generated password?");
    if (specialCase === true) {
    }
    else {
   
  }
}
//specialStyle();

//for (var i =0; i < 10; i++) {var num = Math.floor(Math.random() * 10) + 8;console.log(num);}






// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

