import React, { useState, useEffect } from 'react';

import './styles.css';

const colors = ["#d7263d", "#f46036", "#2e294e", "#1b998b", "#c5d86d"];

const ShootingStarsBackground = ({
    // minWidth,
    // maxWidth,
    // minHeight,
    // maxHeight,
    // numLines,
  }) => {
  const [windowHasRun, setWindowHasRun] = useState(false);
  const [screenSize, setScreenSize] = useState({ height: 0, width: 0 });

  const minWidth = minWidth ? minWidth : 50;
  const maxWidth = maxWidth ? maxWidth : 300;
  const minHeight = minHeight ? minHeight : 1;
  const maxHeight = maxHeight ? maxHeight : 8;
  const numLines = numLines ? numLines : 250;

  const LineGenerator = ({ delay }) => {
    let width = selectFrom(minWidth, maxWidth);
    let height = selectFrom(minHeight, maxHeight);
    let color = colors[selectFrom(0, colors.length-1)];
    let speed = selectFrom(10, 60, true);
    let right = -(width+30);
    let top = -(width);

    if (selectFrom(0, 0, true) <= .75) {
      right += selectFrom(0, screenSize.width);
    } else {
      top += selectFrom(0, screenSize.height);
    }
    
    return (
      <div
        className=' moving-line'
        style = {{
          backgroundColor: color,
          height: height + 'px',
          width: width + 'px',
          right: right + 'px',
          top: top + 'px',

          // Animation settings
          animationName: 'move',
          animationDuration: speed + 's',
          animationTimingFunction: 'linear',
          animationDirection: 'alternate',
          animationIterationCount: 'infinite',
          animationPlayState: 'running',
          animationDelay: delay + 's',
        }}
      />
    )
  }

  const MultiLines = () => {
    let lines = [];

    for (let i = 0; i < numLines; i++) {
      let delay = i < 10 ? 0.5 : selectFrom(1, 50);
      lines.push(<LineGenerator key={i} delay={delay} />);
    };

    return lines;
  };

  const selectFrom = (lowerLimit, upperLimit, dec) => {
    let choices = upperLimit - lowerLimit + 1;

    if (!dec) return Math.floor(Math.random() * choices + lowerLimit);
    else return Math.random() * choices + lowerLimit;
  };

  const runBeforeRender = () => {
    document.documentElement.style.setProperty(`--translateXValue`, `-${(maxWidth * 3) + (screenSize.width + 50)}px`);
  }

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }

    if (typeof window !== `undefined` && !windowHasRun) {
      updateScreenSize();
      setWindowHasRun(true);
    }

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    }
  }, [screenSize, windowHasRun]);

  runBeforeRender();
  return (
    <div className="moving-lines-container">
      <MultiLines />
    </div>
  );
}

export default ShootingStarsBackground;