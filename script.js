
var generateBtn = document.querySelector("#generate");
var password = [];
var result = [];
var Cap = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var Low = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var Spe = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',

];
var num = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

var charLength = parseInt(
  prompt("How many characters would you like to use in your password?")

);

var capCon = confirm("Would you like to use capital letters?");
var lowCon = confirm("Would you like to use lowercase letters?");
var speCon = confirm("Would you like to use special characters?");
var numCon = confirm("Would you like to use numerals?");

function passwordOptions() {

  if (capCon === true) {
    result.push.apply(result, Cap);
  };

  if (lowCon === true) {
    result.push.apply(result, Low);
  };

  if (speCon == true) {
    result.push.apply(result, Spe);
  };

  if (numCon === true) {
    result.push.apply(result, num);
  };

  console.log(result);
};

function randomize() {
  for (var i = 0; i < charLength; i++) {
    var random = Math.floor(Math.random() * result.length);
    
    password.push(result[random])
    
    console.log(password)
  }
}

function writePassword() {
  passwordOptions();
  randomize();
  var passText = document.querySelector("#password");
  passText.value = password.join("");
}

generateBtn.addEventListener("click", writePassword);
