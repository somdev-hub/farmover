import React, { useEffect, useState } from "react";
import green_tick from "../../assets/green-tick.svg";
import { FaSort } from "react-icons/fa";
import { MdOutlineFilterAlt } from "react-icons/md";
import WarehouseCard from "../../components/WarehouseCard";
import { getWarehouses } from "../../apis/api";

const Warehouse = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await getWarehouses();

      console.log(response);
      setWarehouses(response);
    };
    fetchWarehouses();
  }, []);
  return (
    <div className="mt-8">
      <div className="">
        <div className="flex justify-between">
          <h3 className="font-[500] text-[22px]">Government owned</h3>
          <div className="flex gap-4">
            <div className="flex gap-3 bg-white shadow-md rounded-lg items-center justify-center px-4">
              <FaSort className="text-[20px]" />{" "}
              <p className="text-[18px]">Sort</p>
            </div>
            <div className="flex gap-3 bg-white shadow-md rounded-lg items-center justify-center px-4">
              <MdOutlineFilterAlt className="text-[20px]" />{" "}
              <p className="text-[18px]">Filter</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-6 ">
          {warehouses
            ?.filter((item) => item.ownership === "GOVERNMENT_OWNED")
            .map((item, i) => (
              <WarehouseCard
                key={i}
                id={item.id}
                image={item.warehouseImage}
                name={item.name}
                address={item.address}
                storages={item.storages}
              />
            ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between">
          <h3 className="font-[500] text-[22px]">Privately owned</h3>
          <div className="flex gap-4">
            <div className="flex gap-3 bg-white shadow-md rounded-lg items-center justify-center px-4">
              <FaSort className="text-[20px]" />{" "}
              <p className="text-[18px]">Sort</p>
            </div>
            <div className="flex gap-3 bg-white shadow-md rounded-lg items-center justify-center px-4">
              <MdOutlineFilterAlt className="text-[20px]" />{" "}
              <p className="text-[18px]">Filter</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-6 ">
          {warehouses
            ?.filter((item) => item.ownership === "PRIVATE_OWNED")
            .map((item, i) => (
              <WarehouseCard
                key={i}
                id={item.id}
                image={item.warehouseImage}
                name={item.name}
                address={item.address}
                storages={item.storages}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
