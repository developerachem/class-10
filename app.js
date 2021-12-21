
// Email

let textFormEmail = 'orders@orders.daraz.com.bd';
let emailPattern = /^[a-z1-9\._]{2,}@[a-z]{2,}\.[a-z\.]{2,}$/ ;
console.log(`This Is Emial Validation
( ${textFormEmail} )`);
console.log( emailPattern.test(textFormEmail) );


// Number 



let textForNumber = '+8801764849199'
let numberPattern = /^(01|8801|\+8801)[0-9]{9}$/ ;
console.log(`This Is Number Validation
( ${textForNumber} )`);
let display = numberPattern.test(textForNumber);
console.log(numberPattern.test(textForNumber));


// Password 

let textPass = "Achhem&a" ;
let passPattern = /^[A-Za-z1-9@#%\$&\*\+]{8,16}$/;
console.log(`This Is Password Validation
( ${textPass} )`);
console.log(passPattern.test(textPass));


// Zip 

let textZip = '5987';
let zipPattern = /^[0-9]{4}$/ ;
console.log(`This Is Zip Code Validation
( ${textZip} )`);
console.log(zipPattern.test(textZip));


// User Name

let textUserName = "achefffff" ;
let usernamePattern = /^[a-z][a-z1-9]{5,10}$/ ;
console.log(`This Is user Name Validation
( ${textUserName} )`);
console.log(usernamePattern.test(textUserName));


// CSS Color Code


let colorCode = "#ffffff" ;
let colorPattern = /^#[A-Za-z1-9]{6}$/;
console.log(`This Is Css Color Code Validation
( ${colorCode} )`);
console.log(colorPattern.test(colorCode));
