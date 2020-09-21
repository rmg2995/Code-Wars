// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
  let newArr = [];
  let arr1 = [];
  let arr2 = [];
  for (let i in arr) {
    if (arr[i] === 0) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  newArr = arr2.concat(arr1);
  return newArr;
  // TODO: Program me
};
