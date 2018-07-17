import Validator from "validator";
import isEmpty from "./is-empty";

const validateRegisterInput = data => {
  let errors = {};
  // validate inputs are not empty
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  // check that name is the proper length
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  // Check empty name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // Check empty email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  // Validate his email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Check empty password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  // check that password is the proper length
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  // Check empty password2
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }
  // Check Passwords match
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateRegisterInput;
