import React from "react";
import { SignInForm } from "components";
import { Link } from "react-router-dom";

export const SigninPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="w-25">
        <SignInForm />
        <p className="mt-4">
          You don't have an account? then go to{" "}
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};
