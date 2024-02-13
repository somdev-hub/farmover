import React from "react";
import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";

const Login = () => {
  return (
    <div className="flex justify-between h-[100dvh] py-6 bg-white">
      <div className="w-[55%] mt-3 px-[3%] h-full">
        {/* <div className="flex justify-end">
          <Link to={"/signup"}>
            <p className="flex gap-1 text-[20px] items-center font-[500]">
              Sign up
              <span>
                <MdOutlineLogin />
              </span>
            </p>
          </Link>
        </div> */}
        <div className="mt-10 px-[5%] pr-[12%]">
          <h1 className="font-[600] text-[2.5rem]">Login</h1>
          <p className="font-[500] text-[1.25rem] mt-2">
            Enter your email and password to continue
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <MainInput
              heading="Email"
              placeholder="something@gnmail.com"
              type="email"
            />
            <MainInput
              heading="Password"
              placeholder="********"
              //   type="text"
              inputType={"password"}
            />
            <p className="font-[500] text-[1.125rem] text-right">
              Forget Password?
            </p>

            <button
              className="mt-4 rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
              //   onClick={handleSubmit}
            >
              Continue
              <CgPushRight className="text-[20px]" />
            </button>
            <p className="mt-2 font-[500] text-[1.125rem] text-center">
              Don’t have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
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

export default Login;
