import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./signUpSlice";
import warehouseRegisterSlice from "./warehouseRegisterSlice";
import companyRegisterSlice from "./companyRegisterSlice";
import companyCartSlice from "./companyCartSlice";

export const store = configureStore({
  reducer: {
    signup: signUpSlice,
    warehouseRegister: warehouseRegisterSlice,
    companyRegister: companyRegisterSlice,
    companyCart: companyCartSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});
