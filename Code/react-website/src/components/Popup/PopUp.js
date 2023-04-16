import React from "react";
import "./popUp.css";

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn"></button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default PopUp;
