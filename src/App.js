import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import BiComponent from "./BiComponent";

function App() {
  const [apodData, setApodData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date("2022-08-21").toISOString().slice(0, 10)
  );

  useEffect(() => {
    // Optionally the request above could also be done as
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "UfqIDVnoxPlbFK9aY5Fr93Tbhe16GI5j7utxYAVc",
          date: datePicker,
        },
      })
      .then(function(response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
    console.log("sayfam render oldu");
  }, [datePicker]);

  return (
    <div className="App">
      <BiComponent
        data={apodData}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );
}

export default App;
