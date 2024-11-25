import { Input, Form, Button, Select } from "antd";
import React, { useState } from "react";
import { login } from "../reduxtoolkit/LoginSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Loginpage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [name ,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [role, setRole] = useState("");

  const submithandlelogin = () => {
    const newuser = { email, password, role };

    dispatch(login(newuser));

    const currentuser = JSON.parse(localStorage.getItem("login"));

    if (currentuser && currentuser.role === role) {
      // console.log("Current user:", currentuser);

      if (role === "admin") navigate("/adminhomepage");
      // console.log(newuser);
      else if (role === "customer") navigate("/customerhomepage");
      else if (role === "supplier") navigate("/supplierhomepage");
    } else {
      setErrormsg("invalid email,  password,role");
    }
  };

  return (
    <div>
      <p style={{ color: "red" }}>{errormsg}</p>
      <h3>Login page</h3>
      <Form form={form} onFinish={submithandlelogin}>
        {/* <Form.Item label="name" name="name">
                <Input type='text' value={name} onChange={(e)=>setName(e.target.value)} required/>
            </Form.Item> */}

        <Form.Item label="Email" name="email">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <Form.Item label="Role" name="role">
          <Select value={role} onChange={(value) => setRole(value)} required>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="customer">Customer</Select.Option>
            <Select.Option value="supplier">Supplier</Select.Option>
          </Select>
        </Form.Item>
        <Button htmlType="submit">Login</Button>
      </Form>
    </div>
  );
}

export default Loginpage;
