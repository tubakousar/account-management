import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();

  const handlesignuppage = () => {
    navigate("/signuppage");
  };
  const handleloginpage = () => {
    navigate("/loginpage");
  };
  return (
    <div>
      <Button onClick={handlesignuppage}>Signup</Button>
      <Button onClick={handleloginpage}>Login</Button>
    </div>
  );
}

export default Landingpage;
