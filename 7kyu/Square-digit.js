// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer
//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  //may the code be with you
  let result = "";
  let number = num.toString().split("");
  for (let i = 0; i < number.length; i++) {
    Math.pow(number[i]);
    result += Math.pow(number[i], 2);
  }
  return Number(result);
}
