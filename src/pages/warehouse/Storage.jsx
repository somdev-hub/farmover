import { Paper } from "@mui/material";
import { storage_areas } from "../../assets/storages";
import { useEffect, useState } from "react";
import { getWarehouseByOwner } from "../../apis/api";
import green_tick from "../../assets/green-tick.svg";
import { Link } from "react-router-dom";

const Storage = () => {
  const [warehouseDetails, setWarehouseDetails] = useState({});

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      const response = await getWarehouseByOwner();
      setWarehouseDetails(response);
    };
    fetchWarehouseDetails();
  }, []);
  return (
    <div className="flex gap-4 mt-8 w-[95%]">
      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem",
          flex: 1
        }}
      >
        <div className="relative pb-10">
          <div className="relative">
            <div className="">
              <img
                src={warehouseDetails?.warehouseBackground}
                alt=""
                className="w-full h-[12rem] object-cover rounded-[1rem]"
              />
            </div>
            <div className="bg-white rounded-md shadow-md p-1 w-[10rem] h-[6rem] absolute left-[1.5rem] bottom-[-25%]">
              <img
                src={warehouseDetails?.warehouseImage}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="mt-[3.7rem] ml-2">
            <h3 className="font-[600] text-[1.25rem]">
              {warehouseDetails?.name}
            </h3>
            <p className="mt-1 font-[500] text-brown">
              {warehouseDetails?.ownership === "PRIVATE_OWNED"
                ? "Private"
                : "Public"}{" "}
              Warehouse
            </p>
            <p className="mt-1 font-[500] text-brown">
              Address: {warehouseDetails?.address}
            </p>

            <div className="mt-4">
              <p className="font-[500]">Details</p>
              <p className="mt-2 text-[14px]">
                {warehouseDetails?.warehouseDetails}
              </p>
            </div>

            <div className="mt-4">
              <p className="font-[500]">Facilities</p>
              <p className="mt-2 text-[14px]">
                {warehouseDetails?.facilityList?.map((facility, index) => {
                  return (
                    <div className="flex gap-2" key={index}>
                      <img src={green_tick} alt="" />
                      <p className="font-[500] text-[14px] text-brown">
                        {facility}
                      </p>
                    </div>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </Paper>
      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem",
          flex: 1
        }}
      >
        <h3 className="font-[600] text-[1.25rem] ml-4">Storages</h3>
        <div className="mt-4 ml-2 flex flex-col gap-6">
          {warehouseDetails?.storages?.map((storage, index) => {
            return (
              <div
                className="border-b-2 border-solid border-brown pb-4"
                key={index}
              >
                <div className="flex gap-4 items-center">
                  <div className="bg-white rounded-[1rem] shadow-lg p-2 w-[4rem] h-[4rem]">
                    <img
                      src={
                        storage_areas.find(
                          (area) => area.value === storage.storageType
                        ).img
                      }
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3 className="font-[600] text-[1.125rem]">
                      {
                        storage_areas.find(
                          (area) => area.value === storage.storageType
                        ).name
                      }{" "}
                      Storage
                    </h3>
                    <div className="flex justify-between">
                      <p>Capacity: {storage.capacity.toFixed(2)} tons</p>
                      <p className="ml-6">Area: {storage.areaNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between text-[14px] px-2">
                  <div className="">
                    <div className="flex gap-4">
                      <p className="italic">Price per Kg.</p>
                      <p>Rs. {storage.pricePerKg.toFixed(2)}/-</p>
                    </div>
                    <div className="flex gap-4">
                      <p className="italic">Avg Temperature.</p>
                      <p>{storage.temperature.toFixed(2)}° Celcius</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-4">
                      <p className="italic">Available cap.</p>
                      <p>{storage.availableCapacity.toFixed(2)} Tons</p>
                    </div>
                    <div className="flex gap-4">
                      <p className="italic">Occupied cap.</p>
                      <p>
                        {(storage.capacity - storage.availableCapacity).toFixed(
                          2
                        )}{" "}
                        Tons
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Link to="/warehouse/add-storage">
            <button
              className="mt-4 rounded-[1rem] bg-darkNavy w-full py-3 text-white flex gap-2 items-center justify-center"
              // onClick={handleSubmit}
            >
              Add Storage areas
              {/* <CgPushRight className="text-[20px]" /> */}
            </button>
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default Storage;
