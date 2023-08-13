// Instructions

// You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

function loop_size(node){
  let pointerOne = node;
  let pointerTwo = node;
  while(pointerTwo && pointerTwo.next){   // Check for when pointerTwo is null
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next.next;
    if(pointerOne === pointerTwo){
      let count = 1;
      pointerTwo = pointerTwo.next;
      while(pointerOne !== pointerTwo){
        pointerTwo = pointerTwo.next;
        count++;
      }
      return count;
    }
  }
  return 0;
}

module.exports = loop_size;