import { FaSort } from "react-icons/fa";
import { MdOutlineFilterAlt } from "react-icons/md";
import green_tick from "../../assets/green-tick.svg";
import ServicesCard from "../../components/ServicesCard";

const Services = () => {
  return (
    <div className="mt-8">
      <div className="">
        <div className="flex justify-between">
          <h3 className="font-[500] text-[22px]">Crop services</h3>
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
        <div className="flex gap-4 mt-6">
          {Array(3)
            .fill()
            .map((_, i) => (
              <ServicesCard key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
