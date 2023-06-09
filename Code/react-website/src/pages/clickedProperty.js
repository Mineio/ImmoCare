import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Popup from "./popUp";

const ClickedProperty = () => {

  const [buttonPopup, setbuttonPopup] = useState(false);
  let clicked = true;

  

  const [property, setProperty] = useState({});

  useEffect(() => {
    setStartProperty();
  }, []);

  const setStartProperty = async () => {
    const property = await JSON.parse(localStorage.getItem("property"));
    setProperty(property);
    document.getElementById("LiegTyp").value = property.LiegTyp;
    document.getElementById("LiegNutzfläche").value = property.LiegNutzfläche;
    document.getElementById("LiegBezeichnung").value = property.LiegBezeichnung;
    document.getElementById("LiegAusbaustandard").value =
      property.LiegAusbaustandard;
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
    property.LiegAusbaustandard =
      document.getElementById("LiegAusbaustandard").value;
    property.LiegZustand = document.getElementById("LiegZustand").value;
    property.LiegGrundstückfläche = document.getElementById(
      "LiegGrundstückfläche"
    ).value;
    property.LiegBaujahr = document.getElementById("LiegBaujahr").value;
    property.LiegZusatz = document.getElementById("LiegZusatz").value;

    localStorage.setItem("property", JSON.stringify(property));
    updateData();
    window.location.replace("../home");
  };

  const updateData = async () => {
    await Axios.put("http://localhost:3001/updateProperty", {
      propertyToUpdate: property,
    }).then(() => {
      console.log("success");
    });
  };

  const calculateYield = () => {
    const elGetExpenses = document.getElementById("Ausgabe").value;
    const elGetIncome = document.getElementById("Gewinn").value;
    const elGetYeld = document.getElementById("costYield");
    if(elGetExpenses !== "0" && elGetIncome !== "0" && elGetExpenses !== "" && elGetIncome !== ""){
      const calculateYield = elGetIncome * 100 / elGetExpenses;
      if(calculateYield >= 0 && parseInt(calculateYield) === 0){
        elGetYeld.innerHTML = `Kosten Rendite: ≈ 0%`
      } else {
        elGetYeld.innerHTML = `Kosten Rendite: ${parseInt(calculateYield)}%`
      }
    } else {
      elGetYeld.textContent = `Kosten Rendite: Keine gültigen Werte!`
    }
  }

  return (
    <div className="clickedProperty">
      <form className="inputFields">
        <h1>Bearbeiten</h1>
        <div className="bezeichnung">
          <label htmlFor="LiegBezeichnung">Bezeichnung</label>
          <input type="text" id="LiegBezeichnung" />
        </div>
        <div className="doubleInputs">
          <div>
            <label htmlFor="LiegTyp">Liegenschaftstyp</label>
            <select id="LiegTyp">
              <option value="Eigentumswohnung">Eigentumswohnung</option>
              <option value="Einfamilienhaus">Einfamilienhaus</option>
              <option value="Mehrfamilienhaus">Mehrfamilienhaus</option>
              <option value="Loft">Loft</option>
              <option value="Hof">Hof</option>
              <option value="Reiheneinfamilienhaus">
                Reiheneinfamilienhaus
              </option>
              <option value="Gewerbeliegenschaft">Gewerbeliegenschaft</option>
              <option value="Eckhaus">Eckhaus</option>
            </select>
          </div>
          <div className="rightSide">
            <label htmlFor="LiegZustand">Zustand</label>
            <select id="LiegZustand">
              <option value="renoviert">renoviert</option>
              <option value="sanierungsbedürftig">sanierungsbedürftig</option>
              <option value="neuwertig">neuwertig</option>
              <option value="normal">normal</option>
            </select>
          </div>
        </div>
        <div className="doubleInputs">
          <div>

            <label htmlFor="LiegAusbaustandard">Ausbaustandard</label>
             <select id="LiegAusbaustandard">
              <option value="einfach">einfach</option>
              <option value="normal">normal</option>
              <option value="rustikal">rustikal</option>
              <option value="luxeriös">luxeriös</option>
            </select>
          </div>
          <div className="rightSide">
            <label htmlFor="LiegBaujahr">Baujahr</label>
            <input
              type="number"
              id="LiegBaujahr"
              min="1000"
              max={new Date().getFullYear()}
            />
          </div>
        </div>
        <div className="doubleInputs">
          <div>
            <label htmlFor="LiegGrundstückfläche">Grundstückfläche in m²</label>
            <input type="number" id="LiegGrundstückfläche" />
          </div>
          <div className="rightSide">
            <label htmlFor="LiegNutzfläche">Nutzfläche in m²</label>
            <input type="number" id="LiegNutzfläche" />
          </div>
        </div>
        <div>
          <label htmlFor="LiegZusatz">Zusatz</label>
          <input type="text" id="LiegZusatz" />
        </div>

        <div className="doubleInputs">
          <div>
            <input
              type="button"
              value="Abbrechen"
              onClick={() => window.location.replace("../home")}
            />
          </div>
          <div className="rightSide">
            <input type="button" value="Speichern" onClick={saveProperty} />
          </div>
        </div>
        <div className="DeleteButton">
          <input
            type="button"
            value="Liegenschaft löschen"
            className="delete"
            onClick={() => setbuttonPopup(true)}
          />

          <Popup trigger={buttonPopup} LiegNR={property.LiegNR}>
            <h3>Wirklich löschen?</h3>
            <p>Wollen Sie diese Liegenschaft wirklich löschen?</p>
          </Popup>
        </div>
      </form>
      <form className="inputFields">
        <h1>Renditerechner</h1>
        <div>
          <label htmlFor="Gewinn">Gewinn</label>
          <input type="number" name="Gewinn" id="Gewinn" defaultValue="0" onChange={calculateYield}/>
        </div>
        <div>
          <label htmlFor="Ausgabe">Eingesetztes Kapital</label>
          <input type="number" name="Ausgabe" id="Ausgabe" defaultValue="0" onChange={calculateYield}/>
        </div>
        <div id="costYield">
          Kosten Rendite: 0%
        </div>
      </form>
    </div>
  );
};

export default ClickedProperty;
