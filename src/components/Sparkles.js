import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const generateSparkle = () => ({
  id: String(Math.random()),
  createdAt: Date.now(),
  color: `hsl(${Math.random() * 360}, 100%, 75%)`,
  size: Math.random() * 20 + 10,
  style: {
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    transform: `rotate(${Math.random() * 360}deg)`,
  },
});

const Sparkle = ({ color, size, style }) => {
  return (
    <span
      style={{
        position: 'absolute',
        display: 'block',
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
};

const Sparkles = ({ children }) => {
  const [sparkles, setSparkles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const sparkle = generateSparkle();
      setSparkles((prev) => [...prev, sparkle]);
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
      }, 1000); // Sparkle lifespan
    }, 300); // Frequency of sparkles

    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }} ref={containerRef}>
      {children}
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
    </span>
  );
};

export default Sparkles;