function SuperUser(name, accessKey){
  this.name = _name;
  this.securityKey = accessKey;
  GroupUser.call(this, GroupUser);
}

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

module.exports = SuperUser;