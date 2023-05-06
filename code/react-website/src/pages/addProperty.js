import React from "react";
import Axios from "axios";
import { useState } from "react";

function AddProperty() {
  const [Grundstückfläche, setGrundstückfläche] = useState("beliebig");
  const [Nutzfläche, setNutzfläche] = useState("beliebig");
  const [ausbauSt, setausbauSt] = useState("beliebig");
  const [zustand, setzustand] = useState("beliebig");
  const [Preis, setPreis] = useState("beliebig");
  const [Baujahr, setBaujahr] = useState("beliebig");
  const [Liegenschaftstyp, setLiegenschaftstyp] = useState("beliebig");

  const insertProperties = () => {
    Axios.post("http://localhost:3001/insert", {
      grundStück: Grundstückfläche,
      nutzfläche: Nutzfläche,
      ausbaustand: ausbauSt,
      zustandReq: zustand,
      chf: Preis,
      baujahr: Baujahr,
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
                    <option value="" disabled selected hidden>
                      Selektiere deine Option
                    </option>
                    <option>Einfamilienhaus</option>
                    <option>Mehrfamilienhaus</option>
                    <option>Gebwerbeliegenschaft</option>
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
                  <label htmlFor="nutzFlB">Nutzfläche bis</label>
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
                    <option value="" disabled selected hidden>
                      Selektiere deine Option
                    </option>
                    <option>rustikal</option>
                    <option>normal</option>
                    <option>einfach</option>
                    <option>luxeriös</option>
                  </select>
                </form>
              </div>
            </div>
            <div>
              <form>
                <label htmlFor="Zustand">Zustand</label>
                <select placeholder="" id="dropdown">
                  <option value="" disabled selected hidden>
                    Selektiere deine Option
                  </option>
                  <option>neuwertig</option>
                  <option>normal</option>
                  <option>renoviert</option>
                  <option>sanierungsbedürftig</option>
                  <option>Gebwerbeliegenschaft</option>
                  <option>Gebwerbeliegenschaft</option>
                </select>
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="preis">Preis</label>
                <input
                  type="text"
                  placeholder="Eingabe"
                  onChange={(e) => setPreis(e.target.value)}
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
                <label htmlFor="preis">Preis</label>
                <input
                  type="text"
                  placeholder="Eingabe"
                  onChange={(e) => setPreis(e.target.value)}
                ></input>
              </form>
            </div>
            <button>Hinzufügen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
