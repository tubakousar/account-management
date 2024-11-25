import { createSlice } from "@reduxjs/toolkit";

export const customerslice = createSlice({
  name: "customersignup",
  initialState: {
    customerpage: JSON.parse(localStorage.getItem("customerdata")) || [],
  },
  reducers: {
    customersignup: (state, action) => {
      state.customerpage.push(action.payload);
      localStorage.setItem("customerdata", JSON.stringify(state.customerpage));
    },
  },
});
export const { customersignup } = customerslice.actions;
export default customerslice.reducer;
