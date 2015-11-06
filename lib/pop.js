module.exports = function(array) {
  var returnItem = array[array.length - 1];
  array.length = array.length - 1;
  return returnItem;
};
