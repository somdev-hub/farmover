import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const navigator = useNavigate();
  return (
    <Paper
      onClick={() =>
        navigator("/farmer/services/view", {
          state: { id: service.id }
        })
      }
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
        <h3 className="text-[1.125rem] font-[600]">{service.serviceName}</h3>
        <p className="text-[1rem] font-[500] text-brown">
          {service.serviceType}
        </p>
        <div className="flex justify-between mt-2 items-center">
          <p className="font-[500] text-[14px]">Owner</p>
          <p className="text-[14px]">{service.owner}</p>
        </div>
        <div className="flex justify-between mt-2 items-center">
          <p className="font-[500] text-[14px]">Price per day</p>
          <p className="text-[14px]">Rs.{service.pricePerDay}/-</p>
        </div>
      </div>
    </Paper>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object.isRequired
};

export default ServicesCard;
