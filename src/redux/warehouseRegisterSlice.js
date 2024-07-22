import { createSlice } from "@reduxjs/toolkit";

const warehouseRegisterSlice = createSlice({
  name: "warehouseRegister",
  initialState: {
    warehouseRegisterData: {
      name: "",
      warehouseDetails: "",
      address: "",
      pin: "",
      facilities: [],
      ownership: "",
      warehouseBackground: null,
      warehouseImage: null
    }
  },
  reducers: {
    updateWarehouseRegisterData: (state, action) => {
      state.warehouseRegisterData.name = action.payload.name;

      state.warehouseRegisterData.warehouseDetails =
        action.payload.warehouseDetails;
      state.warehouseRegisterData.address = action.payload.address;
      state.warehouseRegisterData.pin = action.payload.pin;
      state.warehouseRegisterData.facilities = action.payload.facilities;
      state.warehouseRegisterData.ownership = action.payload.ownership;
      state.warehouseRegisterData.warehouseBackground =
        action.payload.warehouseBackground;
      state.warehouseRegisterData.warehouseImage =
        action.payload.warehouseImage;
    }
  }
});

export const { updateWarehouseRegisterData } = warehouseRegisterSlice.actions;
export default warehouseRegisterSlice.reducer;
