var expect = require('chai').expect;
var push = require(__dirname + '/../lib/push');
var pop = require(__dirname + '/../lib/pop');
var shift = require(__dirname + '/../lib/shift');



describe('push function', function() {
  var testArray = [1, 2, 3];
  push(testArray, 4);
  it('should add an item to an array', function() {
    expect(testArray).to.have.length(4);
  });
  it('added element should be the last one', function() {
    expect(testArray[testArray.length-1]).to.eql(4);
  });
});

describe('pop function', function() {
  var testArray = [1, 2, 3];
  it('should return the first number', function() {
    expect(pop(testArray)).to.eql(3);
  });
  it('should shorten the given array', function() {
    expect(testArray.length).to.eql(2);
  });
});
