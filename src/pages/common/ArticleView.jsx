import { IconButton, InputAdornment, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addCommentToArticle,
  addViewToArticle,
  getArticleById,
  toggleDownVoteArticle,
  toggleUpVoteArticle
} from "../../apis/api";
import parse from "html-react-parser";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import { BiDownvote, BiUpvote } from "react-icons/bi";

const ArticleView = () => {
  const location = useLocation();
  const { id } = location.state;
  const [article, setArticle] = useState({});
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");
  const [vote, setVote] = useState({
    upVote: false,
    downVote: false
  });

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await getArticleById(id);
      setArticle(response);
      if (response?.isUpvoted) {
        setVote({
          ...vote,
          upVote: true
        });
      }
      if (response?.isDownvoted) {
        setVote({
          ...vote,
          downVote: true
        });
      }
      const content = response?.content || "";

      try {
        const contentText = await axios.get(content);
        console.log(contentText);
        setContent(contentText.data);
      } catch (error) {
        console.log(error);
      }
    };
    const addView = async () => {
      await addViewToArticle(id);
    };
    fetchArticle();
    addView();
  }, [id, vote]);

  const handleCommentPost = async (e) => {
    e.preventDefault();
    const response = await addCommentToArticle(id, comment);
    if (response.status === 200) {
      alert("posted");
      setComment("");
    }
  };

  return (
    <div className="mt-8 sm:w-[98%]">
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <div className="sm:w-[75%]">
          <Paper
            sx={{
              p: 1,
              borderRadius: "1rem"
            }}
          >
            <div className="w-full">
              <img
                src={article?.thumbnail}
                alt=""
                className="w-full sm:h-[20rem] object-cover rounded-lg"
              />
              <div className="mt-4 px-2">
                <p className="font-[500] text-blue-400 my-3">
                  #agriculture, #farming, #gardening, #principles, #crops
                </p>
                <h2 className="font-[500] text-[1.75rem]">{article?.title}</h2>
                <div className=" border-l-4 border-blue-500 pl-4 mt-4 py-2">
                  <p>{article?.subHeading}</p>
                </div>
              </div>
              <div className="mt-4 w-full prose blockquote-style">
                {parse(content)}
              </div>
            </div>
          </Paper>
        </div>
        <div className="sm:w-1/4">
          <h3 className="font-[500] text-[1.125rem]">Actions</h3>
          <div className="mt-4 flex gap-4 flex-wrap w-full">
            {/* <div className="w-16"> */}
            <Paper
              onClick={async () => {
                const response = await toggleUpVoteArticle(id);
                if (response.status === 200) {
                  setVote({
                    ...vote,
                    upVote: !vote.upVote
                  });
                  if (response.data === "upvoted") {
                    setArticle({
                      ...article,
                      upCount: article.upCount + 1
                    });
                  } else {
                    setArticle({
                      ...article,
                      upCount: article.upCount - 1
                    });
                  }
                }
              }}
              sx={{
                p: 1,
                borderRadius: "1rem",
                // width: "fit-content",
                flex: 1,
                cursor: "pointer",
                height: "fit-content"
              }}
            >
              <div
                className={`flex gap-2 justify-center items-center `}
                style={{
                  color: vote?.upVote ? "#3B82F6" : "black"
                }}
              >
                <BiUpvote className="text-xl" />
                <p className="font-[500] text-[1.125rem]">{article?.upCount}</p>
              </div>
            </Paper>

            <Paper
              onClick={async () => {
                const response = await toggleDownVoteArticle(id);
                if (response.status === 200) {
                  setVote({
                    ...vote,
                    downVote: !vote.downVote
                  });
                  if (response.data === "downvoted") {
                    setArticle({
                      ...article,
                      downCount: article.downCount + 1
                    });
                  } else {
                    setArticle({
                      ...article,
                      downCount: article.downCount - 1
                    });
                  }
                }
              }}
              sx={{
                p: 1,
                borderRadius: "1rem",
                flex: 1,
                cursor: "pointer",
                height: "fit-content"
              }}
            >
              <div
                className={`flex gap-2 justify-center items-center ${
                  vote?.downVote ? "text-blue-500" : "text-black"
                }`}
              >
                <BiDownvote className="text-xl" />
                <p className="font-[500] text-[1.125rem]">
                  {article?.downCount}
                </p>
              </div>
            </Paper>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h3 className="font-[500] text-[1.125rem]">Comments</h3>
              <p className="text-brown">{article?.commentCount}</p>
            </div>
            <div className="mt-4">
              <TextField
                variant="filled"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                label="Write a comment"
                fullWidth
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={handleCommentPost}>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className="mt-4 flex flex-col gap-4">
              {article?.articleComment?.map((comment, i) => {
                return (
                  <Paper
                    key={i}
                    sx={{
                      px: 2,
                      py: 1.5,
                      borderRadius: "1rem",
                      // display: "flex",
                      gap: "0.5rem",
                      width: "100%"
                    }}
                  >
                    <div className="flex gap-3 items-center mb-2">
                      <div className="w-[2rem] h-[2rem] rounded-full bg-brown"></div>
                      <h3 className="font-[600] text-base m-0">
                        {comment.name}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-1">
                      {/* <p className="font-[500] text-brown">Farmer</p> */}
                      <p className="text-[14px]">{comment.comment}</p>
                    </div>
                  </Paper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
