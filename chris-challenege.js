// Tiny pairs
let a = [1, 2, 3];
let b = [1, 2, 3];
let k = 31;
function countTinyPairs(arr, brr, int) {
  let j = arr.length - 1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(String(arr[i]) + String(brr[j])) < int) count++;
    j--;
  }
  return count;
}
console.log(countTinyPairs(a, b, k));
