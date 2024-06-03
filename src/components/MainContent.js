import React from 'react';
import spark from '../images/Spark.png';
import quotation from '../images/TK-Quotation.png';
import '../App.css';
import csshtml from '../images/css-html.png'; 
import figma from '../images/figma.png';
import google from '../images/google.png';
import java from '../images/java.png';
import javascript from '../images/javascript.png';
import microsoft from '../images/microsoft.png';
import powerapps from '../images/powerapps.png';
import python from '../images/python.png';
import typescript from '../images/typescript.png';
import reactlogo from '../images/react.png';
import uvic from '../images/uvic.png';

function MainContent() {
  return (
    <div className="main-content">
      {/* Main content */}
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
      <h4>My Tech Stack</h4>
      <div className="tech-stack-logos">
        <img src={csshtml} alt="CSS HTML" />
        <img src={javascript} alt="Javascript" />
        <img src={figma} alt="Figma" />
        <img src={reactlogo} alt="React" />
        <img src={typescript} alt="Typescript" />
        <img src={python} alt="Python" />
        <img src={java} alt="Java" />
        <img src={powerapps} alt="Microsoft PowerApps" />
      </div>
    </div>
  );
}

export default MainContent;
