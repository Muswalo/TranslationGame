import React, { useState } from "react";
import useForm from "../utils/auth/useForm";
import validate from "../utils/auth/FormValidationRules";
import "../css/login.css";
import {
  handleFirebaseError,
  isFirebaseError,
} from "../utils/auth/firebaseErrorHandler";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const SignUpForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const { values, errors, handleChange, handleSubmit, setErrors } = useForm(
    signup,
    validate
  );

  const navigate = useNavigate();

  async function signup() {
    setIsSignup(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(response.user, { displayName: values.firstName });
      await setDoc(doc(db, "users", response.user.uid), {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
      });
    } catch (error) {
      setIsSignup(false);
      if (isFirebaseError(error)) {
        handleFirebaseError(error, setErrors);
      }
    }
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box cont">
            <div className="formHeader">
              <div className="formHeaderLogo">
                <img src={logo} alt="LLPS GAME LOGO" />
              </div>
              <span className="loginText">Sign Up for a Sekelani Account</span>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              {errors.form && (
                <div className="notification is-danger">{errors.form}</div>
              )}
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.firstName && "is-danger"}`}
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName || ""}
                    required
                  />
                  {errors.firstName && (
                    <p className="help is-danger">{errors.firstName}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.lastName && "is-danger"}`}
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName || ""}
                    required
                  />
                  {errors.lastName && (
                    <p className="help is-danger">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                  <label className="forgotPass">
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                      className="showPassInput"
                    />
                    Show password
                  </label>
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className={`button is-block is-info is-fullwidth ${
                  isSignup ? "disabled" : ""
                }`}
                disabled={isSignup}
              >
                {isSignup ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>{" "}
                    {"  "}
                    Signing Up..
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
              <div className="field sigupBtn">
                <p className="control">
                  <a onClick={() => navigate("/login")} className="sigup">
                    Login if you have an account
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
