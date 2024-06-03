import React, { useRef, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

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
        <Sidebar emailRef={emailRef} copied={copied} copyToClipboard={copyToClipboard} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
