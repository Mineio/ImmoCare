import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import ClickedProperty from "./clickedProperty";

const Home = () => {
  const [property, setProperty] = useState([]);

  const [grundStückB, setgrundStückB] = useState(
    localStorage.getItem("grundStückB") || "default"
  );
  const [ausbauSt, setausbauSt] = useState(
    localStorage.getItem("ausbauSt") || "default"
  );
  const [zustand, setzustand] = useState(
    localStorage.getItem("zustand") || "default"
  );
  const [baujahrVon, setbaujahrVon] = useState(
    localStorage.getItem("baujahrVon") || "default"
  );
  const [Baujahrbis, setBaujahrbis] = useState(
    localStorage.getItem("Baujahrbis") || "default"
  );
  const [Liegenschaftstyp, setLiegenschaftstyp] = useState(
    localStorage.getItem("Liegenschaftstyp") || "default"
  );
  const [kostenvon, setkostenvon] = useState(
    localStorage.getItem("kostenvon") || "default"
  );
  const [grundStückvon, setgrundStückvon] = useState(
    localStorage.getItem("grundStückvon") || "default"
  );
  const [nutzvon, setnutzvon] = useState(
    localStorage.getItem("nutzvon") || "default"
  );
  const [kostenbis, setkostenbis] = useState(
    localStorage.getItem("kostenbis") || "default"
  );
  const [nutzbis, setnutzbis] = useState(
    localStorage.getItem("nutzbis") || "default"
  );
  const [suchbegriff, setSuchbegriff] = useState(
    localStorage.getItem("suchbegriff") || ""
  );

  useEffect(() => {
    selectProperties();
  }, []);

  const selectProperties = async () => {
    await Axios.get("http://localhost:3001/getProperties").then((response) => {
      setProperty(response.data);
    });
  };
  const handleFilterReset = () => {
    localStorage.clear();
    setgrundStückB("default");
    setausbauSt("default");
    setbaujahrVon("default");
    setnutzbis("default");
    setzustand("default");
    setgrundStückvon("default");
    setgrundStückB("default");
    setkostenvon("default");
    setkostenbis("default");
    setnutzvon("default");
    setBaujahrbis("default");
    setSuchbegriff("");
    setLiegenschaftstyp("default");
  };
  const navigateToProperty = (clickedLiegenschaft) => {
    return () => {
      localStorage.setItem("property", JSON.stringify(clickedLiegenschaft));
      window.location.replace("../clickedProperty");
    };
  };


  useEffect(() => {
    // Speichern der Filterwerte im Local Storage
    localStorage.setItem("grundStückB", grundStückB);
    localStorage.setItem("ausbauSt", ausbauSt);
    localStorage.setItem("zustand", zustand);
    localStorage.setItem("baujahrVon", baujahrVon);
    localStorage.setItem("Baujahrbis", Baujahrbis);
    localStorage.setItem("Liegenschaftstyp", Liegenschaftstyp);
    localStorage.setItem("kostenvon", kostenvon);
    localStorage.setItem("grundStückvon", grundStückvon);
    localStorage.setItem("nutzvon", nutzvon);
    localStorage.setItem("kostenbis", kostenbis);
    localStorage.setItem("nutzbis", nutzbis);
    localStorage.setItem("suchbegriff", suchbegriff);
  }, [
    grundStückB,
    ausbauSt,
    zustand,
    baujahrVon,
    Baujahrbis,
    Liegenschaftstyp,
    kostenvon,
    grundStückvon,
    nutzvon,
    kostenbis,
    nutzbis,
    suchbegriff,
  ]);

  return (
    <div className="properties">
      <div className="propertysearch">
        <div className="searchbox">
          <label>Liegbezeichnung</label>
          <input
            type="text"
            value={suchbegriff}
            onChange={(e) => {
              setSuchbegriff(e.target.value);
            }}
          />
        </div>
        <div className="filterbutton">
          <button onClick={handleFilterReset}>Filter zurücksetzen</button>
        </div>
      </div>

      <div className="searchbarTop">
        <div>
          <form>
            <label htmlFor="wordsearch">Liegenschaftstyp</label>
            <select
              id="grundStückB"
              onChange={(e) => {
                setLiegenschaftstyp(e.target.value);
              }}
            >
              <option value="default">beliebig</option>
              <option value="Eigentumswohnung">Eigentumswohnung</option>
              <option value="Einfamilienhaus">Einfamilienhaus</option>
              <option value="Mehrfamilienhaus">Mehrfamilienhaus</option>
              <option value="Hof">Hof</option>
              <option value="Loft">Loft</option>
              <option value="Reiheneinfamilienhaus">
                Reiheneinfamilienhaus
              </option>
              <option value="Eckhaus">Eckhaus</option>
              <option value="Gewerbeliegenschaft">Gewerbeliegenschaft</option>
            </select>
          </form>
        </div>
        <div>
          <form>
            <label for="age">Kosten von</label>
            <input
              type="number"
              id="tentacles"
              name="tentacles"
              min="0"
              max="1000000"
              step={10000}
              onChange={(e) => {
                setkostenvon(e.target.value);
              }}
            />
          </form>
        </div>
        <div>
          <form>
            <label htmlFor="grundStückB">Grundstückfläche von</label>
            <select
              id="grundStückB"
              onChange={(e) => {
                setgrundStückvon(e.target.value);
              }}
            >
              <option value="default">beliebig</option>
              <option value="300">300m²</option>
              <option value="600">600m²</option>
              <option value="900">900m²</option>
              <option value="1200">1200m²</option>
              <option value="1500">1500m²</option>
              <option value="2000">2000m²</option>
            </select>
          </form>
        </div>
        <div>
          <form>
            <label htmlFor="nutzFlB">Nutzfläche von</label>
            <select
              id="nutzvon"
              onChange={(e) => {
                setnutzvon(e.target.value);
              }}
            >
              <option value="default">beliebig</option>
              <option value="50">50m²</option>
              <option value="100">100m²</option>
              <option value="250">150m²</option>
              <option value="200">200m²</option>
              <option value="250">250m²</option>
              <option value="300">300m²</option>
              <option value="350">350m²</option>
            </select>
          </form>
        </div>
        <div>
          <form>
            <label htmlFor="baujahrVon">Baujahr von</label>
            <select
              id="baujahrVon"
              onChange={(e) => {
                setbaujahrVon(e.target.value);
              }}
            >
              <option value="default">beliebig</option>
              <option value="1840">1940</option>
              <option value="1960">1960</option>
              <option value="1980">1980</option>
              <option value="2000">2000</option>
              <option value="2020">2020</option>
            </select>
          </form>
        </div>

        <div>
          <form>
            <label htmlFor="zustand">Zustand</label>
            <select
              id="zustand"
              onChange={(e) => {
                setzustand(e.target.value);
              }}
            >
              <option value="default">beliebig</option>
              <option value="normal">normal</option>
              <option value="neuwertig">neuwertig</option>
              <option value="sanierungsbedürftig">sanierungsbedürftig</option>
              <option value="renoviert">renoviert</option>
            </select>
          </form>
        </div>
      </div>
      <div className="searchbarBottom">
        <div>
          <form>
            <label htmlFor="ausbauSt">Ausbaustandart</label>
            <select
              id="ausbauSt"
              onChange={(e) => {
                setausbauSt(e.target.value);
              }}
            >
              <option value="default">beliebig</option>
              <option value="einfach">einfach</option>
              <option value="normal">normal</option>
              <option value="luxeriös">luxeriös</option>
              <option value="rustikal">rustikal</option>
            </select>
          </form>
        </div>
        <div>
          <form>
            <label for="age">Kosten bis</label>
            <input
              type="number"
              id="tentacles"
              name="tentacles"
              min="0"
              max="1000000"
              step={10000}
              onChange={(e) => {
                setkostenbis(e.target.value);
              }}
            />
          </form>
        </div>
        <div>
          <form>
            <label htmlFor="grundStückB">Grundstückfläche bis</label>
            <select
              id="grundStückB"
              onChange={(e) => {
                setgrundStückB(e.target.value);
              }}
            >
              <option value="default">beliebig</option>
              <option value="300">300m²</option>
              <option value="600">600m²</option>
              <option value="900">900m²</option>
              <option value="1200">1200m²</option>
              <option value="1500">1500m²</option>
              <option value="2000">2000m²</option>
            </select>
          </form>
        </div>
        <div>
          <form>
            <label htmlFor="nutzFlB">Nutzfläche bis</label>
            <select
              id="nutzvon"
              onChange={(e) => {
                setnutzbis(e.target.value);
              }}
            >
              <option value="default">beliebig</option>
              <option value="50">50m²</option>
              <option value="100">100m²</option>
              <option value="150">150m²</option>
              <option value="200">200m²</option>
              <option value="250">250m²</option>
              <option value="300">300m²</option>
              <option value="350">350m²</option>
            </select>
          </form>
        </div>

        <div>
          <form>
            <label htmlFor="">Baujahr bis</label>
            <select
              id="baujahrBis"
              onChange={(e) => {
                setBaujahrbis(e.target.value);
              }}
            >
              <option value="default">beliebig</option>
              <option value="1940">1940</option>
              <option value="1960">1960</option>
              <option value="1980">1980</option>
              <option value="2000">2000</option>
              <option value="2020">2020</option>
            </select>
          </form>
        </div>
        <div></div>
      </div>

      <div className="">
        <div className="listProperties">
          <table>
            <thead>
              <tr>
                <th>LiegBezeichnung</th>
                <th>Liegenschaftstyp</th>
                <th>Nutzfläche</th>
                <th>Ausbaustandard</th>
                <th>Zustand</th>
                <th>Baujahr</th>
                <th>Kosten</th>
                <th>Grundstückfläche</th>
              </tr>
            </thead>
            <tbody>
              {property
                .filter((property) => {
                  // Überprüfen, ob mindestens ein Filterwert nicht 'beliebig' ist
                  // ..
                  // Überprüfen, ob mindestens ein Filterwert nicht 'beliebig' ist
                  if (
                    Baujahrbis !== "default" ||
                    baujahrVon !== "default" ||
                    grundStückB !== "default" ||
                    ausbauSt !== "default" ||
                    zustand !== "default" ||
                    nutzvon !== "default" ||
                    kostenbis !== "default" ||
                    nutzbis !== "default" ||
                    grundStückvon !== "default" ||
                    kostenvon !== "default" ||
                    Liegenschaftstyp !== "default" ||
                    suchbegriff !== ""
                  ) {
                    // Überprüfen, ob die Bedingungen für alle Filterwerte erfüllt sind
                    return (
                      (suchbegriff === "" ||
                        property.LiegBezeichnung.toLowerCase().includes(
                          suchbegriff.toLowerCase()
                        )) &&
                      (Baujahrbis === "default" ||
                        property.LiegBaujahr <= Baujahrbis) &&
                      (baujahrVon === "default" ||
                        property.LiegBaujahr >= baujahrVon) &&
                      (grundStückB === "default" ||
                        property.LiegGrundstückfläche <= grundStückB) &&
                      (ausbauSt === "default" ||
                        property.LiegAusbaustandart === ausbauSt) &&
                      (zustand === "default" ||
                        property.LiegZustand === zustand) &&
                      (Liegenschaftstyp === "default" ||
                        property.LiegTyp === Liegenschaftstyp) &&
                      (grundStückvon === "default" ||
                        property.LiegGrundstückfläche >= grundStückvon) &&
                      (nutzvon === "default" ||
                        property.LiegNutzfläche >= nutzvon) &&
                      (nutzbis === "default" ||
                        property.LiegNutzfläche <= nutzbis)
                    );
                  } else {
                    // Wenn alle Filterwerte auf 'beliebig' gesetzt sind, wird das Element ungefiltert zurückgegeben
                    return true;
                  }
                })

                .map((val, key) => {
  const calculateCost = (property) => {
    const {
      LiegTyp,
      LiegGrundstückfläche,
      LiegNutzfläche,
      LiegAusbaustandart,
      LiegZusatz,
      LiegZustand,
    } = property;
    if (LiegAusbaustandart === "normal" || LiegZustand === "normal") {
      let cost = 0;
      let anzWhg = 0;
      let anzZimm = 0;
      let flächeGrößterRaum = 0;

      // Extrahiere Anzahl der Wohnungen aus dem Zusatz
      if (LiegZusatz && LiegZusatz.includes("Anz. Whg.:")) {
        const match = LiegZusatz.match(/Anz\. Whg\.: ([0-9]+)/);
        if (match) {
          anzWhg = parseInt(match[1], 10);
        }
      }

      // Extrahiere Anzahl der Zimmer aus dem Zusatz
      if (LiegZusatz && LiegZusatz.includes("Anz. Zimm.:")) {
        const match = LiegZusatz.match(/Anz\. Zimm\.: ([0-9.]+)/);
        if (match) {
          anzZimm = parseFloat(match[1]);
        }
      }

      // Extrahiere Fläche des größten Raums aus dem Zusatz
      if (
        LiegTyp === "Gewerbeliegenschaft" &&
        LiegZusatz &&
        LiegZusatz.includes("Nutzfläche:")
      ) {
        const match = LiegZusatz.match(/Nutzfläche: ([0-9]+)m2/);
        if (match) {
          flächeGrößterRaum = parseInt(match[1], 10);
        }
      }
      if (LiegTyp === "Einfamilienhaus") {
        cost += 500 * LiegGrundstückfläche;
        cost += 1000 * LiegNutzfläche;
        cost += 30000 * anzZimm;
      } else if (LiegTyp === "Mehrfamilienhaus") {
        cost += 500 * LiegGrundstückfläche;
        cost += 1000 * LiegNutzfläche;
        cost += 100000 * anzWhg;
      } else if (LiegTyp === "Gewerbeliegenschaft") {
        cost += 200 * LiegGrundstückfläche;
        cost += 800 * LiegNutzfläche;
        cost += 1000 * flächeGrößterRaum;
      }

      //Zahl für die Berechnung von den Prozentrechnungen
      let costRatio = 0;

      if (LiegAusbaustandart === "einfach") {
        costRatio -= cost * 0.2;
      } else if (LiegAusbaustandart === "luxuriös") {
        costRatio += cost * 0.2;
      }
      if (LiegZustand === "sanierungsbedürftig") {
        costRatio -= cost * 0.25;
      } else if (LiegZustand === "neuwertig") {
        costRatio += cost * 0.25;
      }

      if (costRatio !== 0) {
        cost += costRatio;
      }

      return numberWithCommas(cost);
    }
  };

  //Trennung für jede dritte Ziffer mit einem Hochkomma.
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "'");
  }

  return (
    <div className="properties">
      <div className="headerPart">
        <div className="searchbar">
          <div className="searchbarTop">
            <div>
              <form>
                <label htmlFor="wordsearch">Liegenschaftstyp</label>
                <input
                  type="text"
                  id="wordsearch"
                  placeholder="Suchen"
                  onChange={(e) => setLiegenschaftstyp(e.target.value)}
                />
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="grundStückB">Grundstückfläche bis</label>
                <select
                  id="LiegTyp"
                  onChange={(e) => setgrundStückB(e.target.value)}
                >
                  <option value="default">beliebig</option>
                  <option value="300">300m²</option>
                  <option value="600">600m²</option>
                  <option value="900">900m²</option>
                  <option value="1200">1200m²</option>
                  <option value="1500">1500m²</option>
                  <option value="2000">2000m²</option>
                </select>
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="nutzFlB">Nutzfläche bis</label>
                <select
                  id="nutzFlB"
                  onChange={(e) => setnutzFlB(e.target.value)}
                >
                  <option value="default">beliebig</option>
                  <option value="200">200m²</option>
                  <option value="400">400m²</option>
                  <option value="600">600m²</option>
                  <option value="800">800m²</option>
                  <option value="1000">1000m²</option>
                  <option value="1500">1500m²</option>
                </select>
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="ausbauSt">Ausbaustand</label>
                <select
                  id="ausbauSt"
                  onChange={(e) => setausbauSt(e.target.value)}
                >
                  <option value="default">beliebig</option>
                  <option value="einfach">einfach</option>
                  <option value="normal">normal</option>
                  <option value="luxeriös">luxeriös</option>
                </select>
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="zustand">Zustand</label>
                <select
                  id="zustand"
                  onChange={(e) => setzustand(e.target.value)}
                >
                  <option value="default">beliebig</option>
                  <option value="normal">normal</option>
                  <option value="neuwertig">neuwertig</option>
                  <option value="sanierungsbedürftig">
                    sanierungsbedürftig
                  </option>
                </select>
              </form>
            </div>
          </div>
          <div className="searchbarBottom">
            <div>
              <form>
                <label htmlFor="chfVon">CHF von</label>
                <input
                  type="number"
                  id="chfVon"
                  placeholder="Beliebig"
                  onChange={(e) => setchfVon(e.target.value)}
                />
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="chfBis">CHF bis</label>
                <input
                  type="number"
                  id="chfBis"
                  placeholder="Beliebig"
                  onChange={(e) => setchfBis(e.target.value)}
                />
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="baujahrVon">Baujahr von</label>
                <select
                  id="baujahrVon"
                  onChange={(e) => setbaujahrVon(e.target.value)}
                >
                  <option value="default">beliebig</option>
                  <option value="1800">1800</option>
                  <option value="1850">1850</option>
                  <option value="1900">1900</option>
                  <option value="1950">1950</option>
                  <option value="2000">2000</option>
                  <option value="2020">2020</option>
                </select>
              </form>
            </div>
            <div>
              <form>
                <label htmlFor="">Baujahr bis</label>
                <select
                  id="baujahrBis"
                  onChange={(e) => setBaujahrbis(e.target.value)}
                >
                  <option value="default">beliebig</option>
                  <option value="1800">1800</option>
                  <option value="1850">1850</option>
                  <option value="1900">1900</option>
                  <option value="1950">1950</option>
                  <option value="2000">2000</option>
                  <option value="2020">2020</option>
                </select>
              </form>
            </div>
            <div></div>
          </div>
        </div>
        <div className="pageLinks">
          <button type="lastProperty" onClick={() => window.location.replace("../clickedProperty")}>Letzte Liegenschaft</button>
          <button type="addProperty" onClick={() => window.location.replace("../addProperty")}>Liegenschaft hinzufügen</button>
        </div>
      </div>

      <div className="listProperties">
        <table>
          <thead>
            <tr>
              <th>Bezeichnung</th>
              <th>Liegenschaftstyp</th>
              <th>Baujahr</th>
              <th>Grundstückfläche</th>
              <th>Nutzfläche</th>
              <th>Ausbaustandard</th>
              <th>Zustand</th>
              <th>Kosten</th>
            </tr>
          </thead>
          <tbody>
            {property
              .filter((property) => {
                // Überprüfen, ob mindestens ein Filterwert nicht 'beliebig' ist
                if (
                  Baujahrbis !== "beliebig" ||
                  baujahrVon !== "beliebig" ||
                  grundStückB !== "beliebig" ||
                  nutzFlB !== "beliebig" ||
                  ausbauSt !== "beliebig" ||
                  zustand !== "beliebig" ||
                  Liegenschaftstyp !== "beliebig"
                ) {
                  // Überprüfen, ob die Bedingungen für alle Filterwerte erfüllt sind
                  return (
                    (Baujahrbis === "beliebig" ||
                      property.LiegBaujahr <= Baujahrbis) &&
                    (baujahrVon === "beliebig" ||
                      property.LiegBaujahr >= baujahrVon) &&
                    (grundStückB === "beliebig" ||
                      property.LiegGrundstückfläche <= grundStückB) &&
                    (nutzFlB === "beliebig" ||
                      property.LiegNutzfläche <= nutzFlB) &&
                    (ausbauSt === "beliebig" ||
                      property.LiegAusbaustandart === ausbauSt) &&
                    (zustand === "beliebig" ||
                      property.LiegZustand === zustand) &&
                    (Liegenschaftstyp === "beliebig" ||
                      property.LiegTyp === Liegenschaftstyp)
                  );
                } else {
                  // Wenn alle Filterwerte auf 'beliebig' gesetzt sind, wird das Element ungefiltert zurückgegeben
                  return true;
                }
              })

              .map((val, key) => {
                const cost = calculateCost(val);
                return (
                  <tr onClick={navigateToProperty(val)} key={key}>
                    <td id="liegBezeichnung">{val.LiegBezeichnung}</td>
                    <td id="liegTyp">{val.LiegTyp}</td>
                    <td id="liegBaujahr">{val.LiegBaujahr}</td>
                    <td id="lietNutzfläche">{val.LiegNutzfläche}</td>
                    <td id="liegGrundSF">{val.LiegGrundstückfläche}</td>
                    <td id="liegAusbauS">{val.LiegAusbaustandart}</td>
                    <td id="liegZustand">{val.LiegZustand}</td>
                    <td id="liegKosten">{cost}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
