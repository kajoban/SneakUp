import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./ShoeCard.css";

const ShoeCard = (props) => {
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
          <div onClick={props.toggleBookmark}>
            <FontAwesomeIcon
              icon={faBookmark}
              className="bookmark-icon"
              color="lightgrey"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
