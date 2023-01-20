import { Large, Medium, Small, OuterWrapper, Span } from 'components/GlobalStyles';
import { NavigationHeader } from 'components/main/NavigationHeader.js';
import React from 'react';
import { ContactWrap, TextWrap } from 'components/aboutsection/AboutStyles.js';
import MockUp from 'assets/MockUpWeb.png'
import { DemoWrap, GameWrap, Mockup, Button, Links } from './WhereToPlayStyles';

export const WhereToPlay = () => {
  return (
    <OuterWrapper>
      <NavigationHeader />
      <ContactWrap>
        <TextWrap>
          <Medium>Ready to start <Span> or end </Span> conversation?
          </Medium>
        </TextWrap>
      </ContactWrap>
      <GameWrap>
        <TextWrap>
          <Large>The alpha version is out on browser and soon to you in app form!
            <Medium>Keep in mind that this is far from perfect.</Medium>
            <Small>But we are getting there.</Small>
          </Large>
        </TextWrap>
      </GameWrap>
      <DemoWrap>
        <TextWrap>
          <Mockup
            src={MockUp}
            alt="Gripp logotype" />
          <TextWrap>
            <Button>
              <Links
                href="https://grippapp.netlify.app"
                alt="Gripp App Webformat"
                target="_blank"
                rel="noopener noreferrer">
                TRY IT OUT HERE
              </Links>
            </Button>
          </TextWrap>
        </TextWrap>
      </DemoWrap>
    </OuterWrapper>
  )
}
