// unique - takes an array and returns a copy of the array with
// all the duplicates removed.

module.exports = function(array) {
  var unique = {};
  for (var i = 0; i < array.length; i++) {
    unique[array[i]] += 1;
  }
  var returnArray = [];
  for (var prop in unique) {
    returnArray.push(prop);
  }
  return returnArray;
};
