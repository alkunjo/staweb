import React from "react";
import Paper from "@material-ui/core/Paper";
import Autocomplete from "../components/autocomplete";
const Chart = props => {
  return (
    <Paper style={{ padding: "15px" }}>
      <Autocomplete />
    </Paper>
  );
};

export default Chart;
