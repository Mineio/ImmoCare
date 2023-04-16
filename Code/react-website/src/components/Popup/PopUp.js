import React from "react";
import "./popUp.css";

function PopUp(props) {
  const [property, setProperty] = useState([]);

  window.onload = () => {
    getProperties();
  };
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
            <tr key={key}>
              {/* Hier kommen noch die richtigen values heran */}
              <td id="">{val.name}</td>
              <td id="">{/*val.*/}</td>
              <td id="">{/*val.*/}</td>
              <td id="">{/*val.*/}</td>
              <td id="">{/*val.*/}</td>
            </tr>
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}
export default PopUp;
