import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { MdDelete, MdOutlineUnpublished, MdUpdate } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { getArticleById } from "../../apis/api";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import axios from "axios";

const ArticleView = () => {
  const location = useLocation();
  const { id } = location.state;
  const [article, setArticle] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await getArticleById(id);
      setArticle(response);
      const content = response?.content || "";

      try {
        const contentText = await axios.get(content);
        console.log(contentText);
        setContent(contentText.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, [id]);
  // let content = article?.content || "";
  // if (content.startsWith('"') && content.endsWith('"')) {
  //   content = content.slice(1, -1);
  // }
  // const sanitizedContent = DOMPurify.sanitize(content);
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
              <div className="mt-4 w-full list-disc prose blockquote-style">
                {/* <div dangerouslySetInnerHTML={{__html:content}}></div> */}
                {parse(content)}
              </div>
            </div>
          </Paper>
        </div>
        <div className="sm:w-1/4">
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
              Unpublish article
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
              Update article
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
              Delete article
            </Paper>
          </div>
          <div className="mt-4">
            <h3 className="font-[500] text-[1.125rem]">Comments</h3>
            <div className="mt-4">
              <Paper
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
                  <h3 className="font-[600] text-base m-0">Ramesh Mehta</h3>
                </div>

                <div className="flex flex-col gap-1">
                  {/* <p className="font-[500] text-brown">Farmer</p> */}
                  <p className="text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    etiam, ut ait Scaevola, in ipsa repulsione consuetudinis vis
                    est ad laborem leniendum.
                  </p>
                </div>
              </Paper>
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
