import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CropSelectDialogBox = ({ open, onClose, selectCrop }) => {
  // productions
  /**
   * RICE,
    WHEAT,
    MAIZE,
    SUGARCANE,
    COTTON,
    SOYBEAN,
    CHICKPEA,
    GROUNDNUT,
    MUSTARD,
    BARLEY,
    MILLETS,
    PULSES,
    TEA,
    COFFEE,
    RUBBER,
    TOBACCO,
    BANANA,
    MANGO,
    COCONUT,
    TURMERIC
   */

  const crops = [
    {
      name: "Rice",
      value: "RICE",
      img: "https://cdn.pixabay.com/photo/2021/11/19/11/55/field-6809045_1280.jpg"
    },
    {
      name: "Wheat",
      value: "WHEAT",
      img: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg"
    },
    {
      name: "Maize",
      value: "MAIZE",
      img: "https://cdn.pixabay.com/photo/2016/03/28/09/48/cornfield-1285244_1280.jpg"
    },
    {
      name: "Sugarcane",
      value: "SUGARCANE",
      img: "https://cdn.pixabay.com/photo/2020/07/09/20/05/sugarcane-5388628_1280.jpg"
    },
    {
      name: "Cotton",
      value: "COTTON",
      img: "https://cdn.pixabay.com/photo/2019/11/24/17/08/cotton-4649804_1280.jpg"
    },
    {
      name: "Soybean",
      value: "SOYBEAN",
      img: "https://cdn.pixabay.com/photo/2015/09/15/20/19/soy-941737_1280.jpg"
    },
    {
      name: "Chickpea",
      value: "CHICKPEA",
      img: "https://cdn.pixabay.com/photo/2017/04/18/20/59/chickpeas-2240388_960_720.jpg"
    },
    {
      name: "Groundnut",
      value: "GROUNDNUT",
      img: "https://cdn.pixabay.com/photo/2018/01/02/07/22/food-3055647_960_720.jpg"
    },
    {
      name: "Mustard",
      value: "MUSTARD",
      img: "https://cdn.pixabay.com/photo/2019/12/10/20/55/yellow-mustard-4686889_1280.jpg"
    },
    {
      name: "Barley",
      value: "BARLEY",
      img: "https://cdn.pixabay.com/photo/2018/06/23/08/34/wheat-3492292_960_720.jpg"
    },
    {
      name: "Millets",
      value: "MILLETS",
      img: "https://cdn.pixabay.com/photo/2016/09/26/21/18/millet-1697117_1280.jpg"
    },
    {
      name: "Pulses",
      value: "PULSES",
      img: "https://cdn.pixabay.com/photo/2021/05/06/08/50/food-6232920_1280.jpg"
    },
    {
      name: "Tea",
      value: "TEA",
      img: "https://example.com/tea.jpg"
    },
    {
      name: "Coffee",
      value: "COFFEE",
      img: "https://example.com/coffee.jpg"
    },
    {
      name: "Rubber",
      value: "RUBBER",
      img: "https://example.com/rubber.jpg"
    },
    {
      name: "Tobacco",
      value: "TOBACCO",
      img: "https://example.com/tobacco.jpg"
    },
    {
      name: "Banana",
      value: "BANANA"
    }
  ];
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <div className="flex justify-between items-center">
          <h1 className="font-[600]">Select Storage</h1>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div className="flex flex-wrap gap-4 justify-center">
          {crops.map((item, i) => (
            <div
              className="flex flex-col items-center justify-center cursor-pointer"
              key={i}
              onClick={() => {
                selectCrop(item.value);
                onClose();
              }}
            >
              <div className="border-2 border-solid border-grey rounded-[1rem] w-[7rem] h-[7rem] items-center justify-center flex flex-col">
                <img
                  src={item.img}
                  alt=""
                  className="w-[98%] h-[98%] rounded-[inherit] object-cover"
                />
              </div>
              <p className="text-center mt-3 font-[500]">{item.name}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CropSelectDialogBox;
