import React from "react";
import { Button } from "../ui/button/button";

export const StaffMenu = (props) => {
  console.log(("props", props));
  return (
    <div>
      <h2>{props.title}</h2>
      {/* {props.content.map((city) => (
        <Item>key(city.id) =>{} ()</Item>
      ))} */}
      <Button />
    </div>
  );
};
