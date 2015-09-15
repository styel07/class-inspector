function SuperUser(name, accessKey){
  this.name = _name;
  this.securityKey = accessKey;
  GroupUser.call(this, 'Banana_Squad', 100);
}

SuperUser.prototype.
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