const printString = myString => {
  console.log(myString[0]);
  if (myString.length > 1) {
    let subString = myString.substring(1)
    printString(subString)
  } else {
    return true;
  };
}
