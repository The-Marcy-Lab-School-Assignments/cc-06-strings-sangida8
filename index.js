//write your code here

// Question 1

const reverseString = (str) => {
  // I am declaring the function that takes on 'str'
  result = ""; // to keep track of the letters
  for (let i = str.length - 1; i >= 0; i--) {
    // this takes on the letter from the string and is going backwards
    result = result + str[i]; // here we take the letters and adding the letter of the string together
  }
  return result;
};
console.log(reverseString("hello"));

// Question 2

const reverseZigZagString = (str) => {
  let isSmall = true;
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (isSmall) {
      result = result + str[i].toLowerCase();
      isSmall = false;
    } else {
      result = result + str[i].toUpperCase();
      isSmall = true;
    }
  }
  return result;
};
console.log(reverseZigZagString("hello"));

// Question 3

// Question 4

// Question 5
