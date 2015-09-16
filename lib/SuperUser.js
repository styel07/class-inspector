//var GroupUser = require('./GroupUser.js');

function SuperUser(_name, accessKey, gpName, numUsers, username, password) {
  this.name = _name;
  this.securityKey = accessKey;
  GroupUser.call(this, 'BananaRepublic', 10);
}

SuperUser.prototype = Object.create(GroupUser.prototype, {
  constructor : {
    value : GroupUser
  }
});

SuperUser.prototype.getSecurityKey = function() {
  return this.securityKey;
};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SuperUser.prototype, GroupUser.prototype);

//module.exports = SuperUser;