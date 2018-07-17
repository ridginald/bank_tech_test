var today;
var yesterday;
var transactions;
var transactionHistory;
var bankStatement;
var bankAccount;
var credit;
var debit;
var amount;

beforeEach(function() {
  today = new Date(2012, 1, 13);
  tomorrow = new Date(2012, 1, 14);

  jasmine.clock().install();
  jasmine.clock().mockDate();
  credit = new Transaction(amount, today);
  debit = new Transaction(500.00, tomorrow);

  transactions = [
    new Transaction(1000.00, today),
    new Transaction(2000.00, tomorrow)
  ];

  transactionHistory = new TransactionHistory(transactions);
  bankStatement = new BankStatement(transactionHistory);
  bankAccount = new BankAccount(0, bankStatement);
});

afterEach(function () {
  jasmine.clock().uninstall();
});
