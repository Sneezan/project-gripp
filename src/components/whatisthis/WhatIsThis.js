import { Large, Medium, OuterWrapper, Span, XLarge } from 'components/GlobalStyles';
import { NavigationHeader } from 'components/main/NavigationHeader.js';
import React from 'react';
import GitHub from 'assets/1.png'
import LInkedIn from 'assets/2.png'
import { ContactWrap, Links, TalkAboutItWrapTwo, TextWrap } from 'components/about/AboutStyles.js';
import { DemoWrap, GameWrap, TechWrap } from './WhatIsStyles';

export const WhatIsThis = () => {
  return (
    <OuterWrapper>
      <NavigationHeader />
      <GameWrap>
        <TextWrap>
          <Medium>Game
          </Medium>
        </TextWrap>
      </GameWrap>

      <DemoWrap>
        <TextWrap>
          <Large>Demo</Large>
        </TextWrap>
      </DemoWrap>

      <TechWrap>
        <TextWrap>
          <XLarge>WTechstack</XLarge>
        </TextWrap>
      </TechWrap>

      <TalkAboutItWrapTwo>
        <TextWrap>
          <Large>Gripp is a social ice-breaker style game designed to get people talking
        about how they really feel.
          <Medium>Because sometimes you just need to talk about it.</Medium>
          </Large>
        </TextWrap>
      </TalkAboutItWrapTwo>

      <ContactWrap>
        <TextWrap>
          <Medium>This game was created as part of a
        final project
        with an aim to break the stigma around <Span>not feeling OK all the time.</Span>
          </Medium>
          <TextWrap>
            <Links
              href="https://www.linkedin.com/in/ceciliafranlund/"
              target="_blank"
              rel="noreferrer">
              <img
                src={LInkedIn}
                alt="link to Cecilias LinkedIn" />
            </Links>
            <Links
              href="https://github.com/Sneezan"
              target="_blank"
              rel="noreferrer">
              <img
                src={GitHub}
                alt="link to Sneezan GitHub" />
            </Links>
          </TextWrap>
        </TextWrap>
      </ContactWrap>
    </OuterWrapper>
  )
}
