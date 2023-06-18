import React from "react";
import axios from "axios";

function popUp(props) {
  function deleteProperty(LiegNR) {
    axios
      .delete("http://localhost:3001/deleteProperty", {
        LiegNR: LiegNR,
      })
      .then(() => {
        window.location.replace("../home");
      });
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={deleteProperty(props.LiegNR)}>
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
