// helpers.js

// Function to generate thank you messages for each name and event
function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  
  // Function to count down from a starting number to zero, logging each number
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Exporting functions if needed in a module
  module.exports = {
    writeCards,
    countDown
  };
  