import { Paper } from "@mui/material";
import propTypes from "prop-types";
import { storage_areas } from "../assets/storages";
import { useNavigate } from "react-router-dom";

const WarehouseCard = ({ image, name, address, id, storages }) => {
  // console.log(id);
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => navigate(`/farmer/warehouse/view`, { state: { id } })}
      sx={{
        width: "16rem",
        borderRadius: "1rem",
        p: 1,
        cursor: "pointer"
      }}
    >
      <div>
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
          <p className="my-1 font-[500]">Storages</p>
          <ul className="">
            {storages &&
              Object?.keys(storages)?.map((key, i) => {
                return (
                  <li
                    key={i}
                    className="flex gap-2 items-center justify-between "
                  >
                    <p>
                      {storage_areas.find((area) => area.value === key)?.name}{" "}
                      area
                    </p>
                    <p>Rs. {storages[key]}/kg</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </Paper>
  );
};

WarehouseCard.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  address: propTypes.string,
  id: propTypes.string,
  storages: propTypes.object
};

export default WarehouseCard;
