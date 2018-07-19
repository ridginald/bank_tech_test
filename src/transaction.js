"use strict";

(function(exports) {

  function Transaction(amount, current_balance, date = new Date()) {
    this.amount = amount;
    this.date = date;
    this.current_balance = current_balance;
  }

  exports.Transaction = Transaction;

})(this);
