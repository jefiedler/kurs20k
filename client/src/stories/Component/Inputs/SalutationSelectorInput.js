import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function SalutationSelectorinput() {
  const classes = useStyles();
  const [salutationValue, setsalutaionValue] = React.useState("");

  const handleChange = (event) => {
    setsalutaionValue(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="salutation-select-label">Anrede</InputLabel>
        <Select
          labelId="salutation-select-label"
          id="salutaion-select"
          value={salutationValue}
          onChange={handleChange}
        >
          <MenuItem value={"Herr"}>Herr</MenuItem>
          <MenuItem value={"Frau"}>Frau</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SalutationSelectorinput;

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
