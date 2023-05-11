import React from "react";
import { useState, useEffect } from "react";
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

  const editProperty = (event) => {
    event.preventDefault();
    if (clicked) {
      document.getElementById("edit").className = "clicked";
      clicked = false;
    } else {
      document.getElementById("edit").classList.remove("clicked");
      clicked = true;
    }
    const getInputFields = document.querySelectorAll(
      'input:not([type="button"])'
    );
    if (getInputFields[0].disabled) {
      for (let i = 0; i < getInputFields.length; i++) {
        getInputFields[i].disabled = false;
      }
    } else {
      for (let i = 0; i < getInputFields.length; i++) {
        getInputFields[i].disabled = true;
      }
    }
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
            <input type="text" id="LiegTyp" disabled />
          </div>
          <div>
            <label htmlFor="LiegNutzfläche">Nutzfläche</label>
            <input type="number" id="LiegNutzfläche" disabled />
          </div>
          <div>
            <label htmlFor="LiegBezeichnung">Bezeichnung</label>
            <input type="text" id="LiegBezeichnung" disabled />
          </div>
          <div>
            <label htmlFor="LiegAusbaustandart">Ausbaustandart</label>
            <input
              type="text"
              id="LiegAusbaustandart"
              disabled
              value={property.LiegAusbaustandart}
            />
          </div>
          <div>
            <label htmlFor="LiegZustand">Zustand</label>
            <input type="text" id="LiegZustand" disabled />
          </div>
        </div>
        <div className="rightSide">
          <div>
            <label htmlFor="LiegGrundstückfläche">Grundstückfläche</label>
            <input type="number" id="LiegGrundstückfläche" disabled />
          </div>
          <div>
            <label htmlFor="LiegBaujahr">Baujahr</label>
            <input
              type="number"
              id="LiegBaujahr"
              min="1000"
              max={new Date().getFullYear()}
              disabled
            />
          </div>
          <div>
            <label htmlFor="LiegZusatz">Zusatz</label>
            <input type="text" id="LiegZusatz" disabled />
          </div>
          <div>
            <div>
              <input
                type="button"
                id="edit"
                value="Bearbeiten"
                onClick={editProperty}
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
