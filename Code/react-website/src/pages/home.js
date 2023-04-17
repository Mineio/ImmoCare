import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    selectProperties();
  }, []);

  const selectProperties = () => {
    Axios.get("http://localhost:3001/getProperties").then((response) => {
      setProperty(response.data);
    });
  };

  return (
    <div className="properties">
      <div className="searchbarTop">
        <div>
          <label htmlFor="wordsearch">Liegenschaftstyp</label>
          <input type="text" id="wordsearch" placeholder="Suchen" />
        </div>
        <div>
          <label htmlFor="grundStückB">Grundstückfläche bis</label>
          <select id="grundStückB">
            <option value="default">beliebig</option>
            <option value="300">300m²</option>
            <option value="600">600m²</option>
            <option value="900">900m²</option>
            <option value="1200">1200m²</option>
            <option value="1500">1500m²</option>
            <option value="2000">2000m²</option>
          </select>
        </div>
        <div>
          <label htmlFor="nutzFlB">Nutzfläche bis</label>
          <select id="nutzFlB">
            <option value="default">beliebig</option>
            <option value="200">200m²</option>
            <option value="400">400m²</option>
            <option value="600">600m²</option>
            <option value="800">800m²</option>
            <option value="1000">1000m²</option>
            <option value="1500">1500m²</option>
          </select>
        </div>
        <div>
          <label htmlFor="ausbauSt">Ausbaustand</label>
          <select id="ausbauSt">
            <option value="default">beliebig</option>
            <option value="einfach">einfach</option>
            <option value="normal">normal</option>
            <option value="luxeriös">luxeriös</option>
          </select>
        </div>
        <div>
          <label htmlFor="zustand">Zustand</label>
          <select id="zustand">
            <option value="default">beliebig</option>
            <option value="normal">normal</option>
            <option value="neuwertig">neuwertig</option>
            <option value="sanierungsbedürftig">sanierungsbedürftig</option>
          </select>
        </div>
      </div>
      <div className="searchbarBottom">
        <div>
          <label htmlFor="chfVon">CHF von</label>
          <input type="number" id="chfVon" placeholder="Beliebig" />
        </div>
        <div>
          <label htmlFor="chfBis">CHF bis</label>
          <input type="number" id="chfBis" placeholder="Beliebig" />
        </div>
        <div>
          <label htmlFor="baujahrVon">Baujahr von</label>
          <select id="baujahrVon">
            <option value="default">beliebig</option>
            <option value="1800">1800</option>
            <option value="1850">1850</option>
            <option value="1900">1900</option>
            <option value="1950">1950</option>
            <option value="2000">2000</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div>
          <label htmlFor="baujahrBis">Baujahr bis</label>
          <select id="baujahrBis">
            <option value="default">beliebig</option>
            <option value="1800">1800</option>
            <option value="1850">1850</option>
            <option value="1900">1900</option>
            <option value="1950">1950</option>
            <option value="2000">2000</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
      <div className="listProperties">
        <table>
          <tbody>
            {property.map((val, key) => {
              return (
                <tr key={key}>
                  <td id="liegNR">{val.LiegNR}</td>
                  <td id="">{/*val.*/}</td>
                  <td id="">{/*val.*/}</td>
                  <td id="">{/*val.*/}</td>
                  <td id="">{/*val.*/}</td>
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
