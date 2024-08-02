import React, { useState } from "react";
import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupData = useSelector((state) => state.signup.signUpData);
  // const [signupData, setSignupData] = useState({
  //   fullName: "",
  //   email: "",
  //   role: "",
  //   phoneNumber: "",
  //   address: ""
  // });
  const handleChange = (e) => {
    e.preventDefault();
    // setSignupData({ ...signupData, [e.target.name]: e.target.value });
    dispatch({
      type: "signup/updateSignUpData",
      payload: {
        ...signupData,
        [e.target.name]: e.target.value
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(signupData);
    navigate("/set-password");
  };
  return (
    <div className="flex justify-between h-[100dvh] py-6 bg-white">
      <div className="w-[55%] mt-3 px-[3%] h-full">
        <div className="flex justify-end">
          <Link to={"/login"}>
            <p className="flex gap-1 text-[20px] items-center font-[500]">
              Login
              <span>
                <MdOutlineLogin />
              </span>
            </p>
          </Link>
        </div>
        <div className="mt-10 px-[5%] pr-[12%]">
          <h1 className="font-[600] text-[2.5rem]">Welcome</h1>
          <p className="font-[500] text-[1.25rem] mt-2">
            To continue further, please fill your details as follows to use our
            great range of services
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <MainInput
              heading="Full Name"
              placeholder="Full Name"
              type="text"
              name="uname"
              value={signupData.uname}
              onChange={handleChange}
            />
            <MainInput
              heading="Email"
              placeholder="something@gnmail.com"
              type="email"
              name="email"
              value={signupData.email}
              onChange={handleChange}
            />
            <div className="flex gap-3 w-full">
              <MainInput
                heading="Role"
                placeholder="Select"
                type="select"
                options={[
                  "Farmer",
                  "Warehouse manager",
                  "Service provider",
                  "Company",
                  "Content Creator"
                ]}
                values={[
                  "FARMER",
                  "WAREHOUSE_MANAGER",
                  "SERVICE_PROVIDER",
                  "COMPANY",
                  "CONTENT_CREATOR"
                ]}
                name="role"
                value={signupData.role}
                onChange={handleChange}
              />
              <MainInput
                heading="Phone Number"
                placeholder="9189281928"
                // type=""
                name="phone"
                value={signupData.phone}
                onChange={handleChange}
              />
            </div>
            <MainInput
              heading="Address"
              placeholder="At/po- Sambalpur, Odisha"
              name="address"
              value={signupData.address}
              onChange={handleChange}
            />
            <button
              className="mt-4 rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
              onClick={handleSubmit}
            >
              Continue
              <CgPushRight className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[45%] h-full pr-6">
        <img
          src="https://envirotecmagazine.com/wp-content/uploads/2022/06/farming.jpg"
          alt=""
          className="w-full h-full object-cover object-center rounded-[1rem]"
        />
      </div>
    </div>
  );
};

export default Signup;
