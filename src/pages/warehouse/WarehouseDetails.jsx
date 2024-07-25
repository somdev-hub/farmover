import { Paper } from "@mui/material";
import MainInput from "../../components/MainInput";
import { MdOutlineFilterAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { getBookings, getWarehouseSalesOverview } from "../../apis/api";

import DataTable from "../../components/DataTable";

const WarehouseDetails = () => {
  const [contracts, setContracts] = useState([]);
  const [salesOverview, setSalesOverview] = useState([]);

  const salesOverviewColumns = [
    "SERIAL NO",
    "COMPANY",
    "SALE DATE",
    "CROP",
    "QUANTITY",
    "PRICE",
    "COMMISSION"
  ];

  const salesOverviewDataKeys = [
    "companyName",
    "date",
    "crop",
    "quantity",
    "price",
    "commission"
  ];

  const contractColumns = [
    "SERIAL NO",
    "STORAGE",
    "BOOKING DATE",
    "DURATION",
    "WEIGHT",
    "PRICE",
    "EMAIL",
    "INCOME"
  ];

  const contractDataKeys = [
    "storageType",
    "bookingDate",
    "bookingDuration",
    "bookedWeight",
    "itemPrice",
    "clientEmail",
    "bookedPrice"
  ];

  useEffect(() => {
    const fetchContracts = async () => {
      const response = await getBookings();
      setContracts(response);
    };
    const fetchSalesOverview = async () => {
      const response = await getWarehouseSalesOverview();
      setSalesOverview(response);
    };
    fetchContracts();
    fetchSalesOverview();
  }, []);
  return (
    <div className="mt-8">
      <div className="">
        <Paper
          sx={{
            p: 3,
            borderRadius: "1rem"
          }}
        >
          <div className="border-b-[1px] border-solid border-grey pb-3">
            <h3 className="font-[600] text-[1.125rem]">
              Search your contracts
            </h3>
            <p className="font-[500] text-brown">
              Enter your id and filter out your contracts
            </p>
          </div>
          <div className="flex justify-between my-4 w-full">
            <div className="flex-1">
              <div className="w-[80%]">
                <MainInput
                  heading="Enter your id"
                  placeholder="Search by id"
                  className="mt-4"
                  type="text"
                  font="14px"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <div className="shadow-md bg-white px-4 py-2  flex items-center font-[500] gap-1 rounded-lg">
                <MdOutlineFilterAlt className="text-[20px]" /> Filter
              </div>
            </div>
          </div>
          <DataTable
            columns={contractColumns}
            data={contracts}
            dataKeys={contractDataKeys}
          />
        </Paper>
      </div>
      <div className="mt-6">
        <Paper
          sx={{
            p: 3,
            borderRadius: "1rem"
          }}
        >
          <div className="border-b-[1px] border-solid border-grey pb-3">
            <h3 className="font-[600] text-[1.125rem]">Sales overview</h3>
            <p className="font-[500] text-brown">
              Enter your id and filter out your sales
            </p>
          </div>
          <div className="flex justify-between my-4 w-full">
            <div className="flex-1">
              <div className="w-[80%]">
                <MainInput
                  heading="Enter your id"
                  placeholder="Search by id"
                  className="mt-4"
                  type="text"
                  font="14px"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <div className="shadow-md bg-white px-4 py-2  flex items-center font-[500] gap-1 rounded-lg">
                <MdOutlineFilterAlt className="text-[20px]" /> Filter
              </div>
            </div>
          </div>
          <DataTable
            columns={salesOverviewColumns}
            data={salesOverview}
            dataKeys={salesOverviewDataKeys}
          />
        </Paper>
      </div>
    </div>
  );
};

export default WarehouseDetails;
