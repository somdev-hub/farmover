import { Paper } from "@mui/material";
import sample_video from "../../assets/sample_video.mp4";
import { useEffect, useState } from "react";
import { MdDelete, MdOutlineUnpublished, MdUpdate } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { getVideoById, getVideoComments } from "../../apis/api";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { RiExpandUpDownLine } from "react-icons/ri";

const VideoView = () => {
  const [expandDesc, setExpandDesc] = useState(false);
  const [expandComments, setExpandComments] = useState(false);
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const { id } = location.state;
  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await getVideoById(id);
      setVideo(response);
    };
    const fetchComments = async () => {
      const response = await getVideoComments(id);
      setComments(response);
    };
    fetchVideo();
    fetchComments();
  }, [id]);
  return (
    <div className="mt-8 gap-4 sm:w-[98%]">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="sm:w-[65%]">
          <Paper
            sx={{
              p: 1,
              borderRadius: "1rem"
            }}
          >
            <Paper
              sx={{
                borderRadius: "1rem",
                paddingTop: "56.25%", // 16:9 aspect ratio (9/16 = 0.5625)
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <video
                  src={video?.url}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Paper>
            <div className="mt-4 px-2">
              <div
                className="cursor-pointer hover-effect p-2"
                onClick={() => setExpandDesc(!expandDesc)}
              >
                <h2 className="font-[600] text-[1.5rem]">{video?.title}</h2>
                {video?.tags?.map((tag, i) => {
                  return (
                    <span
                      key={i}
                      className="text-blue-400 font-[500] mr-2  my-2"
                    >
                      {tag}
                    </span>
                  );
                })}
                <p className="font-[500] mt-2 text-[1.125rem]">{video?.date}</p>
              </div>
              <div
                className={` description-container ${
                  expandDesc ? "expanded" : "contracted"
                }`}
              >
                <p>{video?.longDescription}</p>
              </div>
              {/* <div className="mt-0">
                <div className="">
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: "#EEF7FF",
                      display: "flex",
                      width: "fit-content"
                    }}
                  >
                    <div className="flex gap-4 items-center font-[600] mr-4 ">
                      <BiUpvote className="text-lg" />
                      125
                    </div>
                    <div className="flex gap-4 items-center font-[600]">
                      <BiDownvote className="text-lg" />
                      125
                    </div>
                  </Paper>
                </div>
              </div> */}
              <div className="mt-4">
                <div className="flex items-center justify-between pr-4 border-y-2 border-solid py-3">
                  <div className="flex items-center gap-2">
                    <img
                      loading="lazy"
                      src={
                        video?.authorProfile
                          ? video.authorProfile
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-erUOQght_VvS9h9OS_0J6wvFFIQHtIRgGjv-e1RBZ3fP02XlcM59WPkFb9cN-0U2uik&usqp=CAU"
                      }
                      alt=""
                      className="w-[2.5rem] h-[2.5rem] rounded-full"
                    />
                    <p className="font-[500] text-[1.25rem]">
                      {video?.authorName}
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex gap-4 items-center font-[600] mr-2 ">
                      <BiUpvote className="text-lg" />
                      {video?.upCount}
                    </div>
                    <div className="flex gap-2 items-center font-[600]">
                      <BiDownvote className="text-lg" />
                      {video?.downCount}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-[500] text-[1.125rem]">Comments</h3>
                  <RiExpandUpDownLine
                    className="font-[500] text-xl cursor-pointer"
                    onClick={() => {
                      setExpandComments(!expandComments);
                    }}
                  />
                </div>
                <div
                  className={`mt-6 flex flex-col gap-4 comment-container ${
                    expandComments ? "expanded" : "contracted"
                  }`}
                >
                  {Array.from({ length: 10 }).map((_, i) => {
                    return (
                      <div key={i} className="flex gap-3 items-start ">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-erUOQght_VvS9h9OS_0J6wvFFIQHtIRgGjv-e1RBZ3fP02XlcM59WPkFb9cN-0U2uik&usqp=CAU"
                          alt=""
                          className="w-8 h-8 rounded-full mt-1"
                        />
                        <div className="border-b-2 border-solid pb-2">
                          <div className="flex justify-between">
                            <p className="font-[500] ">Ramesh Mehta</p>
                            <p className="text-[14px]">10/10/2014 11:55am</p>
                          </div>
                          <p className=" ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Laboriosam, sint. Enim, voluptas. Ipsa,
                            voluptate corrupti.
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <div className="sm:w-[35%]">
          <h3 className="font-[500] text-[1.125rem]">Actions</h3>

          <div className="mt-4 w-full">
            <Paper
              sx={{
                p: 2,
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: "600",
                cursor: "pointer",
                width: "100%"
              }}
            >
              <MdOutlineUnpublished className="text-2xl" />
              Unpublish video
            </Paper>
            <Paper
              sx={{
                p: 2,
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: "600",
                cursor: "pointer",
                width: "100%",
                marginTop: "0.75rem"
              }}
            >
              <MdUpdate className="text-2xl" />
              Update video
            </Paper>
            <Paper
              sx={{
                p: 2,
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: "600",
                cursor: "pointer",
                width: "100%",
                marginTop: "0.75rem"
              }}
            >
              <MdDelete className="text-2xl" />
              Delete video
            </Paper>
          </div>
          <h3 className="font-[500] text-[1.125rem] mt-6">
            More of your videos
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <Paper
                  key={i}
                  sx={{
                    p: 1,
                    borderRadius: "1rem"
                  }}
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
                      alt=""
                      className="w-[6rem] h-[6rem] rounded-lg object-cover"
                    />
                    <div className="">
                      <h3 className="font-[500] ">
                        Plants 101 by Dr. Stanly Morgan. Know how to grow...
                      </h3>
                      <p className="text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo...
                      </p>
                    </div>
                  </div>
                </Paper>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoView;
