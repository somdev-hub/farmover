import React from "react";
import { Paper } from "@mui/material";

const Learning = () => {
  return (
    <div>
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

          <div className="mt-6 flex gap-7 flex-wrap">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <div className="w-[13rem]" key={index}>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/02/04/13/23/tea-623796_1280.jpg"
                    alt=""
                    className="w-full h-[8rem] object-cover rounded-[1rem]"
                  />
                  <div className="px-0">
                    <h4 className="font-[500] text-[14px] mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error, at.
                    </h4>
                    <div className="flex gap-2 items-center my-2">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/02/04/13/23/tea-623796_1280.jpg"
                        alt=""
                        className="w-[1.75rem] h-[1.75rem] rounded-full object-cover"
                      />
                      <h4 className="font-[500] text-grey text-[14px]">
                        Ritesh Choudhary
                      </h4>
                    </div>
                    <p className="text-[12px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime suscipit quidem velit
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center items-center gap-4">
            <div className="rounded-full border-solid border-2  box-border w-6 text-[12px] h-6 font-[500] text-center flex justify-center items-center">
              1
            </div>
            <div className="rounded-full border-solid border-2  box-border w-6 text-[12px] h-6 font-[500] text-center flex justify-center items-center">
              2
            </div>
            <div className="rounded-full border-solid border-2  box-border w-6 text-[12px] h-6 font-[500] text-center flex justify-center items-center">
              3
            </div>
          </div>
        </Paper>

        <div className="mt-10">
          <h3 className="font-[500] text-[1.125rem]">Articles for you</h3>
          <p className="text-brown">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dolores et quaerat minima eos dolor quibusdam sint qui in libero.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <Paper
                  key={index}
                  sx={{
                    width: "18rem",
                    p: 1,
                    borderRadius: "1rem"
                  }}
                >
                  <img
                    src="
            https://cdn.pixabay.com/photo/2015/02/04/13/23/tea-623796_1280.jpg"
                    alt=""
                    className="w-full h-[8rem] object-cover rounded-[1rem]"
                  />

                  <div className="px-2">
                    <h4 className="font-[500] text-[14px] mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error, Lorem ipsum dolor sit amet
                    </h4>
                    <div className="flex gap-2 items-center my-2">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/02/04/13/23/tea-623796_1280.jpg"
                        alt=""
                        className="w-[1.75rem] h-[1.75rem] rounded-full object-cover"
                      />
                      <h4 className="font-[500] text-grey text-[14px]">
                        Ritesh Choudhary
                      </h4>
                    </div>
                    <p className="text-[12px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime suscipit quidem velit Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Cum tempora, vel eaque ullam
                      maiores dolor.
                    </p>
                  </div>
                  {/* " alt="" /> */}
                </Paper>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
