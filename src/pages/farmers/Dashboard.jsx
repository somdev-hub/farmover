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
  getEachProductionData,
  getExpenseChartData,
  getProductionChartData,
  getRevenueChartData
} from "../../apis/api";

const Dashboard = () => {
  const [productionCard, setProductioCard] = useState([]);
  const [expenses, setExpenses] = useState({});
  const [revenue, setRevenue] = useState({});
  const [productionData, setProductionData] = useState([]);

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
        data: [Object.values(productionData)] // replace this with your actual data
      }
    ]
  };

  const totalRevenueOptions = {
    chart: {
      type: "line",
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
      categories: [revenue && Object.keys(revenue)],
      labels: {
        enabled: false
      }
    },
    series: [
      {
        name: "Revenue",
        data: [Object.values(revenue)] // replace this with your actual data
      }
    ]
  };

  const totalExpenseOptions = {
    chart: {
      type: "line",
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
        text: "Expenditure (in Rs)"
      }
    },
    xAxis: {
      categories: [expenses && Object.keys(expenses)],
      labels: {
        enabled: false
      }
    },
    series: [
      {
        name: "Expenditure",
        data: [Object.values(expenses)] // replace this with your actual data
      }
    ]
  };

  const orders = [
    {
      company: "Company 1",
      purchase: "Rice",
      warehouse: "Warehouse 1",
      revenue: "1000"
    },
    {
      company: "Company 2",
      purchase: "Rice",
      warehouse: "Warehouse 1",
      revenue: "1000"
    },
    {
      company: "Company 3",
      purchase: "Rice",
      warehouse: "Warehouse 1",
      revenue: "1000"
    },
    {
      company: "Company 4",
      purchase: "Rice",
      warehouse: "Warehouse 1",
      revenue: "1000"
    },
    {
      company: "Company 5",
      purchase: "Rice",
      warehouse: "Warehouse 1",
      revenue: "1000"
    }
  ];
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
    fetchProductionCard();
    fetchExpensesAndRevenue();
  }, []);
  return (
    <div className="mt-8">
      <div className="">
        <div className="overflow-x-scroll flex gap-4 py-4">
          <div className="w-fit min-w-[16rem]">
            <Link to="/farmer/add-production">
              <div className="px-8 py-4 rounded-[1rem] bg-white shadow-md  flex gap-4">
                <div className="bg-darkNavy rounded-full p-4 box-border">
                  <FaPlus className="text-white text-[1.2rem] box-border" />
                </div>
                <p className="font-[500] text-[1.125rem]">
                  Add <br /> production
                </p>
              </div>
            </Link>
            <Link to="/farmer/production-history">
              <div className="px-8 py-4 rounded-[1rem] bg-white shadow-md  flex gap-4 mt-4">
                <div className="bg-darkNavy rounded-full p-4 box-border">
                  <FaKey className="text-white text-[1.2rem] box-border" />
                </div>
                <p className="font-[500] text-[1.125rem]">
                  Token based <br /> tracking
                </p>
              </div>
            </Link>
          </div>
          {productionCard?.map((key, index) => (
            <div
              className="px-6 w-[17rem] py-4 rounded-[1rem] bg-white shadow-md flex flex-col min-w-[18rem]"
              key={index}
            >
              <div className="flex justify-between ">
                <img
                  src="https://media.istockphoto.com/id/522691403/photo/close-up-peddy-rice-in-a-field.jpg?s=612x612&w=0&k=20&c=OV5Srt6zPWG8J6QpfQk6pTV242GGlVY5l-VoGdU9uyc="
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
              <div className="border-t-2 border-grey mt-8 pt-4 border-solid">
                <p className="text-[18px] text-grey">
                  {key?.cropName} production
                </p>
              </div>
            </div>
          ))}
          {/* <div className="px-6 w-[17rem] py-4 rounded-[1rem] bg-white shadow-md flex flex-col ">
          <div className="flex justify-between ">
            <img
              src="https://media.istockphoto.com/id/522691403/photo/close-up-peddy-rice-in-a-field.jpg?s=612x612&w=0&k=20&c=OV5Srt6zPWG8J6QpfQk6pTV242GGlVY5l-VoGdU9uyc="
              alt=""
              className="w-[4rem] h-[4rem] rounded-[1rem] object-cover inline-block shadow-md"
            />
            <div className="">
              <p className="font-bold text-[1.7rem]">100</p>
              <p className="font-[500] text-[20px]">Quintals</p>
            </div>
          </div>
          <div className="border-t-2 border-grey mt-8 pt-4 border-solid">
            <p className="text-[18px] text-grey">Total paddy production</p>
          </div>
        </div>
        <div className="px-6 w-[17rem] py-4 rounded-[1rem] bg-white shadow-md flex flex-col ">
          <div className="flex justify-between ">
            <img
              src="https://media.istockphoto.com/id/522691403/photo/close-up-peddy-rice-in-a-field.jpg?s=612x612&w=0&k=20&c=OV5Srt6zPWG8J6QpfQk6pTV242GGlVY5l-VoGdU9uyc="
              alt=""
              className="w-[4rem] h-[4rem] rounded-[1rem] object-cover inline-block shadow-md"
            />
            <div className="">
              <p className="font-bold text-[1.7rem]">100</p>
              <p className="font-[500] text-[20px]">Quintals</p>
            </div>
          </div>
          <div className="border-t-2 border-grey mt-8 pt-4 border-solid">
            <p className="text-[18px] text-grey">Total paddy production</p>
          </div>
        </div> */}
        </div>
      </div>
      <div className="flex gap-4 mt-[10rem]">
        <ChartCard
          options={totalProductionOptions}
          title="Total production"
          subtitle="data since last month"
          desc={`${Object.values(productionData)?.reduce(
            (a, b) => a + b,
            0
          )} kilograms of total productions`}
        />
        <ChartCard
          options={totalRevenueOptions}
          title="Total revenue"
          subtitle="data since last year"
          desc="5% increase in total revenue"
        />
        <ChartCard
          options={totalExpenseOptions}
          title="Total expenditure"
          subtitle="data since last year"
          desc="10% decrease in total expenditure"
        />
      </div>
      <div className="flex gap-4 mt-8">
        <div className="px-6  py-4 rounded-[1rem] bg-white shadow-md">
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
                    Company
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      paddingRight: "3rem"
                    }}
                  >
                    Purchase
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      paddingRight: "3rem"
                    }}
                  >
                    Warehouse
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      paddingRight: "3rem"
                    }}
                  >
                    Revenue
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, index) => (
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
                      {order.company}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      {order.purchase}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "16px"
                      }}
                    >
                      {order.warehouse}
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
