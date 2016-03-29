$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var groceries = ["item1", "item2", "item3", "item4"];

    var inputs = groceries.map(function(grocery) {
      return $("#" + grocery).val().toUpperCase();
    });

    inputs.sort();

    for(var item = 0; item < groceries.length; item +=1) {
        $(".output").append("<li>" + inputs[item] + "</li>");
    }
  });
});
