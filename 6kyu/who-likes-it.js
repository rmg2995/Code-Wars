// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  let like = "";
  let count = 0;
  if (names.length == 0) {
    return (like += "no one likes this");
  }
  for (let i = 0; i < names.length; i++) {
    count = names.length - 1;
    if (names.length == 1) {
      return (like += `${names[0]} likes this`);
    } else if (names.length <= 2) {
      return (like += `${names[0]} and ${names[1]} like this`);
    } else if (names.length == 3) {
      return (like += `${names[0]}, ${names[1]} and ${names[2]} like this`);
    } else if (names.length >= 4) {
      return (like += `${names[0]}, ${names[1]} and ${
        count - 1
      } others like this`);
    }
  }
  return like;
  // TODO
}
