import React from "react";
import axios from "axios";

function popUp(props) {
  function deleteProperty(LiegNR) {
    axios
      .put("http://localhost:3001/deleteProperty", {
        deleteProperty: LiegNR,
      })
      .then(() => {
        console.log("success");
      });
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={console.log(props.LiegNR)}>
          close
        </button>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default popUp;
