import React, { useEffect, useState } from "react";
import green_tick from "../../assets/green-tick.svg";
import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { getSpecificService } from "../../apis/api";
import { Paper } from "@mui/material";

const ServiceView = () => {
  const [serviceDetails, setServiceDetails] = useState({});
  const location = useLocation();
  const serviceId = location.state.id;
  const details = {
    name: "Mr. Monoj Harverter machine 1200HP",
    owner: "Monoj kumar Padhan",
    mobile: "+91889289281",
    availability: "Available",
    about:
      "Our harvester machine is a hydrolic compresses grain extractor with a load of 2000HP. It runs on diesel and costs Rs. 1500/- per hour. It is suitable for harvesting wheat, rice, and other grains.",
    features: [
      "Hydrolic compresses grain extraction",
      "2000HP load capacity",
      "Runs on diesel fuel",
      "Suitable for wheat, rice, and other grains",
      "Costs Rs. 1500/- per hour",
      "Available for rent"
    ],
    contact: {
      owner: "Monoj kumar Padhan",
      phone: "+91889289281",
      email: "manojpadhan12@gmail.com"
    },
    machineInfo: {
      machineType: "Hydrolic compresses grain extractor",
      load: "2000HP",
      fuelType: "Diesel",
      costPerHour: "Rs. 1500/-"
    }
  };
  useEffect(() => {
    const fetchService = async () => {
      const response = await getSpecificService(serviceId);
      setServiceDetails(response);
    };
    fetchService();
  }, [serviceId]);
  return (
    <div className="mt-8">
      <div className="w-[75vw]">
        <div className="flex gap-4">
          <div className="w-[30%] bg-white shadow-md rounded-[1rem] px-4 py-4 h-max">
            <img
              src={serviceDetails?.serviceImage}
              alt=""
              className="w-[100%] h-[50%] object-cover rounded-[1rem]"
            />
            <div className=" mt-3">
              <p className="text-[1.25rem] font-[600] border-b-2 border-grey border-solid pb-3">
                {serviceDetails?.serviceName}
              </p>
              <p className="mt-3">
                <span className="font-[600] text-[1.125rem]">Owner: </span>
                <span className="font-[500] text-[1.125rem] text-brown">
                  {serviceDetails?.owner?.uname}
                </span>
              </p>
              <p className="mt-3">
                <span className="font-[600] text-[1.125rem]">Mobile: </span>
                <span className="font-[500] text-[1.125rem] text-brown">
                  {serviceDetails?.owner?.phone}
                </span>
              </p>
              <p className="mt-3">
                <span className="font-[600] text-[1.125rem]">
                  Availability:{" "}
                </span>
                <span className="font-[500] text-[1.125rem] text-brown">
                  {serviceDetails?.status}
                </span>
              </p>
            </div>
          </div>
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem",
              width: "70%"
            }}
          >
            <h3 className="text-[1.125rem] font-[600]">Details</h3>
            <div className="flex mt-4 ">
              <div className="flex-1">
                <div className="">
                  <p className="font-[500]">About</p>
                  <p className="text-[14px] text-brown font-[500] mt-3">
                    {serviceDetails?.serviceDescription}
                  </p>
                </div>
              </div>
              <div className="flex-1 ml-[3rem]">
                <p className="font-[500]">Contact</p>
                <div className="mt-3">
                  <span className="font-[600] text-[14px]">Owner: </span>
                  <span className="font-[500] text-[14px] text-brown">
                    {serviceDetails?.owner?.uname}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="font-[600] text-[14px]">Phone: </span>
                  <span className="font-[500] text-[14px] text-brown">
                    {serviceDetails?.owner?.phone}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="font-[600] text-[14px]">Email: </span>
                  <span className="font-[500] text-[14px] text-brown">
                    {serviceDetails?.owner?.email}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="font-[600] text-[14px]">Address: </span>
                  <span className="font-[500] text-[14px] text-brown">
                    {serviceDetails?.owner?.address}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="font-[500]">Machine info</span>
                  <div className="mt-3">
                    <span className="font-[600] text-[14px]">
                      Machine type:{" "}
                    </span>
                    <span className="font-[500] text-[14px] text-brown">
                      {serviceDetails?.serviceType}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="font-[600] text-[14px]">Load: </span>
                    <span className="font-[500] text-[14px] text-brown">
                      {serviceDetails?.machineLoad}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="font-[600] text-[14px]">Fuel type: </span>
                    <span className="font-[500] text-[14px] text-brown">
                      {serviceDetails?.fuelType}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="font-[600] text-[14px]">
                      Cost per day:{" "}
                    </span>
                    <span className="font-[500] text-[14px] text-brown">
                      Rs.{serviceDetails?.pricePerDay}/-
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem",
            mt: 2
          }}
        >
          <div className="">
            <p className="font-[500]">Features</p>
            {serviceDetails?.features?.map((item, i) => (
              <div className="flex gap-3 mt-3" key={i}>
                <img src={green_tick} alt="" />
                <span className="text-[14px] text-brown font-[500]">
                  {item.feature}
                </span>
              </div>
            ))}
          </div>
        </Paper>
        <div className="mt-6 bg-white shadow-md rounded-[1rem] px-4 py-4">
          <h3 className="text-[18px] font-[600]">Rent our service</h3>
          <div className="mt-3 flex gap-4">
            <div className="flex-1 flex-col gap-3 flex">
              <MainInput
                heading="Enter your name"
                placeholder="John Doe"
                font="14px"
              />
              <MainInput
                heading="Enter your address"
                placeholder="At/po- Sambalpur, Odisha"
                font="14px"
              />
              <MainInput
                heading="Enter your pincode"
                placeholder="768200"
                font="14px"
              />
            </div>
            <div className="flex-1 flex-col gap-3 flex">
              <MainInput
                heading="Enter duration of storage(in months)"
                placeholder="6"
                font="14px"
              />
              <MainInput
                heading="Enter your token"
                placeholder="xxxxxxx"
                font="14px"
              />
            </div>
            <div className="flex-1 ml-[3rem] ">
              <div className="border-grey border-b-2 border-solid pb-4">
                <div className="">
                  <span className="font-[600] ">Total cost: </span>
                  <span className="font-[500] text-grey">Rs. 1200/-</span>
                </div>
                <div className="mt-3">
                  <span className="font-[600] ">SGST: </span>
                  <span className="font-[500] text-grey">5%</span>
                </div>
                <div className="mt-3">
                  <span className="font-[600] ">CGST: </span>
                  <span className="font-[500] text-grey">5%</span>
                </div>
              </div>
              <div className="mt-3">
                <span className="font-[600] ">Total: </span>
                <span className="font-[500] text-grey">Rs. 1500/-</span>
              </div>
              <button
                className="mt-4 text-[14px] rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
                //   onClick={handleSubmit}
              >
                Continue
                <CgPushRight className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceView;
