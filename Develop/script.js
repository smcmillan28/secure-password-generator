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
        // If/else statements laying out every scenario
        // True, false, false, false
        if (upperCase === true && lowerCase === false && specialChar === false && numerical === false) {
            var comboOne = [];
            for (var i = 0; i < passLength; i++) {    
                var comboOneUpp = passCombo.uppCase[Math.floor(Math.random() * passCombo.uppCase.length)];
                comboOne.push(comboOneUpp);
            } 
            console.log(comboOne);
            var randomComboOne = comboOne.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboOne = randomComboOne.join("");
            console.log(finalComboOne);
        // True, true, false, false
        } else if (upperCase === true && lowerCase === true && specialChar === false && numerical === false) {
            var comboUppTwo = [];
            var comboLowTwo = [];
            for (var i = 0; i < passLength; i++) {
                var comboTwoUpp = passCombo.uppCase[Math.floor(Math.random() * passCombo.uppCase.length)];
                var comboTwoLow = passCombo.lowCase[Math.floor(Math.random() * passCombo.lowCase.length)];
                comboUppTwo.push(comboTwoUpp);  
                comboLowTwo.push(comboTwoLow);
            }
            var comboTwo = comboUppTwo.concat(comboLowTwo);
            console.log(comboTwo);
            var randComboTwo = comboTwo.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboTwo = randComboTwo.join("");
            console.log(finalComboTwo);
        // True, true, true, false
        } else if (upperCase === true && lowerCase === true && specialChar === true && numerical === false) {
            var comboUppThree = [];
            var comboLowThree = [];
            var comboSpecThree = [];
            for (var i = 0; i < passLength; i++) {
                var comboThreeUpp = passCombo.uppCase[Math.floor(Math.random() * passCombo.uppCase.length)];
                var comboThreeLow = passCombo.lowCase[Math.floor(Math.random() * passCombo.lowCase.length)];
                var comboThreeSpec = passCombo.specCharacter[Math.floor(Math.random() * passCombo.specCharacter.length)];
                comboUppThree.push(comboThreeUpp);
                comboLowThree.push(comboThreeLow);
                comboSpecThree.push(comboThreeSpec);
            }
            var comboThree = comboUppThree.concat(comboLowThree, comboSpecThree);
            console.log(comboThree);
            var randComboThree = comboThree.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboThree = randComboThree.join("");
            console.log(finalComboThree);
        // True, true, true, true
        } else if (upperCase === true && lowerCase === true && specialChar === true && numerical === true) {
            var comboUppFour = [];
            var comboLowFour = [];
            var comboSpecFour = [];
            var comboNumFour = [];
            for (var i = 0; i < passLength; i++) {
                var comboFourUpp = passCombo.uppCase[Math.floor(Math.random() * passCombo.uppCase.length)];
                var comboFourLow = passCombo.lowCase[Math.floor(Math.random() * passCombo.lowCase.length)];
                var comboFourSpec = passCombo.specCharacter[Math.floor(Math.random() * passCombo.specCharacter.length)];
                var comboFourNum = passCombo.passNumb[Math.floor(Math.random() * passCombo.passNumb.length)];
                comboUppFour.push(comboFourUpp);
                comboLowFour.push(comboFourLow);
                comboSpecFour.push(comboFourSpec);
                comboNumFour.push(comboFourNum);
            }
            var comboFour = comboUppFour.concat(comboLowFour, comboSpecFour, comboNumFour);
            console.log(comboFour);
            var randComboFour = comboFour.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboFour = randComboFour.join("");
            console.log(finalComboFour);
        }
    
    
    } else {
        alert("Password must be between 8 and 128 characters.  Please try again.");
    }

}
