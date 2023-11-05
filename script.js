// Assignment code here


var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersLower = letters.split("");
var lettersUpper = letters.toUpperCase().split("");

var digits = "0123456789";
var numbers = digits.split("");

var signs = "+=!@#$%&*,>?/";
var characters = signs.split("");

var newArray = [];
var password = [];

// Generate passwords according to the user's choices

function generatePassword(){

    console.clear();

    newArray = [];
    password = [];

// Ask if the user to choose the password length

        var pwLength = window.prompt("How long to you want the password to be? \nChoose a number between 8 and 128:");

// Ask if the user pressed Cancel, immediately end function

        if (!pwLength) {
        return;
        }

// Ask if the user enter a number smaller than 8 or bigger than 128, ask again the user to choose a correct number

        else if (pwLength < 8 || pwLength > 128 ) {
        pwLength = window.alert("Please choose a number between 8 and 128");
        // console.log(pwLength);
        pwLength = window.prompt("How long to you want the password to be? \nChoose a number between 8 and 128:");;
        }

// Ask if the user wants to include uppercases

        var lower = window.confirm("Do you want to include lowercases?");

// Ask if the user pressed Cancel, do not add lowercases to the array

        if (!lower) {
        newArray;
        // console.log(newArray);

// Ask if the user pressed ok, add lowercases to the array

        } else {
        newArray = lettersLower;
        // console.log(newArray);
        }  
        
 // Ask if the user wants to include special lowercases

        var upper = window.confirm("Do you want to include uppercases?");

// Ask if the user pressed Cancel, do not add uppercase to the array
   
        if (!upper) {
           newArray;
        //    console.log(newArray);

// Ask if the user pressed ok, add uppercase to the array
   
        } else {
           newArray = newArray.concat(lettersUpper); 
        //    console.log(newArray);
        }

// Ask if the user wants to include numbers

        var num = window.confirm("Do you want to include numbers?");

// Ask if the user pressed Cancel, do not add numbers to the array
    
        if (!num) {
            newArray;
            // console.log(newArray);

// Ask if the user pressed ok, add numbers to the array
    
        } else {
            newArray = newArray.concat(numbers); 
            // console.log(newArray);
        }

 // Ask if the user wants to include special characters

        var symbols = window.confirm("Do you want to include special characters?");

// Ask if the user pressed Cancel, do not add special characters to the array
    
        if (!symbols) {   
            newArray;
            // console.log(newArray);

// Ask if the user pressed ok, add special characters to the array

        } else {
            newArray = newArray.concat(characters); 
            // console.log(newArray);
        }

 //Generate passwords according to the user's choices

        for (var i = 0; i < pwLength; i++) {

// Choose randomn characters from the new Array

        // var index = Math.floor(Math.random() * (newArray.length));
        // console.log(index);

        var randomCharact = newArray[Math.floor(Math.random() * (newArray.length))];
        // console.log(randomCharact);

// Add the new random character to the password array

        password.push(randomCharact);       
        // console.log(password);
        }
   
 // Convert Array into a String
        password = password.join("");
        return password;
    };

// Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

// Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
        console.log(password);

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
