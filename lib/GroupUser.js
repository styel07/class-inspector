//var User = require('./User.js');

function GroupUser(gpName, numUsers, username, password) {
  this.groupName = gpName;
  this.NumOfUsers = numUsers;
  User.call(this, 'bananamon', 'bananapassword');
}

GroupUser.prototype = Object.create(User.prototype, {
  constructor : {
    value : User
  }
});

GroupUser.prototype.getGroupName = function() {
  return this.gpName;
};

GroupUser.prototype.getNumOfUsers = function() {
  return this.NumOfUsers;
};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(GroupUser.prototype, User.prototype);
