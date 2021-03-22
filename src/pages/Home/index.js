import React, { useState } from 'react';
import { PageArea, SearchArea } from './styled';
import { PageContainer } from '../../GlobalStyle';
import useApi from '../../helpers/Api';

const Home = () => {
  const api = useApi();

  return (
    <>
      <SearchArea>
        <PageContainer className="animeLeft">
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?"/>
              <select name="state">
                <option value=""></option>
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList"></div>
        </PageContainer>
      </SearchArea>

      <PageContainer className="animeLeft">
        <PageArea>Home</PageArea>
      </PageContainer>
    </>
  );
};

export default Home;
