import { Button, Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import home from "./home.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "90vh",
    backgroundSize: "cover",
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${home})`,
  },
  img: {
    zIndex: "-1",
    width: "100%",
    height: "100%",
    position: "fixed",
    display: "none",
  },
  slogan: {
    color: "white",
  },
  orderBtn: {
    maxWidth: "100px",
  },
});

const Home = () => {
  const classes = useStyles();
  const [i, setI] = React.useState(true);
  return (
    <>
      <img className={classes.img} src={home} alt="foodies image" />
      <Grid
        className={classes.root}
        direction="column"
        justify="center"
        alignItems="center"
        container
      >
        <Typography
          style={{ fontFamily: "Kaushan Script" }}
          variant="h1"
          className={classes.slogan}
        >
          Foodies
        </Typography>
        <Typography
          style={{ fontFamily: "Kaushan Script" }}
          variant="h4"
          className={classes.slogan}
        >
          Never have a bad meal
        </Typography>
        <br />
        <Button
          variant="contained"
          color="secondary"
          className={classes.orderBtn}
          endIcon={i ? <ArrowForwardIosIcon /> : <ArrowForwardIcon />}
          component={RouterLink}
          to="/menu"
          onMouseEnter={() => setI(true)}
          onMouseLeave={() => setI(false)}
        >
          Order
        </Button>
      </Grid>
    </>
  );
};

export default Home;
