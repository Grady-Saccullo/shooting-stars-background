import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

function App() {
  const minWidth = 50;
  const maxWidth = 300;
  const minHeight = 1;
  const maxHeight = 8;
  const numLines = 2000;

  const colors = ["#d7263d", "#f46036", "#2e294e", "#1b998b", "#c5d86d"];

  const LineGenerator = ({ delay }) => {
    let width = selectFrom(minWidth, maxWidth);
    let height = selectFrom(minHeight, maxHeight);
    let color = colors[selectFrom(0, colors.length-1)];
    let speed = selectFrom(10, 60, true);
    
    let right = -(width+30);
    let top = -width;

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
      for (let i = 0; i < numLines; i++) {
        let delay = 0;
        if (i < 10) delay = 0.5;
        else delay = selectFrom(1, 50);
        lines.push(<LineGenerator key={i} delay={delay} />);
      };
      return lines;
  };

  const selectFrom = (lowerLimit, upperLimit, dec) => {
    let choices = upperLimit - lowerLimit + 1;
    if (!dec) return Math.floor(Math.random() * choices + lowerLimit);
    return (Math.random() * choices + lowerLimit);
  }

  return (
    <Container maxLineWidth={maxWidth}>
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
      transform: ${props => `rotate(-60deg) translateX(-${props.maxLineWidth * 3 + (window.innerWidth + 50)}px)`};
    }
  }
  }
`;

const Line = styled.div.attrs(props => ({
  className: ' moving-line',
  style: ({
    top: props.top + 'px',
    right: props.right + 'px',
    backgroundColor: props.color,
    width: props.width + 'px',
    height: props.height + 'px',
    animation: 'move ' + props.speed + 's alternate infinite',
    animationDelay: props.delay + 's',
    position: 'absolute',
    opacity: 0.5,
  }),
}))``;