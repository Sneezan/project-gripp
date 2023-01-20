import React from 'react';
import { Large, OuterWrapper } from 'components/GlobalStyles';
import { NavigationHeader } from 'components/main/NavigationHeader.js';
import { TextWrap } from 'components/aboutsection/AboutStyles.js';
import GitHub from 'assets/1.png'
import LInkedIn from 'assets/2.png'
import { DemoWrap, Links } from './ContactSyles';

export const Contact = () => {
  return (
    <OuterWrapper>
      <NavigationHeader />
      <DemoWrap>
        <TextWrap>
          <TextWrap>
            <Large>You are probably curious</Large>
          </TextWrap>
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
      </DemoWrap>
    </OuterWrapper>
  )
}