import { Avatar } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";

function CustSuplidetails() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div>
      <h2>User details</h2>
      <Avatar size={100} style={{ backgroundColor: "#87d068" }}>
        {user.name?.[0].toUpperCase()}
      </Avatar>
      <p>
        <strong>Name:</strong>
        {user.name}
      </p>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
      <p>
        <strong>Role:</strong>
        {user.role}
      </p>
    </div>
  );
}

export default CustSuplidetails;
