import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const colors = ["#d7263d", "#f46036", "#2e294e", "#1b998b", "#c5d86d"];

const App = () => {
  const [windowHasRun, setWindowHasRun] = useState(false);
  const [screenSize, setScreenSize] = useState({ height: 0, width: 0 });

  const minWidth = 50;
  const maxWidth = 300;
  const minHeight = 1;
  const maxHeight = 8;
  const numLines = 250;

  const LineGenerator = ({ delay }) => {
    let width = selectFrom(minWidth, maxWidth);
    let height = selectFrom(minHeight, maxHeight);
    let color = colors[selectFrom(0, colors.length-1)];
    let speed = selectFrom(10, 60, true);
    let right = -(width+30);
    let top = -width;

    if (selectFrom(0, 0, true) <= .75) {
      right += selectFrom(0, screenSize.width);
    } else {
      top += selectFrom(0, screenSize.height);
    }
    
    return (
      <div
      className=' moving-line'
      style = {{
        top: top + 'px',
        right: right + 'px',
        backgroundColor: color,
        width: width + 'px',
        height: height + 'px',
        animation: 'move ' + speed + 's alternate infinite',
        animationDelay: delay + 's',
        position: 'absolute',
        opacity: 0.5,
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

  return (
    <Container maxLineWidth={maxWidth} screenWidth={screenSize.width}>
      <MultiLines />
    </Container>
  );
}

export default App;

/********************** Styles **********************/
const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;

  display: flex;
  justify-content: center;
  align-items: center;

  .moving-line {
    @keyframes move {
      0% {
        transform: rotate(-60deg) translateX(0px);
      };
      100% {
        transform: ${props => `rotate(-60deg) translateX(-${props.maxLineWidth * 3 + (props.screenWidth + 50)}px)`};
      }
    }
  }
`;