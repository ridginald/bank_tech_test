"use strict";

(function(exports) {

  function Deposit(amount, date = new Date()) {
    this.amount = amount;
    this.date = date;
  }

  exports.Deposit = Deposit;

})(this);
