import React from "react";
import { uuid } from "uuidv4";
import ShoeCard from "../ShoeCard/ShoeCard";
import "./ShoeList.css";

const ShoeList = (props) => {
  return (
    <div className="shoe-list">
      {props.shoes.map((shoe) => (
        <ShoeCard
          shoe={shoe}
          key={uuid()}
          //function declared for each card is unique to that card based on id
          toggleBookmark={() => props.toggleBookmark(shoe.id)}
        />
      ))}
    </div>
  );
};

export default ShoeList;
