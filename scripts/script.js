console.log('The script file is sourced.');

$(function functionName() {
  console.log('The document is ready.');

  $('#redb').on('click', function() {
    console.log('red');
    var redDivName = 'redDiv';
    appendToDom(redDivName);
  });

  $('#blueb').on('click', function() {
    console.log('blue');
    var blueDivName = 'blueDiv';
    appendToDom(blueDivName);
  });

  $('#yellowb').on('click', function() {
    console.log('yellow');
    var yellowDivName = 'yellowDiv';
    appendToDom(yellowDivName);
  });

  $('#greenb').on('click', function() {
    console.log('green');
    var greenDivName = 'greenDiv';
    appendToDom(greenDivName);
  });
});

function appendToDom(idName){
  $('.boxesDiv').append('<div id="'+ idName + '"></div>');
}
