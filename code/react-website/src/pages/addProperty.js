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
  const [liegNr, setliegNr] = useState("");
  const [Bezeichnung, setBezeichnung] = useState("");

  const insertProperties = () => {
    Axios.post("http://localhost:3001/insert", {
      Grundstückfläche: Grundstückfläche,
      Nutzfläche: Nutzfläche,
      ausbauSt: ausbauSt,
      zustand: zustand,
      liegNr: liegNr,
      Liegenschaftstyp: Liegenschaftstyp,
      zusatz: zusatz,
      Baujahr: Baujahr,
      Bezeichnung: Bezeichnung,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="app">
      <div className="container">
        <div className="inputfields">
          <div className="leftInputs">
            <div className="left">
              <div>
                <form>
                  <label htmlFor="dropdown">Liegenschaftstyp</label>
                  <select
                    placeholder=""
                    id="dropdown"
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
                    <option>MFH</option>
                    <option>Reiheneinfamilienhaus</option>
                    <option>Eckhaus</option>
                    <option>Gebwerbeliegenschaft</option>
                    <option>Eigentumswohnung</option>
                  </select>
                </form>
              </div>
              <div>
                <form>
                  <label htmlFor="grundStFl">Grundstückfläche</label>
                  <input
                    type="number"
                    placeholder="Eingabe"
                    id="grundStFl"
                    onChange={(event) => {
                      setGrundstückfläche(event.target.value);
                    }}
                  ></input>
                </form>
              </div>
              <div>
                <form>
                  <label htmlFor="nutzFlB">Nutzfläche </label>
                  <input
                    type="number"
                    placeholder="Eingabe"
                    id="nutzFlB"
                    onChange={(event) => {
                      setNutzfläche(event.target.value);
                    }}
                  ></input>
                </form>
              </div>
              <div>
                <form>
                  <label htmlFor="ausbauSt">Ausbaustand</label>
                  <select
                    placeholder=""
                    id="ausbauSt"
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
                </form>
              </div>
            </div>
            <div>
              <form>
                <label htmlFor="Zustand">Zustand</label>
                <select
                  placeholder=""
                  id="Zustand"
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
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="bezeichnung">Bezeichnung</label>
                <input
                  type="text"
                  id="bezeichnung"
                  placeholder="Eingabe"
                  onChange={(event) => {
                    setBezeichnung(event.target.value);
                  }}
                ></input>
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="Baujahr">Baujahr</label>
                <input
                  type="text"
                  id="Baujahr"
                  placeholder="Eingabe"
                  onChange={(e) => {
                    setBaujahr(e.target.value);
                  }}
                ></input>
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="zusatz">Liegenschafts Zusatz</label>
                <input
                  type="text"
                  id="zusatz"
                  placeholder="Eingabe"
                  onChange={(e) => {
                    setzusatz(e.target.value);
                  }}
                ></input>
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="liegnr">LiegenschaftNr</label>
                <input
                  type="text"
                  id="liegnr"
                  placeholder="Eingabe"
                  onChange={(e) => {
                    setliegNr(e.target.value);
                  }}
                ></input>
              </form>
            </div>
            <button class="buttonAdd" onClick={() => window.location.replace("../home")}>Abbrechen</button>
            <button class="buttonAdd" onClick={insertProperties}>Hinzufügen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
