import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

const pulse1 = keyframes`
  0% {opacity:0.5;}
  10% {opacity:1;}
  20% {opacity:0.5;}
  100% {opacity:0.5;}
`;

const pulse2 = keyframes`
  0% {opacity:0.5;}
  10% {opacity:0.5;}
  20% {opacity:1;}
  30% {opacity:0.5;}
  40% {opacity:0.5;}
  90% {opacity:0.5;}
  100% {opacity:1;}
`;

const pulse3 = keyframes`
  0% {opacity:0.5;}
  20% {opacity:0.5;}
  30% {opacity:1;}
  40% {opacity:0.5;}
  80% {opacity:0.5;}
  90% {opacity:1;}
  100% {opacity:0.5;}
`;

const pulse4 = keyframes`
  0% {opacity:0.5;}
  30% {opacity:0.5;}
  40% {opacity:1;}
  50% {opacity:0.5;}
  70% {opacity:0.5;}
  80% {opacity:1;}
  90% {opacity:0.5;}
  100% {opacity:0.5;}
`;

const pulse5 = keyframes`
  0% {opacity:0.5;}
  40% {opacity:0.5;}
  50% {opacity:1;}
  60% {opacity:0.5;}
  70% {opacity:1;}
  80% {opacity:0.5;}
  100% {opacity:0.5;}
`;

const pulse6 = keyframes`
  0% {opacity:0.5;}
  50% {opacity:0.5;}
  60% {opacity:1;}
  70% {opacity:0.5;}
  100% {opacity:0.5;}
`;

const Blocks = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
`;

const Block = styled.div<{ pulse: typeof pulse1 }>`
  animation: ${(props) => props.pulse} 2s linear infinite;
  background-color: ${(props) => props.theme.colors.primary};
  flex: 1;
  height: 0.25rem;
  margin: 0 0.5rem;
`;

export const Kitt: FC = () => (
  <Blocks>
    <Block pulse={pulse1} />
    <Block pulse={pulse2} />
    <Block pulse={pulse3} />
    <Block pulse={pulse4} />
    <Block pulse={pulse5} />
    <Block pulse={pulse6} />
  </Blocks>
);
