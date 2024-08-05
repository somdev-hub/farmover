import { Pagination, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getArticlesForUsers, getVideosForUsers } from "../../apis/api";
import { useLocation, useNavigate } from "react-router-dom";

const Learning = () => {
  const [videoPage, setVideoPage] = useState({
    currentPage: 0,
    totalPages: 0
  });
  const [videos, setVideos] = useState([]);
  const [articlePage, setArticlePage] = useState({
    currentPage: 0,
    totalPages: 0
  });
  const [articles, setArticles] = useState([]);

  const fetchVideos = async (page, size) => {
    const response = await getVideosForUsers(page, size);
    setVideos(response.content);
    setVideoPage({
      currentPage: response.number,
      totalPages: response.totalPages
    });
  };
  const fetchArticles = async (page, size) => {
    const response = await getArticlesForUsers(page, size);
    setArticles(response.content);
    setArticlePage({
      currentPage: response.number,
      totalPages: response.totalPages
    });
  };
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoleRoute = "/" + location.pathname.split("/")[1];

  // console.log(currentRoleRoute);

  useEffect(() => {
    fetchVideos(0, 10);
    fetchArticles(0, 10);
  }, []);
  return (
    <div className="w-[98%]">
      <div className="mt-10">
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem"
          }}
        >
          <h3 className="font-[500] text-[1rem]">Educational videos for you</h3>
          <p className="texxt-[14px] text-brown">
            List of curated educational videos for you
          </p>

          <div className="mt-3 flex justify-start items-start flex-col sm:flex-row sm:flex-wrap">
            {videos?.map((video, index) => {
              return (
                <div
                  className="sm:w-[13rem] my-3 sm:mr-4 cursor-pointer"
                  key={index}
                  onClick={() => {
                    navigate(currentRoleRoute + "/video", {
                      state: { id: video.id }
                    });
                  }}
                >
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="w-full h-[10rem] sm:h-[8rem] object-cover rounded-[1rem]"
                  />
                  <div className="px-0 mt-4 sm:mt-0">
                    <h4 className="font-[500] sm:text-[14px] mt-2">
                      {video.title}
                    </h4>
                    <div className="flex gap-2 items-center my-2">
                      <img
                        src={
                          video.authorProfile
                            ? video.authorProfile
                            : "https://cdn.pixabay.com/photo/2015/02/04/13/23/tea-623796_1280.jpg"
                        }
                        alt=""
                        className="sm:w-[1.75rem] sm:h-[1.75rem] w-8 h-8 rounded-full object-cover"
                      />
                      <h4 className="font-[500] text-grey sm:text-[14px]">
                        {video.authorName}
                      </h4>
                    </div>
                    <p className="text-[14px] sm:text-[12px]">
                      {video.description.length > 100
                        ? video.description.substring(0, 100) + "..."
                        : video.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-4 flex items-center justify-center">
            <Pagination
              count={videoPage.totalPages}
              page={videoPage.currentPage + 1}
              onChange={(event, value) => {
                console.log(value);
                fetchVideos(value, 10);
              }}
            />
          </div>
        </Paper>

        <div className="mt-10">
          <h3 className="font-[500] text-[1.125rem]">Articles for you</h3>
          <p className="text-brown text-[14px] sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dolores et quaerat minima eos dolor quibusdam sint qui in libero.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:flex-wrap">
            {articles?.map((article, index) => {
              return (
                <div
                  className="sm:w-[23.5%] h-[22rem] cursor-pointer"
                  key={index}
                  onClick={() => {
                    navigate(currentRoleRoute + "/article", {
                      state: { id: article.id }
                    });
                  }}
                >
                  <Paper
                    key={index}
                    sx={{
                      width: "100%",
                      p: 1,
                      height: "100%",
                      borderRadius: "1rem"
                    }}
                  >
                    <img
                      src={article.thumbnail}
                      alt=""
                      className="w-full h-[10rem] sm:h-[40%] object-cover rounded-[1rem]"
                    />

                    <div className="px-2">
                      <h4 className="font-[500] text-[14px] mt-2">
                        {article.title}
                      </h4>
                      <div className="flex gap-2 items-center my-2">
                        <img
                          src={
                            article.authorProfile
                              ? article.authorProfile
                              : "https://cdn.pixabay.com/photo/2015/02/04/13/23/tea-623796_1280.jpg"
                          }
                          alt=""
                          className="w-[1.75rem] h-[1.75rem] rounded-full object-cover"
                        />
                        <h4 className="font-[500] text-grey text-[14px]">
                          {article.authorName}
                        </h4>
                      </div>
                      <p className="text-[12px]">{article.description}</p>
                    </div>
                    {/* " alt="" /> */}
                  </Paper>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center mt-6">
            <Pagination
              count={articlePage.totalPages}
              page={articlePage.currentPage + 1}
              onChange={(event, value) => {
                fetchArticles(value, 10);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
