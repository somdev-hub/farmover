import { createSlice } from "@reduxjs/toolkit";

const companyRegisterSlice = createSlice({
  name: "companyRegister",
  initialState: {
    companyRegisterData: {
      name: "",
      companyDetails: "",
      address: "",
      pin: "",
      ownership: "",
      companyIndustry: "",
      companyImage: null
    }
  },
  reducers: {
    updateCompanyRegisterData: (state, action) => {
      state.companyRegisterData.name = action.payload.name;
      state.companyRegisterData.companyDetails = action.payload.companyDetails;
      state.companyRegisterData.address = action.payload.address;
      state.companyRegisterData.pin = action.payload.pin;
      state.companyRegisterData.ownership = action.payload.ownership;
      state.companyRegisterData.companyIndustry =
        action.payload.companyIndustry;
      state.companyRegisterData.companyImage = action.payload.companyImage;
    }
  }
});

export const { updateCompanyRegisterData } = companyRegisterSlice.actions;
export default companyRegisterSlice.reducer;
