const Joi = require("joi");
const ErrorHandler = require("../utils/error-handler");

const accountSchema = Joi.object({
  holderName: Joi.string().required(),
  dob: Joi.string().length(10).required(),
  accountType: Joi.string().valid("Savings", "Checking", "Current").required(),
  initialBalance: Joi.number().min(0).required(),
});

module.exports = accountSchema;
