import React from 'react';
import { Hero } from 'components/HeroHeader';
import NavigationHeader from 'components/NavigationHeader';

export const Main = () => {
  return (
    <div>
      <NavigationHeader />
      <Hero>
      Main Component
      </Hero>
    </div>
  )
}
