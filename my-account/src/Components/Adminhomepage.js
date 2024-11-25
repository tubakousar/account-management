import React from "react";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reduxtoolkit/LoginSlice";

function Adminhomepage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customer = useSelector((state) => state.customersignup.customerpage);
  const supplier = useSelector((state) => state.suppliersignup.supplierpage);

  const combinedata = [
    ...customer.map((list, index) => ({
      ...list,
      role: "customer",
      key: index,
    })),
    ...supplier.map((list, index) => ({
      ...list,
      role: "supplier",
      key: customer.length + index,
    })),
  ];

  const clickcustomer = () => {
    navigate("/customersignuppage", { state: { role: "customer" } });
  };

  const clicksupplier = () => {
    navigate("/supliersignuppage", { state: { role: "supplier" } });
  };
  const adminlogout = () => {
    localStorage.removeItem("login");
    dispatch(logout());
    navigate("/");
  };

  const handlenameclick = (record) => {
    navigate(`/custsuplidetails/${record.key} `, { state: { user: record } });
    console.log(record);
  };
  return (
    <div>
      <Button onClick={clickcustomer}>Customer</Button>
      <Button onClick={clicksupplier}>supplier</Button>
      <Button onClick={adminlogout}>Logout</Button>

      <div>
        <Table
          pagination={false}
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
              render: (text, record) => {
                return <a onClick={() => handlenameclick(record)}>{text}</a>;
              },
            },
            {
              title: "Email",
              dataIndex: "email",
              key: "email",
            },

            {
              title: "Role",
              dataIndex: "role",
              key: "role",
            },
          ]}
          dataSource={combinedata}
        />
      </div>
    </div>
  );
}

export default Adminhomepage;
