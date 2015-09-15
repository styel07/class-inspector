//var User = require('./User.js');
//var GroupUser = require('./GroupUser.js');
//var SuperUser = require('./SuperUser.js');

function goDeeper(obj) {
  // base class
  if (Object.getPrototypeOf(obj) === null) { // Base Case, ends
    return false;
    // do something; return false, ends recursion
  }
  else {
    printProps(obj);
    return goDeeper(Object.getPrototypeOf(obj));
  }
}

function printProps(obj) {
  var propValue;
  for (var propName in obj) {
    propValue = obj[propName];
    console.log('THIS IS THE CLASS', obj);
    console.log(propName,propValue);
  }
}

var newBanana = new User('bananamon', '1234bana');
var MoreBanana = new GroupUser('bananaRepublic', 100);
var MostBanana = new SuperUser('batmanana', '1');

goDeeper(MostBanana);