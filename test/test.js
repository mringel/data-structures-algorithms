var expect = require('chai').expect;
var push = require(__dirname + '/../lib/push');
var pop = require(__dirname + '/../lib/pop');
var shift = require(__dirname + '/../lib/shift');
var unshift = require(__dirname + '/../lib/unshift');

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
  it('should return the last number', function() {
    expect(pop(testArray)).to.eql(3);
  });
  it('should shorten the given array', function() {
    expect(testArray.length).to.eql(2);
  });
});

describe('shift function', function() {
  var testArray = [1, 2, 3];
  it('should return the first number', function() {
    expect(shift(testArray)).to.eql(1);
  });
  it('should shorten the given array', function() {
    expect(testArray.length).to.eql(2);
  });
});

describe('unshift function', function() {
  var testArray = [1, 2, 3];
  unshift(testArray, 4);
  it('should add an item to an array', function() {
    expect(testArray).to.have.length(4);
  });
  it('added element should be the first one', function() {
    expect(testArray[0]).to.eql(4);
  });
});
