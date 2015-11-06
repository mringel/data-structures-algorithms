// function that, given an array of words, figures out what the most
// common letter (anywhere in a word) is.

module.exports = function(array) {
  var wordString = "";
  for (var i = 0; i < array.length; i++) {
    wordString += array[i];
  }
  var letterArray = wordString.split("");
  var freqObj = {};
  for (var j = 0; j < letterArray.length; j++) {
    if (freqObj[letterArray[j]]) {
      freqObj[letterArray[j]] += 1;
    } else {
      freqObj[letterArray[j]] = 1;
    }
  }

  var maxLetter = Object.keys(freqObj).reduce(function(prev,curr) {
    if (freqObj[curr] > freqObj[prev]) return curr;
    else return prev;
  });
  return maxLetter;

};
