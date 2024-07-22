import { Paper } from "@mui/material";
import propTypes from "prop-types";
import { crops } from "../assets/crops";
import { useNavigate } from "react-router-dom";

const CompanyWarehouseCard = ({ image, name, address, id, availableItems }) => {
  // console.log(id);
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => navigate(`/company/warehouse`, { state: { id } })}
      sx={{
        width: "16rem",
        borderRadius: "1rem",
        p: 1,
        cursor: "pointer"
      }}
    >
      <div>
        <div className="border-b-2 pb-2">
          <img
            src={image ? image : "https://via.placeholder.com/150"}
            alt=""
            className="w-[100%] h-[42%] object-cover rounded-[1rem]"
          />
          <div className="mt-2 p-2">
            <h3 className="text-[1.125rem] font-[600]">
              {name ? name : "Warehouse Name"}
            </h3>
            <p>{address}</p>
          </div>
        </div>
        <div className="mt-2 px-2">
          <p className="font-[500] text-[14px]">Available items</p>
          <p className="font-[500] text-[14px] mt-1 text-brown">
            {availableItems?.map((item, i) => {
              return (
                <span key={i}>
                  {crops.find((crop) => crop.value === item).name}
                  {i !== availableItems.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </Paper>
  );
};

CompanyWarehouseCard.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  address: propTypes.string,
  id: propTypes.string,
  availableItems: propTypes.array
};

export default CompanyWarehouseCard;
