import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompanyInfoAdd = () => {
  const dispatch = useDispatch();
  const companyInfoAddData = useSelector(
    (state) => state.companyRegister.companyRegisterData
  );

  const navigator = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "facilities") {
      dispatch({
        type: "companyRegister/updateCompanyRegisterData",
        payload: {
          ...companyInfoAddData,
          facilities: value.split(",")
        }
      });
      return;
    }
    dispatch({
      type: "companyRegister/updateCompanyRegisterData",
      payload: {
        ...companyInfoAddData,
        [e.target.name]: e.target.value
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(companyInfoAddData);
    navigator("/company-profile-add");
  };
  return (
    <div className="flex justify-between h-[100dvh] py-6 bg-white">
      <div className="w-[55%]  px-[3%] h-full">
        <div className="mt-6 px-[5%] pr-[12%]">
          <h1 className="font-[600] text-[2.5rem]">
            Enter your warehouse details
          </h1>
          <p className="font-[500] text-[1.25rem] mt-2">
            Carefully enter your warehouse details to register your warehouse
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <MainInput
              heading="Company name"
              placeholder="KiloHertz Pizza"
              type="text"
              name="name"
              value={companyInfoAddData.name}
              onChange={handleChange}
            />
            <MainInput
              heading="Company address"
              placeholder="1st floor DLF Cybercity, Bhubneswar"
              type="text"
              name="address"
              value={companyInfoAddData.address}
              onChange={handleChange}
            />
            <MainInput
              heading="Pin"
              placeholder="000000"
              type="number"
              name="pin"
              value={companyInfoAddData.pin}
              onChange={handleChange}
            />

            <MainInput
              heading="Company details"
              placeholder="start typing..."
              type="long-text"
              name="companyDetails"
              value={companyInfoAddData.companyDetails}
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

export default CompanyInfoAdd;
