var User = require('./User.js');
var GroupUser = require('./GroupUser.js');
var SuperUser = require('./SuperUser.js');

function goDeeper() {
  // base class
  if (Object.getPrototypeOf(obj) === null) { // Base Case, ends
    // do something; return false, ends recursion
  }
  else {
    printProps();
    return goDeeper();
  }
}

function printProps() {
  var propValue;
  for (var propName in thisClass) {
    propValue = thisClass[propName];

    console.log(propName,propValue);
  }
}

var newBanana = new User('bananamon', '1234bana');
var MoreBanana = new User('bananaPeople', 100);
var MostBanana = new User('bananamon', '1234bana');

goDeeper();