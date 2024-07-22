import { Paper, Dialog, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSpecificService } from "../../apis/api";
import { MdEdit } from "react-icons/md";

const ServiceDetails = () => {
  const location = useLocation();
  const [serviceDetails, setServiceDetails] = useState({});
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      const response = await getSpecificService(location.state.id);
      setServiceDetails(response);
    };
    fetchService();
  }, [location.state.id]);
  return (
    <div className="mt-8 w-[95%]">
      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem",
          px: 3
        }}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-[500]">Your service details</h3>
          <div className="flex items-center gap-2 cursor-pointer">
            <MdEdit />
            <p className="font-[500] text-[18px]">Edit</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex-1">
            <p className="font-[500]">Service name</p>
            <p className=" font-[500] text-brown text-[14px]">
              {serviceDetails?.serviceName}
            </p>
            <p className="font-[500] mt-2">Service type</p>
            <p className=" font-[500] text-brown text-[14px]">
              {serviceDetails?.serviceType}
            </p>
            <p className="font-[500] mt-2">Commenced on</p>
            <p className=" font-[500] text-brown text-[14px]">
              {" "}
              {serviceDetails?.commencedDate
                ? serviceDetails?.commencedDate
                : "N/A"}
            </p>
            <p className="font-[500] mt-2">Service description</p>
            <p className=" font-[500] text-brown text-[14px]">
              {serviceDetails?.serviceDescription}
            </p>
          </div>
          {/* <div className="w-[70%] flex gap-8 items-start"></div> */}
          <div className="flex-1 flex flex-col items-center">
            <div className="">
              <p className="font-[500] mt-2">Last repaired</p>
              <p className=" font-[500] text-brown text-[14px]">
                {" "}
                {serviceDetails?.lastRepaired
                  ? serviceDetails?.lastRepaired
                  : "N/A"}
              </p>
              <p className="font-[500] mt-2">Machine type</p>
              <p className=" font-[500] text-brown text-[14px]">
                {serviceDetails?.machineType}
              </p>
              <p className="font-[500] mt-2">Machine load</p>
              <p className=" font-[500] text-brown text-[14px]">
                {serviceDetails?.machineLoad}
              </p>
              <p className="font-[500] mt-2">Fuel type</p>
              <p className=" font-[500] text-brown text-[14px]">
                {serviceDetails?.fuelType}
              </p>
              <p className="font-[500] mt-2">Price per day</p>
              <p>Rs. {serviceDetails?.pricePerDay}/-</p>
            </div>
          </div>
          <div className="w-[30%]">
            <img
              src={serviceDetails?.serviceImage}
              alt=""
              className="object-cover w-full h-[13rem] rounded-[1rem]"
            />
            <div className="mt-3 px-2">
              <h3 className=" font-[600]">{serviceDetails?.serviceName}</h3>
              <p className="text-[1rem] font-[500] text-brown">
                {serviceDetails?.serviceType}
              </p>
              <div className="flex justify-between mt-2 items-center">
                <p className="font-[500] ">Status</p>
                <div className="flex gap-2 items-center">
                  <span className="bg-green-300 w-2 h-2 rounded-full "></span>
                  {serviceDetails?.status}
                </div>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <p className="font-[500] ">Last operated</p>
                <p className="">
                  {" "}
                  {serviceDetails?.lastOperated
                    ? serviceDetails?.lastOperated
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Paper>
      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem",
          mt: 4,
          px: 3
        }}
      >
        <h3 className="font-[500]">Features</h3>
        <div className="flex">
          <div className="mt-5 flex-1">
            {serviceDetails?.features?.map((feature, index) => {
              return (
                <div className="flex gap-3 items-center" key={index}>
                  <span className="w-2 h-2 rounded-full bg-black "></span>
                  <p className="text-brown font-[500]">{feature?.feature}</p>
                </div>
              );
            })}
          </div>
          {/* <div className="flex-1 flex justify-center">
            <div className="">
              <p className="font-[500]">Price per hour</p>
              <p>Rs. {serviceDetails?.pricePerHour}/-</p>
            </div>
          </div> */}
        </div>
      </Paper>
      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          <h2 className="font-[500] text-[1.5rem]">Edit service</h2>
            
        </DialogTitle>
      </Dialog>
    </div>
  );
};

export default ServiceDetails;
