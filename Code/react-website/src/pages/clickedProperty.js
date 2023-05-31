import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const ClickedProperty = () => {
  let clicked = true;

  const [property, setProperty] = useState({
    LiegTyp: "",
    LiegNutzfläche: 0,
    LiegBezeichnung: "",
    LiegAusbaustandart: "",
    LiegZustand: "",
    LiegGrundstückfläche: 0,
    LiegBaujahr: 0,
    LiegZusatz: "",
  });

  useEffect(() => {
    setStartProperty();
  }, []);

  const setStartProperty = () => {
    const property = JSON.parse(localStorage.getItem("property"));
    setProperty(property);
    document.getElementById("LiegTyp").value = property.LiegTyp;
    document.getElementById("LiegNutzfläche").value = property.LiegNutzfläche;
    document.getElementById("LiegBezeichnung").value = property.LiegBezeichnung;
    document.getElementById("LiegAusbaustandart").value =
      property.LiegAusbaustandart;
    document.getElementById("LiegZustand").value = property.LiegZustand;
    document.getElementById("LiegGrundstückfläche").value =
      property.LiegGrundstückfläche;
    document.getElementById("LiegBaujahr").value = property.LiegBaujahr;

    document.getElementById("LiegZusatz").value = property.LiegZusatz;
  };


  const saveProperty = (event) => {
    event.preventDefault();
    property.LiegTyp = document.getElementById("LiegTyp").value;
    property.LiegNutzfläche = document.getElementById("LiegNutzfläche").value;
    property.LiegBezeichnung = document.getElementById("LiegBezeichnung").value;
    property.LiegAusbaustandart =
      document.getElementById("LiegAusbaustandart").value;
    property.LiegZustand = document.getElementById("LiegZustand").value;
    property.LiegGrundstückfläche = document.getElementById(
      "LiegGrundstückfläche"
    ).value;
    property.LiegBaujahr = document.getElementById("LiegBaujahr").value;
    property.LiegZusatz = document.getElementById("LiegZusatz").value;

    localStorage.setItem("property", JSON.stringify(property));
    updateData();
  };

  const updateData = async () => {
    await Axios.put("http://localhost:3001/updateProperty", {
      propertyToUpdate: property,
    }).then(() => {
      console.log("success");
    });
  };
  

  return (
    <div className="clickedProperty">
      <h1>Liegenschaft bearbeiten</h1>
      <form>
        <div className="leftSide">
          <div>
            <label htmlFor="LiegTyp">Liegenschaftstyp</label>
            <input type="text" id="LiegTyp" />
          </div>
          <div>
            <label htmlFor="LiegNutzfläche">Nutzfläche</label>
            <input type="number" id="LiegNutzfläche" />
          </div>
          <div>
            <label htmlFor="LiegBezeichnung">Bezeichnung</label>
            <input type="text" id="LiegBezeichnung" />
          </div>
          <div>
            <label htmlFor="LiegAusbaustandart">Ausbaustandart</label>
            <input
              type="text"
              id="LiegAusbaustandart"
              value={property.LiegAusbaustandart}
            />
          </div>
          <div>
            <label htmlFor="LiegZustand">Zustand</label>
            <input type="text" id="LiegZustand" />
          </div>
        </div>
        <div className="rightSide">
          <div>
            <label htmlFor="LiegGrundstückfläche">Grundstückfläche</label>
            <input type="number" id="LiegGrundstückfläche" />
          </div>
          <div>
            <label htmlFor="LiegBaujahr">Baujahr</label>
            <input
              type="number"
              id="LiegBaujahr"
              min="1000"
              max={new Date().getFullYear()}
            />
          </div>
          <div>
            <label htmlFor="LiegZusatz">Zusatz</label>
            <input type="text" id="LiegZusatz" />
          </div>
          <div>
            <div>
              <input
                type="button"
                value="Abbrechen"
                onClick={() => window.location.replace("../home")}
              />
            </div>
            <div>
              <input type="button" value="Speichern" onClick={saveProperty} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClickedProperty;
