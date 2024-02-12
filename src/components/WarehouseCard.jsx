import React from "react";
import PropTypes from "prop-types";
import green_tick from "../assets/green-tick.svg";
import { Link } from "react-router-dom";

const WarehouseCard = (props) => {
  return (
    <Link to={"/warehouse/view"}>
      <div className="w-[18rem] h-[25rem] rounded-[1rem] bg-white shadow-md cursor-pointer">
        <img
          src="https://media.istockphoto.com/id/1009023546/photo/warehouse.webp?b=1&s=170667a&w=0&k=20&c=ZZDKiitFLHbvKP_LcdRAXsobDpfzgaRk-f3uaqwADUs="
          alt=""
          className="w-[100%] h-[42%] object-cover rounded-t-[1rem]"
        />
        <div className="px-4 py-4">
          <h3 className="text-[1.125rem] font-[600]">
            Govt. warehouse no.112, Majhipali
          </h3>
          <ul className="mt-4">
            <li className="flex gap-3 mt-3">
              <img src={green_tick} alt="" />
              <span>1000 matric tons of storage</span>
            </li>
            <li className="flex gap-3 mt-3">
              <img src={green_tick} alt="" />
              <span>Cold storage facility</span>
            </li>
            <li className="flex gap-3 mt-3">
              <img src={green_tick} alt="" />
              <span>High standard security</span>
            </li>
            <li className="flex gap-3 mt-3">
              <img src={green_tick} alt="" />
              <span>Insurance cover</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

WarehouseCard.propTypes = {};

export default WarehouseCard;
