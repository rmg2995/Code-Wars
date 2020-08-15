// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  let strSplit = str.split("");
  //console.log(strSplit)
  for (let i = 0; i < strSplit.length; i++) {
    if (
      strSplit[i] == "a" ||
      strSplit[i] == "e" ||
      strSplit[i] == "i" ||
      strSplit[i] == "o" ||
      strSplit[i] == "u"
    ) {
      vowelsCount += 1;
      console.log(strSplit[i]);
    }
  }
  return vowelsCount;
  // enter your majic here
}
