const express = require("express");
const AccountController = require("../controllers/account.controller");

const accountRouter = express.Router();

accountRouter.post("/create", AccountController.createAccount);
accountRouter.get("/:accountNumber", AccountController.getAccount);
accountRouter.get("", AccountController.getAllAccounts);

module.exports = accountRouter;
