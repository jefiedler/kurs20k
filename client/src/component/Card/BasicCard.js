import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

BasicCard.propTypes = {};

function BasicCard({ categorieTitle, description, buttonTitle, link }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {categorieTitle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a className={classes.link} href={link}>
            {buttonTitle}
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;

// Proptypes
BasicCard.propTypes = {
  categorieTitle: PropTypes.string,
  description: PropTypes.string,
  buttonTitle: PropTypes.string,
  link: PropTypes.string,
};

//Styling
const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: 10,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: "none",
  },
});
