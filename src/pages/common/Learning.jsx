import { Pagination, Paper } from "@mui/material";

const Learning = () => {
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

          <div className="mt-3 flex justify-start items-center flex-wrap">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <div className="w-[13rem] my-3 mr-4" key={index}>
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
          <div className="my-4 flex items-center justify-center">
            <Pagination count={5} />
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
                    width: "23.5%",
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
