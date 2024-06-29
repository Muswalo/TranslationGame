import React, { useState } from "react";
import useForm from "../utils/auth/useForm";
import validate from "../utils/auth/FormValidationRules";
import {
  handleFirebaseError,
  isFirebaseError,
} from "../utils/auth/firebaseErrorHandler";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../css/login.css";
import { auth } from "../firebase";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { values, errors, handleChange, handleSubmit, setErrors } = useForm(
    login,
    validate,
    true
  );
  const navigate = useNavigate();

  async function login() {
    setIsLoggingIn(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      setIsLoggingIn(false);
    } catch (error) {
      setIsLoggingIn(false);
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
              <span className="loginText">Login to your Sekelani Account</span>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              {errors.form && (
                <div className="notification is-danger">{errors.form}</div>
              )}
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
                  isLoggingIn ? "disabled" : ""
                }`}
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>{" "}
                    {"  "}
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
              <div className="field sigupBtn">
                <p className="control">
                  <a onClick={() => navigate("/signup")} className="sigup">
                    SignUp if you dont have an account{" "}
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

export default LoginForm;
