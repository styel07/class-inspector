function User(username, _password) {
  this.userName = username;
  this._password = _password;
  this.getUserName = function() {
    return this.userNnme;
  };
  this.getPassword = function() {
    return this._password;
  };
}

module.exports = User;