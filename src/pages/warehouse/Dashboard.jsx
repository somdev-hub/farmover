import { useEffect, useState } from "react";
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
  getMonthlySalesOverview,
  getMonthStorageUsage,
  getStorageCards,
  getWarehouseRevenueFromBookingsChartData,
  getWarehouseRevenueFromSalesChartData,
  getWarehouseUsageChartData
} from "../../apis/api";
import { storage_areas } from "../../assets/storages";
import { Paper } from "@mui/material";

const Dashboard = () => {
  const [storageCards, setStorageCards] = useState([]);
  const [storageUsage, setStorageUsage] = useState({});
  const [storageRevenueFromBookings, setStorageRevenueFromBookings] = useState(
    {}
  );
  const [storageRevenueFromSales, setStorageRevenueFromSales] = useState({});
  const [monthStorageUsage, setMonthStorageUsage] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);

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
      const response = await getWarehouseRevenueFromSalesChartData();
      setStorageRevenueFromSales(response);
    };
    const fetchMonthStorageUsage = async () => {
      const response = await getMonthStorageUsage();
      setMonthStorageUsage(response);
    };
    const fetchMonthlySales = async () => {
      const response = await getMonthlySalesOverview();
      setMonthlySales(response);
    };

    fetchMonthlySales();
    fetchMonthStorageUsage();
    fetchStorageCards();
    fetchStorageUsage();
    fetchStorageRevenueFromBookings();
    fetchStorageRevenueFromSales();
  }, []);
  return (
    <div className="mt-8 w-[98%]">
      <div className="flex gap-4">
        <Link to="/warehouse/add-storage" className="flex ">
          <div className="min-w-[15rem]">
            <Paper
              sx={{
                p: 2,
                borderRadius: "1rem",
                minWidth: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div className="flex flex-col items-center justify-evenly">
                <div className="bg-darkNavy rounded-full p-4 box-border">
                  <FaPlus className="text-white text-[1.2rem] box-border" />
                </div>
                <p className="text-[1.125rem] font-[600] ">Add storage</p>
              </div>
            </Paper>
          </div>
        </Link>
        {storageCards?.map((area, index) => (
          <div className="min-w-[15rem]" key={index}>
            <Paper
              sx={{
                p: 2,
                borderRadius: "1rem",
                minWidth: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                className="flex flex-col items-start justify-between w-full"
                key={index}
              >
                <div className="flex justify-between border-b-2 border-grey border-solid pb-4 w-full">
                  <div className="w-14 h-14 rounded-[1rem] bg-white shadow-md p-2">
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
                    <p className="text-[1.25rem] font-[600] ">
                      {area.availableCapacity}/{area.capacity}
                    </p>
                    <p className="text-[1.125rem] font-[500]">TONS</p>
                  </div>
                </div>
                <p className="text-[1.125rem] text-brown font-[500] mt-3 text-left">
                  {
                    storage_areas.find(
                      (item) => item.value === area.storageType
                    ).name
                  }{" "}
                  Storage
                </p>
              </div>
            </Paper>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-[10rem] w-full">
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
        <div className="flex-1 h-full">
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem",
              minWidth: "100%",
              height: "100%"
            }}
          >
            <div className="">
              <div className="">
                <div className="">
                  <h3 className="text-[1.25rem] font-[600]">
                    Total storage usage
                  </h3>
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
                          fontWeight: "bold"
                          // paddingRight: "3rem"
                        }}
                      >
                        Serial No
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold"
                          // paddingRight: "3rem"
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold"
                          // paddingRight: "3rem"
                        }}
                      >
                        Storage used
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold"
                          // paddingRight: "3rem"
                        }}
                      >
                        Quantity
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold"
                          // paddingRight: "3rem"
                        }}
                      >
                        Duration
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {monthStorageUsage?.map((item, index) => (
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
                          {item.clientName}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: "16px"
                          }}
                        >
                          {
                            storage_areas?.find(
                              (item1) => item1?.value === item?.storage
                            ).name
                          }{" "}
                          Storage
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: "16px"
                          }}
                        >
                          {item.totalStorageUsage}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: "16px"
                          }}
                        >
                          {item.duration} month(s)
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Paper>
        </div>
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem"
          }}
        >
          <div className="">
            <div className="">
              <div className="">
                <h3 className="text-[1.25rem] font-[600]">
                  Monthly profit overview
                </h3>
                <p className="text-brown text-[18px] font-[500]">
                  5% up this month
                </p>
              </div>
            </div>
            <div className="mt-7">
              {monthlySales?.map((item, index) => {
                return (
                  <div className="flex gap-4" key={index}>
                    <div className="bg-lightGreen rounded-full p-4 box-border ">
                      <FaPlus className="text-white text-[1.3rem]" />
                    </div>
                    <div className="">
                      <h3 className="font-[500] text-[18px]">
                        Rs. {item.amount}/- from {item.company}
                      </h3>
                      <p className="font-[500] text-brown">{item.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
