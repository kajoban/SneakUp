import React from "react";
import "./ShoeCard.css";

const ShoeCard = (props) => {
  return (
    <div className="shoe-card">
      <div className="shoe-picture">
        <img src={props.shoe.pic} width="350px" height="350px" />
      </div>
      <div className="top-row">
        <div className="shoe-name">{props.shoe.name}</div>
        <div className="favorite-icon"></div>
      </div>
      <div className="bottom-row">
        <div className="shoe-price bottom-column">
          {props.shoe.price + ", " + props.shoe.bids + " bids"}
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
