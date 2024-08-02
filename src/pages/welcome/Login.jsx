import { useState } from "react";
import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { login } from "../../apis/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    const response = await login(loginData);
    console.log(response);
    if (response.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("email", response.email);
      localStorage.setItem("role", response.role);
      switch (response.role) {
        case "FARMER":
          navigate("/farmer/home");
          break;

        case "WAREHOUSE_MANAGER":
          navigate("/warehouse/home");
          break;

        case "COMPANY":
          navigate("/company/home");
          break;

        case "SERVICE_PROVIDER":
          navigate("/service/home");
          break;

        default:
          navigate("/login");
          break;
      }
    }
  };
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:h-[100dvh] py-6 bg-white">
      <div className="sm:w-[55%] sm:mt-3 sm:px-[3%] h-full">
        <div className="mt-5 sm:mt-10 px-[5%] sm:pr-[12%]">
          <h1 className="font-[600] text-[2.5rem] m-0">Login</h1>
          <p className="font-[500] text-[1.125rem] sm:text-[1.25rem] mt-2">
            Enter your email and password to continue
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <MainInput
              heading="Email"
              placeholder="something@gmail.com"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
            <MainInput
              heading="Password"
              placeholder="********"
              //   type="text"
              inputType={"password"}
              name="password"
              value={loginData.password}
              onChange={handleChange}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <p className="font-[500] text-[1.125rem] text-right">
              Forget Password?
            </p>

            <button
              className="mt-4 rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
              onClick={handleSubmit}
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
      <div className="sm:w-[45%] h-full sm:pr-6 px-4 sm:px-0">
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
