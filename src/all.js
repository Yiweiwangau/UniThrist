// Display body
document.getElementById("body").style.display = "block";

// Add header to page depending on login state
if (localStorage.getItem("logged_in") === "true") {
  document.getElementById("header").innerHTML = `
  <ul>
    <li><a id="logout-button">Logout</a></li>
    <li><a href="profile.html">Profile</a></li>
    <li><a href="favorites.html">My Favorites</a></li>
    <li><a href="index.html">Home</a></li>
  </ul>
  `;
} else {
  document.getElementById("header").innerHTML = `
  <ul>
    <li hidden><a id="logout-button">Logout</a></li>
    <li><a href="login.html">Login</a></li>
    <li><a href="index.html">Home</a></li>
  </ul>
  `;
}

// Add footer to page
document.getElementById("footer").innerHTML = `
<ul>
  <li><a href="site_map.html">Site Map</a></li>
  <li><a href="privacy_policy.html">Privacy Policy</a></li>
  <li><a href="contact.html">Contact Us</a></li>
  <li><a href="about.html">About Us</a></li>
  <li><a href="faq.html">FAQ</a></li>
</ul>
`;

// Toggle favorite button or redirect to login page if user not logged in
var fav_buttons = document.getElementsByClassName("favorite-icon");
for (var i = 0; i < fav_buttons.length; i++) {
  fav_buttons[i].addEventListener("click", function () {
    if (localStorage.getItem("logged_in") === "false") {
      if (window.confirm("Please login to add to favorites.")) {
        window.location.href = "login.html";
      }
    } else {
      this.classList.toggle("fas");
    }
  });
}

// Toggle star button
var star_buttons = document.getElementsByClassName("star-icon");
for (var j = 0; j < star_buttons.length; j++) {
  star_buttons[j].addEventListener("click", function () {
    this.classList.toggle("far");
    this.classList.toggle("fas");
  });
}

// Logout: change login status to false and remove current user
document.getElementById("logout-button").onclick = function () {
  localStorage.setItem("logged_in", false);
  localStorage.setItem("current_user", "");
  window.location.href = "index.html";
};

// Navigate to directions page on direction icon click
var direction_button = document.getElementsByClassName("direction-icon");
for (var k = 0; k < direction_button.length; k++) {
  direction_button[k].addEventListener("click", function () {
    window.location.href = "directions.html";
  });
}
