import { useState, useEffect } from "react";

/**
 * Custom React hook for form handling.
 *
 * @param {Function} callback - Function to be called when the form is successfully submitted.
 * @param {Function} validate - Function to validate form values. Should return an object with error messages.
 * @param {Boolean} login - Boolean the hook uses to login of signup validations.
 * @returns {Object} Form handlers and values: handleChange, handleSubmit, values, errors, setErrors.
 */
const useForm = (callback, validate, login = false) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting]);
  
  /**
   * Handle form submission.
   *
   * @param {Event} event - The submit event.
   */
  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values, login ? true : false));
    setIsSubmitting(true);
  };

  /**
   * Handle changes to form inputs.
   *
   * @param {Event} event - The input change event.
   */
  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    setErrors
  };
};

export default useForm;
