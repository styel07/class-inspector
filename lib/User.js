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

// function printProps(obj) {
//   var propValue;
//   for (var propName in obj) {
//     propValue = obj[propName];

//     console.log(propName,propValue);
//   }
// }

// var banana = new User('eL@gmail.com', '1234');
// printProps(banana);


//module.exports = User;