import { createSlice } from "@reduxjs/toolkit";

export const supplierslice = createSlice({
  name: "suppliersignup",
  initialState: {
    supplierpage: JSON.parse(localStorage.getItem("supplierdata")) || [],
  },
  reducers: {
    suppliersignup: (state, action) => {
      state.supplierpage.push(action.payload);
      localStorage.setItem("supplierdata", JSON.stringify(state.supplierpage));
    },
  },
});
export const { suppliersignup } = supplierslice.actions;
export default supplierslice.reducer;
