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
  /* The above code is a React component that renders a webpage for a phishing URL detection and learning
  platform called PhURL. The webpage includes information about the platform, its features, and
  technologies used in its development. It also includes two forms for users to enter suspicious URLs
  and get predictions on whether they contain malware or not using two different detection methods.
  The webpage also includes sections on how the platform works, common phishing tactics, terms and
  conditions, and a feedback form. Finally, the webpage includes links to follow the creator on GitHub
  and LinkedIn. */

  return (

    <div style={{ backgroundColor: '#020B1B' }}>
      <img src="/logo512.png" alt="Tech Image" width="150" height="150" /><br></br>

      {/* Introduction to PhURL */}
      <img src="/sectionz.png" alt="Tech Image" width="930" height="250" />
      <br></br>
      <h2 style={{ color: '#fff' }}>What is PhURL?</h2>
      <p style={{ color: '#fff' }}>Phishing attacks are a significant threat to internet users, with cyber criminals using increasingly sophisticated tactics to trick people into revealing sensitive information
        <br></br> or downloading malware. This project aims to protect individuals and organizations from these threats by developing a system that can detect phishing URLs and educate
        <br></br>users about how to recognize and avoid them. As phishing attacks are constantly evolving, a learning platform that can adapt and improve its detection capabilities is essential
        <br></br>for staying ahead of the threat. Additionally, the project also has the potential to contribute to our understanding of how phishing attacks work and
        <br></br>how phishing attacks work and how they can be effectively detected and prevented.</p>

      <br></br><h2 style={{ color: '#fff' }}>Why use PhURL?</h2>
      <p style={{ color: '#fff' }}>PhURL uses multiple URL detection methods to increase accuracy and adapt to evolving phishing tactics, providing more comprehensive protection against phishing attacks.
        <br></br>With phishing attacks constantly evolving and becoming more sophisticated, PhURL is essential for staying ahead of the threat by providing a learning platform
        <br></br>that can adapt and improve its detection capabilities over time. Not only is PhURL practical, but it also has the potential to contribute to our understanding of
        <br></br> how phishing attacks work and how they can be effectively detected and prevented.</p><br></br>

      <h2 style={{ color: '#fff' }}>Used Technologies in PhURL Development</h2>
      <img src="/tech.png" alt="Tech Image" width="920" height="80" /><br></br>
      <br></br><br></br><br></br>
      <img src="/Linebreak.png" alt="Tech Image" width="1200" height="3" /><br></br>


      <br></br><br></br>


      {/* PhURL Advanced URL Detection*/}
      <img src="/advancedsection.png" alt="Tech Image" width="1050" height="330" />
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <label htmlFor="url" style={{ color: '#fff', marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>Enter Your Suspicious URL Here:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: 'none', boxShadow: '0px 0px 5px 1px #007bff', width: '300px' }}
          placeholder="https://example.com"
        />
        <button type="submit" style={{ backgroundColor: '#8566FF', color: '#010000', padding: '10px', borderRadius: '5px', border: 'none', marginTop: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '18px' }}>Is it Phishing?</button>
      </form>

      {result && (
        <div>
          {/* <h2 style={{ color: '#fff' }}>Result: {result}</h2> */}
          {/* <h2 style={{ color: {{result === 'MALWARE' ? 'red' : 'green'}} }}>Result: {result}</h2> */}
          <h2 style={{ color: result === 'MALWARE' ? 'red' : 'green' }}>Result: {result}</h2>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ color: '#fff' }}>Probability:</p>
            <div style={{ height: '20px', width: '100%', backgroundColor: '#ddd', borderRadius: '10px', marginTop: '10px' }}>
              <div style={{ height: '20px', width: `${probability > 100 ? 100 : probability}%`, backgroundColor: result === 'MALWARE' ? 'red' : 'green', borderRadius: '10px' }}>
                {probability > 100 ? (
                  <>
                    <div style={{ height: '20px', width: `${probability - 100}%`, backgroundColor: result === 'MALWARE' ? 'red' : 'green', borderRadius: '10px' }} />
                    <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>100%</span>
                  </>
                ) : (
                  <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>{probability}</span>
                )}
              </div>
            </div>
          </div>
          <p style={{ color: '#fff' }}>When you enter a link to a website, our system analyzes the URL to determine whether it
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


      {/*PhURL Classic URL Detection*/}
      <img src="/classicsection.png" alt="Tech Image" width="1050" height="350" />
      <br></br><br></br>
      <form onSubmit={handleSubmitClassic} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="classicUrl" style={{ color: '#fff', marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>Enter Your Suspicious URL Here:</label>
        <input
          type="text"
          id="classicUrl"
          value={classicUrl}
          onChange={(e) => setUrlCLassic(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: 'none', boxShadow: '0px 0px 5px 1px #007bff', width: '300px' }}
          placeholder="https://example.com"
        />
        <button type="submit" style={{ backgroundColor: '#8566FF', color: '#010000', padding: '10px', borderRadius: '5px', border: 'none', marginTop: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '18px' }}>Is it Phishing?</button>
      </form>
      {classicResult && (
        <div>
          <h2 style={{ color: classicResult === 'MALWARE' ? 'red' : 'green' }}>Result: {classicResult}</h2>
          <p style={{ color: '#fff' }}> When you enter a link to a website, our system analyzes the URL to determine whether it contains malware or not. However, please keep in mind that this analysis is
            <br></br> not foolproof and there is a chance that the result may be incorrect. We encourage you to exercise caution when browsing websites and to take appropriate
            <br></br> measures to protect your device and personal information. This includes using antivirus software, keeping your software and operating system up-to-date, and
            <br></br>avoiding suspicious or unfamiliar websites.</p>
        </div>
      )}
      <br></br><br></br>
      <img src="/classicwork.png" alt="Tech Image" width="1050" height="828" /><br></br>
      <br></br><br></br>
      <img src="/Linebreak.png" alt="Tech Image" width="1200" height="3" /><br></br><br></br><br></br>

      {/*PhURL URL Detection - how does it work*/}
      <br></br><img src="/whatis.png" alt="Tech Image" width="1050" height="370" />
      <br></br><img src="/how.png" alt="Tech Image" width="1050" height="385" />
      <br></br><br></br><br></br><br></br><img src="/testemail.png" alt="Tech Image" width="920" height="1100" />
      <br></br><br></br><img src="/common.png" alt="Tech Image" width="1050" height="835" />

      <br></br><br></br>
      <img src="/Linebreak.png" alt="Tech Image" width="1200" height="3" /><br></br><br></br><br></br>

      <img src="/t&c.png" alt="Tech Image" width="1220" height="1100" />

      <br></br><br></br>
      <img src="/Linebreak.png" alt="Tech Image" width="1200" height="3" /><br></br><br></br>

      <h1 style={{ color: '#fff' }}>Please Enter Your Valuable Feedback</h1>
      <h3 style={{ color: '#fff' }}>PhURL is all about providing what is best for the users.
        <br></br>Please enter your valuable feedback, so that this system can be developed more in the future.</h3>


      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <a href="https://forms.gle/1uoNJDk9Y8sYqwDE7" target="_blank">
          <img src="/button.png" alt="Feedback Button" style={{ width: "430px", height: "auto", borderRadius: "10px" }} />
        </a>
      </div>
      <br></br><br></br>
      <img src="/Linebreak.png" alt="Tech Image" width="1200" height="3" /><br></br><br></br><br></br>

      <h1 style={{ color: '#fff' }}>Follow The Creator</h1>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <a href="https://github.com/ruchiraedirisinghe" target="_blank">
          <img src="/git.png" alt="Feedback Button" style={{ width: "auto", height: "50px", borderRadius: "10px", marginRight: "20px" }} />
        </a>
        <a href="https://www.linkedin.com/in/ruchiraedirisinghe/" target="_blank">
          <img src="/link.png" alt="Feedback Button" style={{ width: "auto", height: "50px", borderRadius: "10px" }} />
        </a>
      </div>



      <img src="/footer.png" alt="Tech Image" width="1850" height="350" />
    </div>
  );
}

export default PhURL;