import React from "react";
import "./popUp.css";
import { useState } from "react";
import axios from "axios";

function PopUp(props) {
  const [property, setProperty] = useState([]);

  const getProperties = () => {
    axios.get("http://localhost:3001/getData").then((response) => {
      setProperty(response.data);
    });
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default PopUp;
