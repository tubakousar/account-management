import React from "react";
import { Button } from "antd";

import { logout } from "../reduxtoolkit/LoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Supplierhomepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const suplierlogoutpage = () => {
    // localStorage.removeItem("login");
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      supplier
      <Button onClick={suplierlogoutpage}>Logout</Button>
    </div>
  );
}

export default Supplierhomepage;
