import styled from 'styled-components';
import React from "react";
import {Link, NavLink} from "react-router-dom";



const Container = styled.div`
position:fixed;
z-index: 2;
display:inline;
flex-direction:row;
background-color:#F2F3F7;
height:8vh;
width:100%;
top:0;
`
const Holder1 = styled.div`
display:flex;
flex:1;
width:100%;
justify-content:space-around;
gap:70px;

`

const Images = styled.img`
max-height:70px;
max-width:70px;
align-items:center;
`




const Menu1 = (

) => {
    return <Container>
        
        <Holder1>
              <Images src="/images/logo-portfolio.png"/>
              
              <h4><NavLink to='/'>Home</NavLink></h4>
              <h4><NavLink to='/Aboutme'>About Me</NavLink></h4>
              <h4><NavLink to='/Projects'>Project</NavLink></h4>
              <h4><NavLink to ='/Resume'>Resume</NavLink></h4>
              <h4><NavLink to='/Contact'>Contact Me</NavLink></h4>
        </Holder1>
        
    </Container>
}

export default Menu1;

