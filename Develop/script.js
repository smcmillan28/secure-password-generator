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

// Adding object to define properties and store all potential values of password
var passCombo = {
    lowCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    specCharacter: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "{", "}", "~"],
    passNumb: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
}

// Create function that defines user password criteria
function generatePassword() {
    // Starting password generator, defining length of password  
    var passLength = prompt("Time to create a password!  How many characters would you like your password to be?  \nPlease enter a number.");
    
    // Only moving on to next steps if password length is with acceptable character count
    if (passLength > 7 && passLength < 129) {
        
        // Move forward with remaining criteria selection
        var upperCase = confirm("Would you like there to be UPPERCASE letters? \nSelect 'Okay' for Yes, 'Cancel' for No.");
        var lowerCase = confirm("Would you like there to be LOWERCASE letters? \nSelect 'Okay' for Yes, 'Cancel' for No.");
        var specialChar = confirm("Would you like there to be any special characters (!, @, &, etc)? \nSelect 'Okay' for Yes, 'Cancel' for No.");
        var numerical = confirm("Would you like there to be numbers in your password? \nSelect 'Okay' for Yes, 'Cancel' for No.");
    
        // Logging current values to the console
        console.log(passLength);
        console.log(upperCase);
        console.log(lowerCase);
        console.log(specialChar); 
        console.log(numerical);


        // Create a loop that will run code as many times as defined by user and will pull random characters based on criteria selected
        if (upperCase === true && lowerCase === false && specialChar === false && numerical === false) {
            var comboOne = [];
            for (var i = 0; i < passLength; i++) {    
                var comboOneUpp = passCombo.uppCase[Math.floor(Math.random() * passLength)];
                comboOne.push(comboOneUpp);
            } 
            alert(comboOne);
        }
    
    
    } else {
        alert("Password must be between 8 and 128 characters.  Please try again.");
    }

}
