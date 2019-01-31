function ToDoList() {
  this._list = [];

  this.addItem = function(val) {
    _red.pushFront(this._list, val);
    this._updateDisplay();
  }

  this.removeItem = function(idx) {
    _red.removeAt(this._list, idx);
    this._updateDisplay();
  }

  this.moveUp = function(idx) {
    if(idx > 0) {
      _red.swapValues(this._list, idx, idx - 1);
    }
    this._updateDisplay();
  }

  this.moveDown = function(idx) {
    if(idx < this._list.length - 1) {
      _red.swapValues(this._list, idx, idx + 1);
    }
    this._updateDisplay();
  }

  this._updateDisplay = function(){
    $('#todo tbody').html('');
    this._list.map(function(val, idx) {
      var item = `<tr data-idx="${idx}">
        <td>${idx + 1}</td>
        <td>${val}</td>
        <td>
          <button class="move-up">Move Up</button>
          <button class="move-down">Move Down</button>
          <button class="complete">Complete Task</button>
        </td>
      </tr>`;
      $('#todo tbody').append(item);
    });
  }
}