$(document).ready(function () {
  var $commandArea = $('div.commandArea');
  $('button.runCalculator').on('tap', function () {
    $('.app').hide();
    $('.calculator').show();
  });
  $('button.calculatorButton').on('tap', function () {
    if($commandArea.text() === '0') {
     $commandArea.text('');
    }
    var currentCommand = $(this).val();
    if($.isNumeric(currentCommand)) {
      //This middle '' prevents an auto convert to numeric and hence adding the two things together
      $commandArea.text($commandArea.text() + '' + currentCommand);
    } else {
      switch(currentCommand.toLowerCase()) {
        case "clear": 
          $commandArea.text(0);
          break;
        case "equal":
          $commandArea.text(eval($commandArea.text().replace(/x/g, '*')));
          break;
        case "add":
          $commandArea.text($commandArea.text() + '+');
          break;
        case "subtract":
          $commandArea.text($commandArea.text() + '-');
          break;
        case "divide":
          $commandArea.text($commandArea.text() + '/');
          break;
        case "multiply":
          $commandArea.text($commandArea.text() + 'x');
          break;
      }
    }
  });
});