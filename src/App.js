import React, { useState, useEffect } from "react";
import "./App.css";
import Baslik from "./nasa/Baslik.js";
import Footer from "./nasa/Footer.js";
import OrtaBolum from "./nasa/OrtaBolum.js";
import { sahteVeri } from "../sahteVeri";
import axios from "axious";
function App() {
  const [tarih, setTarih] = useState("1998-03-28");
  const [data, setData] = useState(sahteVeri);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=3wkI5lZxyiVojEhKgnaeG2kJwgzf00RAFI97pnsz"
      )
      .then((response) => {
        setData(response.data);
      });
  }, [tarih]);
  return (
    <div className="App">
      <Baslik />
      <OrtaBolum />
      <Footer />
    </div>
  );
}

export default App;
