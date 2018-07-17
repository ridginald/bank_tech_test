"use strict";

(function(exports) {

  function BankAccount(balance = 0, statement = new BankStatement()){
    this.balance = balance;
    this.statement = statement;

  }

  exports.BankAccount = BankAccount;

})(this);
