import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from 'components/main/Main.js';
import { About } from 'components/about/About';
import { NotFound } from 'components/NotFound/NotFound';
import { WhatIsThis } from 'components/whatisthis/WhatIsThis';
import { WhereToPlay } from 'components/about/playhere/WhereToPlay';
import { Contact } from 'components/contact/Contact';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-is-this" element={<WhatIsThis />} />
        <Route path="/play" element={<WhereToPlay />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
