"use strict";

(function(exports) {

  function bankStatement(history = new TransactionHistory()) {
    this.history = history;
  }

  exports.bankStatement = bankStatement;

})(this);
