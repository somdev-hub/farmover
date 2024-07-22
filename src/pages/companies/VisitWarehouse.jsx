import {
  Paper,
  Box,
  Tabs,
  Tab,
  Chip,
  TextField,
  Button,
  Pagination,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent
} from "@mui/material";
import { useEffect, useState } from "react";
import green_tick from "../../assets/green-tick.svg";
import { useLocation } from "react-router-dom";
import {
  getSpecificWarehouse,
  getWarehouseFarmers,
  getWarehouseMarket,
  purchaseCrops
} from "../../apis/api";
import { crops } from "../../assets/crops";
import { storage_areas } from "../../assets/storages";
import propTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const WarehouseDetails = ({ warehouseData }) => {
  return (
    <div className="">
      <div className="">
        <p className="font-[500]">Description</p>
        <p className="text-[14px] mt-3">{warehouseData?.warehouseDetails}</p>
      </div>
      <div className="mt-4">
        <p className="font-[500]">Facilities</p>
        <div className="mt-3">
          {warehouseData?.facilityList?.map((facility, i) => {
            return (
              <div key={i} className="flex gap-2 mt-2">
                <img src={green_tick} alt="" />
                <p className="text-[14px]">{facility}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Market = ({ id, cart }) => {
  const [warehouseMarket, setWarehouseMarket] = useState({});
  const dispatch = useDispatch();
  const productionTokens = useSelector(
    (state) => state.companyCart.productionTokens
  );

  useEffect(() => {
    const fetchWarehouseMarket = async () => {
      const response = await getWarehouseMarket(id);
      setWarehouseMarket(response);
      // console.log(response);
    };
    fetchWarehouseMarket();
  }, [id]);
  return (
    <div className="w-full">
      <div className="">
        <p className="font-[500] mb-4 ">Search items</p>
        <TextField
          id="outlined-basic"
          label="Search items"
          variant="outlined"
          className="w-full"
        />
      </div>
      <div className="mt-6">
        <h3 className="font-[500] text-[1.125rem] ">Market</h3>
        {warehouseMarket &&
          Object.keys(warehouseMarket)?.map((storage, i) => {
            return (
              <div key={i} className="">
                <p className="font-[600] text-[1.25rem] mt-6 border-b-2 pb-2">
                  {storage_areas.find((area) => area.value === storage).name}{" "}
                  Storage
                </p>
                {warehouseMarket[storage] &&
                  Object.keys(warehouseMarket[storage])?.map((item, i) => {
                    // console.log(warehouseMarket.storage[item]);
                    return (
                      <div key={i} className="">
                        <div className="mt-4 flex gap-4 items-center">
                          <div className="h-10 w-10 rounded-lg shadow-md">
                            <img
                              src={
                                crops.find((crop) => crop.value === item).img
                              }
                              alt=""
                              className="w-full h-full rounded-lg "
                            />
                          </div>
                          <p className=" font-[600] text-[1.25rem]">{item}</p>
                        </div>
                        {warehouseMarket[storage][item]?.map((farmer, i) => {
                          return (
                            <div
                              key={i}
                              className="p-4 border-solid border-2 rounded-lg mt-4"
                            >
                              <div className=" flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full bg-grey"></div>
                                  <div className="">
                                    <h4 className="font-[500]">
                                      {farmer.farmerName}
                                    </h4>
                                    <p>{farmer.farmerEmail}</p>
                                  </div>
                                </div>
                                <div className="">
                                  {cart.some(
                                    (cartItem) =>
                                      cartItem.farmerEmail ===
                                        farmer.farmerEmail &&
                                      cartItem.crop === item
                                  ) ? (
                                    <div className="bg-red-500 rounded-full p-1 cursor-pointer">
                                      <FaMinus
                                        className="text-[14px] text-white"
                                        onClick={() => {
                                          dispatch({
                                            type: "companyCart/addCompanyCart",
                                            payload: cart.filter(
                                              (item) =>
                                                item.farmerEmail !==
                                                farmer.farmerEmail
                                            )
                                          });
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    <Button
                                      variant="contained"
                                      onClick={() => {
                                        const index = cart.findIndex(
                                          (item) => item.crop === farmer.crop
                                        );
                                        if (index !== -1) {
                                          const updatedItem = {
                                            ...cart[index],
                                            price: cart[index].price,
                                            weight:
                                              cart[index].weight +
                                              farmer.weight,
                                            farmerEmail: farmer.farmerEmail
                                          };
                                          const newCart = [...cart];
                                          newCart[index] = updatedItem;
                                          dispatch({
                                            type: "companyCart/addCompanyCart",
                                            payload: newCart
                                          });
                                        } else {
                                          dispatch({
                                            type: "companyCart/addCompanyCart",
                                            payload: [
                                              ...cart,
                                              {
                                                crop: farmer.crop,
                                                price: farmer.price,
                                                weight: farmer.weight,
                                                unit: farmer.unit,
                                                farmerEmail: farmer.farmerEmail
                                              }
                                            ]
                                          });
                                        }

                                        dispatch({
                                          type: "companyCart/addProductionTokens",
                                          payload: {
                                            ...productionTokens,
                                            [farmer.productionToken]:
                                              parseFloat(farmer.weight)
                                          }
                                        });
                                      }}
                                    >
                                      Add to cart
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-2 italic">
                                <p className="">
                                  Item:{" "}
                                  {
                                    crops.find((crop) => crop.value === item)
                                      .name
                                  }
                                </p>
                                <p className="">
                                  Price: Rs. {farmer.price}/{farmer.unit}
                                </p>
                                <p className="">
                                  Available quantity: {farmer.weight}{" "}
                                  {farmer.unit}
                                </p>
                                <p className="">
                                  Storage Date: {farmer.bookedDate}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                        <div className="flex items-center justify-center w-full mt-6">
                          <Pagination count={5} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

const Farmers = ({ id }) => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const fetchWarehouseFarmers = async () => {
      const response = await getWarehouseFarmers(id);
      setFarmers(response);
    };
    fetchWarehouseFarmers();
  }, [id]);
  return (
    <div className="">
      <h3 className="font-[600] text-[1.125rem]">Registered farmers</h3>
      <div className="mt-6 flex flex-col gap-4">
        {farmers?.map((farmer, i) => {
          return (
            <div key={i} className="flex gap-4 items-center border-b-2 pb-4">
              <div className="w-10 h-10 rounded-full bg-grey">
                <img src={farmer?.profileImage} alt="" />
              </div>
              <div className="font-[500]">
                <h4>{farmer.name}</h4>
                <p className="text-brown">{farmer.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const VisitWarehouse = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const warehouseId = location.state.id;

  const [warehouseDetails, setWarehouseDetails] = useState({});
  const [purchaseDialog, setPurchaseDialog] = useState(false);
  const productionTokens = useSelector(
    (state) => state.companyCart.productionTokens
  );
  const cart = useSelector((state) => state.companyCart.companyCart);

  const dispatch = useDispatch();

  const confirmPurchase = async () => {
    const response = await purchaseCrops(productionTokens);
    if (response.status === 200) {
      dispatch({
        type: "companyCart/addCompanyCart",
        payload: []
      });
      dispatch({
        type: "companyCart/addProductionTokens",
        payload: {}
      });
      setPurchaseDialog(false);
    }
    // console.log(response);
  };

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      const response = await getSpecificWarehouse(warehouseId);

      setWarehouseDetails(response);
    };
    fetchWarehouseDetails();
  }, [warehouseId]);
  return (
    <div className="mt-8 flex ">
      <div className="w-[70%]">
        <Paper
          sx={{
            p: 1,
            borderRadius: "1rem"
          }}
        >
          <div className="relative w-full">
            <img
              src={warehouseDetails?.warehouseBackground}
              alt=""
              className="w-[100%] h-[14rem] object-cover rounded-[1rem]"
            />
            <div className="shadow-md rounded-lg w-[10rem] h-[6rem] absolute bottom-[-18%] left-12">
              <img
                src={warehouseDetails?.warehouseImage}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="mt-14 flex justify-between items-center w-full">
            <div className="ml-6 w-[60%]">
              <h3 className="font-[600] text-[1.5rem]">
                {warehouseDetails?.name}
              </h3>
              <h4 className="font-[500] text-[1.125rem]">
                Manager: {warehouseDetails?.owner?.uname}
              </h4>
              <p className="font-[500] mt-2">
                Address: {warehouseDetails?.address}, pin:{" "}
                {warehouseDetails?.pin}
              </p>
            </div>
            <div className="font-[500] text-[1rem] text-brown mr-6">
              <p>
                <Chip
                  label={
                    warehouseDetails?.ownership === "PRIVATE_OWNED"
                      ? "Private"
                      : "Public"
                  }
                  color="primary"
                />
              </p>
            </div>
          </div>
          <div className="mt-10 w-full">
            <div className="px-6">
              <Box>
                <Tabs
                  value={page}
                  onChange={(e, newValue) => setPage(newValue)}
                  textColor="primary"
                  indicatorColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="About" value={1} />
                  <Tab label="Market" value={2} />
                  <Tab label="Farmers" value={3} />
                </Tabs>
              </Box>
            </div>
          </div>
          <div className="px-6 mt-4 w-full">
            {
              {
                1: <WarehouseDetails warehouseData={warehouseDetails} />,
                2: (
                  <Market
                    id={warehouseId}
                    cart={cart}
                    // setCart={setCart}
                    productionTokens={productionTokens}
                    // setProductionTokens={setProductionTokens}
                  />
                ),
                3: <Farmers id={warehouseId} />
              }[page]
            }
          </div>
        </Paper>
      </div>

      <Paper
        sx={{
          width: "30%",
          mx: 2,
          p: 1,
          borderRadius: "1rem"
        }}
      >
        <h3 className="font-[600] text-[1.25rem] p-2">Your cart</h3>
        <div className="mt-4 flex flex-col gap-4 px-2">
          <div className="flex flex-col gap-4">
            {/* <Card className="p-4"> */}
            {cart?.map((farmer, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between items-center border-b-2 pb-3"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-lg shadow-md">
                      <img
                        src={
                          crops.find((crop) => crop.value === farmer.crop).img
                        }
                        alt=""
                        className="w-full h-full rounded-lg "
                      />
                    </div>
                    <div className="">
                      <h4 className="font-[500]">
                        {crops.find((crop) => crop.value === farmer.crop).name}
                      </h4>
                      <div className="flex gap-6">
                        <p>
                          Rs. {farmer.price}/{farmer.unit}
                        </p>
                        <p>
                          {farmer.weight} {farmer.unit}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div
                      className="bg-red-500 rounded-full p-1 cursor-pointer"
                      onClick={() => {
                        const newCart = cart.filter((item) => item !== farmer);
                        dispatch({
                          type: "companyCart/addCompanyCart",
                          payload: newCart
                        });
                      }}
                    >
                      <FaMinus className="text-[14px] text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
            {/* </Card> */}
          </div>
        </div>
        {cart.length > 0 && (
          <div className="">
            <div className="flex justify-between items-center p-2">
              <p className="font-[500]">Total</p>
              <p className="font-[500]">
                Rs.{" "}
                {cart.reduce((acc, farmer) => {
                  return acc + farmer.price * farmer.weight;
                }, 0)}
              </p>
            </div>

            <div className="flex items-center justify-center mt-4">
              <Button
                variant="contained"
                onClick={() => {
                  setPurchaseDialog(true);
                }}
              >
                Purchase
              </Button>
            </div>
          </div>
        )}
      </Paper>

      <Dialog
        open={purchaseDialog}
        onClose={() => setPurchaseDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <div className="flex justify-between items-center">
            <h1 className="font-[600]">Purchase</h1>
            <IconButton onClick={() => setPurchaseDialog(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-4">
            {cart?.map((item, i) => (
              <div key={i} className="flex gap-4 items-center border-b-2 pb-3">
                <div className="w-12 h-12 rounded-lg shadow-md">
                  <img
                    src={
                      crops.find((crop) => crop.value === item.crop)?.img || ""
                    }
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-[500]">{item.crop}</h4>
                  <div className="flex gap-6">
                    <p>
                      Rs. {item.price}/{item.unit}
                    </p>
                    <p>
                      {item.weight} {item.unit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 font-[500] text-[1.125rem]">
            <p>Total</p>
            <p>
              Rs.{" "}
              {cart.reduce((acc, item) => {
                return acc + item.price * item.weight;
              }, 0)}
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <Button variant="contained" onClick={confirmPurchase}>
              Confirm purchase
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

WarehouseDetails.propTypes = {
  warehouseData: propTypes.object
};

Market.propTypes = {
  id: propTypes.string,
  cart: propTypes.array
};

Farmers.propTypes = {
  id: propTypes.string
};

export default VisitWarehouse;
