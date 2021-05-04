import MenuItem from "./MenuItem";
import React from "react";
import Data from "../data";
import { Divider, Typography } from "@material-ui/core";
import { InsertEmoticonRounded } from "@material-ui/icons";

const CategoryMenu = () => {
  return (
    <>
      {Data.map((category, index) => (
        <div key={index}>
          <Typography
            style={{
              margin: "20px auto",
              marginTop: "32px",
              fontFamily: "fantasy",
              letterSpacing: ".1em",
            }}
            variant="h4"
            align="center"
          >
            {Object.keys(Data[index]).toString().toUpperCase()}
          </Typography>
          {Data[index][Object.keys(Data[index])].map((item, index) => {
            return (
              <MenuItem
                key={item.id}
                id={item.id}
                veg={item.veg}
                name={item.name}
                price={item.price}
                item={item}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};

export default CategoryMenu;
