import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useCart } from "../context/GlobalContext";
import MenuItem from "./MenuItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "800",
    fontFamily: "Kaushan Script",
    color: "black",
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  empty: {
    color: "#888",
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  pad: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const Cart = () => {
  const items = useCart();
  let empty = true;
  if (items.length > 0) {
    empty = false;
  }
  const classes = useStyles();
  const price = items.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = price * 0.05;
  const shippingPrice = 40;
  const total = price + taxPrice + shippingPrice;
  return (
    <>
      <Divider />
      <Typography className={classes.title} variant="h2">
        Cart
      </Typography>
      {empty && (
        <Typography className={classes.empty} variant="h4">
          Cart is empty
        </Typography>
      )}
      {items.map((item, index) => {
        return (
          <MenuItem
            key={index}
            id={item.id}
            veg={item.veg}
            name={item.name}
            price={item.price}
            item={item}
            showQty={true}
            qty={item.qty}
          />
        );
      })}
      {!empty && (
        <>
          <Typography
            style={{ paddingTop: "24px" }}
            display="block"
            align="center"
            variant="h5"
          >
            Cart Summary
          </Typography>
          <Grid className={classes.pad} container justify="center">
            <Grid xs={5} item>
              <Typography align="left">Total (Before Tax):</Typography>
              <Divider />
            </Grid>
            <Grid xs={5} item>
              <Typography align="right">{price.toFixed(2)}</Typography>
              <Divider />
            </Grid>
          </Grid>
          <Grid className={classes.pad} container justify="center">
            <Grid xs={5} item>
              <Typography align="left">Tax (@ 5%):</Typography>
              <Divider />
            </Grid>
            <Grid xs={5} item>
              <Typography align="right">{taxPrice.toFixed(2)}</Typography>
              <Divider />
            </Grid>
          </Grid>
          <Grid className={classes.pad} container justify="center">
            <Grid xs={5} item>
              <Typography align="left">Shipping Fee:</Typography>
              <Divider />
            </Grid>
            <Grid xs={5} item>
              <Typography align="right">{shippingPrice}</Typography>
              <Divider />
            </Grid>
          </Grid>
          <Grid className={classes.pad} container justify="center">
            <Grid xs={5} item>
              <Typography align="left" style={{ fontWeight: "700" }}>
                Total:
              </Typography>
              <Divider />
            </Grid>
            <Grid xs={5} item>
              <Typography align="right" style={{ fontWeight: "700" }}>
                {total.toFixed(2)}
              </Typography>
              <Divider />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Cart;
