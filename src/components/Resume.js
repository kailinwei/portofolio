import React from "react";
import styled from 'styled-components'
const Container = styled.div `
height:100vh;
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:100px;
flex-wrap:wrap;
//background-image: url("/images/background2.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

export default function Resume() {
    return (
        <Container>
            <iframe id="resume" src="/resume.pdf" height="90%" width="90%"></iframe>
        </Container>
    )
}
