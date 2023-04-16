import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    selectProperties();
  }, []);

  const selectProperties = () => {
    Axios.get("http://localhost:3001/getProperties").then((response) => {
      setProperty(response.data);
    });
  };

  return (
    <div className="properties">
      <div className="searchbar"> Searchbar</div>
      <div className="listProperties">
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
                  <div class="berreich">Hallo Welt</div>
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
