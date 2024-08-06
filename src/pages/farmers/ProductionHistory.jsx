import { useEffect, useState } from "react";
import MainInput from "../../components/MainInput";
import { MdOutlineFilterAlt } from "react-icons/md";
import {
  getProductionData,
  getQueuedProductionViaToken,
  getUsedServicesInProduction,
  getUsedWarehousesInProduction,
  updateProductionData
} from "../../apis/api";
import Paper from "@mui/material/Paper";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar
} from "@mui/material";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import { crops } from "../../assets/crops";
import DataTable from "../../components/DataTable";

const ProductionHistory = () => {
  const [productionQueue, setProductionQueue] = useState([]);
  const [usedServices, setUsedServices] = useState([]);
  const [usedWarehouses, setUsedWarehouses] = useState([]);

  const [snackbarOpen, setSnackbarOpen] = useState({
    open: false,
    message: ""
  });

  const [productionQueueToken, setProductionQueueToken] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  const [dialogOpen, setDialogOpen] = useState({
    data: {},
    visible: false
  });

  const [updatedCropData, setUpdatedCropData] = useState({
    crop: "",
    token: "",
    date: "",
    quantity: "",
    status: ""
  });

  const searchInProductionQueue = async (token) => {
    const response = await getQueuedProductionViaToken(token);
    setProductionQueue([response]);
  };

  const updateProduction = async () => {
    const response = await updateProductionData(updatedCropData);
    if (response.status === 200) {
      setSnackbarOpen({
        open: true,
        message: "Production updated successfully"
      });
    }
  };

  const serviceUsageColumns = [
    "SERIAL NO",
    "SERVICE",
    "CROP",
    "TOKEN",
    "COST",
    "START DATE",
    "DURATION",
    "STATUS"
  ];

  const serviceUsageColumnKeys = [
    "serviceName",
    "crop",
    "token",
    "cost",
    "startDate",
    "duration",
    "status"
  ];

  const productionQueueColumns = [
    "SERIAL NO",
    "CROP",
    "TOKEN",
    "PRODUCTION DATE",
    "ESTIMATED QUANTITY",
    "STATUS"
  ];

  const productionQueueColumnKeys = [
    "crop",
    "token",
    "date",
    "quantity",
    "status"
  ];

  const warehouseUsageColumns = [
    "SERIAL NO",
    "WAREHOUSE NAME",
    "CROP",
    "TOKEN",
    "DATE",
    "QUANTITY",
    "COST",
    "DURATION"
  ];

  const warehouseUsageColumnKeys = [
    "warehouseName",
    "crop",
    "productionToken",
    "date",
    "quantity+unit",
    "cost",
    "duration"
  ];

  useEffect(() => {
    const fetchQueuedData = async () => {
      const response = await getProductionData();
      setProductionQueue(response);
    };
    const fetchUsedServices = async () => {
      const response = await getUsedServicesInProduction();
      setUsedServices(response);
    };
    const fetchUsedWarehouses = async () => {
      const response = await getUsedWarehousesInProduction();
      setUsedWarehouses(response);
    };

    fetchUsedWarehouses();
    fetchUsedServices();
    fetchQueuedData();
  }, []);
  return (
    <div className="mt-8 w-[98%]">
      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem"
        }}
      >
        <div className="">
          <div className="border-b-[1px] border-solid border-grey pb-3">
            <h3 className="font-[600] text-[1.125rem]">
              Your production queue
            </h3>
            <p className="font-[500] text-brown">
              Your current production queue contains status of ongoing
              productions
            </p>
          </div>
          <div className="flex justify-between my-4 w-full">
            <div className="flex-1">
              <div className="w-[80%]">
                <MainInput
                  heading="Enter your token"
                  placeholder="Search by token"
                  className="mt-4"
                  type="text"
                  font="14px"
                  name="productionQueueToken"
                  value={productionQueueToken}
                  onChange={(e) => setProductionQueueToken(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter")
                      searchInProductionQueue(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-end relative">
              {menuOpen && (
                <Paper
                  sx={{
                    position: "absolute",
                    top: "0",
                    right: "7rem",
                    zIndex: "1000"
                  }}
                >
                  <MenuList>
                    <MenuItem>Harvested</MenuItem>
                    <MenuItem>Stored</MenuItem>
                    <MenuItem>Processing</MenuItem>
                  </MenuList>
                </Paper>
              )}
              {/* </Dialog> */}
              <div
                className="shadow-md bg-white px-4 py-2 cursor-pointer flex items-center font-[500] gap-1 rounded-lg"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <MdOutlineFilterAlt className="text-[20px]" /> Filter
              </div>
            </div>
          </div>
          <DataTable
            columns={productionQueueColumns}
            data={productionQueue}
            dataKeys={productionQueueColumnKeys}
            activation={(queue) => {
              setDialogOpen({
                data: queue,
                visible: true
              });
              setUpdatedCropData({
                quantity: queue?.quantity,
                status: queue?.status,
                token: queue?.token
              });
            }}
          />
        </div>
      </Paper>

      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem",
          marginTop: "1.5rem"
        }}
      >
        <div className="">
          <div className="border-b-[1px] border-solid border-grey pb-3">
            <h3 className="font-[600] text-[1.125rem]">Warehouses in use</h3>
            <p className="font-[500] text-brown">
              Enter your token and filter out your productions
            </p>
          </div>
          <div className="flex justify-between my-4 w-full">
            <div className="flex-1">
              <div className="w-[80%]">
                <MainInput
                  heading="Enter your token"
                  placeholder="Search by token"
                  className="mt-4"
                  type="text"
                  font="14px"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <div className="shadow-md bg-white px-4 py-2  flex items-center font-[500] gap-1 rounded-lg">
                <MdOutlineFilterAlt className="text-[20px]" /> Filter
              </div>
            </div>
          </div>
          <DataTable
            columns={warehouseUsageColumns}
            data={usedWarehouses}
            dataKeys={warehouseUsageColumnKeys}
          />
        </div>
      </Paper>

      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem",
          marginTop: "1.5rem"
        }}
      >
        <div className="bg-white  ">
          <div className="border-b-[1px] border-solid border-grey pb-3">
            <h3 className="font-[600] text-[1.125rem]">Your service usage</h3>
            <p className="font-[500] text-brown">
              List of services being used in your productions
            </p>
          </div>
          <div className="flex justify-between my-4 w-full">
            <div className="flex-1">
              <div className="w-[80%]">
                <MainInput
                  heading="Enter your token"
                  placeholder="Search by token"
                  className="mt-4"
                  type="text"
                  font="14px"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <div className="shadow-md bg-white px-4 py-2  flex items-center font-[500] gap-1 rounded-lg">
                <MdOutlineFilterAlt className="text-[20px]" /> Filter
              </div>
            </div>
          </div>
          <DataTable
            columns={serviceUsageColumns}
            data={usedServices}
            dataKeys={serviceUsageColumnKeys}
          />
        </div>
      </Paper>

      <Dialog
        open={dialogOpen.visible}
        onClose={() =>
          setDialogOpen({
            ...dialogOpen,
            visible: false
          })
        }
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            padding: "12px 1rem"
          }}
        >
          <div className="flex justify-between items-center">
            <h1 className="font-[600]">Edit production</h1>
            <IconButton
              onClick={() =>
                setDialogOpen({
                  ...dialogOpen,
                  visible: false
                })
              }
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>

        <DialogContent
          dividers
          sx={{
            padding: "0"
          }}
        >
          <div className="relative">
            <div className="relative">
              <img
                src={
                  crops.find((crop) => crop.value === dialogOpen?.data?.crop)
                    ?.img || "https://via.placeholder.com/150"
                }
                alt=""
                className="w-full h-[13rem] object-cover brightness-75"
              />

              <div className="absolute text-white left-5 bottom-5 leading-tight">
                <p className="text-[2rem]">CROP</p>
                <h1 className="text-[4rem] m-0 font-[600]">
                  {dialogOpen?.data?.crop}
                </h1>
              </div>
            </div>
            {/* <div className="absolute overlay-fade w-full"></div> */}
            <div className=" w-full p-4 px-6">
              <div className="grid grid-cols-3 grid-rows-2 gap-7">
                <div className="">
                  <h3 className="font-[500]">Crop name</h3>
                  <p className=" py-2">{dialogOpen?.data?.crop}</p>
                </div>
                <div className="">
                  <h3 className="font-[500]">Token</h3>
                  <p className="py-2">{dialogOpen?.data?.token}</p>
                </div>
                <div className="">
                  <h3 className="font-[500]">Estimated quantity</h3>
                  <p className=" border-b-2 border-solid py-2">
                    {dialogOpen?.data?.quantity} quintals
                  </p>
                </div>
                <div className="">
                  <h3 className="font-[500]">Date shown</h3>
                  <p className=" border-b-2 border-solid py-2">
                    {new Date(dialogOpen?.data?.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="">
                  <h3 className="font-[500]">Status</h3>
                  {/* <p className=" border-b-2 border-solid py-2">
                    {dialogOpen?.data?.status}
                  </p> */}

                  <input
                    type="text"
                    className="border-b-2 border-solid py-2"
                    value={updatedCropData.status}
                    onChange={(e) =>
                      setUpdatedCropData({
                        ...updatedCropData,
                        status: e.target.value
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex mt-6 gap-3">
                <InfoIcon fontSize="small" />
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  rerum voluptatem, deserunt veritatis amet dolores quos quod
                  deleniti temporibus dolorum eos corporis saepe nisi excepturi,
                  numquam eveniet iusto. Sed repudiandae dolore nam tenetur sint
                  fugiat ipsa architecto similique tempora, ex dignissimos eum
                  consequuntur, repellat voluptatum molestias quam? Iste, ipsa
                  eius!
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4 items-center">
            <Button
              variant="contained"
              onClick={() => {
                updateProduction();

                setDialogOpen({
                  ...dialogOpen,
                  visible: false
                });
              }}
            >
              Update
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbarOpen.open}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen({ ...snackbarOpen, open: false })}
        message={snackbarOpen.message}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </div>
  );
};

export default ProductionHistory;
