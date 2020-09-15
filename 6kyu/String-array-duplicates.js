// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Alternate capitalization

// Vowel consonant lexicon

// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

function dup(s) {
  //..
  let wordsSplit;
  let letters;
  let newWord;
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    wordsSplit = s[i];
    newWord = wordsSplit.replace(/[^\w\s]|(.)(?=\1)/gi, "");
    // console.log(wordsSplit.replace(/[^\w\s]|(.)(?=\1)/gi, ''))
    newArr.push(newWord);
  }
  return newArr;
}
// function dup(s) {
//     const result = [];
//     for(let t of s) {
//       let r = '';
//       let e = '';

//       for (let l of t) {
//         if(l !== e) {
//           r += l;
//           e = l;
//         }
//       }

//       result.push(r);
//     }

//     return result;
//   };
