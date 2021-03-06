const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateLoginInput = data => {
  let errors = {};
  // validate inputs are not empty
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // Validate his email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Check empty email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  // Check empty password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateLoginInput;
