"use strict";

(function(exports) {

  function BankAccount(balance, statement = new bankStatement){
    this.balance = balance;
    this.statement = statement;

  }

  exports.BankAccount = BankAccount;

})(this);
