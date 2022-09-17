import { useEffect, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

const Calculator = () => {
  const [total, setTotal] = useState();
  const [rows, updateRows] = useState([
    { symbol: "plus", value: "", disabled: false },
  ]);

  const addRow = () => {
    let rowsArr = [...rows];
    rowsArr.push({ symbol: "plus", value: "", disabled: false });
    updateRows(rowsArr);
  };

  const deleteRow = (i) => {
    let rowsArr = [...rows];
    rowsArr.splice(i, 1);
    updateRows(rowsArr);
  };

  const disableRow = (i) => {
    let rowsArr = [...rows];
    rowsArr[i].disabled = !rowsArr[i].disabled;
    updateRows(rowsArr);
  };

  const onSymbolChange = (i, s) => {
    let rowsArr = [...rows];
    rowsArr[i].symbol = s;
    updateRows(rowsArr);
  };

  const onValueChange = (i, v) => {
    let rowsArr = [...rows];
    rowsArr[i].value = v;
    updateRows(rowsArr);
  };

  useEffect(() => {
    let sum = rows.reduce((sum, row) => {
      const val = row.value ? parseFloat(row.value) : 0;
      return row.disabled ? sum : row.symbol === "plus" ? sum + val : sum - val;
    }, 0);
    setTotal(sum);
  }, [rows]);

  return (
    <>
      <div className="calc-container">
        <Button onClick={addRow} variant="contained" className="button">
          Add Row
        </Button>
        <div className="row-container">
          {rows.map((row, i) => (
            <div className="row">
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <Select
                  value={row.symbol}
                  onChange={(e) => onSymbolChange(i, e.target.value)}
                  autoWidth
                  disabled={row.disabled}
                  className="selectField"
                  size="small"
                >
                  <MenuItem value={"plus"}>+</MenuItem>
                  <MenuItem value={"minus"}>-</MenuItem>
                </Select>
              </FormControl>
              <TextField
                onChange={(e) => {
                  onValueChange(i, e.target.value);
                }}
                variant="outlined"
                placeholder="Enter value"
                value={row.value}
                disabled={row.disabled}
                className="textfield"
                size="small"
              />
              <Button
                onClick={() => deleteRow(i)}
                variant="contained"
                className="button row-button"
              >
                Delete
              </Button>
              <Button
                onClick={() => disableRow(i)}
                variant="contained"
                className="button row-button"
              >
                {row.disabled ? "Enable" : "Disable"}
              </Button>
            </div>
          ))}
        </div>

        <Typography variant="h5" className="result">
          Result: {total}
        </Typography>
      </div>
    </>
  );
};
export default Calculator;
