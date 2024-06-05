/**
 * This function validates the input values for a form.
 * It checks if the required fields are filled and validates the format of the input.
 * The function can differentiate between login and signup processes.
 * 
 * @param {Object} values - The input values from the form.
 * @param {string} [values.firstName] - The first name input from the form (optional for login).
 * @param {string} [values.lastName] - The last name input from the form (optional for login).
 * @param {string} values.email - The email address input from the form.
 * @param {string} values.password - The password input from the form.
 * @param {boolean} [isLogin=false] - Flag to indicate if the operation is login (true) or signup (false).
 * 
 * @returns {Object} errors - An object containing error messages for each invalid input field.
 * @returns {string} [errors.firstName] - The error message for the first name field (only for signup).
 * @returns {string} [errors.lastName] - The error message for the last name field (only for signup).
 * @returns {string} errors.email - The error message for the email field.
 * @returns {string} errors.password - The error message for the password field.
 */
export default function validate(values, isLogin = false) {
  let errors = {};

  // Skip certain validations if it's a login operation
  if (!isLogin) {
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    } else if (values.firstName.length < 3) {
      errors.firstName = "First Name must be 3 or more characters";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Last Name must be 3 or more characters";
    }
  }

  // Email and password validations remain the same for both login and signup
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Password must contain at least 1 number";
  } else if (!/[!@#$%&?]/g.test(values.password)) {
    errors.password = "Password must contain at least 1 special character";
  } else if (!/[A-Z]/g.test(values.password)) {
    errors.password = "Password must contain at least 1 capital letter";
  }

  return errors;
}
