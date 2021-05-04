import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Badge,
  Button,
  CircularProgress,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShortTextIcon from "@material-ui/icons/ShortText";
import Drawer from "./Drawer";
import { Link as RouterLink } from "react-router-dom";
import { useCart, useDispatchCart } from "../context/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "black",
  },
  title: {
    flex: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatchCart();

  const items = useCart();
  const qty = items.reduce((a, c) => a + c.qty, 0);

  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <AppBar className={classes.root} position="fixed">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)}>
            <ShortTextIcon
              fontSize="large"
              className={classes.menuIcon}
              color="primary"
            />
          </IconButton>
          <Typography
            variant="h4"
            className={classes.title}
            style={{
              letterSpacing: "2px",
              fontWeight: "800",
              fontFamily: "Kaushan Script",
            }}
          >
            Foodies...
          </Typography>
          <IconButton to="/cart" component={RouterLink}>
            <Badge badgeContent={qty} color="secondary">
              <ShoppingCartIcon color="primary" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer state={state} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
