import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signup } from "../apis/api";

export const postSignUp = createAsyncThunk(
  "signup/postSignUp",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await signup(data);
      console.log(response.token);
      localStorage.setItem("token", response.token);
      localStorage.setItem("email", response.email);
      localStorage.setItem("role", response.role);
      // if (response.role === "ROLE_FARMER") {
      // }
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    signUpData: {
      uname: "",
      email: "",
      password: "",
      role: "",
      phone: "",
      address: ""
    },
    userRole: ""
  },
  reducers: {
    updateSignUpData: (state, action) => {
      state.signUpData.uname = action.payload.uname;
      state.signUpData.email = action.payload.email;
      state.signUpData.password = action.payload.password;
      state.signUpData.role = action.payload.role;
      state.signUpData.phone = action.payload.phone;
      state.signUpData.address = action.payload.address;
    }
  }
});

export const { updateSignUpData } = signUpSlice.actions;
export default signUpSlice.reducer;
