import React, { useState } from "react";
import axios from "axios";

// import { NavLink } from "react-router-dom";

// const Navigation = () => (
//   <nav>
//     <ul>
//       <li><NavLink exact to="/">Home</NavLink></li>
//       <li><NavLink to="/advanced">Advanced</NavLink></li>
//       <li><NavLink to="/classic">Classic</NavLink></li>
//       <li><NavLink to="/end">End</NavLink></li>
//     </ul>
//   </nav>
// );


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
      <img src="/logo512.png" alt="Tech Image" width="150" height="150" /><br></br>
      {/* <h1>Welcome to PhURL<br></br>
        The Phishing URL Detection & Learning Platform</h1> */}
        <img src="/first section.png" alt="Tech Image" width="930" height="250" />
        <br></br>
        <h2>What is PhURL?</h2>
      <p>Phishing attacks are a significant threat to internet users, with cyber criminals using increasingly sophisticated tactics to trick people into revealing sensitive information
        <br></br> or downloading malware. This project aims to protect individuals and organizations from these threats by developing a system that can detect phishing URLs and educate 
        <br></br>users about how to recognize and avoid them. As phishing attacks are constantly evolving, a learning platform that can adapt and improve its detection capabilities is essential 
        <br></br>for staying ahead of the threat. Additionally, the project also has the potential to contribute to our understanding of how phishing attacks work and
        <br></br>how phishing attacks work and how they can be effectively detected and prevented.</p>
      
      <br></br><h2>Why use PhURL?</h2>
      <p>PhURL uses multiple URL detection methods to increase accuracy and adapt to evolving phishing tactics, providing more comprehensive protection against phishing attacks.
        <br></br>With phishing attacks constantly evolving and becoming more sophisticated, PhURL is essential for staying ahead of the threat by providing a learning platform
        <br></br>that can adapt and improve its detection capabilities over time. Not only is PhURL practical, but it also has the potential to contribute to our understanding of
        <br></br> how phishing attacks work and how they can be effectively detected and prevented.</p><br></br>

        <h2>Used Technologies in PhURL Development</h2>
        <img src="/tech.png" alt="Tech Image" width="920" height="80" /><br></br>
        <br></br><br></br><br></br>
        <img src="/Linebreak.png" alt="Tech Image" width="1200" height="3" /><br></br>

      
      <br></br><br></br>
      {/* <h1>PhURL Advanced URL Detection</h1>
      <h3>AI & Machine Learning Integrated Phishing Detection</h3> */}
      <img src="/advancedsection.png" alt="Tech Image" width="1050" height="330" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="url"><h3>Enter Your Suspicious URL Here: </h3> </label>
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
          <p>When you enter a link to a website, our system analyzes the URL to determine whether it
contains malware or not. The probability displayed to you indicates
<br></br> the likelihood that the URL is malicious or safe to be browsed and used. However, please keep in mind that this
analysis is not foolproof and there is a chance that 
<br></br>the result may be incorrect. We encourage you to exercise caution when browsing websites and to take appropriate measures to protect your device and personal
<br></br> information. This includes using antivirus software, keeping your software and operating system up-to-date, and avoiding suspicious or unfamiliar websites.</p>
        </div>
      )}
      <br></br><br></br>
      <img src="/advancework.png" alt="Tech Image" width="1050" height="908" /><br></br>
      <br></br><br></br>
        <img src="/Linebreak.png" alt="Tech Image" width="1200" height="3" /><br></br><br></br><br></br>

      {/* <h1>PhURL Classic URL Detection</h1>
      <h3>A python script which sorts the characters inside the uploaded URL.</h3> */}
      <img src="/classicsection.png" alt="Tech Image" width="1050" height="350" />
      {/* <img src="/Linebreak.png" alt="Tech Image" width="500" height="3" /> */}
      <br></br><br></br>
      <form onSubmit={handleSubmitClassic}>
        <label htmlFor="classicUrl"><h3>Enter Your Suspicious URL Here:</h3>  </label>
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
          <p> When you enter a link to a website, our system analyzes the URL to determine whether it contains malware or not. However, please keep in mind that this analysis is
<br></br> not foolproof and there is a chance that the result may be incorrect. We encourage you to exercise caution when browsing websites and to take appropriate
<br></br> measures to protect your device and personal information. This includes using antivirus software, keeping your software and operating system up-to-date, and
<br></br>avoiding suspicious or unfamiliar websites.</p>
        </div>
      )}
      <br></br><br></br>
      <img src="/classicwork.png" alt="Tech Image" width="1050" height="828" /><br></br>
      <br></br><br></br>
        <img src="/Linebreak.png" alt="Tech Image" width="1200" height="3" /><br></br><br></br><br></br>

        <br></br><img src="/whatis.png" alt="Tech Image" width="1050" height="370" />
        <br></br><img src="/how.png" alt="Tech Image" width="1050" height="385" />
        <br></br><br></br><br></br><br></br><img src="/emaildetect.png" alt="Tech Image" width="1050" height="1300" />
    </div>
  );
}

export default PhURL;