import { useState } from "react";
import MainInput from "../../components/MainInput";
import ServiceSelectDialogBox from "../../components/ServiceSelectDialogBox";
import { addService } from "../../apis/api";

const AddService = () => {
  const [selectServiceType, setSelectServiceType] = useState(false);
  const [serviceData, setServiceData] = useState({
    serviceType: "",
    serviceName: "",
    serviceDescription: "",
    status: "",
    pricePerDay: 0,
    features: [],
    machineType: "",
    machineLoad: "",
    fuelType: "",
    serviceImage: null
  });

  /**
   * 
   Efficiency: Harvester machines are highly efficient in harvesting crops quickly and effectively,
 Versatility: They can be used for harvesting a variety of crops such as wheat rice corn and more,
Labor-saving: Harvester machines reduce the need for manual labor in the fields,
 Precision: These machines are designed to harvest crops with precision, minimizing waste,
Speed: Harvester machines can harvest crops at a much faster rate compared to manual harvesting,
Adaptability: Modern harvesters come with advanced technology that allows them to adapt to different field conditions,
Quality of harvest: They help in maintaining the quality of the harvested crop by ensuring timely harvesting,
Cost-effective: In the long run using a harvester machine can be cost-effective for farmers
   */
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "pricePerDay") {
      setServiceData({ ...serviceData, [name]: parseFloat(value) });
      return;
    }
    if (name === "serviceImage") {
      console.log(e.target.files[0]);
      setServiceData({ ...serviceData, [name]: e.target.files[0] });
      return;
    }
    setServiceData({ ...serviceData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(serviceData);

    const response = await addService(serviceData);

    if (response.status === 201) {
      window.location.href = "/service/home";
    }
    // console.log(response);
  };
  return (
    <div className="mt-8">
      <div className="shadow-md rounded-[1rem] px-4 py-6 bg-white">
        <div className="">
          <h3 className="text-[24px] font-[600]">Add new service</h3>
          <p className="text-[1.125rem] font-[500] text-brown">
            Fill in the following details to add a new service
          </p>
        </div>
        <div className="mt-4 w-full">
          <div className="flex w-full gap-10">
            <div className="w-full flex-1 flex flex-col gap-4">
              <div className="">
                <p className="font-[500]">Select service type</p>
                <div
                  //   name={name}
                  //   value={value}
                  //   type={inputType ? inputType : "text"}
                  //   onChange={onChange}
                  onClick={() => setSelectServiceType(true)}
                  className={`shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] h-[6rem] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey text-[14px] text-center items-center flex justify-center cursor-pointer`}
                  //   placeholder="select"
                >
                  <p className="text-brown text-[14px] font-[500]">
                    {serviceData.serviceType
                      ? serviceData.serviceType
                      : "Select"}
                  </p>
                </div>
              </div>
              <MainInput
                heading="About your service"
                placeholder="start writing..."
                type={"long-text"}
                name="serviceDescription"
                value={serviceData.serviceDescription}
                onChange={handleChange}
              />
              <MainInput
                heading="Enter name of your service"
                placeholder="harvester machine"
                type="text"
                name="serviceName"
                value={serviceData.serviceName}
                onChange={handleChange}
              />
              <MainInput
                heading="Enter status"
                placeholder="Select"
                options={[
                  "Active",
                  "Inactive",
                  "Repairing",
                  "Maintenance",
                  "Decommissioned",
                  "Operating"
                ]}
                values={[
                  "ACTIVE",
                  "INACTIVE",
                  "REPAIRING",
                  "MAINTENANCE",
                  "DECOMMISSIONED",
                  "OPERATING"
                ]}
                type={"select"}
                name="status"
                value={serviceData.availability}
                onChange={handleChange}
              />

              <button
                className="mt-4 rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
                onClick={handleSubmit}
              >
                Continue
                {/* <CgPushRight className="text-[20px]" /> */}
              </button>
            </div>
            <div className="w-full flex-1 flex flex-col gap-4">
              <MainInput
                heading="Price per day"
                placeholder="1000"
                type="number"
                name="pricePerDay"
                value={serviceData.pricePerDay}
                onChange={handleChange}
              />
              <MainInput
                heading="Features"
                placeholder="write seperated by commas"
                type="text"
                name="features"
                value={serviceData.features.join(",")}
                onChange={(e) => {
                  e.preventDefault();
                  const { name, value } = e.target;
                  setServiceData({
                    ...serviceData,
                    [name]: value.split(",")
                  });
                }}
              />
              <MainInput
                heading="Machine type"
                placeholder="Diesel engine"
                name="machineType"
                value={serviceData.machineType}
                onChange={handleChange}
              />
              <MainInput
                heading="Machine load"
                placeholder="1000HP"
                name="machineLoad"
                value={serviceData.machineLoad}
                onChange={handleChange}
              />
              <MainInput
                heading="Fuel type"
                placeholder="Select"
                type="select"
                options={["Diesel", "Petrol", "Electric", "Hybrid"]}
                values={["Diesel", "Petrol", "Electric", "Hybrid"]}
                name="fuelType"
                value={serviceData.fuelType}
                onChange={handleChange}
              />
              <MainInput
                heading="Upload image"
                placeholder="upload"
                type="file"
                name="serviceImage"
                value={
                  serviceData?.serviceImage?.name
                    ? serviceData?.serviceImage?.name
                    : ""
                }
                onChange={handleChange}
              />
              {/* <input type="file" className="file-input w-full max-w-xs" /> */}
            </div>
          </div>
        </div>
      </div>
      <ServiceSelectDialogBox
        open={selectServiceType}
        onClose={() => setSelectServiceType(false)}
        selectService={(item) => {
          setServiceData({ ...serviceData, serviceType: item });
          setSelectServiceType(false);
        }}
      />
    </div>
  );
};

export default AddService;
