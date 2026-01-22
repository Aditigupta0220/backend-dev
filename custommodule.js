// Exercise 2: Custom Module
// Build a module called stringUtils.js that exports functions for capitalizing strings, reversing
// strings, and counting vowels.
module.exports = {
  capitalize: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  reverse: function(str) {
    return str.split('').reverse().join('');
  },
  countVowels: function(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }
};