import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

function DeleteButton({ variant, color, size, handleClick }) {
  const classes = useStyles();

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onclick={handleClick}
      className={classes.button}
      startIcon={<DeleteIcon />}
    >
      Löschen
    </Button>
  );
}

export default DeleteButton;

//PropTypes
DeleteButton.propTypes = {
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
