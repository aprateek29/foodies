import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  icons: {
    color: theme.palette.primary.main,
  },
  menuText: {
    fontWeight: "700",
    "& .MuiListItemText-primary": {
      fontWeight: "700",
    },
  },
}));

function TemporaryDrawer({ toggleDrawer, state }) {
  const classes = useStyles();
  const history = useHistory();

  const menuLinks = [
    {
      title: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/"),
    },
    {
      title: "Menu",
      icon: <MenuBookIcon />,
      onClick: () => history.push("/menu"),
    },
    {
      title: "Cart",
      icon: <ShoppingCartIcon />,
      onClick: () => history.push("/cart"),
    },
  ];

  const list = () => (
    <div
      role="presentation"
      style={{ width: "250px" }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography
        variant="h4"
        color="primary"
        style={{
          paddingLeft: "16px",
          paddingTop: "12px",
          paddingBottom: "12px",
          fontFamily: "Kaushan Script",
          fontWeight: "700",
        }}
      >
        Foodies
      </Typography>
      <Divider />
      <List>
        {menuLinks.map((item, index) => (
          <ListItem button key={item.title} onClick={item.onClick}>
            <ListItemIcon className={classes.icons}>{item.icon}</ListItemIcon>
            <ListItemText
              className={classes.menuText}
              style={{ fontWeight: "700" }}
              primary={item.title}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {["left"].map((anchor, i) => (
        <React.Fragment key={i}>
          <Drawer open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;
