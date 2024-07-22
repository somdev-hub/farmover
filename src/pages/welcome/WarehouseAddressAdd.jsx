import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
// import { MdOutlineWarehouseRegistration } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { postWarehouseData } from "../../apis/api";

const WarehouseAddressAdd = () => {
  const dispatch = useDispatch();
  const warehouseRegistrationData = useSelector(
    (state) => state.warehouseRegister.warehouseRegisterData
  );

  /*
    Storage Units: Various sizes of storage units to accommodate different storage needs,
Climate Control: Climate-controlled storage areas to protect sensitive items from temperature and humidity fluctuations,
Security Systems: 24/7 surveillance cameras security guards and secure access control systems to ensure the safety of stored items,
Loading Docks: Loading docks for easy loading and unloading of goods from trucks and vehicles,
Pallet Racking: Racking systems to efficiently store palletized goods,
Inventory Management: Systems for tracking inventory managing stock levels and facilitating easy access to stored items.
  */

  const navigator = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "warehouseFacilities") {
      dispatch({
        type: "warehouseRegister/updateWarehouseRegisterData",
        payload: {
          ...warehouseRegistrationData,
          warehouseFacilities: value.split(",")
        }
      });
      return;
    }
    dispatch({
      type: "warehouseRegister/updateWarehouseRegisterData",
      payload: {
        ...warehouseRegistrationData,
        [e.target.name]: e.target.value
      }
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(warehouseRegistrationData);
    const response = await postWarehouseData(warehouseRegistrationData);
    console.log(response.status);
    if (response.status === 201) {
      navigator("/warehouse/home");
    }
    // navigator("/warehouse-profile-add");
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
              heading="Select warehouse ownership"
              placeholder="Select"
              type="select"
              options={["Government owned", "Private owned"]}
              values={["GOVERNMENT_OWNED", "PRIVATE_OWNED"]}
              name="ownership"
              value={warehouseRegistrationData.ownership}
              onChange={handleChange}
            />
            <MainInput
              heading="Enter warehouse address"
              placeholder="sector-12, Sambalpur, Odisha"
              type="text"
              name="address"
              value={warehouseRegistrationData.address}
              onChange={handleChange}
            />
            <MainInput
              heading="Warehouse pin"
              placeholder="123456"
              type="text"
              name="pin"
              value={warehouseRegistrationData.pin}
              onChange={handleChange}
            />

            <button
              className="mt-4 rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
              // onClick={() => navigator("/warehouse-profile-add")}
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

export default WarehouseAddressAdd;
