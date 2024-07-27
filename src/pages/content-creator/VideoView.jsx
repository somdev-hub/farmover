import { Paper } from "@mui/material";
import sample_video from "../../assets/sample_video.mp4";
import { useState } from "react";

const VideoView = () => {
  const [expandDesc, setExpandDesc] = useState(false);
  return (
    <div className="mt-8 gap-4 w-[98%]">
      <div className="flex gap-4">
        <div className="w-[65%]">
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
                  src={sample_video}
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
                <h2 className="font-[600] text-[1.5rem]">
                  Plants 101 by Dr. Stanly Morgan. Know how to grow your crops
                  to get the highest yield
                </h2>
                <p className="font-[500] mt-2 text-[1.125rem]">
                  11/11/2024 11:45:30 AM
                </p>
              </div>
              <div
                className={`mt-4 description-container ${
                  expandDesc ? "expanded" : "contracted"
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  sapiente at qui fugiat dolorem a consequatur odit dignissimos,
                  impedit corporis molestias laborum id debitis assumenda
                  reiciendis hic laudantium ex beatae iste magni iusto officia.
                  Voluptatem impedit mollitia est facilis quibusdam dolorum,
                  iste vel quaerat beatae numquam quis enim dolor aut.
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 border-y-2 border-solid py-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-erUOQght_VvS9h9OS_0J6wvFFIQHtIRgGjv-e1RBZ3fP02XlcM59WPkFb9cN-0U2uik&usqp=CAU"
                    alt=""
                    className="w-[2.5rem] h-[2.5rem] rounded-full"
                  />
                  <p className="font-[500] text-[1.25rem]">Rajesh Toka</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-[500] text-[1.125rem]">Comments</h3>
                <div className="mt-4 flex flex-col gap-4">
                  {Array.from({ length: 10 }).map((_, i) => {
                    return (
                      <div key={i} className="flex gap-3 items-start ">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-erUOQght_VvS9h9OS_0J6wvFFIQHtIRgGjv-e1RBZ3fP02XlcM59WPkFb9cN-0U2uik&usqp=CAU"
                          alt=""
                          className="w-8 h-8 rounded-full mt-1"
                        />
                        <div className="border-b-2 border-solid pb-2">
                          <div className="flex justify-between">
                            <p className="font-[500] ">Ramesh Mehta</p>
                            <p className="text-[14px]">10/10/2014 11:55am</p>
                          </div>
                          <p className=" ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Laboriosam, sint. Enim, voluptas. Ipsa,
                            voluptate corrupti.
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <div className="w-[35%]">
          <h3 className="font-[500] text-[1.125rem]">More of your videos</h3>
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
