import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Uploads = () => {
  const navigate = useNavigate();
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
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <div
                  className="sm:h-[8rem] cursor-pointer items-center flex"
                  key={i}
                >
                  <Paper
                    onClick={() => navigate("/content-creator/video-view")}
                    key={i}
                    sx={{
                      p: 1,
                      borderRadius: "1rem",
                      backgroundColor: "#fff",
                      height: "100%"
                    }}
                  >
                    <div className="flex flex-col sm:flex-row h-full items-center gap-4">
                      <img
                        src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
                        alt=""
                        className="sm:w-[7rem] h-full object-cover rounded-lg"
                      />
                      <div className="">
                        <h3 className="font-[500] text-[1.25rem]">
                          Plants 101 by Dr. Stanly Morgan. Know how to grow your
                          crops to get the highest yield
                        </h3>
                        <p className="font-[500] my-1">
                          10/10/2024 11:30:45 AM
                        </p>
                        <p className="text-[14px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dignissimos eius blanditiis quam beatae
                          architecto qui, labore temporibus rerum provident,
                          repellat, veritatis magnam eos. Nihil praesentium
                          magni deleniti nulla alias consectetur!
                        </p>
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
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <div
                  className="flex items-center sm:h-[8rem] cursor-pointer"
                  key={i}
                >
                  <Paper
                    onClick={() => navigate("/content-creator/article-view")}
                    key={i}
                    sx={{
                      p: 1,
                      borderRadius: "1rem",
                      backgroundColor: "#fff",
                      height: "100%"
                    }}
                  >
                    <div className="flex flex-col sm:flex-row h-full items-center gap-4">
                      <img
                        src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
                        alt=""
                        className="sm:w-[7rem] h-full object-cover rounded-lg"
                      />
                      <div className="">
                        <h3 className="font-[500] text-[1.25rem]">
                          Plants 101 by Dr. Stanly Morgan. Know how to grow your
                          crops to get the highest yield
                        </h3>
                        <p className="font-[500] my-1">
                          10/10/2024 11:30:45 AM
                        </p>
                        <p className="text-[14px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dignissimos eius blanditiis quam beatae
                          architecto qui, labore temporibus rerum provident,
                          repellat, veritatis magnam eos. Nihil praesentium
                          magni deleniti nulla alias consectetur!
                        </p>
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
