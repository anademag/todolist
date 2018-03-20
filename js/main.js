// $("button").on("click", function(e) {
// e.preventDefault;
//   var toDoItem = $("input[name=toDoItem]").val();
//   $("ul").append("<li>" + toDoItem + "</li>");
// });


$("form").on("submit", function(e) {
  e.preventDefault();
  var toDoItem = "<li>" + $("#enter").val(); + "</li>"
  $("ul").append(toDoItem);
  $("ul li").on("click", function() {
    $(this).css("text-decoration", "line-through");
  });
  $("#enter").val("");
});
