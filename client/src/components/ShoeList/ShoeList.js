import React from "react";
import ShoeCard from "../ShoeCard/ShoeCard";
import "./ShoeList.css";

const ShoeList = (props) => {
  return (
    <div className="shoe-list">
      {props.shoes.map((shoe) => (
        <ShoeCard shoe={shoe} />
      ))}
    </div>
  );
};

export default ShoeList;
