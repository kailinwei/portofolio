import React from "react"
import styled from 'styled-components'
import Menu1 from "./Navbar";
//import Card from "@mui/material/Card";

const Container = styled.div `
height:100vh;
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:100px;
flex-wrap:wrap;
background-image: url("/images/background.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

const Holder2 = styled.div `
display:flex;
padding:40px;
flex-direction:column;
flex-wrap:wrap;
width:100%;
height:100%;
align-items:center;
justify-content:center;
gap:10px;
`



const ContainerHolder = styled.div`
  display:flex;
  width:100%;
  padding:100px;
  @media only screen and (max-width: 768px) {
    padding:0px;
  }
`


const TitleHolder = styled.div `
  display:flex;
  flex-direction:column;
  width:100%;
`

const CardHolder = styled.div `
  display:flex;
  flex-direction:row;
  gap:20px;
  width:100%;
  width:100%;
  justify-content:center;

  }
`
const CardContainer = styled.div `
  display:flex;
  flex-direction:column;
  gap:20px;
`


const Title = styled.h1 `
  color:#0F2046;
  margin-bottom:0px;
`
const Title2 = styled.h1 `
  color:#0F2046;
  margin-bottom:0px;

`
  const Text = styled.p `
  //color:#878FA2;
  color:black;
`


export default function Aboutme() {
    return (
      <Container>

        <ContainerHolder>
       
          <Holder2>
            <TitleHolder>
              <Title>About Me </Title>
              <Text>
                After graduating with a Bachelor's Degree in Science from UBC, I
                shifted my interests to computing because I am amazed by the
                evolution of technology and the impact it has on business and
                daily life. Therefore, I decided to study Full Stack Web
                Development at BCIT where I learnt about web application
                development tools and technologies. 
                <br /><br />
                I like working with people and in
                teams because different team members contribute different
                perspectives, and the synergy between team members can produce
                creative and productive results. I find problem solving
                engaging, especially the challenge of analyzing problems and the
                feeling of accomplishment when I discover a solution. 
              </Text>
            </TitleHolder>

      

            <TitleHolder>
              <Title2>Skills</Title2>
              <Text>
                I am currently learning: 
                <ul>
                  <li>Front End:  HTML, CSS, React.js, JavaScript, TypeScript <br /></li>
                  <li> Backend: Express.js, Node.js, MySQL <br /></li>
                  <li> Tools: unit testing, Git, Figma, and Trello Board.</li>
                  <li> Others: OOP, Agile Scrum methodologies, UX/UI design principles, </li>
                </ul>
                
               
       
                <br /><br />
              </Text>
            </TitleHolder>

            <TitleHolder>
              <Title2>Spare time</Title2>
              <Text>
              In my
                spare time, I enjoy reading, jogging, swimming, and travelling.
              </Text>
            </TitleHolder>
    
          </Holder2>
        </ContainerHolder>
      </Container>
    );
}