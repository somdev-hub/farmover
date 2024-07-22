import { Paper } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CompanyWarehouseItemCard = ({
  id,
  image,
  cropImage,
  name,
  address,
  crop,
  price,
  phone
}) => {
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => navigate(`/company/warehouse`, { state: { id } })}
      sx={{
        p: 1,
        borderRadius: "1rem",
        cursor: "pointer",
        width: "16rem"
      }}
    >
      <div className="">
        <div className="relative">
          <img
            src={image}
            alt=""
            className="w-[100%] h-[42%] object-cover rounded-[1rem]"
          />
          <div className="shadow-lg w-[4rem] h-[4rem] rounded-lg absolute bottom-[-20%] left-6">
            <img src={cropImage} alt="" className="w-full h-full rounded-lg" />
          </div>
        </div>
        <div className="mt-9 px-2">
          <h3 className="text-[1.125rem] font-[600]">
            {name.length > 20 ? name.substring(0, 20) + "..." : name}
          </h3>
          <div className="flex justify-between mt-1 font-[500]">
            <p>{crop}</p>
            <p>Rs. {price}/-</p>
          </div>
          <div className="mt-1">
            <p className="italic">{address}</p>
            <p>Phone: {phone}</p>
          </div>
        </div>
      </div>
    </Paper>
  );
};

CompanyWarehouseItemCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  cropImage: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  crop: PropTypes.string,
  availableItems: PropTypes.number,
  price: PropTypes.number,
  phone: PropTypes.string
};

export default CompanyWarehouseItemCard;
