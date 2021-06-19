// Assignment code here
//Start with informing the user to select the criteria needed for a generated password.
window.alert("Select the criteria you would like for your generated password.");

//Define the constants for each prompt

//const uppercaseLetters = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
//const lowercaseLetters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
//const numbers = [0,1,2,3,4,5,6,7,8,9]
//const specialCharacters = [~,!,@,#,$,%,^,&,*,(,),_,+]


    var uppercaseStyle = function() {
    var upperCase = window.confirm("Do you want uppercase letters in your generated password?");
    if (upperCase === true) {
    window.alert('You have chosen to have uppercase letters in your generated password!')
  }
    else {
    window.alert('You have chosen NOT to have uppercase letters in your generated password!')
  }
}
uppercaseStyle();

    var lowercaseStyle = function() {
    var lowerCase = window.confirm("Do you want lowercase letters in your generated password?");
    if (lowerCase === true) {
    window.alert('You have chosen to have lowercase letters in your generated password!')
  }
    else {
    window.alert('You have chosen NOT to have lowercase letters in your generated password!')
  }
}
lowercaseStyle();

    var numberStyle = function() {
    var numberCase = window.confirm("Do you want numbers in your generated password?");
    if (numberCase === true) {
    window.alert('You have chosen to have numbers in your generated password!')
  }
    else {
    window.alert('You have chosen NOT to have numbers in your generated password!')
  }
}
numberStyle();

    var specialStyle = function() {
    var specialCase = window.confirm("Do you want special letters in your generated password?");
    if (specialCase === true) {
    window.alert('You have chosen to have special letters in your generated password!')
  }
    else {
    window.alert('You have chosen NOT to have special letters in your generated password!')
  }
}
specialStyle();








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

