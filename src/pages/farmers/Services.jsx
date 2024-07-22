import { FaSort } from "react-icons/fa";
import { MdOutlineFilterAlt } from "react-icons/md";
import green_tick from "../../assets/green-tick.svg";
import ServicesCard from "../../components/ServicesCard";
import { useEffect, useState } from "react";
import { getAvailableServices } from "../../apis/api";

const Services = () => {
  const [availableServices, setAvailableServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await getAvailableServices();
      setAvailableServices(response);
    };
    fetchServices();
  }, []);
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
          {availableServices?.map((service, i) => (
            <ServicesCard key={i} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
