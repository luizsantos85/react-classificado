import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { PageArea, SearchArea } from './styled';
import { PageContainer } from '../../GlobalStyle';
import useApi from '../../helpers/Api';

const Home = () => {
  const api = useApi();

  const [estadoList, setEstadoList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getEstados = async () => {
      const sList = await api.getEstado();
      setEstadoList(sList);
    };
    getEstados();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, []);

  return (
    <>
      <SearchArea>
        <PageContainer className="animeLeft">
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                {estadoList.map(item =>(
                  <option value={item.name} key={item._id}>{item.name}</option>
                ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((item,index) => (
              <Link to={`/ads?cat=${item.slug}`} key={index} className="category-item">
                <img src={item.img} alt={item.name}/>  
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>

      <PageContainer className="animeLeft">
        <PageArea>Home</PageArea>
      </PageContainer>
    </>
  );
};

export default Home;
