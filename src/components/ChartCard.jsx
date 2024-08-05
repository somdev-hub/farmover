import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";

const ChartCard = ({ options, title, subtitle, desc }) => {
  return (
    <div className="px-6 flex-1 py-4 rounded-[1rem] bg-white shadow-md relative h-[17rem] flex flex-col justify-end items-center">
      <div className="absolute  w-[90%] bg-lightGreen rounded-[1rem] pt-2 h-[15rem] top-[-7rem] flex items-center justify-center">
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

ChartCard.propTypes = {
  options: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  desc: PropTypes.string
};

export default ChartCard;
