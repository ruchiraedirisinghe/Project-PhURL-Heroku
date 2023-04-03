import React, { useState } from "react";
import axios from "axios";

function PhURL() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [probability, setProbability] = useState("");
  const [classicUrl, setUrlCLassic] = useState("");
  const [classicResult, setResultClassic] = useState("");

  const isProduction = process.env.NODE_ENV === 'production';
  const apiUrl = isProduction
      ? '/phishingweb/'
      : 'http://localhost:8000/phishingweb/';

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiUrl + "predict/", { url: url }).then((response) => {
      setResult(response.data.result);
      setProbability(response.data.probability);
    });
  }; // added closing parenthesis here

  const handleSubmitClassic = (e) => {
    e.preventDefault();
    axios.post(apiUrl + "check_phishing/", { url: classicUrl }).then((response) => {
      setResultClassic(response.data.result);
    });
  };

  return (
    <div>
      <h1>PhURL Advanced</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter URL:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Predict</button>
      </form>
      {result && (
        <div>
          <h2>Result: {result}</h2>
          <p>Probability: {probability}</p>
        </div>
      )}

      <h1>PhURL Classic</h1>
      <form onSubmit={handleSubmitClassic}>
        <label htmlFor="classicUrl">Enter URL:</label>
        <input
          type="text"
          id="classicUrl"
          value={classicUrl}
          onChange={(e) => setUrlCLassic(e.target.value)}
        />
        <button type="submit">Predict</button>
      </form>
      {classicResult && (
        <div>
          <h2>Result: {classicResult}</h2>
        </div>
      )}
    </div>
  );
}

export default PhURL;