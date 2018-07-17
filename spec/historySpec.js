"use strict";

describe('History', function(){
  var history;
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

      history = new History(transactions);
    });

      afterEach(function () {
      jasmine.clock().uninstall();
    });

  it('should return a history of transactions', function(){
    expect(history.transactions).toBe(transactions)
  })

});
