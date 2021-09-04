import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import { PageContainer, PageTitle } from '../../GlobalStyle';
import useApi from '../../helpers/Api';
import AdItem from '../../components/AdItem';

const Home = () => {
  const api = useApi();

  const [estadoList, setEstadoList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  const formatPreco = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

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

  useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: 'desc',
        limit: 8,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  }, []);

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                {estadoList.map((item) => (
                  <option value={item.name} key={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((item, index) => (
              <Link
                to={`/ads?cat=${item.slug}`}
                key={index}
                className="category-item"
              >
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>
          <PageTitle>Anúncios Recentes</PageTitle>
          <div className="list">
            {adList.map((item) => (
              <AdItem key={item.id} data={item} />
            ))}
          </div>
          <Link to="/ads" className="seeAllLink">
            Ver todos
          </Link>
          <hr />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          placeat facere earum cumque iste molestiae magnam quaerat eum quas
          cupiditate. Necessitatibus sed earum animi aliquid quod officiis dicta
          eos iste!
        </PageArea>
      </PageContainer>
    </>
  );
};

export default Home;
