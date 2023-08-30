const AccountService = require("../services/account.service");
const ErrorHandler = require("../utils/error-handler");
const { validateAccountInput } = require("../utils/validator");

class AccountController {
  createAccount(req, res) {
    validateAccountInput(req.body);
    const newAccount = AccountService.createAccount(req.body);
    return res.status(200).json({
      success: true,
      account: newAccount,
    });
  }

  getAccount(req, res) {
    let { accountNumber } = req.params;
    if (accountNumber.length !== 10) {
      throw new ErrorHandler(400, "Incorrect account number");
    }
    let accountDetails = AccountService.getAccountDetails(accountNumber);
    return res.status(200).json({
      success: true,
      account: accountDetails,
    });
  }

  getAllAccounts(req, res) {
    const accounts = AccountService.getAllAccounts();
    return res.status(200).json({
      success: true,
      accounts,
    });
  }
}

module.exports = new AccountController();
