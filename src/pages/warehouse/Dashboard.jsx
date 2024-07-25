import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import ChartCard from "../../components/ChartCard";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import {
  getStorageCards,
  getWarehouseRevenueFromBookingsChartData,
  getWarehouseUsageChartData
} from "../../apis/api";
import { storage_areas } from "../../assets/storages";

const Dashboard = () => {
  const [storageCards, setStorageCards] = useState([]);
  const [storageUsage, setStorageUsage] = useState({});
  const [storageRevenueFromBookings, setStorageRevenueFromBookings] = useState(
    {}
  );
  const [storageRevenueFromSales, setStorageRevenueFromSales] = useState({});

  const totalProductionOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      borderRadius: 10,
      height: 230,
      width: 350
    },
    title: {
      text: ""
    },
    legend: {
      enabled: false
    },

    xAxis: {
      categories: storageUsage && Object.keys(storageUsage), // replace this with your actual data
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: "Warehouse usage (in quintals)"
      }
    },

    series: [
      {
        name: "Storage usage",
        data: storageUsage && Object.values(storageUsage) // replace this with your actual data
      }
    ]
  };
  const totalRevenueOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      borderRadius: 10,
      height: 230,
      width: 350
    },
    title: {
      text: ""
    },
    legend: {
      enabled: false
    },
    yAxis: {
      title: {
        text: "Revenue (in Rs)"
      }
    },
    xAxis: {
      categories:
        storageRevenueFromBookings && Object.keys(storageRevenueFromBookings), // replace this with your actual data
      labels: {
        enabled: false
      }
    },
    series: [
      {
        name: "Revenue",
        data:
          storageRevenueFromBookings &&
          Object.values(storageRevenueFromBookings) // replace this with your actual data
      }
    ]
  };
  const totalRevenueFromSalesOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      borderRadius: 10,
      height: 230,
      width: 350
    },
    title: {
      text: ""
    },
    legend: {
      enabled: false
    },
    yAxis: {
      title: {
        text: "Revenue (in Rs)"
      }
    },
    xAxis: {
      categories:
        storageRevenueFromSales && Object.keys(storageRevenueFromSales), // replace this with your actual data
      labels: {
        enabled: false
      }
    },
    series: [
      {
        name: "Revenue",
        data: storageRevenueFromSales && Object.values(storageRevenueFromSales) // replace this with your actual data
      }
    ]
  };
  const storage_usage = [
    {
      name: "John Doe",
      storage_used: "Cold storage",
      quantity: "200",
      duration: "1 month"
    },
    {
      name: "John Doe",
      storage_used: "Cold storage",
      quantity: "200",
      duration: "1 month"
    },
    {
      name: "John Doe",
      storage_used: "Cold storage",
      quantity: "200",
      duration: "1 month"
    },
    {
      name: "John Doe",
      storage_used: "Cold storage",
      quantity: "200",
      duration: "1 month"
    }
  ];

  useEffect(() => {
    const fetchStorageCards = async () => {
      const response = await getStorageCards();
      setStorageCards(response);
    };
    const fetchStorageUsage = async () => {
      const response = await getWarehouseUsageChartData();
      setStorageUsage(response);
    };
    const fetchStorageRevenueFromBookings = async () => {
      const response = await getWarehouseRevenueFromBookingsChartData();
      setStorageRevenueFromBookings(response);
    };
    const fetchStorageRevenueFromSales = async () => {
      const response = await getWarehouseRevenueFromBookingsChartData();
      setStorageRevenueFromSales(response);
    };

    fetchStorageCards();
    fetchStorageUsage();
    fetchStorageRevenueFromBookings();
    fetchStorageRevenueFromSales();
  }, []);
  return (
    <div className="mt-8 w-[98%]">
      <div className="flex gap-4">
        <Link to="/warehouse/add-storage" className="flex ">
          <div className="w-[17rem] px-6 py-4 rounded-[1rem] bg-white shadow-md flex flex-col items-center justify-evenly">
            <div className="bg-darkNavy rounded-full p-4 box-border">
              <FaPlus className="text-white text-[1.2rem] box-border" />
            </div>
            <p className="text-[1.125rem] font-[600] ">Add storage</p>
          </div>
        </Link>
        {storageCards?.map((area, index) => (
          <div
            className="w-[17rem] px-6 py-4 rounded-[1rem] bg-white shadow-md flex flex-col items-start justify-center"
            key={index}
          >
            <div className="flex justify-between border-b-2 border-grey border-solid pb-6 w-full">
              <div className="w-16 h-16 rounded-[1rem] bg-white shadow-md p-2">
                <img
                  src={
                    storage_areas.find(
                      (item) => item.value === area.storageType
                    ).img
                  }
                  alt=""
                  className="object-cover w-full h-[full] rounded-[1rem]"
                />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[24px] font-[600] ">
                  {area.availableCapacity}/{area.capacity}
                </p>
                <p className="text-[20px] font-[500]">TONS</p>
              </div>
            </div>
            <p className="text-[1.125rem] text-brown font-[500] mt-3 text-left">
              {
                storage_areas.find((item) => item.value === area.storageType)
                  .name
              }
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-[10rem]">
        <ChartCard
          options={totalProductionOptions}
          title="Warehouse usage"
          subtitle="data since last month"
          desc="120,000 kilograms of new goods added"
        />
        <ChartCard
          options={totalRevenueOptions}
          title="Total revenue from bookings"
          subtitle="data since last month"
          desc="5% increase in total revenue"
        />
        <ChartCard
          options={totalRevenueFromSalesOptions}
          title="Total revenue from sales"
          subtitle="data since last month"
          desc="10% decrease in total expenditure"
        />
      </div>
      <div className="flex gap-4 mt-8">
        <div className="px-6  py-4 rounded-[1rem] bg-white shadow-md">
          <div className="">
            <div className="">
              <h3 className="text-[24px] font-[600]">Total storage usage</h3>
              <p className="text-brown text-[18px] font-[500]">
                total 30 new vendors added this month
              </p>
            </div>
          </div>
          <TableContainer className="mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      paddingRight: "3rem"
                    }}
                  >
                    Serial No
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      paddingRight: "3rem"
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      paddingRight: "3rem"
                    }}
                  >
                    Storage used
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      paddingRight: "3rem"
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      paddingRight: "3rem"
                    }}
                  >
                    Duration
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {storage_usage.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      {item.storage_used}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      {item.quantity}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      {item.duration}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="px-6 py-4 rounded-[1rem] bg-white shadow-md">
          <div className="">
            <div className="">
              <h3 className="text-[24px] font-[600]">Order overview</h3>
              <p className="text-brown text-[18px] font-[500]">
                5% up this month
              </p>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex gap-4">
              <div className="bg-lightGreen rounded-full p-4 box-border ">
                <FaPlus className="text-white text-[1.3rem]" />
              </div>
              <div className="">
                <h3 className="font-[500] text-[18px]">
                  Rs. 12000/- from Tata plant inc.
                </h3>
                <p className="font-[500] text-brown">SUN 12TH JAN 2024</p>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <div className="bg-lightGreen rounded-full p-4 box-border ">
                <FaPlus className="text-white text-[1.3rem]" />
              </div>
              <div className="">
                <h3 className="font-[500] text-[18px]">
                  Rs. 12000/- from Tata plant inc.
                </h3>
                <p className="font-[500] text-brown">SUN 12TH JAN 2024</p>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <div className="bg-lightGreen rounded-full p-4 box-border ">
                <FaPlus className="text-white text-[1.3rem]" />
              </div>
              <div className="">
                <h3 className="font-[500] text-[18px]">
                  Rs. 12000/- from Tata plant inc.
                </h3>
                <p className="font-[500] text-brown">SUN 12TH JAN 2024</p>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <div className="bg-lightGreen rounded-full p-4 box-border ">
                <FaPlus className="text-white text-[1.3rem]" />
              </div>
              <div className="">
                <h3 className="font-[500] text-[18px]">
                  Rs. 12000/- from Tata plant inc.
                </h3>
                <p className="font-[500] text-brown">SUN 12TH JAN 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
