import React from "react";
import "./popUp.css";

function PopUp(props) {
  const [property, setProperty] = useState([]);

  const getProperties = () => {
    Axios.get("http://localhost:3001/getData").then((response) => {
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

        {property.map((val, key) => {
          return (
            <div key={key} className="song-list" id={val.SongId}>
              <h3>Name: {} </h3>
              <h3>Interpret: {}</h3>
              <h3>Länge: {}</h3>
              <h3>Release: {}</h3>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}
export default PopUp;
