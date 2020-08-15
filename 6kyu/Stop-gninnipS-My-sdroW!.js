// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(words) {
  let str = words.split(" ");
  let letters = words.split("");
  let lettersCount = 0;
  let sentence = "";
  let bigWords = "";
  let resultStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].length < 5) {
      sentence += str[i] + " ";
    } else {
      sentence += str[i].split("").reverse().join("") + " ";
    }
  }
  return sentence.trim(" ");
}