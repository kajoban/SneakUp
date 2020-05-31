import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./ShoeCard.css";

const ShoeCard = (props) => {
  {
    console.log(props.shoe.id + "  " + props.shoe.bookmarked);
  }
  return (
    <div className="shoe-card">
      <div className="shoe-picture">
        <img src={props.shoe.pic} />
      </div>
      <div className="top-row">
        <div className="shoe-name">{props.shoe.name}</div>
        <div className="favorite-icon"></div>
      </div>
      <div className="bottom-row">
        <div className="shoe-price bottom-column">
          {props.shoe.price + " (" + props.shoe.bookmarks + " bookmarks)"}
          <FontAwesomeIcon
            onClick={props.toggleBookmark}
            icon={faBookmark}
            className="bookmark-icon"
            color={props.shoe.bookmarked ? "gold" : "lightgrey"}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
