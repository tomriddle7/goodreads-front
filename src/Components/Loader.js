import React from "react";
import styled, { keyframes } from 'styled-components';

const Container = styled.div``;

const ReadingDots = keyframes`
    0% {
        content: "";
    }
    33% {
        content: ".";
    }
    66% {
        content: "..";
    }
    100% {
        content: "...";
    }
`;

const Reading = styled.h1`
  color: #FFFFFF;
  text-align: center;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    -webkit-animation: Dots 2s cubic-bezier(0, .39, 1, .68) infinite;
    animation: ${ReadingDots} 2s cubic-bezier(0, .39, 1, .68) infinite;
  }
`;



export default () => (
  <Container>
    <div className="loader book">
        <figure className="page"></figure>
        <figure className="page"></figure>
        <figure className="page"></figure>
    </div>

    <Reading>Reading</Reading>
  </Container>
);