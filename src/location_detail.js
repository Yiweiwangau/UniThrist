// Navigate to review page on review button click
// or redirect to login page if user is not logged in
document.getElementById("review-button").onclick = function () {
  if (localStorage.getItem("logged_in") === "false") {
    if (window.confirm("Please login to add a review.")) {
      window.location.href = "login.html";
    }
  } else {
    window.location.href = "review.html";
  }
};
