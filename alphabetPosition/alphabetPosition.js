// Instructions

// Given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  const lowerCaseText = text.toLowerCase();   // Set text to lowercase because the comparison will use the ASCII value
  const positions = [];
  for(let i = 0; i < lowerCaseText.length; i++){
    const char = lowerCaseText[i];
    if(char >= 'a' && char <= 'z'){
      positions.push(char.charCodeAt(0) - 'a'.charCodeAt(0) + 1);   //Take the char ASCII value - it from 'a' and + 1 to start count from 1 instead of 0
    }
  }
  return positions.join(' ');
}


module.exports = alphabetPosition;
