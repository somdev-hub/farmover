import React from "react";
import green_tick from "../../assets/green-tick.svg";
import PropTypes from "prop-types";
import MainInput from "../../components/MainInput";

const Overview = ({ warehouseDetails, facilities, areas }) => {
  return (
    <div className="mt-10 flex justify-between gap-10">
      <div className="">
        <h3 className="font-[600] text-[18px]">Facilities</h3>
        <div className="mt-4">
          {facilities.map((facility, index) => (
            <div className="flex gap-3 mt-3" key={index}>
              <img src={green_tick} alt="" />
              <span className="text-[14px]">{facility}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-[600] text-[18px]">Details</h3>
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
      <div className="flex-1">
        <h3 className="font-[600] text-[18px]">Plans</h3>
        <div className="mt-4">
          {areas.map((area, index) => (
            <div
              className="flex justify-between items-center mt-3 border-solid border-grey border-b-2 pb-3"
              key={index}
            >
              <div>
                <h3 className="font-[500] text-[14px]">{area.area}</h3>
                <p className="text-brown text-[14px]">{area.capacity}</p>
              </div>
              <div>
                <span className="text-brown text-[14px]">{area.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Store = () => {
  return (
    <div className="mt-10 flex gap-6">
      <div className="flex-1 flex flex-col gap-4">
        <MainInput heading="enter your name" placeholder="John Doe" />
        <MainInput
          heading="enter your adhaar number"
          placeholder="XXXX XXXX XXXX"
        />
        <MainInput
          heading="Enter your  address"
          placeholder="At/po- Sambalpur, Odisha"
        />
        <MainInput
          heading="Select storage type"
          placeholder="Select"
          type="select"
          options={["Cold storage", "Dry storage", "Open storage"]}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <MainInput
          heading="Enter items to be stored"
          placeholder="Rice, wheat, maize, etc"
        />
        <MainInput
          heading="Total weights of all items in kgs"
          placeholder="100"
        />
        <MainInput
          heading="Expected shipment arrival date"
          placeholder="select"
        />
        <MainInput
          heading="Enter duration of storage(in months)"
          placeholder="6"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <MainInput
          heading="Upload govt. issued kisan card(if any)"
          placeholder="6"
        />
        <MainInput
          heading="Mark for sale"
          placeholder="Select"
          type="select"
          options={["Yes", "No"]}
        />
      </div>
    </div>
  );
};

const WarehouseView = () => {
  const [currentTab, setCurrentTab] = React.useState("overview");
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
  return (
    <div className="mt-10 flex flex-col ">
      <div className=" w-full h-max flex  flex-col relative">
        <img
          src="https://media.istockphoto.com/id/1009023546/photo/warehouse.webp?b=1&s=170667a&w=0&k=20&c=ZZDKiitFLHbvKP_LcdRAXsobDpfzgaRk-f3uaqwADUs="
          alt=""
          className="w-[97%] h-[18rem] rounded-[1rem] absolute"
        />
        <div className="w-[97%] flex justify-center">
          <div className="px-10 py-6 rounded-[1rem] bg-white shadow-md z-10 w-[95%] mt-[13rem]">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  src="https://media.istockphoto.com/id/1009023546/photo/warehouse.webp?b=1&s=170667a&w=0&k=20&c=ZZDKiitFLHbvKP_LcdRAXsobDpfzgaRk-f3uaqwADUs="
                  className="w-[10rem] h-[6rem] rounded-[1rem]"
                  alt=""
                />
                <div className="w-[45%]">
                  <h3 className="font-[600] text-[20px]">
                    Govt. Warehouse no. 112, Majhipali Sambalpur, Odisha
                  </h3>
                  <p className="font-[500] text-[18px] text-brown mt-1">
                    Government owned warehouse
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
                warehouseDetails={warehouseDetails}
                facilities={facilities}
                areas={areas}
              />
            ) : currentTab === "store" ? (
              <Store />
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
