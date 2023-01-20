import { AboutWrap } from 'components/about/AboutStyles';
import styled from 'styled-components';

/* blocks */
export const GameWrap = styled(AboutWrap)`
height: 300px;
color: var(--warmWhite);
background-color: var(--vivaMagenta);
`
export const DemoWrap = styled(AboutWrap)`
height: 450px;
color: var(--rose);
background-color: var(--vivaMagentaDark);
@media (min-width:890px){
height: 500px;
}
`

export const ContactWrap = styled(AboutWrap)`
height: 100vh;
color: var(--warmWhite);
background-color: var(--mineShaft);
`

/*  textboxes */

export const TextWrap = styled.div`
padding: 10px;
`
export const Links = styled.a`
margin: 5px;
text-decoration: none;
color: var(--warmWhite);
&:hover{
    color: var(--vivaMagentaDark);
}
`

/* Mockup */
export const Mockup = styled.img`
margin-top: 100px;
width: 390px;
border-radius: 20px;
@media (min-width:890px){
width: 650px;
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
width: 300px;
height: 50px;
border: 3px solid var(--warmWhite);
border-radius: 20px;
font-size: 30px;
text-transform: uppercase;
background-color: transparent;
color: var(--warmWhite);
font-weight: 600;
margin: 30px;
&:hover{
    color: var(--vivaMagentaDark);
    border: none;
    background-color: var(--warmWhite);
}
`
