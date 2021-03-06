// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A, n) {
  let count = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return A[i];
    }
  }
}

// function findOdd(arr) {
//   var result, num = 0;

//   arr = arr.sort();
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i+1]) {
//       num++;
//     } else {
//       num++;
//       if (num % 2 != 0) {
//         result = arr[i];
//         break;
//       }
//     }
//   }
//   return result;
// }
