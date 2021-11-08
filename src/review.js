// Show confirmation prompt on button click
document.getElementById("post-review").onclick = function () {
  if (window.confirm("Do you want to post the review?")) {
    window.location.href = "location_detail.html";
    alert("Your review has been posted!");
  }
};
