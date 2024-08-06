import { useEffect, useState } from "react";
import green_tick from "../../assets/green-tick.svg";
import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { getSpecificService, purchaseService } from "../../apis/api";
import { Paper, Snackbar } from "@mui/material";

const ServiceView = () => {
  const [serviceDetails, setServiceDetails] = useState({});
  const location = useLocation();
  const serviceId = location.state.id;
  const [snackbarVisible, setSnackbarVisible] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  const [serviceData, setServiceData] = useState({
    productionToken: 0,
    duration: 0
  });

  const addServiceToProduction = async () => {
    const response = await purchaseService(
      serviceId,
      serviceData.duration,
      serviceData.productionToken
    );
    if (response.status === 201) {
      setSnackbarVisible({
        open: true,
        message: "Service added to production successfully",
        severity: "success"
      });
    } else {
      setSnackbarVisible({
        open: true,
        message: "Failed to add service to production",
        severity: "error"
      });
    }

    // console.log(serviceData);
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
                heading="Enter your production token"
                placeholder="xx"
                type="number"
                font="14px"
                value={serviceData.productionToken}
                onChange={(e) =>
                  setServiceData({
                    ...serviceData,
                    productionToken: e.target.value
                  })
                }
              />
              <MainInput
                heading="Enter duration of activity(in days)"
                placeholder="60"
                type="number"
                font="14px"
                value={serviceData.duration}
                onChange={(e) =>
                  setServiceData({
                    ...serviceData,
                    duration: e.target.value
                  })
                }
              />
            </div>
            <div className="flex-1 ml-[3rem] ">
              <div className="border-grey border-b-2 border-solid pb-4">
                <div className="">
                  <span className="font-[600] ">Total cost: </span>
                  <span className="font-[500] text-grey">
                    Rs. {serviceData.duration * serviceDetails?.pricePerDay}/-
                  </span>
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
                onClick={addServiceToProduction}
              >
                Continue
                <CgPushRight className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarVisible.open}
        autoHideDuration={6000}
        onClose={() =>
          setSnackbarVisible({
            ...snackbarVisible,
            open: false
          })
        }
        message={snackbarVisible.message}
        severity={snackbarVisible.severity}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </div>
  );
};

export default ServiceView;
