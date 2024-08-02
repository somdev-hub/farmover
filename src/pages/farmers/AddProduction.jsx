import { useEffect, useState } from "react";
import MainInput from "../../components/MainInput";
import { CgPushRight } from "react-icons/cg";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  getAvailableServices,
  postProductionData,
  purchaseService
} from "../../apis/api";
import Snackbar from "@mui/material/Snackbar";
import CropSelectDialogBox from "../../components/CropSelectDialogBox";
// import Snackbar from "@mui/material/Snackbar";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddProduction = () => {
  const [productionData, setProductionData] = useState({
    crop: "",
    quantity: "",
    status: "sowing",
    services: []
  });

  const [availableServices, setAvailableServices] = useState([]);

  const [open, setOpen] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);

  const [savedProductionToken, setSavedProductionToken] = useState(0);

  const [serviceDialogOpen, setServiceDialogOpen] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setProductionData({ ...productionData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(productionData);
    const response = await postProductionData(productionData);
    if (response.status === 201) {
      setSavedProductionToken(response.data.token);
      setOpen(true);
    }
    console.log(response);
    if (productionData.services.length != 0) {
      setServiceDialogOpen(true);
    }
  };

  const addServiceToProduction = async (index) => {
    const response = await purchaseService(
      productionData.services[index].service_id,
      productionData.services[index].duration,
      savedProductionToken
    );
    console.log(response);
  };

  useEffect(() => {
    const fetchAvailableServices = async () => {
      const response = await getAvailableServices();

      setAvailableServices(response);
    };

    fetchAvailableServices();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:w-[75vw]">
      <div className="flex-1 bg-white shadow-md rounded-[1rem] px-4 py-4">
        <div className="">
          <h3 className="font-[600] text-[24px]">Add new production</h3>
          <p className="font-[500] text-brown mt-1">
            Add the following details to generate a token and add your
            production to the queue
          </p>
          <div className="mt-4 flex flex-col gap-4">
            <div
              onClick={() => setDialogOpen(true)}
              className={`shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey items-center flex cursor-pointer`}
              //   placeholder="select"
            >
              <p className="text-brown text-[14px] font-[500]">
                {productionData.crop ? productionData.crop : "Select"}
              </p>
            </div>

            <MainInput
              heading="Enter estimated yield"
              type="text"
              placeholder="100Kg"
              font="14px"
              name="quantity"
              value={productionData.quantity}
              onChange={handleChange}
            />

            <p className="font-[500]">Selected services</p>

            {productionData.services.length === 0 && (
              <p className="text-brown text-[14px] font-[500] text-center">
                No services selected
              </p>
            )}

            {productionData.services.length > 0 &&
              productionData.services.map((service, i) => {
                const serviceDetails = availableServices.find(
                  (available_service) =>
                    available_service.id === service.service_id
                );

                return (
                  <div className="" key={i}>
                    <div className="flex flex-row gap-3  pb-3 w-full justify-between">
                      <div className="flex flex-row gap-4 items-center">
                        <img
                          src={serviceDetails.serviceImage}
                          className="h-[4.5rem] object-cover w-[4.5rem] rounded-xl"
                          alt=""
                        />
                        <div className="">
                          <h4 className="text-[1.125rem] font-[600]">
                            {serviceDetails.serviceName}
                          </h4>
                          <div className="flex flex-col sm:flex-row justify-between sm:gap-6">
                            <p className="text-[14px] font-[500] text-brown">
                              {serviceDetails.serviceType}
                            </p>
                            <p className="text-[14px] font-[500] text-brown">
                              Rs.{serviceDetails.pricePerDay}/- per hour
                            </p>
                          </div>
                          <div className="flex mt-1 gap-2 items-center">
                            <span className="bg-green-300 w-2 h-2 rounded-full text-[12px]"></span>
                            <p className="text-[14px]">
                              {serviceDetails.status}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          setProductionData({
                            ...productionData,
                            services: productionData.services.filter(
                              (service) =>
                                service.service_id !== serviceDetails.id
                            )
                          });
                        }}
                      >
                        <FaMinus className="text-[20px]" />
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-[14px] font-[500]">
                        Enter duration of operation(in days)
                      </p>
                      <input
                        type="text"
                        className="border-b-2 border-solid w-full text-[14px]"
                        placeholder="45"
                        name="duration"
                        value={service.duration}
                        onChange={(e) => {
                          setProductionData({
                            ...productionData,
                            services: productionData.services.map((service) =>
                              service.service_id === serviceDetails.id
                                ? { ...service, duration: e.target.value }
                                : service
                            )
                          });
                        }}
                      />
                    </div>
                  </div>
                );
              })}

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
      <div className="flex-1 bg-white shadow-md rounded-[1rem] px-4 py-4">
        <h3 className="font-[600] text-[24px]">Suggested services</h3>
        <p className="font-[500] text-brown mt-1">
          You can add the following services available near you
        </p>
        <div className="flex flex-col gap-6 flex-4 mt-6">
          {availableServices?.map((service, i) => (
            <div
              className="flex gap-3 border-solid border-b-2 border-grey pb-3 w-full justify-between"
              key={i}
            >
              <div className="flex gap-4 items-center">
                <img
                  src={service.serviceImage}
                  className="h-[4.5rem] object-cover w-[4.5rem] rounded-xl"
                  alt=""
                />
                <div className="">
                  <h4 className="text-[1.125rem] font-[600]">
                    {service.serviceName}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
                    <p className="text-[14px] font-[500] text-brown">
                      {service.serviceType}
                    </p>
                    <p className="text-[14px] font-[500] text-brown">
                      Rs.{service.pricePerDay}/- per hour
                    </p>
                  </div>
                  <div className="flex mt-1 gap-2 items-center">
                    <span className="bg-green-300 w-2 h-2 rounded-full text-[12px]"></span>
                    <p className="text-[14px]">{service.status}</p>
                  </div>
                </div>
              </div>

              {productionData?.services?.some(
                (serviceObj) => serviceObj.service_id === service.id
              ) ? (
                <div className=" hidden sm:flex justify-center items-center">
                  <p className="text-brown">selected</p>
                </div>
              ) : (
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setProductionData({
                      ...productionData,
                      services: [
                        ...productionData.services,
                        { service_id: service.id }
                      ]
                    });
                  }}
                >
                  <FaPlus className="text-[20px]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Production added"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        // action={action}
      />

      <CropSelectDialogBox
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        selectCrop={(crop) => {
          setProductionData({ ...productionData, crop });
          setOpen(false);
        }}
      />

      <Dialog
        open={serviceDialogOpen}
        onClose={() => setServiceDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <div className="flex justify-between items-center">
            <h1 className="font-[600]">Confirm your order</h1>
            <IconButton onClick={() => setServiceDialogOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="flex flex-wrap justify-between">
            {productionData.services.map((service, i) => {
              const serviceDetails = availableServices.find(
                (available_service) =>
                  available_service.id === service.service_id
              );
              return (
                <div className="w-full" key={i}>
                  <div className="flex gap-3  pb-3 w-full justify-between">
                    <div className="flex gap-4 items-center">
                      <img
                        src={serviceDetails.serviceImage}
                        className="h-[4.5rem] object-cover w-[4.5rem] rounded-xl"
                        alt=""
                      />
                      <div className="">
                        <h4 className="text-[1.125rem] font-[600]">
                          {serviceDetails.serviceName}
                        </h4>
                        <div className="flex justify-between gap-6">
                          <p className="text-[14px] font-[500] text-brown">
                            {serviceDetails.serviceType}
                          </p>
                          <p className="text-[14px] font-[500] text-brown">
                            Rs.{serviceDetails.pricePerDay}/- per hour
                          </p>
                        </div>
                        <div className="flex mt-1 gap-2 items-center">
                          <span className="bg-green-300 w-2 h-2 rounded-full text-[12px]"></span>
                          <p className="text-[14px]">{serviceDetails.status}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center cursor-pointer">
                      <Button
                        onClick={() => {
                          addServiceToProduction(i);
                        }}
                      >
                        Complete
                      </Button>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-[14px] font-[500]">
                      Duration of operation(in days)
                    </p>
                    <div className="border-b-2 text-[14px] mt-1 pb-1">
                      <p>{service.duration}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex justify-center">
            <Button variant="contained">Finish your payment</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProduction;
