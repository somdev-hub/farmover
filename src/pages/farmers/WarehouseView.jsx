import React, { useEffect, useState } from "react";
import green_tick from "../../assets/green-tick.svg";
import PropTypes from "prop-types";
import MainInput from "../../components/MainInput";
import Checkbox from "@mui/material/Checkbox";
import { CgPushRight } from "react-icons/cg";
import { addWarehouseUsage, getSpecificWarehouse } from "../../apis/api";
import { useLocation } from "react-router-dom";
import { storage_areas } from "../../assets/storages";

const Overview = ({ warehouseDetails, facilities, areas }) => {
  // console.log(areas);
  return (
    <div className="">
      <h2 className="mt-10 font-[500] text-[18px]">Details</h2>
      <p className="mt-2 text-[14px]">{warehouseDetails?.description}</p>
      <div className="mt-7 flex justify-between gap-10">
        <div className="flex-1">
          <h3 className="font-[600] text-[18px]">Facilities</h3>
          <div className="mt-4">
            {facilities?.map((facility, index) => (
              <div className="flex  gap-3 mt-3" key={index}>
                <img src={green_tick} alt="" />
                <span className="text-[14px]">{facility}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="">
            <div className="">
              <h3 className="font-[600] text-[18px]">Warehouse Details</h3>
              {/* <p className="mt-2 font-[500]">Description</p>
          <p className="text-[14px] mt-2">{warehouseDetails?.description}</p> */}
              <p className="mt-2 font-[500]">Address</p>
              <p className="mt-2 text-[14px]">{warehouseDetails?.address}</p>
              <p className="mt-2 font-[500]">Pin</p>
              <p className="mt-2 text-[14px]">{warehouseDetails?.pin}</p>
            </div>
            <div className="">
              <h3 className="font-[600] text-[18px] mt-2">Manager Details</h3>
              <p className="text-brown text-[14px] mt-4">
                {warehouseDetails.details}
              </p>
              <div className="mt-4">
                <span className="text-[14px] font-[500]">Manager: </span>
                <span>{warehouseDetails.manager}</span>
              </div>
              <div className="mt-4">
                <span className="text-[14px] font-[500]">Phone number: </span>
                <span>{warehouseDetails.contact}</span>
              </div>
              <div className="mt-4">
                <span className="text-[14px] font-[500]">Email: </span>
                <span>{warehouseDetails.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-[600] text-[18px]">Plans</h3>
          <div className="mt-4">
            {areas?.map((area, index) => (
              // console.log(area);
              <div
                className="flex justify-between items-center mt-3 border-solid border-grey border-b-2 pb-3"
                key={index}
              >
                <div>
                  <h3 className="font-[500] text-[14px]">
                    {
                      storage_areas.find(
                        (storage) => storage.value === area.storageType
                      ).name
                    }{" "}
                    Storage area
                  </h3>
                  <p className="text-brown text-[14px]">{area.capacity} Tons</p>
                </div>
                <div>
                  <span className="text-brown text-[14px]">
                    Rs. {area.pricePerKg}/- per Kg
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Store = ({ id, storages }) => {
  const [checked, setChecked] = useState(false);
  const [storageData, setStorageData] = useState({
    warehouseId: id,
    storageType: "",
    productionToken: "",
    weight: 0,
    duration: 0,
    markForSale: false,
    minimumPrice: 0,
    minimumUnit: ""
  });
  const handleChange = (e) => {
    setStorageData({ ...storageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checked)
      return alert(
        "Please read the terms and conditions and policy of warehouse before continuing"
      );
    const response = await addWarehouseUsage(storageData);

    if (response.status === 201) {
      alert("Storage added successfully");
    }
    // console.log(response);
    // console.log(storageData);
  };
  return (
    <div className="mt-10 flex gap-6">
      <div className="flex-1 flex flex-col gap-4">
        <MainInput
          heading="Select storage type"
          placeholder="Select"
          type="select"
          onChange={handleChange}
          options={storage_areas
            .filter((area) =>
              storages.some((storage) => storage.storageType === area.value)
            )
            .map((area) => area.name)}
          values={storage_areas
            .filter((area) =>
              storages.some((storage) => storage.storageType === area.value)
            )
            .map((area) => area.value)}
          name="storageType"
          value={storageData.storageType}
        />
        <MainInput
          heading="Enter production token"
          placeholder="xxxx"
          onChange={handleChange}
          name="productionToken"
          value={storageData.productionToken}
        />
        <MainInput
          heading="Total weights of all items in kgs"
          placeholder="100"
          type="number"
          onChange={handleChange}
          name="weight"
          value={storageData.weight}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <MainInput
          heading="Enter duration of storage(in months)"
          placeholder="6"
          type="number"
          onChange={handleChange}
          name="duration"
          value={storageData.duration}
        />
        <MainInput
          heading="Mark for sale"
          placeholder="Select"
          type="select"
          onChange={handleChange}
          options={["Yes", "No"]}
          values={[true, false]}
          name="markForSale"
          value={storageData.markForSale}
        />
        <MainInput
          heading="Enter price of minimum unit(in Rupees)"
          placeholder="20"
          type="number"
          onChange={handleChange}
          name="minimumPrice"
          value={storageData.minimumPrice}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <MainInput
          heading="Enter the minimum unit"
          placeholder="kg"
          onChange={handleChange}
          name="minimumUnit"
          value={storageData.minimumUnit}
        />
        <div className="flex gap-1 ">
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <p className="text-[14px]">
            Read all the terms and conditions and policy of warehouse before
            continuing
          </p>
        </div>
        <button
          className=" rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
          onClick={handleSubmit}
        >
          Continue
          <CgPushRight className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

const WarehouseView = () => {
  const location = useLocation();
  const id = location.state.id;
  // console.log(id);
  const [currentTab, setCurrentTab] = React.useState("overview");
  const [warehouseData, setWarehouseData] = useState({});

  const facilities = [
    "1000 matric tons of storage",
    "Cold storage facility",
    "High standard security",
    "24x7 surveillance",
    "Government owned",
    "1000 matric tons of storage",
    "Cold storage facility",
    "High standard security",
    "24x7 surveillance"
  ];
  const warehouseDetails = {
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sequi. Magnam, placeat repudiandae voluptates recusandae quos possimus voluptatem aspernatur accusantium dolor sint odio deserunt debitis? Perspiciatis aspernatur minima veritatis dolorum reprehenderit! Ipsum reprehenderit quos magni voluptatum harum quia consequuntur totam qui repellat quis! Eaque expedita explicabo nulla est vero quisquam!",
    manager: "Mr. John Doe",
    contact: "1234567890",
    email: "something@gmail.com"
  };
  const areas = [
    {
      area: "Cold storage area",
      capacity: "1000 matric tons",
      price: "Rs. 1000 per ton"
    },
    {
      area: "Dry storage area",
      capacity: "2000 matric tons",
      price: "Rs. 500 per ton"
    },
    {
      area: "Open storage area",
      capacity: "3000 matric tons",
      price: "Rs. 300 per ton"
    },
    {
      area: "Cold storage area",
      capacity: "1000 matric tons",
      price: "Rs. 1000 per ton"
    }
  ];

  useEffect(() => {
    // console.log(id);
    const fetchWarehouse = async () => {
      const response = await getSpecificWarehouse(id);
      // console.log(response);
      setWarehouseData(response);
    };
    fetchWarehouse();
  }, [id]);
  return (
    <div className="mt-10 flex flex-col ">
      <div className=" w-[75vw] h-max flex  flex-col relative">
        <img
          src={warehouseData?.warehouseBackground}
          alt=""
          className="w-full h-[18rem] rounded-[1rem] absolute object-cover"
        />
        <div className="w-full flex justify-center">
          <div className="px-10 py-6 rounded-[1rem] bg-white shadow-md z-10 w-[95%] mt-[13rem]">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  src={warehouseData?.warehouseImage}
                  className="w-[10rem] h-[6rem] rounded-[1rem] object-cover"
                  alt=""
                />
                <div className="w-[45%]">
                  <h3 className="font-[600] text-[20px]">
                    {warehouseData?.name}
                  </h3>
                  <p className="font-[500] text-[18px] text-brown mt-1">
                    {warehouseData?.ownership === "PRIVATE_OWNED"
                      ? "Private"
                      : "Government"}{" "}
                    owned
                  </p>
                </div>
              </div>

              <div className="bg-lightGrey shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-[0.75rem] h-[3rem] px-4 py-3 flex items-center">
                <ul className="flex gap-4 items-center">
                  <li
                    className={`font-[500] cursor-pointer transition-all ${
                      currentTab === "overview"
                        ? "bg-white shadow-md px-3 py-2 rounded-[0.5rem]"
                        : ""
                    }`}
                    onClick={() => {
                      setCurrentTab("overview");
                    }}
                  >
                    Overview
                  </li>
                  <li
                    className={`font-[500] cursor-pointer transition-all ${
                      currentTab === "store"
                        ? "bg-white shadow-md px-3 py-2 rounded-[0.5rem]"
                        : ""
                    }`}
                    onClick={() => {
                      setCurrentTab("store");
                    }}
                  >
                    Store
                  </li>
                  <li
                    className={`font-[500] cursor-pointer transition-all ${
                      currentTab === "contact"
                        ? "bg-white shadow-md px-3 py-2 rounded-[0.5rem]"
                        : ""
                    }`}
                    onClick={() => {
                      setCurrentTab("contact");
                    }}
                  >
                    Contact
                  </li>
                </ul>
              </div>
            </div>
            {currentTab === "overview" ? (
              <Overview
                warehouseDetails={{
                  details: warehouseDetails?.warehouseDetails,
                  description: warehouseData?.warehouseDetails,
                  address: warehouseData?.address,
                  pin: warehouseData?.pin,
                  manager: warehouseData?.owner?.uname,
                  contact: warehouseData?.owner?.phone,
                  email: warehouseData?.owner?.email
                }}
                facilities={warehouseData?.facilityList}
                areas={warehouseData?.storages}
              />
            ) : currentTab === "store" ? (
              <Store id={id} storages={warehouseData.storages} />
            ) : (
              <div>Contact</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Overview.propTypes = {
  warehouseDetails: PropTypes.object,
  facilities: PropTypes.array,
  areas: PropTypes.array
};

export default WarehouseView;
