import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap;
  background-image: url("/images/background2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Icon = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
`;

const Circle = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
`;

export default function Contact() {
  return (
    <Container>
      <h1>Contact Me </h1>

      <Icon>
        <a href="https://www.linkedin.com/in/kailin-wei">
        <Circle
          src="/images/linkedin.png"
        ></Circle>
        </a>

        <a href="https://github.com/kailinwei">
        <Circle
          src="/images/github.png"
        ></Circle>
        </a>
        <a href="mailto:kailinwei95@gmail.com">
        <Circle src="/images/gmail.png"></Circle>
        </a>
      </Icon>
    </Container>
  );
}
