// Assignment code here


var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersLower = letters.split("");
var lettersUpper = letters.toUpperCase().split("");

var digits = "0123456789";
var numbers = digits.split("");

var signs = "+=!@#$%&*,>?/";
var characters = signs.split("");

var allCharacters = lettersLower.concat(lettersUpper, characters, numbers);

var newArray = [];
var password = [];

// console.log(lettersLower);
// console.log(lettersUpper);
// console.log(numbers);
// console.log(characters);
// console.log(allCharacters);

// window.prompt("How long to you want the password to be? \nChoose a number between 8 and 128:");
// window.prompt("Do you want to include lowercases?");
// window.prompt("Do you want to include uppercases?");
// window.prompt("Do you want to include special characters?");

// function generatePassword(){

// IT IS WORKING : Ask if the user to choose the password length

// var pwLength = window.prompt("How long to you want the password to be? \nChoose a number between 8 and 128:");

// function askLenght(){

// if (!pwLength) {
//     return;
//       }

// else if (pwLength < 8 || pwLength > 128 ) {
//         pwLength = window.prompt("Please choose a number between 8 and 128:");
//         console.log(pwLength);
//         }

// else {
//     // return pwLength;
//     console.log(pwLength);
// }

// };

// IT IS WORKING : Ask if the user wants to include uppercases
// function addLower(){
//     var lower = window.confirm("Do you want to include lowercases?");

//     if (!lower) {
//         newArray;
//         console.log(newArray);

//     } else {
//         newArray = lettersLower;
//         console.log(newArray);
//     }
// };

// // IT IS WORKING : Ask if the user wants to include special lowercases

// function addUpper(){
//  var upper = window.confirm("Do you want to include uppercases?");

//     if (!upper) {
//         newArray;
//         console.log(newArray);

//     } else {
//         newArray = newArray.concat(lettersUpper); 
//         console.log(newArray);
//     }
// };

// IT IS WORKING : Ask if the user wants to include numbers

// function addNumbers(){
//     var num = window.confirm("Do you want to include numbers?");
    
//         if (!num) {
//             newArray;
//             console.log(newArray);
    
//         } else {
//             newArray = newArray.concat(numbers); 
//             console.log(newArray);
//         }
//     };


    // IT IS WORKING : Ask if the user wants to include special characters

// function addCharacters(){
//     var symbols = window.confirm("Do you want to include special characters?");
    
//         if (!symbols) {
//             newArray;
//             console.log(newArray);
//         } else {
//             newArray = newArray.concat(characters); 
//             console.log(newArray);
//         }
//     };

// askLenght();
// addLower();
// addUpper();
// addNumbers();
// addCharacters();

// Generate passwords according to the user's choices

function generatePassword(){

//Ask if the user to choose the password length

        var pwLength = window.prompt("How long to you want the password to be? \nChoose a number between 8 and 128:");
        
        if (!pwLength) {
        return;
        }

        else if (pwLength < 8 || pwLength > 128 ) {
        pwLength = window.alert("Please choose a number between 8 and 128");
        console.log(pwLength);
        pwLength = window.prompt("How long to you want the password to be? \nChoose a number between 8 and 128:");;
        }

// Ask if the user wants to include uppercases

        var lower = window.confirm("Do you want to include lowercases?");

        if (!lower) {
        newArray;
        console.log(newArray);

        } else {
        newArray = lettersLower;
        console.log(newArray);
        }  
        
 // Ask if the user wants to include special lowercases

        var upper = window.confirm("Do you want to include uppercases?");
   
        if (!upper) {
           newArray;
           console.log(newArray);
   
        } else {
           newArray = newArray.concat(lettersUpper); 
           console.log(newArray);
        }

// Ask if the user wants to include numbers

        var num = window.confirm("Do you want to include numbers?");
    
        if (!num) {
            newArray;
            console.log(newArray);
    
        } else {
            newArray = newArray.concat(numbers); 
            console.log(newArray);
        }

 // Ask if the user wants to include special characters

        var symbols = window.confirm("Do you want to include special characters?");
    
        if (!symbols) {
            newArray;
            console.log(newArray);
        } else {
            newArray = newArray.concat(characters); 
            console.log(newArray);
        }

        console.log(newArray);
        //Generate passwords according to the user's choices
        for (var i = 0; i < pwLength; i++) {
        // Choose randomn characters from the new Array
        var index = Math.floor(Math.random() * (newArray.length));
        console.log(index);
        var randomCharact = newArray[Math.floor(Math.random() * (newArray.length))];
        console.log(randomCharact);
        // Add the new random character to the password array
        password.push(randomCharact);
        }
        console.log(password);
   
        // Convert Array into a String
        password = password.join("");
        console.log(password);
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
