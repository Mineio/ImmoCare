import React from "react";
import Axios from "axios";

function popUp(props) {
  const deleteProperty = (LiegNR) => {
    Axios.delete(`http://localhost:3001/deleteProperty/${LiegNR}`, {})
      .then(() => {
        console.log("success");
        window.location.replace("../home");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn">Nein</button>
        <button
          className="delete-btn"
          onClick={() => deleteProperty(props.LiegNR)}
        >
          JA
        </button>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default popUp;
