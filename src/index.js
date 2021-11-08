var selected_type = "water_fountain";

// Add active class to the current button (highlight it)
var header = document.getElementById("location-type");
var btns = header.getElementsByClassName("type-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    selected_type = current[0].id;
  });
}

// Navigate to selected page on search button click
document.getElementById("search-button").onclick = function () {
  console.log(selected_type);
  window.location.href = selected_type + ".html";
};
