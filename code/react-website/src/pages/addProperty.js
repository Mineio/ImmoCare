import React from "react";
import Axios from "axios";
import { useState } from "react";

function AddProperty() {
  const [grundStückB, setgrundStückB] = useState("beliebig");
  const [nutzFlB, setnutzFlB] = useState("beliebig");
  const [ausbauSt, setausbauSt] = useState("beliebig");
  const [zustand, setzustand] = useState("beliebig");
  const [chfVon, setchfVon] = useState("beliebig");
  const [chfBis, setchfBis] = useState("beliebig");
  const [baujahrVon, setbaujahrVon] = useState("beliebig");
  const [Baujahrbis, setBaujahrbis] = useState("beliebig");

  const insertProperties = () => {
    Axios.post("http://localhost:3001/insert", {
      grundStück: grundStückB,
      nutzfläche: nutzFlB,
      ausbaustand: ausbauSt,
      zustandReq: zustand,
      chfmin: chfVon,
      chfmax: chfBis,
      baujahrmin: baujahrVon,
      baujahrmax: Baujahrbis,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
  <div className="App">

  </div>;
  )
}

export default AddProperty;
