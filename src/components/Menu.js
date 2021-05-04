import MenuItem from "./MenuItem";
import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CategoryMenu from "./CategoryMenu";
import home from "./home.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    backgroundColor: "white",
    paddingBottom: theme.spacing(3),
    backgroundSize: "cover",
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${home})`,
  },
  title: {
    marginLeft: theme.spacing(4),
    fontWeight: "800",
    fontFamily: "Kaushan Script",
    color: "white",
    letterSpacing: "4px",
  },
  subtitle: {
    color: "white",
    marginLeft: theme.spacing(4),
    fontWeight: "400",
    marginBottom: theme.spacing(6),
    letterSpacing: "2px",
    fontFamily: "Kaushan Script",
  },
}));
const Menu = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.title} variant="h2">
          Food
        </Typography>
        <Typography className={classes.subtitle} variant="h3">
          Explorer...
        </Typography>
      </div>
      <div
        style={{
          marginTop: "16px",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          boxShadow: "0 -4px 8px #ddd",
          paddingTop: "16px",
        }}
      >
        <CategoryMenu />
        <Typography style={{ textAlign: "center" }}>THE END</Typography>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Menu;
