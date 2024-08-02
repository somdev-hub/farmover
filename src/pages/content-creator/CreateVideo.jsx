import { Button, Paper } from "@mui/material";
import { useRef, useState } from "react";
import MainInput from "../../components/MainInput";
import { addVideo } from "../../apis/api";

const CreateVideo = () => {
  const [video, setVideo] = useState({
    title: "",
    video: null,
    tags: [],
    longDescription: "",
    description: "",
    thumbnail: null
  });

  const fileInputRef = useRef(null);

  const thumbnailInputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "tags") {
      setVideo((prev) => ({ ...prev, tags: e.target.value.split(",") }));
      return;
    }
    if (e.target.name === "video" || e.target.name === "thumbnail") {
      setVideo((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
      return;
    }
    setVideo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    console.log(video);
    const response = await addVideo(video);
    if (response.status === 201) {
      alert("Video uploaded successfully");
      setVideo({
        title: "",
        video: null,
        tags: [],
        longDescription: "",
        description: "",
        thumbnail: null
      });
    }
  };
  return (
    <div className="mt-8 sm:w-[95%]">
      <div className="flex flex-col-reverse sm:flex-row w-full gap-4 h-auto">
        <div className="sm:flex-1">
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem"
            }}
          >
            <h3 className="font-[500]">Enter video title</h3>
            <MainInput
              value={video.title}
              onChange={handleChange}
              name="title"
              placeholder="Enter video title"
              type="text"
            />
            <h3 className="font-[500] mt-3">Enter video tags</h3>
            <MainInput
              placeholder="Enter video tags"
              type="text"
              name="tags"
              value={video.tags.join(",")}
              onChange={handleChange}
            />
            <h3 className="mt-3 font-[500]">Enter video short description</h3>
            <MainInput
              value={video.description}
              onChange={handleChange}
              name="description"
              placeholder="Start typing here..."
              type="long-text"
            />
          </Paper>
        </div>
        <div className="sm:flex-1 sm:h-auto min-h-[10rem]">
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem",
              minHeight: "inherit",
              height: "100%"
            }}
          >
            {
              <div
                className="border-dashed border-2 border-grey rounded-lg w-full h-full flex items-center justify-center cursor-pointer min-h-[inherit]"
                onClick={() => fileInputRef?.current?.click()}
              >
                <h4 className="text-center">
                  {video.video ? video.video.name : "Upload video"}
                </h4>
                <input
                  type="file"
                  accept=".mp4,.avi,.mov"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleChange}
                  name="video"
                />
              </div>
            }
          </Paper>
        </div>
      </div>
      <div className="my-4 min-h-[5rem]">
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem",
            minHeight: "inherit"
          }}
        >
          <div
            className="border-dashed border-2 border-grey rounded-lg w-full h-full flex items-center justify-center cursor-pointer min-h-[inherit]"
            onClick={() => thumbnailInputRef?.current?.click()}
          >
            <h4 className="text-center">
              {video.thumbnail ? video.thumbnail.name : "Upload cover"}
            </h4>
            <input
              type="file"
              accept=".png,.jpg,.jpeg"
              ref={thumbnailInputRef}
              style={{ display: "none" }}
              onChange={handleChange}
              name="thumbnail"
            />
          </div>
        </Paper>
      </div>
      <div className="">
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem"
          }}
        >
          <h3 className="font-[500]">Enter video description</h3>
          <MainInput
            placeholder="Start typing here..."
            type="long-text"
            value={video.longDescription}
            onChange={handleChange}
            name="longDescription"
          />
        </Paper>

        <div className="flex mt-4 justify-end">
          <Button variant="contained" onClick={handleSubmit}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateVideo;
