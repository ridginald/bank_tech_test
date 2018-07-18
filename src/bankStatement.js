"use strict";

(function(exports) {

  function BankStatement(history = new TransactionHistory()) {
    this.history = history;
  }

  BankStatement.prototype = {
    addTransaction: function(amount){
      this.history.addTransaction(amount);
    },
    display: function(){
      var display = "";
      this.history.transactions.forEach(function(element) {
        display += formatDate(element.date);
      });
      return display;
    }
  };

  function formatDate(date){
    var day   = (date.getDate()).toString();
    var month = (date.getMonth() + 1).toString();
    var year  = (date.getFullYear()).toString();
    if (day.length === 1) {
      day = "0" + day;
    }
    if (month.length === 1) {
      month = "0" + month;
    }
    return day + '/' + month + '/' + year;
  }

  exports.BankStatement = BankStatement;

})(this);
