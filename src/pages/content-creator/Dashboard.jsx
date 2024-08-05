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
import { useEffect, useState } from "react";
import {
  getContentCreatorDashboardCards,
  getEngagementsByRolesChartData,
  getRecentComments,
  getViewsByMonthChartData,
  getViewsByRolesChartData
} from "../../apis/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [viewsByRoles, setViewsByRoles] = useState({});
  const [viewsByMonths, setViewsByMonths] = useState({});
  const [engagementsByRoles, setEngagementsByRoles] = useState({});
  const [recentComments, setRecentComments] = useState([]);

  const data1 = [
    {
      label: "Video",
      value:
        viewsByRoles &&
        Object.keys(viewsByRoles).reduce(
          (acc, key) => acc + (viewsByRoles[key]?.videos ?? 0),
          0
        )
    },
    {
      label: "Article",
      value:
        viewsByRoles &&
        Object.keys(viewsByRoles).reduce(
          (acc, key) => acc + (viewsByRoles[key]?.articles ?? 0),
          0
        )
    }
  ];

  const data2 = [
    {
      label: "Farmers",
      value:
        viewsByRoles && viewsByRoles.FARMER
          ? (viewsByRoles?.FARMER?.videos ?? 0) +
            (viewsByRoles?.FARMER?.articles ?? 0)
          : 0
    },
    {
      label: "Service providers",
      value:
        viewsByRoles && viewsByRoles.SERVICE_PROVIDER
          ? (viewsByRoles?.SERVICE_PROVIDER?.videos ?? 0) +
            (viewsByRoles?.SERVICE_PROVIDER?.articles ?? 0)
          : 0
    },
    {
      label: "Warehouse managers",
      value:
        viewsByRoles && viewsByRoles.WAREHOUSE_MANAGER
          ? (viewsByRoles?.WAREHOUSE_MANAGER?.videos ?? 0) +
            (viewsByRoles?.WAREHOUSE_MANAGER?.articles ?? 0)
          : 0
    },
    {
      label: "Companies",
      value:
        viewsByRoles && viewsByRoles.COMPANY
          ? (viewsByRoles?.COMPANY?.videos ?? 0) +
            (viewsByRoles?.COMPANY?.articles ?? 0)
          : 0
    }
  ];

  useEffect(() => {
    const fetchCards = async () => {
      const response = await getContentCreatorDashboardCards();
      setCards(response);
    };
    const fetchChartViewsByRoles = async () => {
      const response = await getViewsByRolesChartData();
      setViewsByRoles(response);
    };
    const fetchChartViewsByMonths = async () => {
      const response = await getViewsByMonthChartData();
      setViewsByMonths(response);
    };
    const fetchChartEngagementsByRoles = async () => {
      const response = await getEngagementsByRolesChartData();
      setEngagementsByRoles(response);
    };
    const fetchRecentComments = async () => {
      const response = await getRecentComments();
      setRecentComments(response);
    };

    fetchRecentComments();
    fetchChartEngagementsByRoles();
    fetchChartViewsByMonths();
    fetchChartViewsByRoles();
    fetchCards();
  }, []);

  return (
    <div className="mt-8 sm:w-[98%]">
      <h3 className="font-[600] text-[1.125rem]">Upload insights</h3>
      <div className="flex flex-col sm:flex-row mt-4 gap-4">
        <div className="py-2">
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
        <div className="flex gap-4 flex-col sm:flex-row items-center overflow-x-scroll box-border py-2 sm:rounded-[1.5rem]">
          {cards?.map((card, index) => {
            return (
              <div
                className="w-full sm:w-auto sm:min-w-[15rem] h-full"
                key={index}
              >
                <Paper
                  // key={index}
                  sx={{
                    p: 1,
                    px: 2,
                    borderRadius: "1rem",
                    display: "flex",

                    width: "100%",
                    height: "100%"
                  }}
                >
                  <div className="w-full">
                    <div className=" flex gap-4 items-center h-[65%]">
                      <img
                        src={card.type === "article" ? article : video}
                        className="w-6 h-6"
                        alt=""
                      />
                      <p className="font-[500] ">
                        {card.title.length > 50
                          ? card.title.slice(0, 50) + "..."
                          : card.title}
                      </p>
                    </div>
                    <div className="h-[35%] flex justify-around sm:mt-0  w-full border-t-2 border-solid pt-2">
                      <div className="font-[500] flex gap-1 items-center">
                        <FaRegEye />
                        <p>{card.views}</p>
                      </div>
                      <div className="font-[500] flex gap-1 items-center">
                        <FaRegCommentAlt />
                        <p>{card.comments}</p>
                      </div>
                      <div className="font-[500] flex gap-1 items-center">
                        <BiUpvote />
                        <p>{card.upvotes}</p>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
            );
          })}
        </div>
      </div>
      <h3 className="font-[600] text-[1.125rem] mt-6">Upload analytics</h3>
      <div className="flex sm:gap-4 flex-col sm:flex-row mt-[8rem]">
        <div className="w-full sm:w-[25rem]">
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem",
              position: "relative",
              width: "100%",
              height: "100%"
            }}
          >
            <div className="absolute w-[90%] bg-lightGreen top-[-6rem] rounded-lg flex">
              <BarChart
                series={[
                  {
                    data:
                      viewsByRoles &&
                      Object.keys(viewsByRoles).map(
                        (key) => viewsByRoles[key]?.videos ?? 0
                      ),
                    label: "Video"
                  },
                  {
                    data:
                      viewsByRoles &&
                      Object.keys(viewsByRoles).map(
                        (key) => viewsByRoles[key]?.articles ?? 0
                      ),
                    label: "Article"
                  }
                ]}
                xAxis={[
                  {
                    scaleType: "band",
                    data: viewsByRoles ? Object.keys(viewsByRoles) : []
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
        </div>
        <div className="w-full sm:w-[25rem] mt-[8rem] sm:mt-0">
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem",
              position: "relative",
              width: "100%",
              height: "100%"
            }}
          >
            <div className="absolute w-[90%] bg-lightGreen top-[-6rem] rounded-lg flex">
              <LineChart
                series={[
                  {
                    data:
                      viewsByMonths &&
                      Object.keys(viewsByMonths).map(
                        (key) => viewsByMonths[key].videos ?? 0
                      ),
                    label: "Video"
                  },
                  {
                    data:
                      viewsByMonths &&
                      Object.keys(viewsByMonths).map(
                        (key) => viewsByMonths[key].articles ?? 0
                      ),
                    label: "Article"
                  }
                ]}
                xAxis={[
                  {
                    scaleType: "band",
                    data: viewsByMonths ? Object.keys(viewsByMonths) : []
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
        </div>
        <div className="w-full sm:w-[25rem] mt-[8rem] sm:mt-0">
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem",
              position: "relative",
              width: "100%",
              height: "100%"
            }}
          >
            <div className="absolute w-[90%] bg-lightGreen top-[-6rem] rounded-lg flex">
              <BarChart
                series={[
                  {
                    data:
                      engagementsByRoles &&
                      Object.keys(engagementsByRoles).map(
                        (key) => engagementsByRoles[key].videos ?? 0
                      ),
                    label: "Video"
                  },
                  {
                    data:
                      engagementsByRoles &&
                      Object.keys(engagementsByRoles).map(
                        (key) => engagementsByRoles[key].articles ?? 0
                      ),
                    label: "Article"
                  }
                ]}
                xAxis={[
                  {
                    scaleType: "band",
                    data: engagementsByRoles
                      ? Object.keys(engagementsByRoles)
                      : []
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
                This chart shows the number of comments and upvotes of videos
                and articles
              </p>
            </div>
          </Paper>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-6 gap-4">
        <div className="sm:w-[70%]">
          <h3 className=" font-[600] text-[1.125rem]">Recent uploads</h3>

          <div className="mt-4 w-full">
            {recentComments?.map((comment, i) => {
              return (
                <Accordion key={i}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:gap-6 w-full">
                      <div className="flex gap-4 items-center">
                        <img
                          src={comment.type === "video" ? video : article}
                          className="w-6 h-6"
                          alt=""
                        />
                        <p className="font-[500] text-[1.125rem]">
                          {comment.title}
                        </p>
                      </div>
                      <p className="font-[500] mr-4">{comment.date}</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="w-full">
                      <h3 className="font-[500]">Recent comments</h3>
                      <div className="mt-4 w-full">
                        {comment?.comments.map((commentor, i) => {
                          return (
                            <div
                              key={i}
                              className="flex gap-3 items-start  w-full"
                            >
                              <img
                                src={
                                  commentor.profileImage
                                    ? commentor.profileImage
                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-erUOQght_VvS9h9OS_0J6wvFFIQHtIRgGjv-e1RBZ3fP02XlcM59WPkFb9cN-0U2uik&usqp=CAU"
                                }
                                alt=""
                                className="w-8 h-8 rounded-full mt-1"
                              />
                              <div className="border-b-2 border-solid pb-2 w-full">
                                <div className="flex justify-between">
                                  <p className="font-[500] text-[14px]">
                                    {commentor.name}
                                  </p>
                                  <p className="text-[14px]">
                                    {commentor.date}
                                  </p>
                                </div>
                                <p className="text-[14px] ">
                                  {commentor.comment}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              );
            })}
            {/* <Accordion>
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
            </Accordion> */}
          </div>
        </div>
        <div className="sm:w-[30%]">
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
              Total views:{" "}
              {viewsByRoles &&
                Object.keys(viewsByRoles).reduce(
                  (acc, key) =>
                    acc +
                    (viewsByRoles[key]?.videos || 0) +
                    (viewsByRoles[key]?.articles || 0),
                  0
                )}
            </p>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
