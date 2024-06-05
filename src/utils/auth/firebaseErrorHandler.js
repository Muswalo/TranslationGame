/**
 * Handles Firebase authentication errors by setting appropriate error messages.
 *
 * @param {Object} error - The error object returned by Firebase.
 * @param {Function} setErrors - The function to set error messages.
 */

export const handleFirebaseError = (error, setErrors) => {
  console.log(error);
  switch (error.code) {
    case "auth/invalid-email":
      setErrors({ email: "Invalid email format." });
      break;
    case "auth/user-disabled":
      setErrors({ email: "This account has been disabled." });
      break;
    case "auth/user-not-found":
      setErrors({ email: "No account found with this email." });
      break;
    case "auth/wrong-password":
      setErrors({ password: "Incorrect password." });
      break;
    case "auth/email-already-in-use":
      setErrors({ email: "Email already in use." });
      break;
    case "auth/weak-password":
      setErrors({ password: "Password should be at least 6 characters." });
      break;
    case "auth/invalid-credential":
      setErrors({ password: "Incorrect Password" });
      break;
    case "auth/network-request-failed":
      setErrors({ form: "You dont appear to have an internet connection" });
      break;
    case "auth/claims-too-large":
      setErrors({
        form: "The claims payload provided exceeds the maximum allowed size of 1000 bytes.",
      });
      break;
    case "auth/id-token-expired":
      setErrors({ form: "The provided Firebase ID token is expired." });
      break;
    case "auth/id-token-revoked":
      setErrors({ form: "The Firebase ID token has been revoked." });
      break;
    case "auth/insufficient-permission":
      setErrors({
        form: "The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource.",
      });
      break;
    case "auth/internal-error":
      setErrors({
        form: "The Authentication server encountered an unexpected error while trying to process the request.",
      });
      break;
    case "auth/invalid-argument":
      setErrors({
        form: "An invalid argument was provided to an Authentication method.",
      });
      break;
    case "auth/invalid-claims":
      setErrors({ form: "The custom claim attributes provided are invalid." });
      break;
    default:
      setErrors({ form: "Something went wrong. Please try again." });
      break;
  }
};

/**
 * Checks if an error is a Firebase authentication error.
 *
 * @param {Object} error - The error object to check.
 * @returns {boolean} - Returns true if the error is a Firebase authentication error, false otherwise.
 */

export const isFirebaseError = (error) => {
  return error && error.code && error.code.startsWith("auth/");
};
