import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BasicCard from "../../Card/index";
import PropTypes from "prop-types";

function Home({ user }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Willkommen {user}</h1>
      <div className={classes.cardContainer}>
        <BasicCard
          categorieTitle="Teilnehmerverwaltung"
          description="Hier können Teilnehmer angelegt, gelöscht, durchsucht und Kontaktdaten gefunden werden."
          buttonTitle="Zur Teilnehmerverwaltung"
        />
        <BasicCard
          categorieTitle="Kursverwaltung"
          description="Hier können Kursverwaltung angelegt, gelöscht und durchsucht werden."
          buttonTitle="Zur Kursverwaltung"
        />
        <BasicCard
          categorieTitle="Rechnungsverwaltung"
          description="Hier können Rechnungen angelegt, gelöscht und durchsucht werden."
          buttonTitle="Zur Rechnungsverwaltung"
        />
      </div>
    </div>
  );
}

export default Home;

// PropTypes
Home.propTypes = {
  user: PropTypes.string,
};

//Styling

// const Container = styled.div`
//   margin-left: 20px;
// `;

const useStyles = makeStyles({
  container: {
    marginLeft: 20,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
