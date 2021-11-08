// Show confirmation prompt on button click
document.getElementById("report-issue").onclick = function () {
  if (window.confirm("Do you want to report the issue?")) {
    window.location.href = "location_detail.html";
    alert("Thank you for reporting the issue.");
  }
};
