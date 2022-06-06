$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();
    const input1 = ($("#input1").val());
    const input2 = ($("#input2").val());
    const input3 = ($("#input3").val());
    // const Array = ["#input1", "#input2", "#input3"];
    let Array = ["input1", "input2", "input3"]
    console.log("this is working");
  });
  $(".clickable").click(function() {
    const name = array[0];
  array.push(input1)

  })
  $(".clickable2").click(function() {
    const address = array[1];
  })
  $(".clickable3").click(function() {
    const dateOfBirth = array[2];
  })
});

