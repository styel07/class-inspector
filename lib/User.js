function User(username, password) {
  this.userName = username;
  this._password = password;
  this.getUserName = function() {
    return this.userNnme;
  };
  this.getPassword = function() {
    return this._password;
  };
}

//module.exports = User;