// Display current user name and email from localStorage
var current_user = localStorage.getItem("current_user");
document.getElementById("user-name").innerHTML = localStorage.getItem(
  current_user + "_name"
);

document.getElementById("user-email").innerHTML = current_user;
