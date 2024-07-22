import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServicesByOwner } from "../../apis/api";

const MyServices = () => {
  const navigator = useNavigate();
  const [ownerServices, setOwnerServices] = useState([]);

  useEffect(() => {
    const fetchOwnerServices = async () => {
      const response = await getServicesByOwner();
      setOwnerServices(response);
    };
    fetchOwnerServices();
  }, []);
  return (
    <div className="mt-8">
      <h3 className="font-[500] text-[1.125rem]">List of your services</h3>
      <div className="mt-5 flex gap-4">
        {ownerServices?.map((service, index) => {
          return (
            <Paper
              onClick={() =>
                navigator("/service/service-details", {
                  state: { id: service.id }
                })
              }
              key={index}
              sx={{
                p: 1,
                borderRadius: "1rem",
                width: "15rem",
                cursor: "pointer"
                //   height:
              }}
            >
              <img
                src={service.serviceImage}
                alt=""
                className="object-cover w-[100%] h-[50%] rounded-[1rem]"
              />
              <div className="mt-3 px-2">
                <h3 className="text-[1.125rem] font-[600]">
                  {service.serviceName}
                </h3>
                <p className="text-[1rem] font-[500] text-brown">
                  {service.serviceType}
                </p>
                <div className="flex justify-between mt-2 items-center">
                  <p className="font-[500] text-[14px]">Status</p>
                  <div className="flex gap-2 items-center">
                    <span className="bg-green-300 w-2 h-2 rounded-full text-[14px]"></span>
                    {service.status}
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <p className="font-[500] text-[14px]">Last operated</p>
                  <p className="text-[14px]">
                    {service.lastOperated ? service.lastOperated : "N/A"}
                  </p>
                </div>
              </div>
            </Paper>
          );
        })}
      </div>
      <h3 className="font-[500] text-[1.125rem] mt-8">
        List of your services under operation
      </h3>
      <div className="mt-5 flex gap-4">
        {ownerServices
          ?.filter((service) => service.status === "OPERATING")
          ?.map((service, index) => {
            return (
              <Paper
                onClick={() =>
                  navigator("/service/service-details", {
                    state: { id: service.id }
                  })
                }
                key={index}
                sx={{
                  p: 1,
                  borderRadius: "1rem",
                  width: "15rem",
                  cursor: "pointer"
                  //   height:
                }}
              >
                <img
                  src={service.serviceImage}
                  alt=""
                  className="object-cover w-[100%] h-[50%] rounded-[1rem]"
                />
                <div className="mt-3 px-2">
                  <h3 className="text-[1.125rem] font-[600]">
                    {service.serviceName}
                  </h3>
                  <p className="text-[1rem] font-[500] text-brown">
                    {service.serviceType}
                  </p>
                  <div className="flex justify-between mt-2 items-center">
                    <p className="font-[500] text-[14px]">Status</p>
                    <div className="flex gap-2 items-center">
                      <span className="bg-green-300 w-2 h-2 rounded-full text-[14px]"></span>
                      {service.status}
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 items-center">
                    <p className="font-[500] text-[14px]">Last operated</p>
                    <p className="text-[14px]">
                      {service.lastOperated ? service.lastOperated : "N/A"}
                    </p>
                  </div>
                </div>
              </Paper>
            );
          })}
      </div>
      <h3 className="font-[500] text-[1.125rem] mt-8">
        List of your services under repair
      </h3>
      <div className="mt-5 flex gap-4">
      {ownerServices?.filter(service => service.status === "REPAIRING")?.map((service, index) => {
          return (
            <Paper
              onClick={() =>
                navigator("/service/service-details", {
                  state: { id: service.id }
                })
              }
              key={index}
              sx={{
                p: 1,
                borderRadius: "1rem",
                width: "15rem",
                cursor: "pointer"
                //   height:
              }}
            >
              <img
                src={service.serviceImage}
                alt=""
                className="object-cover w-[100%] h-[50%] rounded-[1rem]"
              />
              <div className="mt-3 px-2">
                <h3 className="text-[1.125rem] font-[600]">
                  {service.serviceName}
                </h3>
                <p className="text-[1rem] font-[500] text-brown">
                  {service.serviceType}
                </p>
                <div className="flex justify-between mt-2 items-center">
                  <p className="font-[500] text-[14px]">Status</p>
                  <div className="flex gap-2 items-center">
                    <span className="bg-green-300 w-2 h-2 rounded-full text-[14px]"></span>
                    {service.status}
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <p className="font-[500] text-[14px]">Last operated</p>
                  <p className="text-[14px]">
                    {service.lastOperated ? service.lastOperated : "N/A"}
                  </p>
                </div>
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
};

export default MyServices;
