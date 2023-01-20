import React from 'react';
import { Large, Medium, OuterWrapper, Span, XLarge } from 'components/GlobalStyles';
import { NavigationHeader } from 'components/main/NavigationHeader.js';
import GitHub from 'assets/1.png'
import LInkedIn from 'assets/2.png'
import { AboutWrap, ContactWrap, IdeaWrap, Links, TalkAboutItWrap, TalkAboutItWrapTwo, TextWrap } from './AboutStyles';

export const About = () => {
  return (
    <OuterWrapper>
      <NavigationHeader />
      <AboutWrap>
        <TextWrap>
          <Medium>One fourth of Swedens&apos; population stuggle in some
          type of way with their mental health
          </Medium>
        </TextWrap>
      </AboutWrap>
      <IdeaWrap>
        <TextWrap>
          <Large>Twice as many women struggle as men</Large>
        </TextWrap>
      </IdeaWrap>
      <TalkAboutItWrap>
        <TextWrap>
          <XLarge>Why don&apos;t we talk about it more?</XLarge>
        </TextWrap>
      </TalkAboutItWrap>
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
