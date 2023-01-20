import { Large, Medium, OuterWrapper, Span } from 'components/GlobalStyles';
import { NavigationHeader } from 'components/main/NavigationHeader.js';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { ContactWrap, TalkAboutItWrapTwo, TextWrap } from 'components/about/AboutStyles.js';
import MockUp from 'assets/MockUpsGripp.png'
import { DemoWrap, GameWrap, Mockup, TextLink, Button } from './WhatIsStyles';

export const WhatIsThis = () => {
  const navigate = useNavigate();

  return (
    <OuterWrapper>
      <NavigationHeader />
      <GameWrap>
        <TextWrap>
          <Medium>A game where no points are collected.
          </Medium>
        </TextWrap>
      </GameWrap>
      <DemoWrap>
        <TextWrap>
          <Mockup
            src={MockUp}
            alt="Gripp logotype" />
          <Large><Link to="/play" style={{ textDecoration: 'none' }}><TextLink>Just sign up and sign in, it&apos;s free!</TextLink></Link></Large>
        </TextWrap>
      </DemoWrap>
      <TalkAboutItWrapTwo>
        <TextWrap>
          <Large>All you need is a friend, family-member, someone else or just yourself.
            <Medium>Because sometimes you just need to say it.</Medium>
          </Large>
        </TextWrap>
      </TalkAboutItWrapTwo>

      <ContactWrap>
        <TextWrap>
          <Medium>Ready to start <Span> or end </Span> conversation?
          </Medium>
          <TextWrap>
            <Button onClick={() => { navigate('/play') }}>Yes</Button>
          </TextWrap>
        </TextWrap>
      </ContactWrap>
    </OuterWrapper>
  )
}
