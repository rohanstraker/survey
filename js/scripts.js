$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var nameInput = $("input#name").val();
    var dob = $("#born").val();
    var food = $("#food").val();
    var music = $("input:radio[name=music]:checked").val();
    var favoriteColor = $("#color").val();
    //console.log(nameInput + " #1 works");

    $(".name").text(nameInput);

    $("#survey").show();

    event.preventDefault();
  });
});
