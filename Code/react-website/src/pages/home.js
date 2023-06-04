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
                  return (
                    <tr onClick={navigateToProperty(val)} key={key}>
                      <td id="liegKosten">{val.LiegBezeichnung}</td>
                      <td id="liegNR">{val.LiegTyp}</td>
                      <td id="lietNutzfläche">{val.LiegNutzfläche}</td>
                      <td id="liegAusbauS">{val.LiegAusbaustandart}</td>
                      <td id="liegZustand">{val.LiegZustand}</td>
                      <td id="">{val.LiegBaujahr}</td>
                      <td id="liegKosten">{"Kosten Haus"}</td>
                      <td id="liegGrundSF">{val.LiegGrundstückfläche}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
