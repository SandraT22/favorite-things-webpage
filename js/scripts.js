$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();
    const input1 = ($("#input1").val());
    const input2 = ($("#input2").val());
    const input3 = ($("#input3").val());
    let Array = [input1, input2, input3]
    console.log("this is working");
    let newArray = [];
    newArray.push(Array[0]);
    newArray.push(Array[1]);
    newArray.push(Array[2]);
    $("#result1").text(Array[0]);
    $("#result2").text(Array[1]);
    $("#result3").text(Array[2]);

    $("#result-show").show()
  });
  $(".clickable").click(function() {
    $("#result-show").toggle();
  })
});



