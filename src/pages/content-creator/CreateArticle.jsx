import { Button, Paper } from "@mui/material";
import { useRef, useState } from "react";
import Editor from "../../components/Editor";

const CreateArticle = () => {
  const [articleContent, setArticleContent] = useState("");
  const [articleCover, setArticleCover] = useState(null);
  const [articleTitle, setArticleTitle] = useState("");
  const fileInputRef = useRef(null);

  const submissionHandler = () => {
    console.log(articleContent);
    console.log(articleCover);
    console.log(articleTitle);
  };
  return (
    <div className="mt-8 sm:w-[95%]">
      {/* <h3 className="font-[600] text-[1.25rem]">Create your article</h3> */}
      <div className="">
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem",
            height: "10rem"
          }}
        >
          <div
            className="border-dashed border-2 border-grey rounded-lg w-full h-full flex items-center justify-center cursor-pointer"
            onClick={() => fileInputRef?.current?.click()}
          >
            <h4 className="text-center">
              {articleCover ? articleCover.name : "Upload cover image"}
            </h4>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setArticleCover(file);
                }
              }}
            />
          </div>
        </Paper>
      </div>
      <div className="mt-6">
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem"
            // height: "5rem"
          }}
        >
          <h3 className="font-[500] text-[1.125rem]">
            Enter your article title
          </h3>
          <input
            type="text"
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
            placeholder="Write..."
            className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey"
          />
        </Paper>
      </div>
      <div className="mt-6">
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem"
          }}
        >
          <h3 className="font-[500] text-[1.125rem]">Enter article content</h3>
          <div className="mt-4">
            <Editor data={articleContent} setData={setArticleContent} />
          </div>
        </Paper>
      </div>
      <div className="mt-6">
        <Button onClick={submissionHandler} variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateArticle;
