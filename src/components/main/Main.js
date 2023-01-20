import React from 'react';
import { Link } from 'react-router-dom';
import { CenterDiv, InnerWrapper } from 'components/main/HeroHeader';
import { NavigationHeader } from 'components/main/NavigationHeader';
import LargeLogo from 'assets/GRIPP_large.png'
import { Image, LinkWrap, MediumLink } from './MainStyles';

export const MainPage = () => {
  return (
    <div>
      <NavigationHeader />
      <CenterDiv>
        <Image
          src={LargeLogo}
          alt="Gripp logotype" />
        <LinkWrap>
          <InnerWrapper>
            <Link to="/about"><MediumLink>About</MediumLink></Link>
            <Link to="/what-is-this"><MediumLink>What is this</MediumLink></Link>
            <Link to="/play"><MediumLink>Where to play</MediumLink></Link>
            <Link to="/about"><MediumLink>Contact</MediumLink></Link>
          </InnerWrapper>
        </LinkWrap>
      </CenterDiv>
    </div>
  )
}

