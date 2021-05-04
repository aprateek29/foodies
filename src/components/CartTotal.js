import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useCart } from "../context/GlobalContext";
const useStyles = makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    top: "auto",
  },
}));

const CartTotal = () => {
  const items = useCart();
  const classes = useStyles();
  const price = items.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            align="right"
            style={{ flex: "1", fontWeight: "700" }}
          >
            Total: {price.toFixed(2)}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default CartTotal;
