import { Button, Pagination, Paper, TextField, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addCommentToVideo,
  addViewToVideo,
  getVideoById,
  getVideoComments,
  toggleDownVoteVideo,
  toggleUpVoteVideo
} from "../../apis/api";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { RiExpandUpDownLine } from "react-icons/ri";

const VideoView = () => {
  const [expandDesc, setExpandDesc] = useState(false);
  const [expandComments, setExpandComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentPagination, setCommentPagination] = useState({
    current: 0,
    total: 0
  });
  const location = useLocation();
  const { id } = location.state;
  const [video, setVideo] = useState({});

  const upvoteHandler = async (e) => {
    e.preventDefault();
    const response = await toggleUpVoteVideo(id);
    console.log(response.data);
  };

  const fetchComments = async (id, page, size) => {
    const response = await getVideoComments(id, page, size);
    setComments(response.content);
    setCommentPagination({
      current: response.number,
      total: response.totalPages
    });
  };
  useEffect(() => {
    const fetchVideo = async () => {
      const response = await getVideoById(id);
      setVideo(response);
    };
    const addView = async () => {
      const response = await addViewToVideo(id);
      console.log(response.status);
    };
    fetchVideo();
    fetchComments(id, 0, 10);
    addView();
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
                    <Tooltip title="Upvote" placement="bottom">
                      <div
                        className="flex gap-4 items-center font-[600] mr-2 hover-effect p-2 cursor-pointer"
                        onClick={upvoteHandler}
                      >
                        <BiUpvote className="text-lg" />
                        {video?.upCount}
                      </div>
                    </Tooltip>
                    <Tooltip title="Downvote" placement="bottom">
                      <div
                        className="flex gap-2 items-center font-[600] hover-effect p-2 cursor-pointer"
                        onClick={async () => {
                          const response = await toggleDownVoteVideo(id);
                          console.log(response.data);
                        }}
                      >
                        <BiDownvote className="text-lg" />
                        {video?.downCount}
                      </div>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-[500] text-[1.125rem]">Comments</h3>
                  <Tooltip title="Expand" placement="bottom">
                    <div className="hover-effect">
                      <RiExpandUpDownLine
                        className="font-[500] text-xl cursor-pointer"
                        onClick={() => {
                          setExpandComments(!expandComments);
                        }}
                      />
                    </div>
                  </Tooltip>
                </div>

                <div className="mt-4 flex gap-2">
                  <TextField
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    variant="outlined"
                    label="Write a comment"
                    fullWidth
                  />
                  <Button
                    onClick={async () => {
                      const response = await addCommentToVideo(id, comment);
                      console.log(response.data);
                      setComment("");
                    }}
                  >
                    Post
                  </Button>
                </div>
                <div
                  className={`mt-6 flex flex-col gap-4 comment-container w-full ${
                    expandComments ? "expanded" : "contracted"
                  }`}
                >
                  {comments?.map((comment, i) => {
                    return (
                      <div key={i} className="flex gap-3 items-start w-full">
                        <img
                          src={
                            comment.profileImage
                              ? comment.profileImage
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-erUOQght_VvS9h9OS_0J6wvFFIQHtIRgGjv-e1RBZ3fP02XlcM59WPkFb9cN-0U2uik&usqp=CAU"
                          }
                          alt=""
                          className="w-8 h-8 rounded-full mt-1"
                        />
                        <div className="border-b-2 border-solid pb-2 w-full">
                          <div className="flex justify-between">
                            <p className="font-[500] ">{comment.name}</p>
                            <p className="text-[14px]">{comment.date}</p>
                          </div>
                          <p className=" ">{comment.comment}</p>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex items-center justify-center my-2">
                    <Pagination
                      count={commentPagination.total}
                      page={commentPagination.current + 1}
                      onChange={(_, page) => {
                        fetchComments(id, page - 1, 10);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <div className="sm:w-[35%]">
          <h3 className="font-[500] text-[1.125rem] ">More of your videos</h3>
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
