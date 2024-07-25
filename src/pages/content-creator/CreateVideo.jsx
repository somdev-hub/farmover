import { Button, Paper } from "@mui/material";
import { useRef, useState } from "react";
import MainInput from "../../components/MainInput";

const CreateVideo = () => {
  const [video, setVideo] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const fileInputRef = useRef(null);
  return (
    <div className="mt-8 w-[95%]">
      <div className="flex w-full gap-4 h-auto">
        <div className="flex-1">
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem"
            }}
          >
            <h3 className="font-[500]">Enter video title</h3>
            <MainInput
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              placeholder="Enter video title"
              type="text"
            />
            <h3 className="font-[500] mt-3">Enter video tags</h3>
            <MainInput placeholder="Enter video tags" type="text" />
            <h3 className="mt-3 font-[500]">Enter video short description</h3>
            <MainInput
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              placeholder="Start typing here..."
              type="long-text"
            />
          </Paper>
        </div>
        <div className="flex-1">
          <Paper
            sx={{
              p: 2,
              borderRadius: "1rem",
              height: "100%"
            }}
          >
            {video ? (
              <div>
                <video
                  className="w-full h-full"
                  src={URL.createObjectURL(video)}
                  controls
                />
                <div className="mt-2 flex items-center justify-center">
                  <Button
                    onClick={() => {
                      setVideo(null);
                      fileInputRef.current.value = "";
                      fileInputRef.current.click();
                    }}
                  >
                    Change video
                  </Button>
                </div>
              </div>
            ) : (
              <div
                className="border-dashed border-2 border-grey rounded-lg w-full h-full flex items-center justify-center cursor-pointer"
                onClick={() => fileInputRef?.current?.click()}
              >
                <h4 className="text-center">
                  {video ? video.name : "Upload video"}
                </h4>
                <input
                  type="file"
                  accept=".mp4,.avi,.mov"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setVideo(file);
                    }
                  }}
                />
              </div>
            )}
          </Paper>
        </div>
      </div>
      <div className="mt-6">
        <Paper
          sx={{
            p: 2,
            borderRadius: "1rem"
          }}
        >
          <h3 className="font-[500]">Enter video description</h3>
          <MainInput placeholder="Start typing here..." type="long-text" />
        </Paper>
      </div>
    </div>
  );
};

export default CreateVideo;
