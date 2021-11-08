/*
 * Check if username and password is valid.
 * Set login state and current user in localStorage.
*/
document.getElementById("login-form").onsubmit = function () {
  var username = document.getElementById("username");
  var pwd = document.getElementById("pwd");

  if (localStorage.getItem(username.value + "_password") == null) {
    alert("Invalid email!");
    return false;
  }

  if (pwdOK(username.value, pwd.value)) {
    localStorage.setItem("logged_in", true);
    localStorage.setItem("current_user", username.value);
    alert("Login successful!");
    window.location.href = "index.html";
    return false;
  }

  return false;
};

/* This function checks whether
 * - the entered password has at least 3 characters AND
 * - the password is correct. If so,
 * it will return true if it is OK.
 */
function pwdOK(user, secret) {
  if (secret.length < 3) {
    alert("Password needs 3 characters or more.");
    return false;
  } else {
    var key = user + "_password";
    var storePwd = localStorage.getItem(key);
    if (secret !== storePwd) {
      alert("Password incorrect!");
      return false;
    }
  }
  return true;
}
