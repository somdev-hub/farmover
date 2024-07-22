import { Paper } from "@mui/material";
import { FaCartShopping } from "react-icons/fa6";
import ChartCard from "../../components/ChartCard";
import { useEffect, useState } from "react";
import { getCompanyCropCards } from "../../apis/api";
import { crops } from "../../assets/crops";

const Dashboard = () => {
  const [cropCards, setCropCards] = useState({});

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
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      labels: {
        enabled: false
      }
    },
    series: [
      {
        name: "Revenue",
        data: [
          577, 1388, 1500, 3000, 2500, 1000, 2000, 1500, 3000, 2500, 1000, 2000
        ] // replace this with your actual data
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
    const fetchCropCards = async () => {
      const response = await getCompanyCropCards();
      setCropCards(response);
    };
    fetchCropCards();
  }, []);
  return (
    <div className="mt-6">
      <h3 className=" font-[600] text-[1.25rem]">Your Purchases</h3>
      <div className="flex gap-4 overflow-x-scroll p-2 mt-4">
        <Paper
          sx={{
            width: "13rem",
            padding: "1.2rem 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1rem",
            cursor: "pointer",
            minWidth: "13rem"
          }}
        >
          <div className="">
            <div className="flex items-center justify-center">
              <div className="px-5 py-5 box-border bg-blue-950 rounded-full">
                <FaCartShopping className="text-white" />
              </div>
            </div>
            <div className="mt-3">
              <h3 className="font-[600] text-[1.125rem]">Visit Marketplace</h3>
            </div>
          </div>
        </Paper>
        {Object.keys(cropCards).map((crop, i) => {
          return (
            <Paper
              key={i}
              sx={{
                width: "15rem",
                padding: "1.2rem 1.2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1rem",
                cursor: "pointer",
                minWidth: "15rem"
              }}
            >
              <div className="w-full">
                <div className="flex justify-between border-b-2 border-solid border-b-grey pb-4 w-full">
                  <div className="shadow-md w-[3.5rem] h-[3.5rem] rounded-lg">
                    <img
                      src={crops.find((c) => c.value === crop)?.img}
                      className="h-full w-full rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3 className="font-[600] text-[1.25rem]">
                      {crops.find((c) => c.value === crop)?.name}
                    </h3>
                    <p className="font-[500] text-[1.125rem]">
                      Rs. {cropCards[crop][1]}/-
                    </p>
                  </div>
                </div>
                <div className="flex justify-between font-[500]  italic mt-2">
                  <p>Purchased: </p>
                  <p>{cropCards[crop][0]} Kg</p>
                </div>
              </div>
            </Paper>
          );
        })}
      </div>
      <h3 className="mb-2 mt-6 font-[600] text-[1.25rem]">Your Stats</h3>

      <div className="flex gap-4 mt-[9rem]">
        <ChartCard
          options={totalProductionOptions}
          title="Warehouse usage"
          subtitle="data since last month"
          desc="120,000 kilograms of new goods added"
        />
        {/* <ChartCard
          options={totalRevenueOptions}
          title="Total revenue"
          subtitle="data since last year"
          desc="5% increase in total revenue"
        /> */}
        <ChartCard
          options={totalProductionOptions}
          title="Total expenditure"
          subtitle="data since last year"
          desc="10% decrease in total expenditure"
        />
      </div>
    </div>
  );
};

export default Dashboard;
