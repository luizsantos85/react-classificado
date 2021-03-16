import GlobalStyle, { Template } from './GlobalStyle.js';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';

const Page = () => {
  return (
    <BrowserRouter>
      <Template>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
};

export default Page;
