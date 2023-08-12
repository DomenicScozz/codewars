// Instructions

// Write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString (strng) {
  let index = strng.length - 1;
  while(index >= 0 && /\d/.test(strng[index])){   //Use a regular expression to check if the current position is a digit
    index--;
  }
  let nonNumericPart = strng.substring(0, index + 1);
  let numericPart = strng.substring(index + 1);
  if(numericPart !== ""){                        // If no ending number...
    let number = parseInt(numericPart) + 1;
    numericPart = String(number).padStart(numericPart.length, "0");   //Ensure that the string has the same length
  } else {
    numericPart = "1";
  }
  return nonNumericPart + numericPart;
}

module.exports = incrementString;