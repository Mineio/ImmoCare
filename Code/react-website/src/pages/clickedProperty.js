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

  const editProperty = () => {};

  const saveProperty = () => {};

  return (
    <div className="clickedProperty">
      <h1>Liegenschaft bearbeiten</h1>
      <form>
        <div className="leftSide">
          <div>
            <label htmlFor="LiegTyp">Liegenschaftstyp</label>
            <input type="text" name="LiegTyp" placeholder={property.LiegTyp} />
          </div>
          <div>
            <label htmlFor="LiegNutzfläche">Nutzfläche</label>
            <input
              type="text"
              name="LiegNutzfläche"
              placeholder={property.LiegNutzfläche}
            />
          </div>
          <div>
            <label htmlFor="LiegBezeichnung">Bezeichnung</label>
            <input
              type="text"
              name="LiegBezeichnung"
              placeholder={property.LiegBezeichnung}
            />
          </div>
          <div>
            <label htmlFor="LiegAusbaustandart">Ausbaustandart</label>
            <input
              type="text"
              name="LiegAusbaustandart"
              placeholder={property.LiegAusbaustandart}
            />
          </div>
          <div>
            <label htmlFor="LiegZustand">Zustand</label>
            <input
              type="text"
              name="LiegZustand"
              placeholder={property.LiegZustand}
            />
          </div>
        </div>
        <div className="rightSide">
          <div>
            <label htmlFor="LiegGrundstückfläche">Grundstückfläche</label>
            <input
              type="text"
              name="LiegGrundstückfläche"
              placeholder={property.LiegGrundstückfläche}
            />
          </div>
          <div>
            <label htmlFor="LiegBaujahr">Baujahr</label>
            <input
              type="text"
              name="LiegBaujahr"
              placeholder={property.LiegBaujahr}
            />
          </div>
          <div>
            <label htmlFor="LiegZusatz">Zusatz</label>
            <input
              type="text"
              name="LiegZusatz"
              placeholder={property.LiegZusatz}
            />
          </div>
          <div>
            <button id="edit" onClick={editProperty}>
              Bearbeiten
            </button>
            <div>
              <button id="edit" onClick={saveProperty}>
                Speichern
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClickedProperty;
