import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const ClickedProperty = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = () => {
    setProperty(JSON.parse(localStorage.getItem("property")));
  };

  return (
    <div className="clickedProperty">
      <table>
        <tbody>
          <tr>
            <td id="liegKosten">{property.LiegTyp}</td>
            <td id="liegKosten">{property.LiegBezeichnung}</td>
            <td id="liegKosten">{"Kosten Haus"}</td>
            <td id="lietNutzfläche">{property.LiegNutzfläche}</td>
            <td id="liegAusbauS">{property.LiegAusbaustandart}</td>
            <td id="liegZustand">{property.LiegZustand}</td>
            <td id="liegGrundSF">{property.LiegGrundstückfläche}</td>
            <td id="">{property.LiegBaujahr}</td>
            <td id="">{property.LiegZusatz}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClickedProperty;
