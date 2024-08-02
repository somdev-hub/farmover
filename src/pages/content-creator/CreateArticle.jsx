import { Button, Paper } from "@mui/material";
import { useRef, useState } from "react";
import Editor from "../../components/Editor";
import { addArticle } from "../../apis/api";

const CreateArticle = () => {
  const [articleData, setArticleData] = useState({
    title: "",
    tags: [],
    subHeading: "",
    thumbnail: null,
    content: ""
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "tags") {
      setArticleData((prev) => ({ ...prev, tags: e.target.value.split(",") }));
      return;
    }
    if (e.target.name === "thumbnail") {
      setArticleData((prev) => ({ ...prev, thumbnail: e.target.files[0] }));
      return;
    }
    setArticleData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submissionHandler = async () => {
    console.log(articleData);
    const response = await addArticle(articleData);
    if (response.status === 201) {
      alert("Article uploaded successfully");
      setArticleData({
        title: "",
        tags: [],
        subHeading: "",
        thumbnail: null,
        content: ""
      });
    }
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
              {articleData.thumbnail
                ? articleData.thumbnail.name
                : "Upload cover image"}
            </h4>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleChange}
              name="thumbnail"
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
            placeholder="Write..."
            className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey"
            value={articleData.title}
            onChange={handleChange}
            name="title"
          />
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
            Enter your article sub-heading
          </h3>
          <input
            type="text"
            placeholder="Write..."
            className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey"
            value={articleData.subHeading}
            onChange={handleChange}
            name="subHeading"
          />
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
            Enter your article tags
          </h3>
          <input
            type="text"
            placeholder="Write..."
            className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey"
            value={articleData.tags.join(",")}
            onChange={handleChange}
            name="tags"
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
            <Editor
              data={articleData.content}
              setData={(data) =>
                setArticleData((prev) => ({ ...prev, content: data }))
              }
            />
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
