import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import PopUp from "../components/Popup/PopUp";
const Home = () => {
  const [property, setProperty] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  const selectProperties = () => {
    Axios.get("http://localhost:3001/getProperties").then((response) => {
      setProperty(response.data);
    });
  };

  return (
    <div className="properties">
      <div className="searchbar"> Searchbar</div>
      <div className="listProperties">
        <button onClick={() => setButtonPopup(true)}>Open Popup</button>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>MyPopup</h1>
        </PopUp>
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
