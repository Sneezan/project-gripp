import { AboutWrap } from 'components/aboutsection/AboutStyles';
import styled from 'styled-components';

/* blocks */
export const GameWrap = styled(AboutWrap)`
height: 300px;
color: var(--warmWhite);
background-color: var(--vivaMagenta);
`
export const DemoWrap = styled(AboutWrap)`
height: 650px;
color: var(--rose);
background-color: var(--vivaMagentaDark);
@media (min-width:890px){
height: 900px;
}
`

export const ContactWrap = styled(AboutWrap)`
height: 600px;
color: var(--warmWhite);
background-color: var(--mineShaft);
`

/*  textboxes */

export const TextWrap = styled.div`
padding: 10px;
`
export const Links = styled.a`
margin: 5px;
`

/* Mockup */
export const Mockup = styled.img`
margin-top: 5%;
width: 400px;
@media (min-width:890px){
width: 550px;
margin-top: -5%;
}
`

export const TextLink = styled.text`
color: var(--rose);
padding-bottom: 10px;
&:hover{
    color: var(--warmWhite);
}
`

export const Button = styled.button`
width: 100px;
height: 50px;
border: none;
border-radius: 20px;
font-size: 30px;
text-transform: uppercase;
background-color: var(--rose);
color: var(--mineShaft);
font-weight: 600;
&:hover{
    color: var(--rose);
    border: 3px solid var(--rose);
    background-color: transparent;
}
`
