import { Paper } from "@mui/material";
import { MdDelete, MdOutlineUnpublished, MdUpdate } from "react-icons/md";

const ArticleView = () => {
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
                src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
                alt=""
                className="w-full sm:h-[20rem] object-cover rounded-lg"
              />
              <div className="mt-4 px-2">
                <p className="font-[500] text-blue-400 my-3">
                  #agriculture, #farming, #gardening, #principles, #crops
                </p>
                <h2 className="font-[500] text-[1.75rem]">
                  How to excel in agriculture with Dr. Stanley Morgan.
                  Discussion about basic farming techniques
                </h2>
                <div className=" border-l-4 border-blue-500 pl-4 mt-4 py-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur cupiditate minima accusamus qui possimus illum,
                    impedit, nemo ea animi nesciunt ad obcaecati optio, quod
                    quasi dolor repellendus hic harum omnis?
                  </p>
                </div>
              </div>
              <div className="mt-4 w-full">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                blanditiis repellat facilis delectus quisquam, quo magni
                voluptatibus impedit dicta, quis obcaecati numquam! Magni
                aliquam enim animi illo adipisci veritatis eligendi similique in
                sequi, quae repellendus reiciendis fugit rerum, dicta molestias
                atque nulla, minima asperiores sunt. Blanditiis aliquid
                asperiores cumque quod ab perferendis sint architecto qui. Non,
                iure exercitationem incidunt doloremque, nostrum ipsam suscipit
                quia accusantium dolores quis dolorum quasi veniam velit sunt
                necessitatibus aut dicta. Modi dicta architecto a totam sint
                voluptas nulla provident nobis, repellendus animi possimus
                mollitia harum consequuntur culpa beatae, dolor commodi tenetur
                velit iure molestiae at.
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
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
