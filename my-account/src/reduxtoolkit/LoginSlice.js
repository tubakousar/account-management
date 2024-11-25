import { createSlice } from "@reduxjs/toolkit";

export const loginslice = createSlice({
  name: "login",
  initialState: {
    currentuser: JSON.parse(localStorage.getItem("login")) || null,
    adminlogin: JSON.parse(localStorage.getItem("admindata")) || [],
    customerlogin: JSON.parse(localStorage.getItem("customerdata")) || [],
    supplierlogin: JSON.parse(localStorage.getItem("supplierdata")) || [],
  },
  reducers: {
    login: (state, action) => {
      const { email, password, role } = action.payload;
      let userlist = [];

      if (role === "admin") {
        userlist = JSON.parse(localStorage.getItem("admindata")) || [];
      } else if (role === "customer") {
        userlist = JSON.parse(localStorage.getItem("customerdata")) || [];
      } else if (role === "supplier") {
        userlist = JSON.parse(localStorage.getItem("supplierdata")) || [];
      }

      const existuser = userlist.find(
        (user) => user.email === email && user.password === password
      );

      if (existuser) {
        const loginuser = { email: existuser.email, role };

        localStorage.setItem("login", JSON.stringify(loginuser));
        state.currentuser = loginuser;
      } else {
        console.error("invalid email or password");
      }
    },
    logout: (state) => {
      localStorage.removeItem("login");
      state.currentuser = null;
    },
  },
});
export const { login, logout } = loginslice.actions;
export default loginslice.reducer;
