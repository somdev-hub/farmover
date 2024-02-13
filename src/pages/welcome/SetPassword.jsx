import React, { useState } from "react";
import MainInput from "../../components/MainInput";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password, confirmPassword, checked);
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
          <h1 className="font-[600] text-[2.5rem]">Set a password</h1>
          <p className="font-[500] text-[1.25rem] mt-2">
            fill in a strong password and confirm your password to create your
            account
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <MainInput
              heading="Password"
              placeholder="********"
              inputType={"password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MainInput
              heading="Confirm Password"
              placeholder="********"
              inputType={"password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex gap-2 items-center mt-4">
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <p className="font-[500] text-[16px]">
                Read all the terms and conditions and policy of warehouse before
                continuing
              </p>
            </div>

            <button
              className="mt-4 rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
              //   onClick={handleSubmit}
              onClick={handleSubmit}
            >
              Register
              <TbLogin2 className="text-[20px]" />
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

export default SetPassword;
