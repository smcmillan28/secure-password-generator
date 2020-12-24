# Secure Password Generator
This application generates a random, secure password based on a set of pre-existing rules and criteria set by the user.  Check it out right here -> [Secure Password Generator!](https://smcmillan28.github.io/secure-password-generator/)

This README will provide an overview of the application and breakdown how it works.

## Table of Contents

[General Information](#general-information)\
[Criteria Selection](#criteria-selection)\
[Password Result](#password-result)\
[Code Used](#code-used)\
[Project Takeaways](#project-takeaways)\
[Credits and Comments](#credits-and-comments)

## General Information
When it comes to protecting your personal information against cyberattacks, the first line of defense is a strong, unique password.  This generator will create that for you.  Just remember to write it down somewhere safe (unless you have a really good memory).

When opening the page, you will be greeted with the following.  All you have to do is click on "Generate Password", and you will be taken to the next step, criteria selection. 

![Main](/Assets/images/pass-gen-background.JPG)

## Criteria Selection
The more complex your password is, the more secure your information will be.  That's where criteria selection comes into play.  You are given the option to select both length and character type through a series of prompts. 

After you hit the "Generate Password" button, the first question will ask you how many characters you would like your password to be.  See below:

![Length](/Assets/images/prompt-1.JPG)

If you enter a number outside that range, you will receive an error message.  Also, you must type in a number in the form of a number.  Typing it out will make you restart.

![Error](/Assets/images/error.JPG)

Once you have selected a length, you will get to choose what type(s) of characters to include in your password.  The following are your choices:

a) Uppercase Letters\
b) Lowercase Letters\
c) Special Characters (&,#,$, etc)\
d) Numbers

The prompts will look like the one below:

![Prompt](/Assets/images/prompt-2.JPG)

## Password Result
Once you've made all of your selections, your password will generate and be presented as follows:

![Password](/Assets/images/password-final.JPG)

Feel free to generate as many passwords as you'd like!

## Code Used

HTML\
CSS\
JavaScript

## Project Takeaways
This is my first project using JavaScript.  The generator function runs primarily through a series of conditional statements and for loops while referencing variables and arrays both defined locally and globally.  

The code at times is repetitive, but that was done to cover every possible outcome during the criteria selection process.  There are sixteen (16) possible outcomes.  The use of Math.random and sort/splice was crucial for taking the new string of characters and actually creating the password. 

I also used DOM manipulation to change the content of the page once the password was generated.  Overall, this project challenged my problem solving abilities and taught me some exciting new coding skills along the way.  

## Credits and Comments
The HTML, CSS, and a few of the beginning JS lines were pre-written heading into the project.  I did some styling of my own, and of course added the bulk of the JavaScript.  

I look forward to the next challenge!

