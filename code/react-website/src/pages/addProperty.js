import React from "react";
import Axios from "axios";
import { useState } from "react";

const AddProperty = () => {
  const [Grundstückfläche, setGrundstückfläche] = useState("");
  const [Nutzfläche, setNutzfläche] = useState("");
  const [ausbauSt, setausbauSt] = useState("");
  const [zustand, setzustand] = useState("");
  const [Baujahr, setBaujahr] = useState("");
  const [Liegenschaftstyp, setLiegenschaftstyp] = useState("");
  const [zusatz, setzusatz] = useState("");
  const [Bezeichnung, setBezeichnung] = useState("");

  const insertProperties = () => {
    Axios.post("http://localhost:3001/insert", {
      Grundstückfläche: Grundstückfläche,
      Nutzfläche: Nutzfläche,
      ausbauSt: ausbauSt,
      zustand: zustand,
      Liegenschaftstyp: Liegenschaftstyp,
      zusatz: zusatz,
      Baujahr: Baujahr,
      Bezeichnung: Bezeichnung,
    }).then(() => {
      window.location.replace("../home");
    });
  };

  return (
    <div className="addProperty">
      <form className="inputFields">
        <div className="bezeichnung">
          <label htmlFor="bezeichnung">Bezeichnung</label>
          <input
            type="text"
            id="bezeichnung"
            placeholder="Eingabe"
            onChange={(event) => {
              setBezeichnung(event.target.value);
            }}
          ></input>
        </div>
        <div className="doubleInputs">
          <div>
            <label htmlFor="LiegTyp">Liegenschaftstyp</label>
            <select
              placeholder=""
              id="LiegTyp"
              defaultValue="default"
              onChange={(e) => {
                setLiegenschaftstyp(e.target.value);
              }}
            >
              <option value="default" disabled hidden>
                Selektiere deine Option
              </option>
              <option>Einfamilienhaus</option>
              <option>Mehrfamilienhaus</option>
              <option>Hof</option>
              <option>Loft</option>
              <option>Reiheneinfamilienhaus</option>
              <option>Eckhaus</option>
              <option>Gebwerbeliegenschaft</option>
              <option>Eigentumswohnung</option>
            </select>
          </div>
          <div className="rightSide">
            <label htmlFor="LiegZustand">Zustand</label>
            <select
              placeholder=""
              id="LiegZustand"
              defaultValue="default"
              onChange={(event) => {
                setzustand(event.target.value);
              }}
            >
              <option
                value="default"
                disabled
                hidden
                onChange={(event) => {
                  setzustand(event.target.value);
                }}
              >
                Selektiere deine Option
              </option>
              <option>neuwertig</option>
              <option>normal</option>
              <option>renoviert</option>
              <option>sanierungsbedürftig</option>
            </select>
          </div>
        </div>
        <div className="doubleInputs">
          <div>
            <label htmlFor="LiegAusbaustandard">Ausbaustand</label>
            <select
              id="LiegAusbaustandard"
              defaultValue="default"
              onChange={(event) => {
                setausbauSt(event.target.value);
              }}
            >
              <option value="default" disabled hidden>
                Selektiere deine Option
              </option>
              <option>rustikal</option>
              <option>normal</option>
              <option>einfach</option>
              <option>luxuriös</option>
            </select>
          </div>
          <div className="rightSide">
            <label htmlFor="LiegBaujahr">Baujahr</label>
            <input
              type="number"
              id="LiegBaujahr"
              placeholder="Eingabe"
              onChange={(e) => {
                setBaujahr(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="doubleInputs">
          <div>
            <label htmlFor="LiegGrundstückfläche">Grundstückfläche in m²</label>
            <input
              type="number"
              placeholder="Eingabe"
              id="LiegGrundstückfläche"
              onChange={(event) => {
                setGrundstückfläche(event.target.value);
              }}
            ></input>
          </div>
          <div className="rightSide">
            <label htmlFor="LiegNutzfläche">Nutzfläche in m²</label>
            <input
              type="number"
              placeholder="Eingabe"
              id="LiegNutzfläche"
              onChange={(event) => {
                setNutzfläche(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div>
          <label htmlFor="LiegZusatz">Zusatz</label>
          <input
            type="text"
            id="LiegZusatz"
            placeholder="Eingabe"
            onChange={(e) => {
              setzusatz(e.target.value);
            }}
          ></input>
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
            <input
              type="button"
              value="Hinzufügen"
              onClick={insertProperties}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
