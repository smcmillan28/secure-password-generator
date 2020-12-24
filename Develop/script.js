// Assignment Code
console.log(window);

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

//   Commenting this code out to eliminate console error message when manipulating DOM in generatePassword function
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

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
    var passLength = prompt("Time to create your password!  \n\nHow many characters would you like your password to be? It must be between 8 and 128 characters long. \n\nPlease enter a number.");
    
    // Only moving on to next steps if password length is within acceptable character count
    if (passLength > 7 && passLength < 129) {
        
        // Move forward with remaining criteria selection
        var upperCase = confirm("Would you like there to be any UPPERCASE letters in your password? \nSelect 'OK' for Yes, 'Cancel' for No.");
        var lowerCase = confirm("Would you like there to be any LOWERCASE letters in your password? \nSelect 'OK' for Yes, 'Cancel' for No.");
        var specialChar = confirm("Would you like there to be any special characters in your password (!, @, &, etc)? \nSelect 'OK' for Yes, 'Cancel' for No.");
        var numerical = confirm("Would you like there to be any numbers in your password? \nSelect 'OK' for Yes, 'Cancel' for No.");
    
        // Logging current criteria values to the console
        console.log(passLength);
        console.log(upperCase);
        console.log(lowerCase);
        console.log(specialChar); 
        console.log(numerical);

        // If/else statements laying out every scenario
        // True, false, false, false
        if (upperCase === true && lowerCase === false && specialChar === false && numerical === false) {
            var comboOne = [];

            // Loop that will pull random characters from specified array and store them in new array(s) listed above
            // Will run as many times as selected by user
            for (var i = 0; i < passLength; i++) {    
                var comboOneUpp = passCombo.uppCase[Math.floor(Math.random() * passCombo.uppCase.length)];
                comboOne.push(comboOneUpp);
            } 
            console.log(comboOne);
            var randomComboOne = comboOne.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboOne = randomComboOne.join("");
            console.log(finalComboOne);

            // Writing password to body using DOM manipulation
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboOne;

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
            // Concatenating new arrays into one single array with random values from selected criteria
            var comboTwo = comboUppTwo.concat(comboLowTwo);
            console.log(comboTwo);
            // Randomizing, sorting, and joining that array to create password
            var randComboTwo = comboTwo.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboTwo = randComboTwo.join("");
            console.log(finalComboTwo);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboTwo;

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
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboThree;

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
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboFour;

        // False, true, true, true
        } else if (upperCase === false && lowerCase === true && specialChar === true && numerical === true) {
            var comboLowFive = [];
            var comboSpecFive = [];
            var comboNumFive = [];
            for (var i = 0; i < passLength; i++) {
                var comboFiveLow = passCombo.lowCase[Math.floor(Math.random() * passCombo.lowCase.length)];
                var comboFiveSpec = passCombo.specCharacter[Math.floor(Math.random() * passCombo.specCharacter.length)];
                var comboFiveNum = passCombo.passNumb[Math.floor(Math.random() * passCombo.passNumb.length)];
                comboLowFive.push(comboFiveLow);
                comboSpecFive.push(comboFiveSpec);
                comboNumFive.push(comboFiveNum);
            }
            var comboFive = comboLowFive.concat(comboSpecFive, comboNumFive);
            console.log(comboFive);
            var randComboFive = comboFive.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboFive = randComboFive.join("");
            console.log(finalComboFive);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboFive;

        // False, false, true, true
        } else if (upperCase === false && lowerCase === false && specialChar === true && numerical === true) {
            var comboSpecSix = [];
            var comboNumSix = [];
            for (var i = 0; i < passLength; i++) {
                var comboSixSpec = passCombo.specCharacter[Math.floor(Math.random() * passCombo.specCharacter.length)];
                var comboSixNum = passCombo.passNumb[Math.floor(Math.random() * passCombo.passNumb.length)];
                comboSpecSix.push(comboSixSpec);
                comboNumSix.push(comboSixNum);
            }
            var comboSix = comboSpecSix.concat(comboNumSix);
            console.log(comboSix);
            var randComboSix = comboSix.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboSix = randComboSix.join("");
            console.log(finalComboSix);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboSix;

        // False, false, false, true
        } else if (upperCase === false && lowerCase === false && specialChar === false && numerical === true) {
            var comboSev = [];
            for (var i = 0; i < passLength; i++) {    
                var comboSevNum = passCombo.passNumb[Math.floor(Math.random() * passCombo.passNumb.length)];
                comboSev.push(comboSevNum);
            } 
            console.log(comboSev);
            var randomComboSev = comboSev.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboSev = randomComboSev.join("");
            console.log(finalComboSev);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboSev;

        // True, false, true, false
        } else if (upperCase === true && lowerCase === false && specialChar === true && numerical === false) {
            var comboUppEight = [];
            var comboSpecEight = [];
            for (var i = 0; i < passLength; i++) {
                var comboEightUpp = passCombo.uppCase[Math.floor(Math.random() * passCombo.uppCase.length)];
                var comboEightSpec = passCombo.specCharacter[Math.floor(Math.random() * passCombo.specCharacter.length)];
                comboUppEight.push(comboEightUpp);  
                comboSpecEight.push(comboEightSpec);
            }
            var comboEight = comboUppEight.concat(comboSpecEight);
            console.log(comboEight);
            var randComboEight = comboEight.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboEight = randComboEight.join("");
            console.log(finalComboEight);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboEight;

        // True, false, false, true
        } else if (upperCase === true && lowerCase === false && specialChar === false && numerical === true) {
            var comboUppNine = [];
            var comboNumNine = [];
            for (var i = 0; i < passLength; i++) {
                var comboNineUpp = passCombo.uppCase[Math.floor(Math.random() * passCombo.uppCase.length)];
                var comboNineNum = passCombo.passNumb[Math.floor(Math.random() * passCombo.passNumb.length)];
                comboUppNine.push(comboNineUpp);  
                comboNumNine.push(comboNineNum);
            }
            var comboNine = comboUppNine.concat(comboNumNine);
            console.log(comboNine);
            var randComboNine = comboNine.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboNine = randComboNine.join("");
            console.log(finalComboNine);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboNine;

        // True, false, true, true
        } else if (upperCase === true && lowerCase === false && specialChar === true && numerical === true) {
            var comboUppTen = [];
            var comboSpecTen = [];
            var comboNumTen = [];
            for (var i = 0; i < passLength; i++) {
                var comboTenUpp = passCombo.uppCase[Math.floor(Math.random() * passCombo.uppCase.length)];
                var comboTenSpec = passCombo.specCharacter[Math.floor(Math.random() * passCombo.specCharacter.length)];
                var comboTenNum = passCombo.passNumb[Math.floor(Math.random() * passCombo.passNumb.length)];
                comboUppTen.push(comboTenUpp);
                comboSpecTen.push(comboTenSpec);
                comboNumTen.push(comboTenNum);
            }
            var comboTen = comboUppTen.concat(comboSpecTen, comboNumTen);
            console.log(comboTen);
            var randComboTen = comboTen.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboTen = randComboTen.join("");
            console.log(finalComboTen);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboTen;

        // False, true, false, true
        } else if (upperCase === false && lowerCase === true && specialChar === false && numerical === true) {
            var comboLowElev = [];
            var comboNumElev = [];
            for (var i = 0; i < passLength; i++) {
                var comboElevLow = passCombo.lowCase[Math.floor(Math.random() * passCombo.lowCase.length)];
                var comboElevNum = passCombo.passNumb[Math.floor(Math.random() * passCombo.passNumb.length)];
                comboLowElev.push(comboElevLow);  
                comboNumElev.push(comboElevNum);
            }
            var comboElev = comboLowElev.concat(comboNumElev);
            console.log(comboElev);
            var randComboElev = comboElev.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboElev = randComboElev.join("");
            console.log(finalComboElev);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboElev;

        // False, true, true, false
        } else if (upperCase === false && lowerCase === true && specialChar === true && numerical === false) {
            var comboLowTwel = [];
            var comboSpecTwel = [];
            for (var i = 0; i < passLength; i++) {
                var comboTwelLow = passCombo.lowCase[Math.floor(Math.random() * passCombo.lowCase.length)];
                var comboTwelSpec = passCombo.specCharacter[Math.floor(Math.random() * passCombo.specCharacter.length)];
                comboLowTwel.push(comboTwelLow);  
                comboSpecTwel.push(comboTwelSpec);
            }
            var comboTwel = comboLowTwel.concat(comboSpecTwel);
            console.log(comboTwel);
            var randComboTwel = comboTwel.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboTwel = randComboTwel.join("");
            console.log(finalComboTwel);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboTwel;

        // False, true, false, false
        } else if (upperCase === false && lowerCase === true && specialChar === false && numerical === false) {
            var comboThir = [];
            for (var i = 0; i < passLength; i++) {    
                var comboThirLow = passCombo.lowCase[Math.floor(Math.random() * passCombo.lowCase.length)];
                comboThir.push(comboThirLow);
            } 
            console.log(comboThir);
            var randomComboThir = comboThir.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboThir = randomComboThir.join("");
            console.log(finalComboThir);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboThir;

        // False, false, true, false
        } else if (upperCase === false && lowerCase === false && specialChar === true && numerical === false) {
            var comboFourt = [];
            for (var i = 0; i < passLength; i++) {    
                var comboFourtSpec = passCombo.specCharacter[Math.floor(Math.random() * passCombo.specCharacter.length)];
                comboFourt.push(comboFourtSpec);
            } 
            console.log(comboFourt);
            var randomComboFourt = comboFourt.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboFourt = randomComboFourt.join("");
            console.log(finalComboFourt);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboFourt;

        // True, true, false, true
        } else if (upperCase === true && lowerCase === true && specialChar === false && numerical === true) {
            var comboUppFif = [];
            var comboLowFif = [];
            var comboNumFif = [];
            for (var i = 0; i < passLength; i++) {
                var comboFifUpp = passCombo.uppCase[Math.floor(Math.random() * passCombo.uppCase.length)];
                var comboFifLow = passCombo.lowCase[Math.floor(Math.random() * passCombo.lowCase.length)];
                var comboFifNum = passCombo.passNumb[Math.floor(Math.random() * passCombo.passNumb.length)];
                comboUppFif.push(comboFifUpp);
                comboLowFif.push(comboFifLow);
                comboNumFif.push(comboFifNum);
            }
            var comboFif = comboUppFif.concat(comboLowFif, comboNumFif);
            console.log(comboFif);
            var randComboFif = comboFif.sort(() => Math.random() - Math.random()).slice(0, passLength);
            var finalComboFif = randComboFif.join("");
            console.log(finalComboFif);
            document.body.children[0].children[1].children[1].textContent = "Your new password is: " +  finalComboFif;

        // False, false, false, false (last scenario)
        } else if (upperCase === false && lowerCase === false && specialChar === false && numerical === false) {
            alert("You must select at least one (1) criterion.... \nPlease try again.");
        }

    
    } else {
        alert("Remember - Your password must be between 8 and 128 characters long.  Please try again.");
    }

}