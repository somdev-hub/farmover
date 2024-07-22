import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MainInput from "../../components/MainInput";
import { MdOutlineFilterAlt } from "react-icons/md";
import { Paper } from "@mui/material";
import { getContractDetails } from "../../apis/api";

const Contracts = () => {
  const [contracts, setContracts] = useState([]);

  const productio_history = [
    {
      crop: "Rice",
      token: "123456",
      production_date: "12/12/2021",
      estimated_quantity: "1000",
      status: "Harvested"
    },
    {
      crop: "Maize",
      token: "123457",
      production_date: "12/12/2021",
      estimated_quantity: "1000",
      status: "Harvested"
    },
    {
      crop: "Beans",
      token: "123458",
      production_date: "12/12/2021",
      estimated_quantity: "1000",
      status: "Stored"
    },
    {
      crop: "Rice",
      token: "123459",
      production_date: "12/12/2021",
      estimated_quantity: "1000",
      status: "Harvested"
    },
    {
      crop: "Rice",
      token: "123460",
      production_date: "12/12/2021",
      estimated_quantity: "1000",
      status: "Harvested"
    }
  ];

  useEffect(() => {
    const fetchContracts = async () => {
      const response = await getContractDetails();
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
                    SIGN DATE
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
                    DAYS LEFT
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
                    FARMER
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
                    ADDRESS
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
                    PHONE
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
                    STATUS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contracts?.map((contract, index) => {
                  const daysLeft = Math.floor(
                    (new Date(
                      new Date(contract.contractSignDate).getTime() +
                        contract.duration * 1000 * 60 * 60 * 24
                    ) -
                      new Date()) /
                      (1000 * 60 * 60 * 24)
                  );
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
                        {contract.contractSignDate}
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
                        {daysLeft}
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
                        {contract.price}
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
                        {contract.farmer}
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
                        {contract.address}
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
                        {contract.phone}
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
                        {contract.status}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      <div className="mt-8">
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
                    TOKEN
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
                    PRODUCTION DATE
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
                    ESTIMATED QUANTITY
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
                    STATUS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productio_history.map((history, index) => {
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
                        {history.crop}
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
                        {history.token}
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
                        {history.production_date}
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
                        {history.estimated_quantity}
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
                        {history.status}
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

export default Contracts;
