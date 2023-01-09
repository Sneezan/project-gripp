import { About } from 'components/About/About';
import { Main } from 'components/Main/Main';
import { NotFound } from 'components/NotFound/NotFound';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
