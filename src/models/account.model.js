const AccountTypes = {
  SAVINGS: "Savings",
  CHECKING: "Checking",
  CURRENT: "Current",
};

class Account {
  constructor(accountNumber, accountDetails) {
    this.accountNumber = accountNumber;
    this.holderName = accountDetails.holderName;
    this.dob = accountDetails.dob;
    this.accountType = accountDetails.accountType;
    this.balance = accountDetails.initialBalance;
  }
}

module.exports = { Account, AccountTypes };
