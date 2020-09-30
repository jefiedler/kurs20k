import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import PropTypes from "prop-types";

function EditButton({ variant, color, size, handleClick }) {
  const classes = useStyles();

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onclick={handleClick}
      className={classes.button}
      startIcon={<EditIcon />}
    >
      Bearbeiten
    </Button>
  );
}

export default EditButton;

//PropTypes
EditButton.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  handleClick: PropTypes.func,
};

//Styyling
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
