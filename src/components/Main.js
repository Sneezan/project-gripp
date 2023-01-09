import React from 'react';
import { Link } from 'react-router-dom';
import { CenterDiv } from 'components/HeroHeader';
import { NavigationHeader } from 'components/NavigationHeader';
import { LinkWrap } from './MainStyles';

export const MainPage = () => {
  return (
    <div>
      <NavigationHeader />
      <CenterDiv>
        <h1>gripp</h1>
        <LinkWrap>
          <Link to="/about"><h1>About</h1></Link>
          <Link to="/about"><h1>What is this</h1></Link>
          <Link to="/about"><h1>Where to play</h1></Link>
          <Link to="/about"><h1>Contact</h1></Link>
        </LinkWrap>
      </CenterDiv>
    </div>
  )
}