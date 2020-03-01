import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

function App() {
  const colors = ["#d7263d", "#f46036", "#2e294e", "#1b998b", "#c5d86d"];
  const [displayLines, setDisplayLines] = useState([]);
  const LineGenerator = ({delay}) => {
    let width = selectFrom(50, 200);
    let height = selectFrom(2, 5);
    let color = colors[selectFrom(0, colors.length-1)];
    let speed = selectFrom(10, 60, true) + "s";
    
    let right = -width-30;
    let top = -(width/2);

    if (selectFrom(0, 0, true) <= .75) {
      right += selectFrom(0, window.innerWidth);
    } else {
      top += selectFrom(0, window.innerHeight);
    }
    
    return (
      <Line
        width={width}
        height={height}
        color={color}
        speed={speed}
        top={top}
        right={right}
        delay={delay}
      />
    )
  }

  const MultiLines = () => {
      let lines = [];
      for (let i = 0; i < 500; i++) {
        let delay = 0;
        if (i < 10) delay = 0.5;
        else delay = selectFrom(1, 50);
        lines.push(<LineGenerator key={i} delay={delay}/>);
      };
      return lines;
  };

  const selectFrom = (lowerLimit, upperLimit, dec) => {
    let choices = upperLimit - lowerLimit + 1;
    if (!dec) return Math.floor(Math.random() * choices + lowerLimit);
    return (Math.random() * choices + lowerLimit);
  }


  useEffect(() => {
    
  },[])

  console.log('rendering');
  return (
    <Container>
      {/* {displayLines.length !== 0 ? ( */}
        <MultiLines />
      {/* ): ( null )} */}
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
`;

const Line = styled.div`
  position: absolute;
  opacity: 0.5;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}px`};
  background-color: ${props => props.color};
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};

  animation: move ${props => props.speed} both infinite;
  animation-delay: ${props => `${props.delay}s`};

  @keyframes move {
    0% {
      transform: rotate(-60deg) translateX(0px);
    };
    100% {
      transform: ${props => `rotate(-60deg) translateX(-${props.width * 3 + (window.innerWidth + 50)}px)`};
    }
  }
`;