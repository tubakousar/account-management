import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protectedroute({ children }) {
  const currentuser = useSelector((state) => state.login.currentuser);
  if (!currentuser) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default Protectedroute;
