import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const [property, setProperty] = useState([]);

  const getLocalStorageValue = (key, defaultValue = "") => {
    return localStorage.getItem(key) || defaultValue;
  };

  const [grundStückB, setgrundStückB] = useState(
    getLocalStorageValue("grundStückB", "alle")
  );
  const [ausbauSt, setausbauSt] = useState(
    getLocalStorageValue("ausbauSt", "alle")
  );
  const [zustand, setzustand] = useState(
    getLocalStorageValue("zustand", "alle")
  );
  const [baujahrVon, setbaujahrVon] = useState(
    getLocalStorageValue("baujahrVon", "alle")
  );
  const [baujahrBis, setbaujahrBis] = useState(
    getLocalStorageValue("baujahrBis", "alle")
  );
  const [liegTyp, setliegTyp] = useState(
    getLocalStorageValue("liegTyp", "alle")
  );
  const [kostenVon, setkostenVon] = useState(getLocalStorageValue("kostenVon"));
  const [grundStückV, setgrundStückV] = useState(
    getLocalStorageValue("grundStückV", "alle")
  );
  const [nutzVon, setnutzVon] = useState(
    getLocalStorageValue("nutzVon", "alle")
  );
  const [kostenBis, setkostenBis] = useState(getLocalStorageValue("kostenBis"));
  const [nutzBis, setnutzBis] = useState(
    getLocalStorageValue("nutzBis", "alle")
  );
  const [suchbegriff, setSuchbegriff] = useState(
    getLocalStorageValue("suchbegriff", "")
  );

  useEffect(() => {
    selectProperties();
    // Speichern der Filterwerte im Local Storage
    const filterValues = {
      grundStückB,
      ausbauSt,
      zustand,
      baujahrVon,
      baujahrBis,
      liegTyp,
      kostenVon,
      grundStückV,
      nutzVon,
      kostenBis,
      nutzBis,
      suchbegriff,
    };
    Object.entries(filterValues).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }, [
    grundStückB,
    ausbauSt,
    zustand,
    baujahrVon,
    baujahrBis,
    liegTyp,
    kostenVon,
    grundStückV,
    nutzVon,
    kostenBis,
    nutzBis,
    suchbegriff,
  ]);

  useEffect(() => {
    setFilterStart();
  }, []);

  const setFilterStart = () => {
    const filterValues = [
      { id: "liegTyp", key: "liegTyp" },
      { id: "kostenVon", key: "kostenVon" },
      { id: "grundStückV", key: "grundStückV" },
      { id: "nutzVon", key: "nutzVon" },
      { id: "baujahrVon", key: "baujahrVon" },
      { id: "zustand", key: "zustand" },
      { id: "ausbauSt", key: "ausbauSt" },
      { id: "kostenBis", key: "kostenBis" },
      { id: "grundStückB", key: "grundStückB" },
      { id: "nutzBis", key: "nutzBis" },
      { id: "baujahrBis", key: "baujahrBis" },
    ];

    filterValues.forEach((filter) => {
      const storedValue = localStorage.getItem(filter.key);
      if (storedValue !== "alle" && storedValue !== "null") {
        document.querySelector(`#${filter.id}`).value = storedValue;
      }
    });
  };

  const selectProperties = async () => {
    await Axios.get("http://localhost:3001/getProperties").then((response) => {
      setProperty(response.data);
    });
  };

  const handleFilterReset = () => {
    const keysToRemove = [
      "grundStückB",
      "ausbauSt",
      "zustand",
      "baujahrVon",
      "baujahrBis",
      "liegTyp",
      "kostenVon",
      "grundStückV",
      "nutzVon",
      "kostenBis",
      "nutzBis",
      "suchbegriff",
    ];

    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
    });

    setausbauSt("alle");
    setbaujahrBis("alle");
    setbaujahrVon("alle");
    setgrundStückB("alle");
    setgrundStückV("alle");
    setkostenBis("");
    setkostenVon("");
    setliegTyp("alle");
    setnutzBis("alle");
    setzustand("alle");
    setnutzVon("alle");
    setSuchbegriff("");

    const getAllDropdowns = document.querySelectorAll("select");
    getAllDropdowns.forEach((dropdown) => {
      dropdown.value = "alle";
    });

    const getAllInputNumbers = document.querySelectorAll("input[type=number]");
    getAllInputNumbers.forEach((input) => {
      input.value = "";
    });
  };

  const navigateToProperty = (clickedLiegenschaft) => {
    return () => {
      localStorage.setItem("property", JSON.stringify(clickedLiegenschaft));
      window.location.replace("../clickedProperty");
    };
  };

  const calculateCost = (property) => {
    const {
      LiegTyp,
      LiegGrundstückfläche,
      LiegNutzfläche,
      LiegAusbaustandard,
      LiegZusatz,
      LiegZustand,
    } = property;
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

    // Kosten der Liegenschaftstyps ausrechnen
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
    } else if (LiegTyp === "Eckhaus") {
      cost += 500 * LiegGrundstückfläche;
      cost += 900 * LiegNutzfläche;
      cost += 26000 * anzZimm;
    }else if (LiegTyp === "Reiheneinfamilienhaus") {
      cost += 480 * LiegGrundstückfläche;
      cost += 900 * LiegNutzfläche;
      cost += 26000 * flächeGrößterRaum;
    }else if (LiegTyp === "Eigentumswohnung") {
      cost += 150 * LiegGrundstückfläche;
      cost += 900 * LiegNutzfläche;
      cost += 28000 * anzZimm;
    }else if (LiegTyp === "Hof") {
      cost += 40 * LiegGrundstückfläche;
      cost += 900 * LiegNutzfläche;
      cost += 27000 * anzZimm;
    }else if (LiegTyp === "Loft") {
      cost += 150 * LiegGrundstückfläche;
      cost += 2300 * LiegNutzfläche;
    }

    //Zahl für die Berechnung von den Prozentrechnungen
    let costRatio = 0;

    if (LiegAusbaustandard === "einfach") {
      costRatio -= cost * 0.2;
    } else if (LiegAusbaustandard === "luxuriös") {
      costRatio += cost * 0.2;
    }
    if (LiegZustand === "sanierungsbedürftig") {
      costRatio -= cost * 0.25;
    } else if (LiegZustand === "neuwertig") {
      costRatio += cost * 0.25;
    } else if(LiegZustand === "renoviert"){
      costRatio += cost * 0.1;
    }

    if (costRatio !== 0) {
      cost += costRatio;
    }

    return numberWithCommas(cost);
  };

  //Trennung für jede dritte Ziffer mit einem Hochkomma.
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "'");
  }

  return (
    <div className="properties">
      <div className="propertysearch">
        <div className="searchbox">
          <label>Liegbezeichnung</label>
          <input
            type="text"
            value={suchbegriff}
            id="suchBegriff"
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
              id="liegTyp"
              onChange={(e) => {
                setliegTyp(e.target.value);
              }}
            >
              <option value="alle">alle</option>
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
            <label htmlFor="age">Kosten von</label>
            <input
              type="number"
              id="kostenVon"
              min="0"
              max="1000000"
              step={10000}
              onChange={(e) => {
                setkostenVon(e.target.value);
              }}
            />
          </form>
        </div>
        <div>
          <form>
            <label htmlFor="grundStückV">Grundstückfläche von</label>
            <select
              id="grundStückV"
              onChange={(e) => {
                setgrundStückV(e.target.value);
              }}
            >
              <option value="alle">alle</option>
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
              id="nutzVon"
              onChange={(e) => {
                setnutzVon(e.target.value);
              }}
            >
              <option value="alle">alle</option>
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
            <label htmlFor="baujahrVon">Baujahr von</label>
            <select
              id="baujahrVon"
              onChange={(e) => {
                setbaujahrVon(e.target.value);
              }}
            >
              <option value="alle">alle</option>
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
              <option value="alle">alle</option>
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
            <label htmlFor="ausbauSt">Ausbaustandard</label>
            <select
              id="ausbauSt"
              onChange={(e) => {
                setausbauSt(e.target.value);
              }}
            >
              <option value="alle">alle</option>
              <option value="einfach">einfach</option>
              <option value="normal">normal</option>
              <option value="luxuriös">luxuriös</option>
              <option value="rustikal">rustikal</option>
            </select>
          </form>
        </div>
        <div>
          <form>
            <label htmlFor="age">Kosten bis</label>
            <input
              type="number"
              id="kostenBis"
              min="0"
              max="1000000"
              step={10000}
              onChange={(e) => {
                setkostenBis(e.target.value);
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
              <option value="alle">alle</option>
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
            <label htmlFor="nutzBis">Nutzfläche bis</label>
            <select
              id="nutzBis"
              onChange={(e) => {
                setnutzBis(e.target.value);
              }}
            >
              <option value="alle">alle</option>
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
                setbaujahrBis(e.target.value);
              }}
            >
              <option value="alle">alle</option>
              <option value="1940">1940</option>
              <option value="1960">1960</option>
              <option value="1980">1980</option>
              <option value="2000">2000</option>
              <option value="2020">2020</option>
            </select>
          </form>
        </div>
      </div>

      <div>
        <div className="pageLinks">
          {localStorage.getItem("property") !== null ? (
            <button
              type="lastProperty"
              onClick={() => window.location.replace("../clickedProperty")}
            >
              Letzte Liegenschaft
            </button>
          ) : null}
          <button
            type="addProperty"
            onClick={() => window.location.replace("../addProperty")}
          >
            Liegenschaft hinzufügen
          </button>
        </div>

        <div className="listProperties">
          <table>
            <thead>
              <tr>
                <th>Bezeichnung</th>
                <th>Liegenschaftstyp</th>
                <th>Nutzfläche</th>
                <th>Grundstückfläche</th>
                <th>Ausbaustandard</th>
                <th>Baujahr</th>
                <th>Zustand</th>
                <th>Kosten</th>
              </tr>
            </thead>
            <tbody>
              {property
                .filter((property) => {
                  // Überprüfen, ob mindestens ein Filterwert nicht 'beliebig' ist
                  // ..
                  // Überprüfen, ob mindestens ein Filterwert nicht 'beliebig' ist
                  if (
                    baujahrBis !== "alle" ||
                    baujahrVon !== "alle" ||
                    grundStückB !== "alle" ||
                    ausbauSt !== "alle" ||
                    zustand !== "alle" ||
                    nutzVon !== "alle" ||
                    kostenBis !== "alle" ||
                    nutzBis !== "alle" ||
                    grundStückV !== "alle" ||
                    kostenVon !== "alle" ||
                    liegTyp !== "alle" ||
                    suchbegriff !== ""
                  ) {
                    // Überprüfen, ob die Bedingungen für alle Filterwerte erfüllt sind
                    return (
                      (suchbegriff === "" ||
                        property.LiegBezeichnung.toLowerCase().includes(
                          suchbegriff.toLowerCase()
                        )) &&
                      (baujahrBis === "alle" ||
                        property.LiegBaujahr <= baujahrBis) &&
                      (baujahrVon === "alle" ||
                        property.LiegBaujahr >= baujahrVon) &&
                      (grundStückB === "alle" ||
                        property.LiegGrundstückfläche <= grundStückB) &&
                      (ausbauSt === "alle" ||
                        property.LiegAusbaustandard === ausbauSt) &&
                      (zustand === "alle" ||
                        property.LiegZustand === zustand) &&
                      (liegTyp === "alle" || property.LiegTyp === liegTyp) &&
                      (grundStückV === "alle" ||
                        property.LiegGrundstückfläche >= grundStückV) &&
                      (nutzVon === "alle" ||
                        property.LiegNutzfläche >= nutzVon) &&
                      (nutzBis === "alle" || property.LiegNutzfläche <= nutzBis)
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
                      <td id="liegNutzfläche">{val.LiegNutzfläche}</td>
                      <td id="liegGrundSF">{val.LiegGrundstückfläche}</td>
                      <td id="liegAusbauS">{val.LiegAusbaustandard}</td>
                      <td id="liegBaujahr">{val.LiegBaujahr}</td>
                      <td id="liegZustand">{val.LiegZustand}</td>
                      <td id="liegKosten">{cost}</td>
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
