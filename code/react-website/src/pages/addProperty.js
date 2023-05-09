import React from "react";
import Axios from "axios";
import { useState } from "react";

function AddProperty() {
  const [Grundstückfläche, setGrundstückfläche] = useState("beliebig");
  const [Nutzfläche, setNutzfläche] = useState("beliebig");
  const [ausbauSt, setausbauSt] = useState("beliebig");
  const [zustand, setzustand] = useState("beliebig");
  const [Baujahr, setBaujahr] = useState("beliebig");
  const [Liegenschaftstyp, setLiegenschaftstyp] = useState("beliebig");
  const [zusatz, setzusatz] = useState("beliebig");
  const [liegNr, setliegNr] = useState("beliebig");
  const [Bezeichnung, setBezeichnung] = useState("beliebig");

  const insertProperties = () => {
    Axios.post("http://localhost:3001/insert", {
      grundStück: Grundstückfläche,
      nutzfläche: Nutzfläche,
      ausbaustand: ausbauSt,
      zustandReq: zustand,
      nr: liegNr,
      typ: Liegenschaftstyp,
      Zusatz: zusatz,
      Baujahr: Baujahr,
      bezeichnung: Bezeichnung,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="inputfields">
          <div className="leftInputs">
            <div className="left">
              <div>
                <form>
                  <label htmlFor="wordsearch">Liegenschaftstyp</label>
                  <select placeholder="" id="dropdown">
                    <option
                      value=""
                      disabled
                      selected
                      hidden
                      onChange={(e) => setLiegenschaftstyp(e.target.value)}
                    >
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
                  <label>Grundstückfläche</label>
                  <input
                    type="text"
                    placeholder="Eingabe"
                    onChange={(e) => setGrundstückfläche(e.target.value)}
                  ></input>
                </form>
              </div>
              <div>
                <form>
                  <label htmlFor="nutzFlB">Nutzfläche </label>
                  <input
                    type="text"
                    placeholder="Eingabe"
                    onChange={(e) => setNutzfläche(e.target.value)}
                  ></input>
                </form>
              </div>
              <div>
                <form>
                  <label htmlFor="ausbauSt">Ausbaustand</label>
                  <select placeholder="" id="dropdown">
                    <option
                      value=""
                      disabled
                      selected
                      hidden
                      onChange={(e) => setausbauSt(e.target.value)}
                    >
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
                <select placeholder="" id="dropdown">
                  <option
                    value=""
                    disabled
                    selected
                    hidden
                    onChange={(e) => setzustand(e.target.value)}
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
                <label htmlFor="preis">Bezeichnung</label>
                <input
                  type="text"
                  placeholder="Eingabe"
                  onChange={(e) => setBezeichnung(e.target.value)}
                ></input>
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="Baujahr">Baujahr</label>
                <input
                  type="text"
                  placeholder="Eingabe"
                  onChange={(e) => setBaujahr(e.target.value)}
                ></input>
              </form>
            </div>
            <div>
              <form>
                <label>Liegenschafts Zusatz</label>
                <input
                  type="text"
                  placeholder="Eingabe"
                  onChange={(e) => setzusatz(e.target.value)}
                ></input>
              </form>
            </div>
            <div>
              <form>
                <label>LiegenschaftNr</label>
                <input
                  type="text"
                  placeholder="Eingabe"
                  onChange={(e) => setliegNr(e.target.value)}
                ></input>
              </form>
            </div>

            <button onClick={insertProperties}>Hinzufügen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
