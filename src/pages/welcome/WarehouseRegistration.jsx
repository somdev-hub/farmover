import React, { useState } from "react";
import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
import { Link } from "react-router-dom";
// import { MdOutlineWarehouseRegistration } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const WarehouseRegistration = () => {
  const dispatch = useDispatch();
  const warehouseRegistrationData = useSelector(
    (state) => state.warehouseRegister.warehouseRegisterData
  );

  const navigator = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "facilities") {
      dispatch({
        type: "warehouseRegister/updateWarehouseRegisterData",
        payload: {
          ...warehouseRegistrationData,
          facilities: value.split(",")
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(warehouseRegistrationData);
    navigator("/warehouse-profile-add");
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
              heading="Warehouse name"
              placeholder="Warehouse no 112, majhipali"
              type="text"
              name="name"
              value={warehouseRegistrationData.name}
              onChange={handleChange}
            />
            {/* <MainInput
              heading="Warehouse address"
              placeholder="Address"
              type="text"
              name="warehouseAddress"
              value={warehouseRegistrationData.warehouseAddress}
              onChange={handleChange}
            /> */}
            <MainInput
              heading="Warehouse details"
              placeholder="start typing..."
              type="long-text"
              name="warehouseDetails"
              value={warehouseRegistrationData.warehouseDetails}
              onChange={handleChange}
            />
            <MainInput
              heading="Enter warehouse facilities (seperated by comma)"
              placeholder="Enter facilities"
              name="facilities"
              value={warehouseRegistrationData.facilities.join(",")}
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

export default WarehouseRegistration;
