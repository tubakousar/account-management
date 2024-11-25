import { configureStore } from "@reduxjs/toolkit";

import signupslicereducer from "./SignupSlice";
import customerslicereducer from "./Customerslice";
import supplierslicereducer from "./Supplierslice";
import loginslicereducer from "./LoginSlice";

export const store = configureStore({
  reducer: {
    adminsignup: signupslicereducer,
    customersignup: customerslicereducer,
    suppliersignup: supplierslicereducer,
    login: loginslicereducer,
  },
});
