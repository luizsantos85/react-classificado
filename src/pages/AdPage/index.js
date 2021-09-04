import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageArea, Fake } from './styled';
import { PageContainer, PageTitle } from '../../GlobalStyle';
import useApi from '../../helpers/Api';

const AdPage = () => {
  const api = useApi();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState([]);

  return (
    <PageContainer className="animeLeft">
      {/* <PageTitle>AdPage</PageTitle> */}
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="ad-image"> {loading && <Fake height={300} />} </div>
            <div className="ad-info">
              <div className="ad-name"> {loading && <Fake height={30} />} </div>
              <div className="ad-description">
                {loading && <Fake height={70} />}
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="box"> {loading && <Fake />} </div>
          <div className="box"> {loading && <Fake />} </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default AdPage;
