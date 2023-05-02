import React from "react";

const [grundStückB, setgrundStückB] = useState("beliebig");
const [nutzFlB, setnutzFlB] = useState("beliebig");
const [ausbauSt, setausbauSt] = useState("beliebig");
const [zustand, setzustand] = useState("beliebig");

const [chfVon, setchfVon] = useState("beliebig");
const [chfBis, setchfBis] = useState("beliebig");

const [baujahrVon, setbaujahrVon] = useState("beliebig");
const [Baujahrbis, setBaujahrbis] = useState("beliebig");

const AddProperty = () => {

  insertProperty=()=>{
   
  }
  return (
    <div>
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
      <button type="button" onClick={insertProperty}>
        AddProperty
      </button>
    </div>
  );
};
export default AddProperty;
