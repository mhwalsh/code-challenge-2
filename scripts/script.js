console.log('The script file is sourced.');

//init counters
var redCount = 0;
var blueCount = 0;
var yellowCount = 0;
var greenCount = 0;

$(function functionName() {
  console.log('The document is ready.');

  $("#redCount").html("Red Count: " + redCount);
  $("#blueCount").html("Blue Count: " + blueCount);
  $("#yellowCount").html("Yellow Count: " + yellowCount);
  $("#greenCount").html("Green Count: " + greenCount);

  $('#redb').on('click', function() {
    // up the red count
    redCount++;
    console.log('red count now =', redCount);

    //append the new red count value
    $("#redCount").html("Red Count: " + redCount);

    //create new box div and append to dom
    var redDivName = 'redDiv';
    appendToDom(redDivName);
  });

  $('#blueb').on('click', function() {
    // up the blue count
    blueCount++;
    console.log('blue count now =', blueCount);

    //append the new blue count value
    $("#blueCount").html("Blue Count: " + blueCount);

    //create new box div and append to dom
    var blueDivName = 'blueDiv';
    appendToDom(blueDivName);
  });

  $('#yellowb').on('click', function() {
    // up the yellow count
    yellowCount++;
    console.log('yellow count now =', yellowCount);

    //append the new yellow count value
    $("#yellowCount").html("Yellow Count: " + yellowCount);

    //create new box div and append to dom
    var yellowDivName = 'yellowDiv';
    appendToDom(yellowDivName);
  });

  $('#greenb').on('click', function() {
    // up the green count
    greenCount++;
    console.log('green count now =', greenCount);

    //append the new green count value
    $("#greenCount").html("Green Count: " + greenCount);

    //create new box div and append to dom
    var greenDivName = 'greenDiv';
    appendToDom(greenDivName);
  });
});

/*Function to append new divs to dom. Takes the div id name.*/
function appendToDom(idName){
  $('.boxesDiv').append('<div id="'+ idName + '"></div>');
}
