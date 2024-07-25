import { useMemo } from "react";
import { storage_areas } from "../assets/storages";
import { crops } from "../assets/crops";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import PropTypes from "prop-types";

const TableCellContent = ({ row, type }) => {
  switch (type) {
    case "storageType":
      return storage_areas[row[type]];
    case "price":
    case "commission":
    case "bookedPrice":
      return `Rs. ${row[type]}/-`;
    case "crop":
      return crops.find((crop) => crop.value === row[type]).name;
    default:
      return row[type];
  }
};

const DataTable = ({ columns, data, dataKeys }) => {
  const transformedData = useMemo(
    () =>
      data.map((row, rowIndex) => ({
        ...row,
        cells: dataKeys.map((key, cellIndex) => (
          <TableCell
            align="left"
            sx={{
              fontSize: "14px",
              fontWeight: "400"
            }}
            key={`${rowIndex}-${cellIndex}`}
          >
            <TableCellContent row={row} type={key} />
          </TableCell>
        ))
      })),
    [data, dataKeys]
  );

  return (
    <TableContainer className="mt-4">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                align="left"
                sx={{
                  fontSize: "14px",
                  color: "#7D7463",
                  fontWeight: "600"
                }}
                key={column} // Assuming columns are unique
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transformedData.map((row, index) => (
            <TableRow key={row.id || index}>
              {" "}
              {/* Assuming rows have unique 'id' */}
              <TableCell
                align="left"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400"
                }}
              >
                {index + 1}
              </TableCell>
              {row.cells}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired
};

export default DataTable;
