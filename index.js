function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    let subString = myString.substring(1)
    printString(subString)
  } else {
    return true;
  };
}

function reverseString(string) {
  if (string.length > 1) {
    return reverseString(string.substring(1)) + string[0];
  } else {
    return string;
  };
};

function isPalindrome(string) {
  let l = string.length;

  if (l < 2) {
    return true;
  } else if (string[0] === string[l - 1]) {
    return isPalindrome(string.substring(1, l - 1));
  } else {
    return false;
  }
};

function addUpTo(myArray, index) {
  return index > 0 ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}
