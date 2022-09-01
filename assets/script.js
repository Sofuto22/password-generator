
let character = '';

function generatePassword() {
  
  let answerOkay = false;
  let answerUp = false;
  let answerLow = false;
  let answerNum = false;
  let answerSym = false;
  
  const charsUc= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charLc = "abcdefghijklmnopqrstuvwxyz";
  const charNum = "1234567890";
  const charSym = "!@#$%^&*()_+-=<>?/";

  //Sets the length for the password
  let characterLength = window.prompt("Enter a number between 8 and 128");

  if (characterLength < 8 || characterLength > 128){
    window.alert ("Must pick a number between 8 and 128")
    return;
  }

  //decides which cases to use between the four options with y/n options, I had a tough time with all of this.
  //Not sure if any of this works right, but it seems to function as it should.
  let characterUp = window.prompt("Do you want to include uppercase letters (y/n)");

  let resultUp = characterUp.toUpperCase();

  if (resultUp != "Y" && resultUp != "N") {
    window.alert("Must be a y or n");
    return;
  } else {
    if (resultUp === "Y") {
    answerUp = true;
  } }

  let characterLow = window.prompt("Do you want to include lowercase letters (y/n)");

  let resultLow = characterLow.toUpperCase();

  if (resultLow != "Y" && resultLow != "N") {
    window.alert("Must be a y or n");
    return;
  } else {
    if (resultLow === "Y") {
    answerLow = true;
  } }

  let characterSym = window.prompt("Do you want to include symbols (y/n)");

  let resultSym = characterSym.toUpperCase();

  if (resultSym != "Y" && resultSym != "N") {
    window.alert("Must be a y or n");
    return;
  } else {
    if (resultSym === "Y") {
    answerSym = true;
  } }

  let characterNum = window.prompt("Do you want to include numbers (y/n)");
  
  let resultNum = characterNum.toUpperCase();

  if (resultNum != "Y" && resultNum != "N") {
    window.alert("Must be a y or n");
    return;
  } else {
    if (resultNum === "Y") {
    answerNum = true;
  } }


  // returns in case none of the options ran as true
  
  if (!answerUp && !answerLow && !answerSym && !answerNum) {
    window.alert("Please select at least one type");
    return;
  } else {
    answerOkay = true; 
  }

  // takes all true answers and sets them up in to one final set for the password

  if (answerOkay) {
    
    let finalset = "";
    
    if (answerUp) {
      finalset = charsUc;
    
    }

    if (answerLow) {
      finalset += charLc;
    }

    if (answerNum) {
      finalset += charNum;
    }

    if (answerSym) {
      finalset += charSym;
    }
  

  for (let i = 1; i <= characterLength; i++) {
    var char = Math.floor(Math.random()* finalset.length + 1);

    character += finalset.charAt(char)
  }
  console.log(character);
  return character;

  }
};

let generateBtn = document.querySelector("#generate");

 function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


