import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const NavigationHeader = () => {
  const [visible, setVisible] = useState(false)

  const toggleClass = () => {
    setVisible(!visible)
  }

  return (
    <Nav>
      <BurgerButton onClick={toggleClass}>
        {visible ? <MenuOpenIcon /> : <MenuIcon />}
      </BurgerButton>
      <CenterNav className={visible ? 'input-active' : 'input-hidden'}>
        <Menu>
          <Link to="/about"><NavLink>About</NavLink></Link>
          <Link to="/about"><NavLink>What is this?</NavLink></Link>
          <Link to="/about"><NavLink>Where to play</NavLink></Link>
        </Menu>
      </CenterNav>
    </Nav>
  )
}

const Nav = styled.div`
background-color:  var(--vivaMagentaDark);
width: 100%;
height: 100%;
a:link{
    text-decoration: none;
}
a:visited { 
    text-decoration: none; 
}
`
const BurgerButton = styled.button`
position: absolute; 
right: 10px;
top: 10px;
@media (min-width:790px){
display: none;
}
`

const CenterNav = styled.div`
display: flex;
justify-content: center;
&.input-hidden {
  display: none;

}
&.input-active {
  display: initial;
}
@media (min-width:790px){
justify-content: end;
padding-right: 70px;
&.input-hidden {
  display: flex;
}
}
@media (min-width:1020px){
justify-content: center;
padding-right: 0px;
}
`

const NavLink = styled.p`
color: var(--rose);
font-size: 1.2rem;
margin: 10px;
font-weight: 600;
@media (min-width:900px){
padding-left: 20px;
padding-right: 20px;
&:hover{
color: var(--warmWhite);
}
}
`

const Menu = styled.div`
  display: flex;
@media (max-width:790px){
    background-color:  var(--vivaMagentaDark);
 height: 100px;
 width: 300px;
 padding: 20%;
 display: grid;
 }
 `

