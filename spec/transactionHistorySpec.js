"use strict";

describe('TransactionHistory', function(){
  var transactionHistory;
  var today;
  var tomorrow;
  var transactions;

  beforeEach(function() {
      today = new Date(2012, 1, 13);
      tomorrow = new Date(2012, 1, 14);

      jasmine.clock().install();
      jasmine.clock().mockDate();

      transactions = [
        new Transaction(1000.00, today),
        new Transaction(2000.00, tomorrow)
      ]

      transactionHistory = new TransactionHistory(transactions);
    });

      afterEach(function () {
      jasmine.clock().uninstall();
    });

  it('should return a history of transactions', function(){
    expect(transactionHistory.transactions).toBe(transactions)
  })

});
