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
    let elelement = setProperty(JSON.parse(localStorage.getItem("property")));
    let eltable = setlist(localStorage.getItem("list"));
    console.log(JSON.parse(eltable[0]));
    const position = eltable.findIndex(elelement);
    setIndex(position);
    RenderPropertyAtIndex(index);
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
  function RenderPropertyAtIndex(index) {
    const properties = useState()[0];
    const property = properties[index];

    return (
      <div className="clickedProperty">
        <table>
          <tbody>
            <React.Fragment>
              <td id="liegKosten">{property.LiegTyp}</td>
              <td id="liegKosten">{property.LiegBezeichnung}</td>
              <td id="liegKosten">{"Kosten Haus"}</td>
              <td id="lietNutzfläche">{property.LiegNutzfläche}</td>
              <td id="liegAusbauS">{property.LiegAusbaustandart}</td>
              <td id="liegZustand">{property.LiegZustand}</td>
              <td id="liegGrundSF">{property.LiegGrundstückfläche}</td>
              <td id="">{property.LiegBaujahr}</td>
              <td id="">{property.LiegZusatz}</td>
            </React.Fragment>
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
  }
};

export default ClickedProperty;
