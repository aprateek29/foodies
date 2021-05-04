import React from "react";
import {
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { makeStyles } from "@material-ui/core/styles";
import { useCart, useDispatchCart } from "../context/GlobalContext";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { withSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    marginBottom: theme.spacing(2),
  },
}));

const MenuItem = ({
  id,
  veg,
  name,
  price,
  showQty,
  qty,
  item,
  enqueueSnackbar,
}) => {
  const items = useCart();
  const classes = useStyles();
  const dispatch = useDispatchCart();
  const showAddButton = "true";

  const addToCart = (item) => {
    enqueueSnackbar("Added to cart");
    dispatch({ type: "ADD", item: item.item });
  };

  const removeFromCart = (id) => {
    if (typeof items.find((x) => x.id === id) !== "undefined") {
      enqueueSnackbar("Removed from cart");
    }
    dispatch({ type: "REMOVE", id });
  };

  return (
    <>
      <Container className={classes.root}>
        <Grid alignItems="center" container>
          <Grid xs={2} sm={1} item>
            <IconButton>
              {veg === "true" ? (
                <RadioButtonCheckedIcon style={{ color: "green" }} />
              ) : (
                <RadioButtonCheckedIcon style={{ color: "red" }} />
              )}
            </IconButton>
          </Grid>
          <Grid xs={7} sm item>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography variant="body2" style={{ fontStyle: "italic" }}>
              Rs. {price}
            </Typography>
            {showQty && (
              <Typography variant="body2" style={{ fontWeight: "700" }}>
                x {qty}
              </Typography>
            )}
          </Grid>
          <Grid xs={3} sm={3} item>
            {showAddButton && (
              <IconButton size="small" onClick={() => addToCart({ item })}>
                <AddBoxIcon color="primary" />
              </IconButton>
            )}
            <IconButton size="small" onClick={() => removeFromCart(id)}>
              <IndeterminateCheckBoxIcon color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </>
  );
};

export default withSnackbar(MenuItem);
