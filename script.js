// Assignment code here
//Start with informing the user to select the criteria needed for a generated password.
window.alert("Select the criteria you would like for your generated password.");

//Define the constants for each prompt

const uppercaseLetters = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
const lowercaseLetters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
const numbers = [0,1,2,3,4,5,6,7,8,9]
//const specialCharacters = [~,!,@,#,$,%,^,&,*,(,),_,+]

//Prompted criteria will be used in if/else statements.
const uppercasePrompt = window.confirm("Would you like to use upper case letters?");
if (confirm) {

}
else{ 

};

const lowercasePrompt = window.confirm("Would you like to use lower case letters?");
if (confirm) {

}
else{ 

};

const numbersPrompt = window.confirm("Would you like to use numbers?");
if (confirm) {

}
else{ 

};

const specialPrompt = window.confirm("Would you like to use special characters?");
if (confirm) {

}
else{ 

};





























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

