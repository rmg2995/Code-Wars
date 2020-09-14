// Create a function christmasTree(height) or christmas_tree(height) (in Ruby) that returns a christmas tree of the correct height

// christmasTree(5) || christmas_tree(height) should return:

//     *
//    ***
//   *****
//  *******
// *********
// Height passed is always an integer between 0 and 100.

// Use \n for newlines between each line.

// Pad with spaces so each line is the same length. The last line having only stars, no spaces.
// function christmasTree(height) {
//   let arr = []
//   let str = `*` + '\n'
//   let num = 0
//   let numHalf = (height * 2 -1)
//   for(let i = 1; i <= height; i++){
//     num = i * 2 -1
//    // str += `*`.repeat(num) + '\n'
//     if(i == height){
//       arr.push(`*`.repeat(num).padStart(Math.ceil(numHalf/2 )).padEnd(Math.ceil(numHalf)))
//     }else {
//       let str2= `*`.repeat(num)
//       str2 = str2.padStart(Math.ceil(numHalf /2 + 1))
//       console.log(str2, str2.length, i)
//        str2 = str2.padEnd(Math.ceil(numHalf ))
//       console.log(str2, str2.length, i)
//       arr.push(`*`.repeat(num).padStart(Math.ceil(numHalf /2 + 1)).padEnd(Math.ceil(numHalf )) + '\n')
//     }
//   //  console.log(arr)
//   }

//  return arr.join('')
// }
// function christmasTree(height) {
//   height = [...Array(height).keys()];
//   return height
//     .map(
//       (x, i) =>
//         " ".repeat(height.length - i - 1) +
//         "*".repeat(x + i + 1) +
//         " ".repeat(height.length - i - 1)
//     )
//     .join("\n");
// }

function christmasTree(height) {
  let baseLen = 2 * height - 1;
  let tree = "";
  let starLen;
  let space;
  for (let i = 1; i <= height; i++) {
    starLen = i * 2 - 1;
    space = baseLen - starLen;
    tree += " ".repeat(space / 2) + "*".repeat(starLen) + " ".repeat(space / 2);
    if (i != height) {
      tree += "\n";
    }
  }
  return tree;
}

// function christmasTree(height) {
//     var stars = charGenerator("*"),
//         spaces = charGenerator(" "),
//         result = [];

//   for(var i = 0; i < height; i++) {
//       result.push(spaces(height - 1 - i) + stars(i*2 + 1) + spaces(height - 1 - i));
//   }
//   return result.join("\n");
// }

// function charGenerator(char) {
//   return function(count) {
//     return Array(count+1).join(char);
//   }
// }
