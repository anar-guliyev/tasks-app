import React from "react";
import { Tasks, SigninPage, SignupPage } from "pages";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const isAuth = useSelector(state => state.isAuth.value);
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<Tasks />} />
        </>
      ) : (
        <>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<SigninPage />} />
        </>
      )}
      <Route
        path="*"
        element={<Navigate to={isAuth ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
