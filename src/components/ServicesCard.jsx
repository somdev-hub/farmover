import React from "react";
import PropTypes from "prop-types";
import green_tick from "../assets/green-tick.svg";

const ServicesCard = (props) => {
  return (
    <div className="w-[19rem] h-[25rem] rounded-[1rem] bg-white shadow-md cursor-pointer">
      <img
        src="https://images.tractorgyan.com/uploads/26907/63159f84cb1e3_combine-harvester-1.webp"
        alt=""
        className="w-[100%] h-[42%] object-cover rounded-t-[1rem]"
      />
      <div className="px-4 py-4 ">
        <div className="border-b-2 border-grey border-solid pb-4">
          <h3 className="font-[600] text-[20px]">Mr. Monoj harvester</h3>
          <p className="font-[600] text-brown text-base ">
            Owner: Mr. Monoj Parida
          </p>
        </div>
        <ul className="mt-4">
          <li className="flex gap-3 mt-3">
            <img src={green_tick} alt="" />
            <span>
              Fully operated harvester with 1 quintal producing capacity a day.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {};

export default ServicesCard;
