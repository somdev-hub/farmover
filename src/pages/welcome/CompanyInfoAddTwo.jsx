import axios from "axios";
import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addCompany } from "../../apis/api";

const CompanyInfoAddTwo = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const companyRegistrationData = useSelector(
    (state) => state.companyRegister.companyRegisterData
  );

  const handleFileChange = (e) => {
    dispatch({
      type: "companyRegister/updateCompanyRegisterData",
      payload: {
        ...companyRegistrationData,
        [e.target.name]: e.target.files[0]
      }
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(companyRegistrationData);

    const response=await addCompany(companyRegistrationData);
    if(response.status===201){
      navigator("/company/home");
    }
    // navigator("/company-address-add");
  };

  return (
    <div className="flex justify-between h-[100dvh] py-6 bg-white">
      <div className="w-[55%]  px-[3%] h-full">
        {/* <div className="flex justify-end">
          <Link to={"/signup"}>
            <p className="flex gap-1 text-[20px] items-center font-[500]">
              Sign up
              <span>
                <MdOutlineCompanyInfoAddTwo />
              </span>
            </p>
          </Link>
        </div> */}
        <div className="mt-6 px-[5%] pr-[12%]">
          <h1 className="font-[600] text-[2.5rem]">
            Enter your Company details
          </h1>
          <p className="font-[500] text-[1.25rem] mt-2">
            Carefully enter your company details to register your company
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <MainInput
              heading="Select company ownership"
              placeholder="Select"
              type="select"
              options={["Goverment owned", "Private owned"]}
              values={["GOVERNMENT_OWNED", "PRIVATE_OWNED"]}
              name="ownership"
              value={companyRegistrationData.ownership}
              onChange={(e) => {
                dispatch({
                  type: "companyRegister/updateCompanyRegisterData",
                  payload: {
                    ...companyRegistrationData,
                    ownership: e.target.value
                  }
                });
              }}
            />

            <MainInput
              heading="Company industry"
              placeholder="Food"
              type="text"
              name="companyIndustry"
              value={companyRegistrationData.companyIndustry}
              onChange={(e) => {
                dispatch({
                  type: "companyRegister/updateCompanyRegisterData",
                  payload: {
                    ...companyRegistrationData,
                    companyIndustry: e.target.value
                  }
                });
              }}
            />

            <div className="">
              <p className="font-[500]">Select your company profile</p>
              <div className="flex items-center gap-5">
                <label className="rounded-[1rem] h-[7rem] border-[3px] mt-3 border-dashed flex items-center justify-center cursor-pointer w-[30%] text-center">
                  {companyRegistrationData.companyImage
                    ? companyRegistrationData.companyImage.name
                    : "Select"}

                  <input
                    type="file"
                    id="company-bg"
                    className="hidden"
                    name="companyImage"
                    accept=".png, .jpg"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="font-[500] text-brown">Select an image</p>
              </div>
            </div>

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

export default CompanyInfoAddTwo;
