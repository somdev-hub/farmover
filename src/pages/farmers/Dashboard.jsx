import { FaPlus } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import ChartCard from "../../components/ChartCard";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getCropsSalesReport,
  getEachProductionData,
  getExpenseChartData,
  getOrderOverview,
  getProductionChartData,
  getRevenueChartData
} from "../../apis/api";
import { FaMinus } from "react-icons/fa6";
import { crops } from "../../assets/crops";
import { Pagination, Paper } from "@mui/material";

const Dashboard = () => {
  const [productionCard, setProductioCard] = useState([]);
  const [expenses, setExpenses] = useState({});
  const [revenue, setRevenue] = useState({});
  const [productionData, setProductionData] = useState([]);
  const [cropSalesReport, setCropSalesReport] = useState([]);
  const [orderOverview, setOrderOverview] = useState([]);
  const [overviewPage, setOverviewPage] = useState(0);

  const totalProductionOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      borderRadius: 10,
      height: 210,
      width: 330
    },
    title: {
      text: ""
    },
    legend: {
      enabled: false
    },

    xAxis: {
      categories: [productionData && Object.keys(productionData)],
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: "Production (in quintals)"
      }
    },

    series: [
      {
        name: "Production",
        data: [productionData && Object.values(productionData)] // replace this with your actual data
      }
    ]
  };

  const totalRevenueOptions = {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      borderRadius: 10,
      height: 210,
      width: 330
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
      categories: revenue && Object.keys(revenue),
      labels: {
        enabled: false
      }
    },
    series: [
      {
        name: "Revenue",
        data: revenue ? Object.values(revenue) : []
      }
    ]
  };

  const totalExpenseOptions = {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      borderRadius: 10,
      height: 210,
      width: 330
    },
    title: {
      text: ""
    },
    legend: {
      enabled: false
    },
    yAxis: {
      title: {
        text: "Expenditure (in Rs)"
      }
    },
    xAxis: {
      categories: expenses ? Object.keys(expenses) : [],
      labels: {
        enabled: false
      }
    },
    series: [
      {
        name: "Expenditure",
        data: expenses ? Object.values(expenses) : [] // replace this with your actual data
      }
    ]
  };

  useEffect(() => {
    const fetchProductionCard = async () => {
      const response = await getEachProductionData();
      console.log(response);
      setProductioCard(response);
    };
    const fetchExpensesAndRevenue = async () => {
      const responseExpense = await getExpenseChartData();
      const responseRevenue = await getRevenueChartData();
      const responseProduction = await getProductionChartData();
      setExpenses(responseExpense);
      setRevenue(responseRevenue);
      setProductionData(responseProduction);
    };
    const fetchCropSalesReport = async () => {
      const response = await getCropsSalesReport();
      setCropSalesReport(response);
    };
    const fetchOrderOverview = async () => {
      const response = await getOrderOverview(overviewPage);
      setOrderOverview(response);
    };
    fetchProductionCard();
    fetchExpensesAndRevenue();
    fetchCropSalesReport();
    fetchOrderOverview();
  }, [overviewPage]);
  return (
    <div className="mt-8 sm:w-[98%]">
      <div className="">
        <h3 className="font-[500] text-[1.125rem]">Production insights</h3>
        <div className="overflow-x-scroll flex flex-col sm:flex-row gap-4 py-4">
          <div className="w-fit min-w-full sm:min-w-[14rem] flex flex-col gap-2">
            <Link to="/farmer/add-production">
              <Paper
                sx={{
                  p: 2,
                  borderRadius: "1rem"
                }}
              >
                <div className="flex gap-4 items-center">
                  <div className="bg-darkNavy rounded-full p-4 box-border">
                    <FaPlus className="text-white  box-border" />
                  </div>
                  <p className="font-[500] text-[1.125rem]">
                    Add <br className="hidden sm:block" /> production
                  </p>
                </div>
              </Paper>
            </Link>
            <Link to="/farmer/production-history">
              <Paper
                sx={{
                  p: 2,
                  borderRadius: "1rem"
                }}
              >
                <div className="flex gap-4 items-center">
                  <div className="bg-darkNavy rounded-full p-4 box-border">
                    <FaKey className="text-white  box-border" />
                  </div>
                  <p className="font-[500] text-[1.125rem]">
                    Token based <br className="hidden sm:block" /> tracking
                  </p>
                </div>
              </Paper>
            </Link>
          </div>
          {productionCard?.map((key, index) => (
            <Paper
              sx={{
                p: 2,
                borderRadius: "1rem"
              }}
              key={index}
            >
              <div
                className=" flex flex-col min-w-[14rem] justify-between"
                key={index}
              >
                <div className="flex justify-between ">
                  <img
                    src={crops.find((crop) => crop.value === key?.cropName).img}
                    alt=""
                    className="w-[4rem] h-[4rem] rounded-[1rem] object-cover inline-block shadow-md"
                  />
                  <div className="">
                    <p className="font-bold text-[1.7rem]">
                      {key?.productionQuantity}
                    </p>
                    <p className="font-[500] text-[20px]">Quintals</p>
                  </div>
                </div>
                <div className="border-t-2 border-grey mt-3 pt-2 border-solid">
                  <p className="text-[1.125rem] font-[500] text-grey">
                    Total{" "}
                    {crops.find((crop) => crop.value === key?.cropName).name}{" "}
                    production
                  </p>
                </div>
              </div>
            </Paper>
          ))}
        </div>
      </div>
      <h3 className="font-[500] text-[1.125rem] mt-4">Production analytics</h3>

      <div className="flex flex-col sm:flex-row gap-4 mt-[9rem] w-full">
        <div className=" w-full">
          <ChartCard
            options={totalProductionOptions}
            title="Total production"
            subtitle="data since last month"
            desc={`${
              productionData &&
              Object.values(productionData)?.reduce((a, b) => a + b, 0)
            } kilograms of total productions`}
          />
        </div>
        <div className="sm:mt-0 mt-[8rem] w-full">
          <ChartCard
            options={totalRevenueOptions}
            title="Total revenue"
            subtitle="data since last year"
            desc="5% increase in total revenue"
          />
        </div>
        <div className="sm:mt-0 mt-[8rem] w-full">
          <ChartCard
            options={totalExpenseOptions}
            title="Total expenditure"
            subtitle="data since last year"
            desc="10% decrease in total expenditure"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <div className="px-6  py-4 rounded-[1rem] bg-white shadow-md sm:flex-1">
          <div className="">
            <div className="">
              <h3 className="text-[24px] font-[600]">Total sales</h3>
              <p className="text-brown text-[18px] font-[500]">
                total 30 companies purchases this month
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
                    Company
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold"
                      // paddingRight: "3rem"
                    }}
                  >
                    Purchase
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold"
                      // paddingRight: "3rem"
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold"
                      // paddingRight: "3rem"
                    }}
                  >
                    Revenue
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cropSalesReport?.map((order, index) => (
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
                      {order.companyName}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      {crops.find((c) => c.value === order.crop)?.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      {order.date}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      Rs.{order.revenue}/-
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="sm:w-[35%]">
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem"
            }}
          >
            <div className="">
              <div className="">
                <h3 className="text-[24px] font-[600]">Order overview</h3>
                <p className="text-brown text-[18px] font-[500]">
                  5% up this month
                </p>
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-4">
              {orderOverview?.content?.map((order, index) => {
                return (
                  <div key={index} className="flex gap-4 items-center">
                    {order.type === "CREDIT" ? (
                      <div className="bg-lightGreen rounded-full p-4 box-border flex items-center justify-center">
                        <FaPlus className="text-white text-[1.3rem]" />
                      </div>
                    ) : (
                      <div className=" rounded-full bg-red-400 p-4 box-border flex items-center justify-center">
                        <FaMinus className="text-white text-[1.3rem]" />
                      </div>
                    )}
                    <div className="">
                      <h3 className="font-[500] text-[18px]">
                        Rs. {order.total}/- from{" "}
                        {order?.from && order.from.length > 30
                          ? order.from.slice(0, 30) + "..."
                          : order.from}
                        .
                      </h3>
                      <p className="font-[500] text-brown">{order.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              <Pagination
                count={orderOverview?.totalPages}
                page={overviewPage + 1}
                onChange={(e, value) => setOverviewPage(value - 1)}
                className="mt-4"
              />
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
