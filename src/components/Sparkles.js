import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ReactSVG } from 'react-svg';
import styled, { keyframes } from 'styled-components';
import sparkle from '../images/sparkle.svg'; // Import your SVG

// Utility function to generate a random number between min and max
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Utility function to create an array with a range of numbers
const range = (count) => Array.from({ length: count }, (_, i) => i);

// Predefined list of colors
const colorList = [
    '#ff7f50',
    '#72cc50',
    '#b24bf3',
    '#3493ee',
    '#f04877',
    '#6e57c9',
    '#fc83ac',
    '#ffcc00',
    '#f09c0a',
    '#fae000',
    '#4070d3',
    '#93ecf8',
    '#90d5ff'
  ];
  
// Utility function to pick a random color from the list, excluding recent ones
const generateVibrantColor = (() => {
  let recentColors = []; // Track the last three picked colors

  return () => {
    const availableColors = colorList.filter((color) => !recentColors.includes(color));
    const pickedColor = availableColors[random(0, availableColors.length - 1)];

    // Update recentColors queue
    recentColors.push(pickedColor);
    if (recentColors.length > 3) recentColors.shift(); // Keep only the last three

    return pickedColor;
  };
})();

// Utility function to generate a sparkle object
const generateSparkle = () => ({
  id: String(random(10000, 99999)),
  createdAt: Date.now(),
  color: generateVibrantColor(), // Assign random vibrant color
  size: random(10, 20),
  style: {
    top: `${random(-80, 70)}%`,
    left: `${random(20, 120)}%`,
    zIndex: random(0, 1) === 0 ? -1 : 2, // Randomly decide z-index
  },
});

// Custom hook for reduced motion preference
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    setPrefersReducedMotion(mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Custom hook for random intervals
const useRandomInterval = (callback, minDelay, maxDelay) => {
    const timeoutId = useRef(null);
  
    const runInterval = useCallback(() => {
      const timeout = random(minDelay, maxDelay);
      timeoutId.current = setTimeout(() => {
        callback();
        runInterval();
      }, timeout);
    }, [callback, minDelay, maxDelay]); // Add dependencies here
  
    useEffect(() => {
      if (minDelay === null || maxDelay === null) return;
  
      runInterval(); // Start the interval
      return () => clearTimeout(timeoutId.current); // Cleanup
    }, [minDelay, maxDelay, runInterval]); // Include runInterval as a dependency
  };

// Sparkles component
const Sparkles = ({ children, ...delegated }) => {
  const [sparkles, setSparkles] = useState(() => range(3).map(() => generateSparkle()));
  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const sparkle = generateSparkle();
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => now - sp.createdAt < 750);

      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  );

  return (
    <Wrapper {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

// Individual Sparkle component
const Sparkle = ({ size, color, style }) => (
  <SparkleWrapper style={style}>
    <Svg
      src={sparkle}
      beforeInjection={(svg) => {
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
        svg.querySelector('path').setAttribute('fill', color); // Apply dynamic color
      }}
    />
  </SparkleWrapper>
);

// Keyframes for animations
const growAndShrink = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(15deg);
  }
`;

// Styled components
const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const SparkleWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  animation: ${growAndShrink} 650ms ease-in-out forwards;
  top: -50px; 
`;

const Svg = styled(ReactSVG)`
  animation: ${spin} 650ms linear forwards;
`;

const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

export default Sparkles;