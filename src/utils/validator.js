const accountSchema = require("../schemas/account.schema");
const ErrorHandler = require("./error-handler");

const validateAccountInput = (data) => {
  let { error } = accountSchema.validate(data, { abortEarly: false });

  if (error) {
    const message = error.details.map((x) => x.message.replace(/"/g, ""));
    throw new ErrorHandler(400, message);
  }
};

module.exports = { validateAccountInput };
