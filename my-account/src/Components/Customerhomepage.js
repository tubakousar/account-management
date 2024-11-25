import { Button } from "antd";
import React from "react";
import { logout } from "../reduxtoolkit/LoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Customerhomepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customerlogoutpage = () => {
    // localStorage.removeItem("login");
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      customer home
      <Button onClick={customerlogoutpage}>Logout</Button>
    </div>
  );
}

export default Customerhomepage;
