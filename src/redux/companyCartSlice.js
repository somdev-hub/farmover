import { createSlice } from "@reduxjs/toolkit";

const companyCartSlice = createSlice({
  name: "companyCart",
  initialState: {
    companyCart: [],
    productionTokens: {}
  },
  reducers: {
    addCompanyCart: (state, action) => {
      state.companyCart = action.payload;
    },
    addProductionTokens: (state, action) => {
      state.productionTokens = action.payload;
    }
  }
});

export const { addCompanyCart, addProductionTokens } = companyCartSlice.actions;
export default companyCartSlice.reducer;
