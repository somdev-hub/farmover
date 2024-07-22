import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ServiceSelectDialogBox = ({ open, onClose, selectService }) => {
  const Service_areas = [
    {
      name: "Harvesting Service",
      img: "https://www.svgrepo.com/show/475586/snow.svg"
    },
    {
      name: "Ploughing Service",
      img: "https://www.svgrepo.com/show/513351/sun.svg"
    },
    {
      name: "Irrigation Service",
      img: "https://www.svgrepo.com/show/421981/dry-keep-protect.svg"
    },
    {
      name: "Fertilization Service",
      img: "https://www.svgrepo.com/show/530369/milk.svg"
    },
    {
      name: "Pesticide Service",
      img: "https://www.svgrepo.com/show/468751/eggs.svg"
    }
  ];
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <div className="flex justify-between items-center">
          <h1 className="font-[600]">Select Service</h1>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div className="flex flex-wrap gap-4 justify-center">
          {Service_areas.map((item, i) => (
            <div
              className="flex flex-col items-center justify-center cursor-pointer"
              key={i}
              onClick={() => selectService(item.name)}
            >
              <div className="border-2 border-solid border-grey px-4 py-4 rounded-[1rem] w-[7rem] h-[7rem] items-center justify-center flex flex-col">
                <img src={item.img} alt="" className="w-[90%] object-cover" />
              </div>
              <p className="text-center mt-3 font-[500]">{item.name}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceSelectDialogBox;
