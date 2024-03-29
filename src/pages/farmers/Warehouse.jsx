import React from "react";
import green_tick from "../../assets/green-tick.svg";
import { FaSort } from "react-icons/fa";
import { MdOutlineFilterAlt } from "react-icons/md";
import WarehouseCard from "../../components/WarehouseCard";

const Warehouse = () => {
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
          {Array(3)
            .fill()
            .map((_, i) => (
              <WarehouseCard key={i} />
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
          {Array(3)
            .fill()
            .map((_, i) => (
              <WarehouseCard key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
