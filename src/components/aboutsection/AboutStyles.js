import styled from 'styled-components';

/* blocks */
export const AboutWrap = styled.div`
display: flex;
justify-items: center;
justify-content: center;
align-items: center;
height: 400px;
padding: 10%;
text-align: center;
background-color: var(--rose);
color: var(--vivaMagentaDark);
`
export const IdeaWrap = styled(AboutWrap)`
height: 300px;
color: var(--warmWhite);
background-color: var(--vivaMagenta);
`
export const TalkAboutItWrap = styled(AboutWrap)`
height: 300px;
color: var(--rose);
background-color: var(--vivaMagentaDark);
`
export const TalkAboutItWrapTwo = styled(AboutWrap)`
height: 500px;
color: var(--vivaMagentaDark);
background-color: var(--rose);
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

