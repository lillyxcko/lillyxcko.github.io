import React from 'react';
import avatar from '../images/my-avatar2.png';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import dribble from '../images/dribble.svg';
import '../App.css';

function Sidebar({ emailRef, copied, copyToClipboard }) {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-square">
        <img src={avatar} alt="my-avatar" className="avatar-image"/>
      </div>
      <h1>Lilly Ko</h1>
      <div className={`contact-tag ${copied ? 'copied' : ''}`} onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'lillyxcko@gmail.com'}
        <input type="text" className="contact-input" value="lillyxcko@gmail.com" ref={emailRef} readOnly />
      </div>
      <div className="nav-bar" style={{'--underline-color': '#ff7f50'}} onClick={() => handleClick('about')}>About</div>
      <div className="nav-bar" style={{'--underline-color': '#3fc53e'}} onClick={() => handleClick('portfolio')}>Portfolio</div>
      <div className="nav-bar" style={{'--underline-color': '#3493ee'}} onClick={() => handleClick('tech-stack')}>Tech Stack</div>
      <div className="nav-bar" style={{'--underline-color': '#f04877'}} onClick={() => handleClick('credentials')}>Credentials</div>
      <div className="sidebar-bottom">
        <a href="https://www.linkedin.com/in/lillyko/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-logo" title="LinkedIn" />
        </a>
        <a href="https://github.com/lillyxcko" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="social-logo" title="GitHub"/>
        </a>
        <a href="https://dribbble.com/lillyxcko" target="_blank" rel="noopener noreferrer">
          <img src={dribble} alt="Dribbble" className="social-logo" title="Dribbble"/>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
