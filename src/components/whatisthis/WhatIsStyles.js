import { AboutWrap } from 'components/about/AboutStyles';
import styled from 'styled-components';

/* blocks */
export const GameWrap = styled(AboutWrap)`
height: 300px;
color: var(--warmWhite);
background-color: var(--vivaMagenta);
`
export const DemoWrap = styled(AboutWrap)`
height: 300px;
color: var(--rose);
background-color: var(--vivaMagentaDark);
`
export const TechWrap = styled(AboutWrap)`
height: 500px;
color: var(--rose);
background-color: var(--vivaMagenta);
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

