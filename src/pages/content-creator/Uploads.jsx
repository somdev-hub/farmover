import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getArticlesByUser, getVideosByUser } from "../../apis/api";

const Uploads = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await getVideosByUser();
      setVideos(response);
    };
    const fetchArticles = async () => {
      const response = await getArticlesByUser();
      setArticles(response);
    };
    fetchVideos();
    fetchArticles();
  }, []);
  return (
    <div className="mt-8 sm:w-[95%]">
      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem",
          backgroundColor: "#EEF7FF"
        }}
      >
        <div className="">
          <h3 className="font-[500] text-[1.125rem]">Uploaded videos</h3>
          <div className="mt-4 flex flex-col gap-4">
            {videos?.map((video, i) => {
              return (
                <div
                  className="sm:h-[8rem] w-full cursor-pointer items-center flex"
                  key={i}
                >
                  <Paper
                    onClick={() =>
                      navigate("/content-creator/video-view", {
                        state: { id: video.id }
                      })
                    }
                    key={i}
                    sx={{
                      p: 1,
                      borderRadius: "1rem",
                      backgroundColor: "#fff",
                      height: "100%",
                      width: "100%"
                    }}
                  >
                    <div className="flex flex-col sm:flex-row h-full items-center gap-4">
                      <img
                        src={video.thumbnail}
                        alt=""
                        className="sm:w-[7rem] h-full object-cover rounded-lg"
                      />
                      <div className="">
                        <h3 className="font-[500] text-[1.25rem] m-0">
                          {video.title}
                        </h3>
                        <p className="font-[500] my-1">{video.date}</p>
                        <p className="text-[14px]">{video.description}</p>
                      </div>
                    </div>
                  </Paper>
                </div>
              );
            })}
          </div>
        </div>
      </Paper>
      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem",
          backgroundColor: "#EEF7FF",
          marginTop: "2rem"
        }}
      >
        <div className="">
          <h3 className="font-[500] text-[1.125rem]">Published articles</h3>
          <div className="mt-4 flex flex-col gap-4">
            {articles?.map((article, i) => {
              return (
                <div
                  className="flex items-center w-full sm:h-[8rem] cursor-pointer"
                  key={i}
                >
                  <Paper
                    onClick={() =>
                      navigate("/content-creator/article-view", {
                        state: { id: article.id }
                      })
                    }
                    key={i}
                    sx={{
                      p: 1,
                      borderRadius: "1rem",
                      backgroundColor: "#fff",
                      height: "100%",
                      width: "100%"
                    }}
                  >
                    <div className="flex flex-col sm:flex-row h-full items-center gap-4">
                      <img
                        src={article.thumbnail}
                        alt=""
                        className="sm:w-[7rem] h-full object-cover rounded-lg"
                      />
                      <div className="">
                        <h3 className="font-[500] text-[1.25rem] m-0">
                          {article.title}
                        </h3>
                        <p className="font-[500] my-1">{article.date}</p>
                        <p className="text-[14px]">{article.subHeading}</p>
                      </div>
                    </div>
                  </Paper>
                </div>
              );
            })}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Uploads;
