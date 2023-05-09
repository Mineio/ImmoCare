import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const [property, setProperty] = useState([]);

  const [grundStückB, setgrundStückB] = useState("beliebig");
  const [nutzFlB, setnutzFlB] = useState("beliebig");
  const [ausbauSt, setausbauSt] = useState("beliebig");
  const [zustand, setzustand] = useState("beliebig");

  const [chfVon, setchfVon] = useState("beliebig");
  const [chfBis, setchfBis] = useState("beliebig");

  const [baujahrVon, setbaujahrVon] = useState("beliebig");
  const [Baujahrbis, setBaujahrbis] = useState("beliebig");
  const [Liegenschaftstyp, setLiegenschaftstyp] = useState("beliebig");

  useEffect(() => {
    selectProperties();
  }, []);
  /*
  useEffect(() => {
    selectNewProperties();
  }, [suchen]);

  const selectNewProperties = () => {
    Axios.get("http://localhost:3001/getNewProperties", {
      params: {
        grundStückB,
        nutzFlB,
        ausbauSt,
        zustand,
        chfVon,
        chfBis,
        baujahrVon,
        Baujahrbis,
        Liegenschaftstyp,
      },
    }).then((response) => {
      setProperty(response.data);
    });
  };
*/
  const selectProperties = () => {
    Axios.get("http://localhost:3001/getProperties").then((response) => {
      setProperty(response.data);
    });
  };

  const navigateToProperty = (clickedLiegenschaft) => {
    return () => {
      let ellist = document.querySelectorAll("liste");
      console.log(clickedLiegenschaft.LiegTyp);
      localStorage.setItem("property", JSON.stringify(clickedLiegenschaft));
      localStorage.setItem("list", JSON.stringify(ellist));
      window.location.replace("../clickedProperty");
    };
  };

  return (
    <div className="properties">
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
              id="grundStückB"
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
            <select id="nutzFlB" onChange={(e) => setnutzFlB(e.target.value)}>
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
            <select id="ausbauSt" onChange={(e) => setausbauSt(e.target.value)}>
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
            <select id="zustand" onChange={(e) => setzustand(e.target.value)}>
              <option value="default">beliebig</option>
              <option value="normal">normal</option>
              <option value="neuwertig">neuwertig</option>
              <option value="sanierungsbedürftig">sanierungsbedürftig</option>
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
                  return (
                    <tr
                      className="liste"
                      onClick={navigateToProperty(val)}
                      key={key}
                    >
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
