import styled from 'styled-components';
import { InnerWrapper } from 'components/HeroHeader';

export const LinkWrap = styled(InnerWrapper)`
display: none;
@media (min-width:1020px){
display: grid;
border: 1px solid blue;
position: absolute;
top: 60%;
left: 18%;
line-height: 0.5;
}
`

