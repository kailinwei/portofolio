import React from "react"
import styled from 'styled-components'
import Menu1 from "./Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Container = styled.div `
height:100vh;
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:100px;
flex-wrap:wrap;
//background-image: url("/images/background.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
line-height:2;
font-size: 20px;
`;

const Holder2 = styled.div `
display:flex;

flex-direction:column;
flex-wrap:wrap;
width:100%;
height:100%;
align-items:center;
justify-content:center;
gap:10px;
padding: 0.2rem calc((100vw - 1000px) / 2);
`



const ContainerHolder = styled.div`
  display:flex;
  width:100%;
  //padding:100px;
  @media only screen and (max-width: 768px) {
    padding:20px;
  }
`


const TitleHolder = styled.div `
  display:flex;
  flex-direction:column;
  width:100%;
`

const SubHolder2 = styled.div `
display: flex;
flex-direction:row;
gap: 5%;
justify-content: space-between;
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
  //margin-bottom:0px;
`
const Title2 = styled.h1 `
  color:#0F2046;
  margin-bottom:0px;

`
//   const Typography  = styled.p `
//   //color:#878FA2;
//   color:black;
// `


export default function Aboutme() {
    return (
      <Container>
        <ContainerHolder>
          <Holder2>
            <TitleHolder>
              <Title>About Me </Title>
              <Typography>
                After graduating with a Bachelor's Degree in Science from the
                University of British Columbia, I shifted my interests to
                computing because I am amazed by the evolution of technology and
                the impact it has on business and daily life. Therefore, I
                decided to study Full Stack Web Development at BCIT where I
                learnt about web application development tools and technologies.
                <br />
                <br />
                I like working with people and in teams because different team
                members contribute different perspectives, and the synergy
                between team members can produce creative and productive
                results. I find problem solving engaging, especially the
                challenge of analyzing problems and the feeling of
                accomplishment when I discover a solution.
                <br />
                <br />
                In my spare time, I enjoy reading, jogging, swimming, and
                travelling.
              </Typography>
            </TitleHolder>

            <TitleHolder>
              <Title2>Skills</Title2>
              <SubHolder2>
                <Typography>
                  I am currently learning:
                  <ul>
                    <li>
                      <b>Languages</b>: <br />
                      HTML, CSS, JavaScript, TypeScript, PHP <br />
                    </li>
                    <li>
                      {" "}
                      <b>Frontend</b>:<br /> jQuery, Ajax, React, Next, Angular,
                      Vue, Blazor <br />
                    </li>

                    <li>
                      {" "}
                      <b>Backend</b>: <br />
                      Express.js, Asp.Net 5.0
                      <br />
                    </li>

                    <li>
                      {" "}
                      <b>Database</b>: <br />
                      MySQL, SQL Server, MongoDB
                      <br />
                    </li>
                    <li>
                      {" "}
                      <b>Hosting</b>: <br />
                      Heroku
                      <br />
                    </li>
                    <li>
                      {" "}
                      <b>Tools</b>: <br />
                      unit testing, Git, Figma, and Trello Board.
                    </li>
                    <li>
                      {" "}
                      <b>Others</b>: <br />
                      OOP, Agile Scrum methodologies, UX/UI design principles,{" "}
                    </li>
                  </ul>
                </Typography>

                <Card sx={{ maxWidth: 480 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/images/aboutme2.png"
                    alt="Hackathon project"
                  />
                </Card>
              </SubHolder2>
            </TitleHolder>
          </Holder2>
        </ContainerHolder>
      </Container>
    );
}