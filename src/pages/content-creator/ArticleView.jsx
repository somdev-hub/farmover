import { Paper } from "@mui/material";

const ArticleView = () => {
  return (
    <div className="mt-8 w-[95%]">
      <div className="flex">
        <Paper
          sx={{
            p: 1,
            borderRadius: "1rem"
          }}
        >
          <div className=""></div>
        </Paper>
      </div>
    </div>
  );
};

export default ArticleView;
