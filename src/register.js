/*
 Checks if the two entered passwords are the same. If so,
 it is stored in localStorage under the key that concatenates the name & "_password".
 For example, if name is "John", then the key is "John_password".
*/
document.getElementById("register-form").onsubmit = function () {
  var name = document.getElementById("name");
  var username = document.getElementById("username");
  var pwd = document.getElementById("pwd");
  var pwd_confirm = document.getElementById("pwd-confirm");

  if (localStorage.getItem(username.value + "_name") != null) {
    alert("Email has been registered!");
  }

  if (pwdOK(pwd.value, pwd_confirm.value)) {
    // store username and name
    var key1 = username.value + "_name";
    localStorage.setItem(key1, name.value);

    // store username and password
    var key2 = username.value + "_password";
    localStorage.setItem(key2, pwd.value);

    alert("Registration successful!");
    window.location.href = "login.html";
    return false;
  }
  return false;
};

/* This function checks whether
 * - the entered password has at least 3 characters AND
 * - the two strings entered are the same. If so,
 * it will return true if it is OK.
 */
function pwdOK(secret1, secret2) {
  if (secret1.length < 3) {
    alert("Password needs 3 characters or more!");
    return false;
  } else if (secret1 !== secret2) {
    alert("Password not the same!");
    return false;
  }
  return true;
}
