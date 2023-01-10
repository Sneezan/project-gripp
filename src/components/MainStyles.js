import styled from 'styled-components';
import { InnerWrapper } from 'components/HeroHeader';
import { Medium } from './GlobalStyles';

export const LinkWrap = styled(InnerWrapper)`
display: none;
width: 300px;
a:link{
    text-decoration: none;
}
a:visited { 
    text-decoration: none; 
}
@media (min-width:1020px){
display: grid;
position: absolute;
top: 60%;
left: 18%;
line-height: 0.8rem;
}
`

export const MediumLink = styled(Medium)`
color: var(--rose);
@media (min-width:1020px){
&:hover{
color: var(--warmWhite);
padding-left: 10%;
}
}
`