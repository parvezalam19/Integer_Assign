
//  sorting *********************************************

function sortList() {
  var input = document.getElementById("listInput").value;
  if (input !== "") {
    
    document.getElementById("warning").innerText = ""; // Clear the warning message

    var numbers = input.split(",").map(Number);
    numbers.sort(function (a, b) {
      return a - b;
    });
    document.getElementById("output").innerText =
      "Sorted list: " + numbers.join(", ");

    if (!isValidInput(input)) {
      document.getElementById("output").innerText =
        "Invalid input! Please enter a list of integers separated by commas.";
      return;
    }
  } else {
    document.getElementById("warning").innerText = "Please enter value";
  }
}


// calculate Minimum *********************************************

function calculateMinimum() {
  var input = document.getElementById("listInput").value;

  if (input !== "") {
    document.getElementById("warning").innerText = ""; // Clear the warning message

    var numbers = input.split(",").map(Number);
    var minimum = Math.min(...numbers);
    document.getElementById("output").innerText = "Minimum value: " + minimum;

    if (!isValidInput(input)) {
      document.getElementById("output").innerText =
        "Invalid input! Please enter a list of integers separated by commas.";
      return;
    }
  } else {
    document.getElementById("warning").innerText = "Please enter value";
  }
}


// calculate average *********************************************
function calculateAverage() {
  var input = document.getElementById("listInput").value;

  if (input !== "") {
    document.getElementById("warning").innerText = ""; // Clear the warning message

    var numbers = input.split(",").map(Number);
    var sum = numbers.reduce(function (a, b) {
      return a + b;
    }, 0);
    var average = sum / numbers.length;
    document.getElementById("output").innerText = "Average value: " + average;
  } else {
    document.getElementById("warning").innerText = "Please enter value";
  }
}

function isValidInput(input) {
  var regex = /^(\s*-?\d+\s*,\s*)*-?\d+\s*$/;
  return regex.test(input);
}
