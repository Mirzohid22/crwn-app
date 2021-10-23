import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    {...otherProps}
    className={`custom-button ${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""}`}
  >
    {children}
  </button>
);
export default CustomButton;
