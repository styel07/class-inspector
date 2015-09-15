var User = require('./User.js');

function GroupUser(gpName, numUsers) {
  this.groupName = gpName;
  this.NumOfUsers = numUsers;
  User.call(this, User);
}

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

module.exports = GroupUser;