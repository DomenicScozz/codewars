// Instructions

// Given a string of space-separated numbers, return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  let highNum = -Infinity;
  let lowNum = Infinity;
  let newNumbers = numbers.split(" ");
  for(let i = 0; i < newNumbers.length; i++){
    let toNumber = +newNumbers[i];
    if(highNum < toNumber){
      highNum = toNumber;
    }
    if(lowNum > toNumber){
      lowNum = toNumber;
    }
  }
 return `${highNum} ${lowNum}`;
}



module.exports = highAndLow;
