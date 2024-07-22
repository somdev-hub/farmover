import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import MainInput from "../../components/MainInput";
import { MdOutlineFilterAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { getCompanyPurchases } from "../../apis/api";
import { crops } from "../../assets/crops";

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      const response = await getCompanyPurchases();
      setPurchases(response);
    };
    fetchPurchases();
  }, []);
  return (
    <div className="mt-8 w-[95%]">
      <Paper
        sx={{
          p: 2,
          borderRadius: "1rem"
        }}
      >
        <div className="border-b-[1px] border-solid border-grey pb-3">
          <h3 className="font-[600] text-[1.125rem]">Your purchases</h3>
          <p className="font-[500] text-brown">
            Enter your token and filter out your productions
          </p>
        </div>
        <div className="flex justify-between my-4 w-full">
          <div className="flex-1">
            <div className="w-[80%]">
              <MainInput
                heading="Enter your Id"
                placeholder="Search by id"
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
        <TableContainer className="mt-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    color: "#7D7463",
                    fontWeight: "600",
                    paddingRight: "2rem"
                  }}
                >
                  SERIAL NO
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    color: "#7D7463",
                    fontWeight: "600",
                    paddingRight: "2rem"
                  }}
                >
                  CROP
                </TableCell>

                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    color: "#7D7463",
                    fontWeight: "600",
                    paddingRight: "2rem"
                  }}
                >
                  PURCHASE DATE
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    color: "#7D7463",
                    fontWeight: "600",
                    paddingRight: "2rem"
                  }}
                >
                  WAREHOUSE
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    color: "#7D7463",
                    fontWeight: "600",
                    paddingRight: "2rem"
                  }}
                >
                  QUANTITY
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    color: "#7D7463",
                    fontWeight: "600",
                    paddingRight: "2rem"
                  }}
                >
                  PRICE PER UNIT
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    color: "#7D7463",
                    fontWeight: "600",
                    paddingRight: "2rem"
                  }}
                >
                  TOTAL
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchases.map((purchase, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "14px",
                        color: "#7D7463",
                        fontWeight: "500",
                        paddingRight: "2rem"
                      }}
                    >
                      {purchase.id}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "14px",
                        color: "#7D7463",
                        fontWeight: "500",
                        paddingRight: "2rem"
                      }}
                    >
                      {crops.find((crop) => crop.value === purchase.crop)?.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "14px",
                        color: "#7D7463",
                        fontWeight: "500",
                        paddingRight: "2rem"
                      }}
                    >
                      {purchase.purchaseDate}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "14px",
                        color: "#7D7463",
                        fontWeight: "500",
                        paddingRight: "2rem"
                      }}
                    >
                      {purchase.warehouseName}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "14px",
                        color: "#7D7463",
                        fontWeight: "500",
                        paddingRight: "2rem"
                      }}
                    >
                      {purchase.purchaseQuantity}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "14px",
                        color: "#7D7463",
                        fontWeight: "500",
                        paddingRight: "2rem"
                      }}
                    >
                      {purchase.purchasePrice}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "14px",
                        color: "#7D7463",
                        fontWeight: "500",
                        paddingRight: "2rem"
                      }}
                    >
                      Rs. {purchase.purchaseTotal}/-
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Purchases;
