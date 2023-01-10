import React from 'react';
import { Link } from 'react-router-dom';
import { CenterDiv, InnerWrapper } from 'components/HeroHeader';
import { NavigationHeader } from 'components/NavigationHeader';
import { LinkWrap, MediumLink } from './MainStyles';

export const MainPage = () => {
  return (
    <div>
      <NavigationHeader />
      <CenterDiv>
        <h1>gripp</h1>
        <LinkWrap>
          <InnerWrapper>
            <Link to="/about"><MediumLink>About</MediumLink></Link>
            <Link to="/about"><MediumLink>What is this</MediumLink></Link>
            <Link to="/about"><MediumLink>Where to play</MediumLink></Link>
            <Link to="/about"><MediumLink>Contact</MediumLink></Link>
          </InnerWrapper>
        </LinkWrap>
      </CenterDiv>
    </div>
  )
}

