$(document).ready(function () {
  var turn = "x";
  var square = [];

  // select winner
  function finish(num1, num2, num3) {
    $(".title").text(square[num1] + " " + "Winnere");
    $("#item" + num1).css("background-color", "black");
    $("#item" + num2).css("background-color", "black");
    $("#item" + num3).css("background-color", "black");
    // add(.)
    setInterval(function () {
      $(".title").append(".");
    }, 1000);
    // reload
    setTimeout(function () {
      location.reload();
    }, 3000);
  }

  // condition compiler
  function winner() {
    for (var i = 1; i < 10; i++) {
      square[i] = $("#item" + i).text();
    }
    //col1
    if (square[1] == square[2] && square[2] == square[3] && square[1] != "") {
      finish(1, 2, 3);
    }
    //col2
    else if (
      square[4] == square[5] &&
      square[5] == square[6] &&
      square[4] != ""
    ) {
      finish(4, 5, 6);
    }
    //col3
    else if (
      square[7] == square[8] &&
      square[8] == square[9] &&
      square[7] != ""
    ) {
      finish(7, 8, 9);
    }
    // row1
    else if (
      square[1] == square[4] &&
      square[4] == square[7] &&
      square[7] != ""
    ) {
      finish(1, 4, 7);
    }
    // row2
    else if (
      square[2] == square[5] &&
      square[5] == square[8] &&
      square[5] != ""
    ) {
      finish(2, 5, 8);
    }
    // row3
    else if (
      square[3] == square[6] &&
      square[6] == square[9] &&
      square[6] != ""
    ) {
      finish(3, 6, 9);
    }
    // crosses1
    else if (
      square[1] == square[5] &&
      square[5] == square[9] &&
      square[5] != ""
    ) {
      finish(1, 5, 9);
    }
    // crosses2
    else if (
      square[7] == square[5] &&
      square[5] == square[3] &&
      square[5] != ""
    ) {
      finish(7, 5, 3);
    }
  }
  //  click
  $(document).on("click", ".squre", function () {
    var element = $(this).attr("id");
    if (turn === "x" && $(element).text() == "") {
      $(this).text("x");
      turn = "o";
      $(".title").text("Turn(O)");
    } else {
      if (turn === "o" && $(element).text() == "") {
        $(this).text("o");
        turn = "x";
        $(".title").text("Turn(X)");
      }
    }
    winner();
  });
});
