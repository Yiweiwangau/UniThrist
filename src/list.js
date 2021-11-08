// Navigate to directions page on click
var dir_buttons = document.getElementsByClassName("direction-icon");
for (var j = 0; j < dir_buttons.length; j++) {
  dir_buttons[j].addEventListener("click", function () {
    window.location.href = "directions.html";
  });
}

// Navigate to location detail page on click
// (Except when clicking favorite and direction button)
var list_items = document.getElementsByClassName("list-item");
for (var k = 0; k < list_items.length; k++) {
  list_items[k].addEventListener("click", function (e) {
    var noRedirect = ".favorite-icon, .direction-icon";
    if (!e.target.matches(noRedirect)) {
      window.location.href = "location_detail.html";
    }
  });
}
