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
    let subString = string.slice(0, -1);
    return reverseString(string.substring(1)) + string[0];
  } else {
    return string;
  };
};
