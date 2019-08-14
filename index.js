const printString = myString => {
  console.log(myString[0]);
  if (myString.length > 1) {
    let subString = myString.substring(1)
    printString(subString)
  } else {
    return true;
  };
}

const reverseString = string => {
  if (string.length > 1) {
    return reverseString(string.substring(1)) + string[0];
  } else {
    return string;
  };
};

const isPalindrome = string => {
  let l = string.length;

  if (l < 2) {
    return true;
  } else if (string[0] === string[l - 1]) {
    return isPalindrome(string.substring(1, l - 1));
  } else {
    return false;
  }
};
