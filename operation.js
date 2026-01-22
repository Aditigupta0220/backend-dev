//Exercise 1: File Operations
// Create a Node.js program that reads a text file, counts the number of words, and writes the
// count to a new file.
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const words = data.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  fs.writeFile('output.txt', `Word count: ${wordCount}`, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Word count written to output.txt');
  });
});