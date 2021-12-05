import styled from 'styled-components';
import React from "react";
import {NavLink as Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

const Nav = styled.nav`
     Background-color:#A1C6EA;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    font-weight:bold;
`;
 const NavLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;

`;

const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color:#507DBC;
}
&:hover {
  color: #507DBC;
}
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;



// const Container = styled.div`
// // position:fixed;
// // z-index: 2;
// // display:inline;
// // flex-direction:row;
// // background-color:#F2F3F7;
// // height:8vh;
// // width:100%;
// // top:0;
//     background: orangered;
//     height: 85px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0.2rem calc((100vw - 1000px) / 2);
//     z-index: 12;
// `
// const Holder1 = styled.nav`
// display:flex;
// flex:1;
// width:100%;
// justify-content:space-between;
// gap:70px;

// `

const Images = styled.img`
max-height:70px;
max-width:70px;
align-items:center;
`

// const Menuitem = styled.nav`
// display: flex;
// justify-content:space-between;
// align-items: center;
// padding:0px 20px;

// `
const Menu1 = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <Images src="/images/logo-portfolio.png"/>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/Aboutme" activeStyle>
                    About Me
                </NavLink>
                <NavLink to="/Projects" activeStyle>
                    Projects
                </NavLink>
                <NavLink to="/Resume" activeStyle>
                Resume
                </NavLink>
                <NavLink to="/Contact" activeStyle>
                Contact Me
                </NavLink>
     
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Menu1;

// const Menu1 = (

// ) => return {
//     <>
        
//         <Nav>
//             <NavLogo>
//               <Images src="/images/logo-portfolio.png"/>
//             </NavLogo>

//             <Menuitem>
//                 <Link to='/'>Home</Link>
//                 <Link to='/Aboutme'>About Me</Link>
//                 <Link to='/Projects'>Project</Link>
//                 <Link to ='/Resume'>Resume</Link>
//                 <Link to='/Contact'>Contact Me</Link>
//             </Menuitem>
              
            
//         </Nav>
        
//  );
// }

// export default Menu1;

