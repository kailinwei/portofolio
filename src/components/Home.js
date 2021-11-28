
import React from "react";
import styled from 'styled-components';
import { Button } from '@mui/material';
import { motion } from "framer-motion"


const Container = styled(motion.div) `
height:100vh;
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:100px;
flex-wrap:wrap;
//background-image: linear-gradient(to left top, #dae3e5, #c3dfe7, #aadbeb, #90d6f0, #73d1f6, #72cff8, #71ccf9, #71cafb, #89cbf8, #9dcdf4, #adcfef, #bbd1ea);
background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)),url("/images/hero.png");

filter: brightness(0.8);
//background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

const Holder = styled.div `
flex-wrap:wrap;
display:flex;
height:70%;
padding-bottom:100px;
`

const WelcomeHeader = styled.div `
display:flex;
flex-direction:column;
flex-wrap:wrap;

`

const ButtonHolder = styled.div `
display:flex;
flex-direction:row;
gap:30px;
`

const Cont1 = styled.div `
margin-left:5%;
width:100vw;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-end;

`


const Header = styled.h1 `
font-size:80px;
margin-bottom:-20px;
font-weight: 800;
//color:#3C2743;
color: white;
text-shadow: 0 0 10px #fff, 0 0 20px black;
`

const Text = styled.p `
font-size:25px;
font-weight: 600;
color:#3C2743;
color:white;;
width:50%;


`



export default function Home() {
  return (
    <Container initial="hidden" animate="visible" variants={{
      hidden: {
        scale:1.05,
        opacity:0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay:.10,
          duration:2
        }
      }
    }}>
      <Holder>
            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                scale:1,
                opacity:0,
                x:-50
              },
              visible: {
                scale: 1,
                opacity: 1,
                x:0,
                transition: {
                  delay:.10,
                  duration:2
                }
              }
            }}>
        <Cont1>
          <WelcomeHeader>
              <Header>Hi, I am Kailin! </Header>
            <Text>I am a Full Stack Web Developer</Text>
          </WelcomeHeader>
          <ButtonHolder>
            <Button style={{width:250, height:50, borderRadius:60, backgroundColor:"orange"}} href="/Projects" variant="contained">Check My Projects</Button>
          </ButtonHolder>
        </Cont1>

      </motion.div>
      </Holder>
    </Container>
  )
}
