import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const ClickedProperty = () => {
  const [property, setProperty] = useState([]);
  const [list, setlist] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = () => {
    setProperty(JSON.parse(localStorage.getItem("property")));
    setlist(JSON.parse(localStorage.getItem("table")));
  };

  const goToPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goToNext = () => {
    if (index < list.length - 1) {
      setIndex(index + 1);
    }
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
      <div className="Buttons">
        <div className="ButtonZurück">
          <button onClick={goToPrevious}>zurück</button>
        </div>
        <div className="ButtonWeiter">
          <button onClick={goToNext}>weiter</button>
        </div>
      </div>
    </div>
  );
};

export default ClickedProperty;
