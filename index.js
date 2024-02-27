/*function isPalindrome(word) {
    return word === word.split('').reverse().join('');
    
  }
  */
 //original idea, normal funciton that returns true false
/*function isPalindrome(word) {
  const wordLr = word
  const wordRl = word.split('').reverse().join('');
  return word === wordRl
}  */
//compares variables version
isPalindrome = (word) => {
  return word === word.split('').reverse().join('');
} //arrow function version
  // Write your algorithm here


/* 
Create function isPalindrome that takes a single arugment
function should check original word against palindrome of word
should return true or false
*/

/*
started by creating the function isPalindrome(word), with (word) being the argument that is being checked.
checking the original word against the palindrome using === which should return 'true' or 'false'
created a palindrome of the original word first by splitting the word into its individual letters
using .split(''), then reversing the new string using .reverse(), then putting it back together backwards with .join('')
checking original word === to word.split('').reverse().join('') should return true or false

Next, for practice, I rewrote the same code to compare defined variables set to word and its palindrome

Next, for more practice, I rewrote the code to work as an arrow function
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
