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
import { getBookings } from "../../apis/api";
import { storage_areas } from "../../assets/storages";

const WarehouseDetails = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      const response = await getBookings();
      setContracts(response);
    };
    fetchContracts();
  }, []);
  return (
    <div className="mt-8">
      <div className="">
        <Paper
          sx={{
            p: 3,
            borderRadius: "1rem"
          }}
        >
          <div className="border-b-[1px] border-solid border-grey pb-3">
            <h3 className="font-[600] text-[1.125rem]">
              Search your contracts
            </h3>
            <p className="font-[500] text-brown">
              Enter your id and filter out your contracts
            </p>
          </div>
          <div className="flex justify-between my-4 w-full">
            <div className="flex-1">
              <div className="w-[80%]">
                <MainInput
                  heading="Enter your id"
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
                    STORAGE
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
                    BOOKING DATE
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
                    DURATION
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
                    WEIGHT
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
                    PRICE
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
                    EMAIL
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
                    INCOME
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contracts?.map((contract, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "14px",
                          // color: "#7D7463",
                          fontWeight: "400",
                          paddingRight: "2rem"
                        }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "14px",
                          // color: "#7D7463",
                          fontWeight: "400",
                          paddingRight: "2rem"
                        }}
                      >
                        {
                          storage_areas.find(
                            (area) => area.value === contract.storageType
                          ).name
                        }{" "}
                        storage
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "14px",
                          // color: "#7D7463",
                          fontWeight: "400",
                          paddingRight: "2rem"
                        }}
                      >
                        {/* number of days left */}
                        {contract.bookingDate}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "14px",
                          // color: "#7D7463",
                          fontWeight: "400",
                          paddingRight: "2rem"
                        }}
                      >
                        {contract.bookingDuration} days
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "14px",
                          // color: "#7D7463",
                          fontWeight: "400",
                          paddingRight: "2rem"
                        }}
                      >
                        {contract.bookedWeight}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "14px",
                          // color: "#7D7463",
                          fontWeight: "400",
                          paddingRight: "2rem"
                        }}
                      >
                        {contract.itemPrice}/{contract.itemUnit}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "14px",
                          // color: "#7D7463",
                          fontWeight: "400",
                          paddingRight: "2rem"
                        }}
                      >
                        {contract.clientEmail}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "14px",
                          // color: "#7D7463",
                          fontWeight: "400",
                          paddingRight: "2rem"
                        }}
                      >
                        {contract.bookedPrice}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default WarehouseDetails;
