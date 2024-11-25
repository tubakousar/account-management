import React, { useState } from "react";

import { Form, Input, Button, Select } from "antd";
import { adminsignup } from "../reduxtoolkit/SignupSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signuppage() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const role = location.state?.role || ''
  // const [role ,setRole] = useState("");
  const [errormsg, setErrormsg] = useState("");

  const submithandlesignup = () => {
    const newuser = { name, email, password };
    dispatch(adminsignup(newuser));
    navigate("/loginpage");

    console.log(newuser);
    form.resetFields();
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div>
      <p style={{ color: "red" }}>{errormsg}</p>
      <h3>Signup</h3>
      <Form form={form} className="form" onFinish={submithandlesignup}>
        <Form.Item label="Name" name="name">
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Item>

        <Button className="btn" type="primary" htmlType="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default Signuppage;
