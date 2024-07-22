import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CompanyWarehouseCard from "../../components/CompanyWarehouseCard";
import CompanyWarehouseItemCard from "../../components/CompanyWarehouseItemCard";
import { useEffect, useState } from "react";
import {
  getCompanyWarehouseCardsViaItems,
  getWarehousesByAvailableCrops
} from "../../apis/api";
import { crops } from "../../assets/crops";

const Marketplace = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [warehousesByCrops, setWarehousesByCrops] = useState({});

  useEffect(() => {
    const fetchWarehouses = async () => {
      const response = await getCompanyWarehouseCardsViaItems();
      setWarehouses(response);
    };
    const fetchWarehousesByCrops = async () => {
      const response = await getWarehousesByAvailableCrops();
      setWarehousesByCrops(response);
    };
    fetchWarehouses();
    fetchWarehousesByCrops();
  }, []);
  return (
    <div className="mt-8">
      <h3 className="font-[600] text-[1.25rem]">Warehouses</h3>
      <div className="flex flex-wrap gap-8 mt-4">
        {warehouses?.map((warehouse, i) => {
          return (
            <CompanyWarehouseCard
              key={i}
              id={warehouse.id}
              image={warehouse.warehouseImage}
              name={warehouse.name}
              address={warehouse.address}
              availableItems={warehouse.availableItems}
            />
          );
        })}
      </div>
      <h3 className="font-[600] text-[1.25rem] mt-8">Visit by crops</h3>
      {Object.keys(warehousesByCrops).map((crop, i) => {
        return (
          <div className="mt-4" key={i}>
            <h4 className="font-[500] text-[1.125rem]">
              {crops.find((c) => c.value === crop)?.name}
            </h4>
            <div className="flex gap-8 flex-wrap mt-4">
              {warehousesByCrops[crop].map((warehouse, i) => {
                return (
                  <CompanyWarehouseItemCard
                    key={i}
                    id={warehouse.id}
                    image={warehouse.warehouseImage}
                    crop={crops.find((c) => c.value === crop)?.name}
                    cropImage={crops.find((c) => c.value === crop)?.img}
                    name={warehouse.name}
                    address={warehouse.address}
                    phone={warehouse.phone}
                    price={warehouse.price}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Marketplace;
