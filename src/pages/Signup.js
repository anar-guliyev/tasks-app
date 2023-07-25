import React from "react";
import { SignUpForm } from "components";
import { Link } from "react-router-dom";

export const SignupPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="w-25">
        <SignUpForm />
        <p className="mt-4">
          Already have an account? then go to <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
};
