import React, { useEffect, useRef } from 'react';
import spark from '../images/Spark.png';
import quotation from '../images/TK-Quotation.png';
import '../App.css';
import arrow from '../images/arrow-purple.svg';
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
import heartgif from '../images/heart.gif';
import heartStatic from '../images/heart.png'; // Import the static image

function MainContent() {
  const heartRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heartRef.current) {
        const rect = heartRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          heartRef.current.style.opacity = 1;
          heartRef.current.src = heartgif; // Play the gif
          setTimeout(() => {
            heartRef.current.src = heartStatic; // Replace with static image after 2 seconds
          }, 1700); // Duration of the gif in milliseconds
          window.removeEventListener('scroll', handleScroll); // Remove event listener after playing once
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-content">
      <h1 id="about">Front-End Dev</h1>
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
        With expertise in development and a deep appreciation for design, I am uniquely positioned to 
        support cross-team collaboration between designers and developers. 
        My keen eye for UX ensures that designs meet development requirements while remaining user-friendly and dynamic. 
        This holistic perspective not only makes designs and project outcomes more effective but also leads to more creative and practical solutions.
      </div>
      
      <h4 id="portfolio">Recent Work</h4>
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

      <h4 id="blog">Articles</h4>
        <div className="recent-work">
          <div className="work">
            <a href="https://bootcamp.uxdesign.cc/how-designers-can-be-more-dev-conscious-77d9e20ea15e?source=friends_link&sk=858fc006804320d0e7a58215b196234a" target="_blank" rel="noreferrer" className="blog-box-link">
              <div className="blog-box">
                <h2 className="blog-title">How designers can be more “Dev-Conscious”</h2>
                <p className="blog-description">Discover how to elevate your UX designs and collaborate with developers for inspiring and achievable solutions.</p>
                <div className="blog-read-more">
                  Read more
                  <img src={arrow} alt="Arrow" className="arrow-icon"/>
                </div>
              </div>
            </a>
          </div>
        </div>
      
      <h4 id="tech-stack">My Tech Stack</h4>
      <div className="tech-stack-logos">
        <img src={csshtml} alt="CSS HTML" title="CSS HTML"/>
        <img src={javascript} alt="Javascript" title="JavaScript"/>
        <img src={figma} alt="Figma" title="Figma"/>
        <img src={reactlogo} alt="React" title="React"/>
        <img src={typescript} alt="Typescript" title="TypeScript"/>
        <img src={python} alt="Python" title="Python"/>
        <img src={java} alt="Java" title="Java"/>
        <img src={powerapps} alt="Microsoft PowerApps" title="Microsoft PowerApps"/>
      </div>
      <p style={{ marginBottom: 1, marginTop: 1, lineHeight: 1.5}}>I have the most expertise with these tools.</p>
      <div className="tech-description">Even when using something new, I learn fast and adapt quickly!</div>
      <br></br>
      <h4 style={{ marginBottom: 8}} id="credentials">My Credentials</h4>
        <div className="credentials">
          <div className="credential-item">
            <img src={uvic} alt="University of Victoria Logo" title="Uvic"/>
            <div>
              <div className="credential-title">University of Victoria</div>
              <div className="credential-text">B.Sc Computer Science and Psychology</div>
            </div>
          </div>
          <div className="credential-item">
            <img src={google} alt="Google Logo" title="Google"/>
            <a href="https://coursera.org/share/162489572f20d6ead98f126c7ee27a8c" target="_blank" rel="noopener noreferrer" className="credential-link">
              <div>
                <div className="credential-title">Google UX Design</div>
                <div className="credential-text">Professional Certificate</div>
              </div>
            </a>
          </div>
          <div className="credential-item">
            <img src={microsoft} alt="Microsoft Logo" title="Microsoft"/>
            <a href="https://learn.microsoft.com/en-us/users/lillyko-4057/credentials/380e0dddb20be05f?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="credential-link">
              <div>
                <div className="credential-title">Azure Fundamentals</div>
                <div className="credential-text">Microsoft Certified</div>
              </div>
            </a>
          </div>
          <div className="credential-item">
            <img src={microsoft} alt="Microsoft Logo" title="Microsoft"/>
            <a href="https://learn.microsoft.com/en-us/users/lillyko-4057/credentials/cca0565265a0d03b?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="credential-link">
              <div>
                <div className="credential-title">Power Platform Fundamentals</div>
                <div className="credential-text">Microsoft Certified</div>
              </div>
            </a>
          </div>
          <div className="credential-item">
            <img src={microsoft} alt="Microsoft Logo" title="Microsoft"/>
            <a href="https://learn.microsoft.com/en-ca/users/lillyko-4057/credentials/2ce04ff7e378f613?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="credential-link">
              <div>
                <div className="credential-title">Azure AI Fundamentals</div>
                <div className="credential-text">Microsoft Certified</div>
              </div>
            </a>
          </div>
        </div>
        <div className="footer">
          <img ref={heartRef} alt="Heart" className="heart-icon" style={{ opacity: 0 }} />
          <p style={{ marginTop: 0 }}>Developed with care, Lilly.</p>
        </div>
    </div>
  );
}

export default MainContent;
