import React, { useRef, useState } from 'react';
import './App.css';
import avatar from './images/my-avatar2.png';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';
import spark from './images/Spark.png';
import quotation from './images/TK-Quotation.png';

function App() {
  const emailRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const emailInput = emailRef.current;
    emailInput.select();
    document.execCommand('copy');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1100); // Reset copied state after 1.1 seconds
  };

  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-square">
            <img src={avatar} alt="my-avatar" className="avatar-image"/>
          </div>
          <h1>Lilly Ko</h1>
          <div
            className={`contact-tag ${copied ? 'copied' : ''}`}
            onClick={copyToClipboard}
          >
            {copied ? 'Copied!' : 'lillyxcko@gmail.com'}
            <input
              type="text"
              className="contact-input"
              value="lillyxcko@gmail.com"
              ref={emailRef}
              readOnly
            />
          </div>
          <div className="nav-bar" style={{'--underline-color': '#ff7f50'}}>About</div>
          <div className="nav-bar" style={{'--underline-color': '#3fc53e'}}>Portfolio</div>
          <div className="nav-bar" style={{'--underline-color': '#3493ee'}}>Tech Stack</div>
          <div className="nav-bar" style={{'--underline-color': '#f04877'}}>Credentials</div>
          <div className="sidebar-bottom">
            <a href="https://www.linkedin.com/in/lillyko/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className="social-logo" /></a>
            <a href="https://github.com/lillyxcko" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" className="social-logo" /></a>
          </div>
        </div>
        <div className="main-content">
          <h1>Front-End Dev</h1>
          <h2>UX Designer</h2>
          <p>G’day! I’m Lilly 😁 Whether I’m working in software development or UX design, 
            I prioritize <span className="highlight">functional</span>, 
            <span className="highlight"> attractive</span>, and 
            <span className="highlight"> user centric</span> solutions. 
            My goal in every project is to make meaningful contributions and grow alongside my 
            teammates so we can create something that will leave a lasting positive impact on our users.
          </p>
          <h3>What makes me unique?</h3>
          <div className="smaller-text">
            My dual expertise as a developer with a strong understanding of design allows me to bridge the gap 
            between designers and developers, enhancing cross-team collaboration. My keen eye for UX ensures that 
            designs are dynamic enough to meet development requirements, enabling me to identify potential issues 
            early and propose solutions that are both technically feasible and user-friendly.
          </div>
          <h4>Recent Work</h4>
          <div className="recent-work"> 
          <div className="work">
              <a href="https://spark-roan.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-item-link">
                <div className="work-item">
                  <img src={spark} alt="Work 1"/>
                </div>
              </a>
              <div>
                <h5>Spark</h5>
                <div className="work-description">✨ Spark, the social media web application made with React JS, Appwrite, Tailwind CSS, React Query. 
                  Styled with shadcn. Includes account authentication, create, edit and explore posts, view, like and save posts. </div>
              </div>
            </div>

            <div className="work">
              <a href="https://docs.google.com/presentation/d/1DJ9_u1qI9QAv5D6XZAG_8BpXz1Cy7kUt3XdhvYPt7iU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="work-item-link">
                <div className="work-item">
                  <img src={quotation} alt="Work 2"/>
                </div>
              </a>
              <div>
                <h5>Quotation UI</h5>
                <div className="work-description">Meticulously developed high-fidelity mock-up for an enterprise API, strategically enhancing data 
                  entry and manipulation for quoting complex and highly customizable print jobs. </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
