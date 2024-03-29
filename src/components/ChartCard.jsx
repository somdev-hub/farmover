import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartCard = ({ options, title, subtitle, desc }) => {
  return (
    <div className="px-6 w-[25rem] py-4 rounded-[1rem] bg-white shadow-md relative h-[17rem] flex flex-col justify-end items-center">
      <div className="absolute  w-[23rem] bg-lightGreen rounded-[1rem] pt-2 h-[15rem] top-[-7rem]">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className="w-full">
        <div className="">
          <h3 className="font-[600] text-[20px] text-left">{title}</h3>
          <p className="font-[500] text-brown text-left">{subtitle}</p>
        </div>
        <div className="border-t-2 border-grey mt-4 pt-4">
          <p className="text-grey font-[500] text-left">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
