import React from "react";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import swal from "sweetalert";
import CalcContainer from "./CalcContainer";



function MbToKb() {
  const [outPut, setOutPut] = useState("");
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const mbToKbHandler = () => {
    if (input === "" || input < 0) {
      swal("Error", "Please Enter a valid value", "error");
      return;
    }
    setOutPut((+input * 1000).toFixed(2) + " Kb");
  };

  const kbToMbHandler = () => {
    if (input === "" || input < 0) {
      swal("Error", "Please Enter a valid value", "error");
      return;
    }
    setOutPut(+input / 1000 + " Mb");
  };
  return (
    <CalcContainer>
      <h2>Megabytes 🔄 Kilobytes </h2>    
      <div className="chipContainer">
        <Chip
          className="chip"
          variant="outlined"
          label="Megabytes To Kilobytes"
          onClick={mbToKbHandler}
        />
        <Chip 
          className="chip"
          variant="outlined"
          label="Kilobytes To Megabytes"
          onClick={kbToMbHandler}
        />
      </div>
      <input
        required
        name="number"
        type="number"
        onChange={inputHandler}
        placeholder="Mb or Kb"
      ></input>
      <p>{outPut}</p>
    </CalcContainer>
  );
}

export default MbToKb;
