import { Paper } from "@mui/material";
import { BiUpvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { MdOndemandVideo } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import video from "../../assets/video.svg";
import article from "../../assets/article.svg";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PieChart } from "@mui/x-charts/PieChart";

const Dashboard = () => {
  const navigate = useNavigate();
  const data1 = [
    { label: "Video", value: 1500 },
    { label: "Article", value: 1000 }
  ];
  const data2 = [
    { label: "Farmers", value: 500 },
    { label: "Service providers", value: 300 },
    { label: "Warehouse managers", value: 200 }
  ];
  return (
    <div className="mt-8 w-[98%]">
      <h3 className="font-[600] text-[1.125rem]">Upload insights</h3>
      <div className="flex mt-4 gap-4">
        <div className="">
          <Paper
            onClick={() => navigate("/content-creator/create-video")}
            sx={{
              p: 2,
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5%",
              minWidth: "14rem",
              height: "4rem",
              cursor: "pointer"
            }}
          >
            <MdOndemandVideo className="text-[1.5rem]" />
            <p className="font-[500]">Upload video</p>
          </Paper>
          <Paper
            onClick={() => navigate("/content-creator/create-article")}
            sx={{
              mt: 1,
              p: 2,
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5%",
              minWidth: "14rem",
              height: "4rem",
              cursor: "pointer"
            }}
          >
            <GrArticle className="text-[1.5rem]" />
            <p className="font-[500]">Create article</p>
          </Paper>
        </div>
        <div className="flex gap-4 items-center">
          <Paper
            sx={{
              p: 1,
              px: 2,
              borderRadius: "1rem",
              display: "flex",

              width: "15rem",
              height: "100%"
            }}
          >
            <div className="flex flex-col justify-around">
              <div className="border-b-2 border-solid pb-2 flex gap-4 items-center">
                <img src={article} className="w-6 h-6" alt="" />
                <p className="font-[500] text-[1.125rem]">
                  How to take care of your plant
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="font-[500] flex gap-1 items-center">
                  <FaRegEye />
                  <p>1000</p>
                </div>
                <div className="font-[500] flex gap-1 items-center">
                  <FaRegCommentAlt />
                  <p>1000</p>
                </div>
                <div className="font-[500] flex gap-1 items-center">
                  <BiUpvote />
                  <p>1000</p>
                </div>
              </div>
            </div>
          </Paper>
          <Paper
            sx={{
              p: 1,
              px: 2,
              borderRadius: "1rem",
              display: "flex",

              width: "15rem",
              height: "100%"
            }}
          >
            <div className="flex flex-col justify-around">
              <div className="border-b-2 border-solid pb-2 flex items-center gap-4">
                <img src={video} className="w-6 h-6" alt="" />
                <p className="font-[500] text-[1.125rem]">
                  How to take care of your plant
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="font-[500] flex gap-1 items-center">
                  <FaRegEye />
                  <p>1000</p>
                </div>
                <div className="font-[500] flex gap-1 items-center">
                  <FaRegCommentAlt />
                  <p>1000</p>
                </div>
                <div className="font-[500] flex gap-1 items-center">
                  <BiUpvote />
                  <p>1000</p>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
      <h3 className="font-[600] text-[1.125rem] mt-6">Upload analytics</h3>
      <div className="flex gap-4 mt-[8rem]">
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem",
            position: "relative",
            width: "25rem"
          }}
        >
          <div className="absolute w-[90%] bg-lightGreen top-[-6rem] rounded-lg flex">
            <BarChart
              series={[
                { data: [400, 200, 500], label: "Video" },
                { data: [100, 600, 350], label: "Article" }
              ]}
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Farmers", "Service providers", "Warehouse managers"]
                }
              ]}
              // barWidthRatio={0.5}
              width={400}
              height={250}
            />
          </div>
          <div className="mt-[10rem]">
            <h3 className="font-[500] text-[1.125rem]">
              Video and article view count(by roles)
            </h3>
            <p className="font-[500] text-brown mt-2">
              This chart shows the number of views of videos and articles by
              different roles
            </p>
          </div>
        </Paper>
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem",
            position: "relative",
            width: "25rem"
          }}
        >
          <div className="absolute w-[90%] bg-lightGreen top-[-6rem] rounded-lg flex">
            <LineChart
              series={[
                {
                  data: [
                    100, 200, 300, 400, 375, 180, 600, 750, 890, 1100, 1150,
                    1200
                  ],
                  label: "Video"
                },
                {
                  data: [
                    200, 150, 400, 500, 350, 700, 490, 900, 1056, 760, 1130, 1300
                  ],
                  label: "Article"
                }
              ]}
              xAxis={[
                {
                  scaleType: "band",
                  data: [
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
                  ]
                }
              ]}
              // barWidthRatio={0.5}
              width={400}
              height={250}
            />
          </div>
          <div className="mt-[10rem]">
            <h3 className="font-[500] text-[1.125rem]">
              Video and article views overview
            </h3>
            <p className="font-[500] text-brown mt-2">
              This chart shows the number of views of videos and articles over
              time
            </p>
          </div>
        </Paper>
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem",
            position: "relative",
            width: "25rem"
          }}
        >
          <div className="absolute w-[90%] bg-lightGreen top-[-6rem] rounded-lg flex">
            <BarChart
              series={[
                { data: [150, 180, 400], label: "Video" },
                { data: [110, 300, 550], label: "Article" }
              ]}
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Farmers", "Service providers", "Warehouse managers"]
                }
              ]}
              // barWidthRatio={0.5}
              width={400}
              height={250}
            />
          </div>
          <div className="mt-[10rem]">
            <h3 className="font-[500] text-[1.125rem]">
              Engagement in video and article(by roles)
            </h3>
            <p className="font-[500] text-brown mt-2">
              This chart shows the number of comments and upvotes of videos and
              articles
            </p>
          </div>
        </Paper>
      </div>
      <div className="flex mt-6 gap-4">
        <div className="w-[70%]">
          <h3 className=" font-[600] text-[1.125rem]">Recent uploads</h3>

          <div className="mt-4 w-full">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="flex items-center gap-6">
                  <div className="flex gap-4 items-center">
                    <img src={article} className="w-6 h-6" alt="" />
                    <p className="font-[500] text-[1.125rem]">
                      How to take care of your plant
                    </p>
                  </div>
                  <p className="font-[500]">10/10/2021</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="">
                  <h3 className="font-[500]">Recent comments</h3>
                  <div className="mt-4">
                    <div className="flex gap-3 items-start ">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-erUOQght_VvS9h9OS_0J6wvFFIQHtIRgGjv-e1RBZ3fP02XlcM59WPkFb9cN-0U2uik&usqp=CAU"
                        alt=""
                        className="w-8 h-8 rounded-full mt-1"
                      />
                      <div className="border-b-2 border-solid pb-2">
                        <div className="flex justify-between">
                          <p className="font-[500] text-[14px]">Ramesh Mehta</p>
                          <p className="text-[14px]">10/10/2014 11:55am</p>
                        </div>
                        <p className="text-[14px] ">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Laboriosam, sint. Enim, voluptas. Ipsa,
                          voluptate corrupti.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="flex items-center gap-6">
                  <div className="flex gap-4 items-center">
                    <img src={video} className="w-6 h-6" alt="" />
                    <p className="font-[500] text-[1.125rem]">
                      How to take care of your plant
                    </p>
                  </div>
                  <p className="font-[500]">10/10/2021</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p className="font-[500] text-brown">
                  This is a detailed article on how to take care of your plant
                </p>
              </AccordionDetails>
              <AccordionActions>
                <button className="font-[500] text-blue">View</button>
              </AccordionActions>
            </Accordion>
          </div>
        </div>
        <div className="w-[30%]">
          <h3 className="font-[600] text-[1.125rem]">Reach insight</h3>
          <Paper
            sx={{
              borderRadius: "1rem",
              marginTop: "1rem"
            }}
          >
            <div className="flex items-center justify-center">
              <PieChart
                series={[
                  {
                    innerRadius: 0,
                    outerRadius: 80,
                    data: data1,
                    cx: 170
                  },
                  {
                    innerRadius: 100,
                    outerRadius: 150,
                    data: data2,
                    cx: 170
                  }
                ]}
                width={350}
                height={350}
                slotProps={{
                  legend: { hidden: true }
                }}
              />
            </div>

            <p className="font-[500] text-[1.125rem] text-center pb-4">
              Total views: 4500
            </p>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
