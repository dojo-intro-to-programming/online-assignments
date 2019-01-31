$(document).ready(function() {
  // set up yellow belt
  if($('.container').attr('id') === "yellow"){
    var calc = new Calculator();
    $('#clear').click(function () {
      calc.clear();
    });
  
    $('.operator').click(function () {
      var button = $(this).html();
      calc.addButtonPress(button, true);
    });
  
    $('.number').click(function () {
      var number = parseInt($(this).html(), 10);
      calc.addButtonPress(number, false);
    });
  
    $('#enter').click(function () {
      calc.calculate();
    });
  }

  // set up red belt
  if($('.container').attr('id') === 'red') {
    var list = new ToDoList();
    $('#create-task').submit(function(e){
      e.preventDefault();
      var item = $('#new-task').val();
      list.addItem(item);
      $('#new-task').val('');
    });

    $('#todo').on('click', ".complete", function() {
      var idx = $(this).closest('tr').data('idx');
      list.removeItem(idx);
    });

    $('#todo').on('click', '.move-up', function() {
      var idx = $(this).closest('tr').data('idx');
      list.moveUp(idx);
    });

    $('#todo').on('click', '.move-down', function() {
      var idx = $(this).closest('tr').data('idx');
      list.moveDown(idx);
    });
  }
});