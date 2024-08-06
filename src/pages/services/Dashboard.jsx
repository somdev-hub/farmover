import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import ChartCard from "../../components/ChartCard";
import {
  getDashboardServices,
  getExpenseChartData,
  getRevenueChartData
} from "../../apis/api";
import { Paper } from "@mui/material";

const Dashboard = () => {
  const [dashboardServices, setDashboardServices] = useState([]);

  const [expenses, setExpenses] = useState({});
  const [revenue, setRevenue] = useState({});

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
      categories: [
        "Product 1",
        "Product 2",
        "Product 3",
        "Product 4",
        "Product 5"
      ],
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
        data: [100, 200, 150, 300, 250] // replace this with your actual data
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
      categories: revenue && Object.keys(revenue),
      labels: {
        enabled: false
      }
    },
    series: [
      {
        name: "Revenue",
        data: revenue && Object.values(revenue)
      }
    ]
  };
  const totalExpenditureOptions = {
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
        text: "expenses (in Rs)"
      }
    },
    xAxis: {
      categories: expenses && Object.keys(expenses),
      labels: {
        enabled: false
      }
    },
    series: [
      {
        name: "expenses",
        data: expenses && Object.values(expenses) // replace this with your actual data
      }
    ]
  };

  useEffect(() => {
    const fetchDashboardServices = async () => {
      const response = await getDashboardServices();
      console.log(response);
      setDashboardServices(response);
    };
    const fetchExpensesAndRevenue = async () => {
      const responseExpense = await getExpenseChartData();
      const responseRevenue = await getRevenueChartData();
      setExpenses(responseExpense);
      setRevenue(responseRevenue);
    };
    fetchDashboardServices();
    fetchExpensesAndRevenue();
  }, []);
  return (
    <div className="mt-8">
      <div className="flex gap-4">
        <Link to="/service/add-service" className="flex ">
          <div className="min-w-[15rem]">
            <Paper
              sx={{
                p: 2,
                borderRadius: "1rem",
                minWidth: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <div className="flex flex-col items-center justify-evenly">
                <div className="bg-darkNavy rounded-full p-4 box-border">
                  <FaPlus className="text-white text-[1.2rem] box-border" />
                </div>
                <p className="text-[1.125rem] font-[600] ">Add service</p>
              </div>
            </Paper>
          </div>
        </Link>
        {dashboardServices?.map((service, index) => (
          <div className="min-w-[15rem]" key={index}>
            <Paper
              sx={{
                p: 2,
                borderRadius: "1rem",
                minWidth: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <div className="flex flex-col items-start justify-center w-full">
                <div className="flex justify-between border-b-2 border-grey border-solid pb-4 w-full">
                  <div className="w-16 h-16 rounded-[1rem] bg-white shadow-md flex items-center justify-center">
                    <img
                      src="https://www.svgrepo.com/show/271361/tractor-farming.svg"
                      alt=""
                      className="object-cover w-[80%] h-[80%] rounded-[1rem]"
                    />
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-[1.25rem] font-[600] ">
                      {service.status}
                    </p>
                    <p className="text-[1.125rem] font-[500]">status</p>
                  </div>
                </div>
                <p className="text-[1.125rem] text-brown font-[500] mt-3 text-left">
                  {service.serviceName}
                </p>
              </div>
            </Paper>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-[10rem]">
        <ChartCard
          options={totalProductionOptions}
          title="Service usage"
          subtitle="data since last month"
          desc="120,000 kilograms of new goods added"
        />
        <ChartCard
          options={totalRevenueOptions}
          title="Total revenue"
          subtitle="data since last year"
          desc="5% increase in total revenue"
        />
        <ChartCard
          options={totalExpenditureOptions}
          title="Total expenditure"
          subtitle="data since last year"
          desc="10% decrease in total expenditure"
        />
      </div>
    </div>
  );
};

export default Dashboard;
