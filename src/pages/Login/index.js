import React from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle } from '../../GlobalStyle';

const Login = () => {
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form>
          <label className="area">
            <div className="area-title">E-mail</div>
            <div className="area-input">
              <input type="email" />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Senha</div>
            <div className="area-input">
              <input type="password" />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Lembrar senha</div>
            <input type="checkbox" />
          </label>

          <button>Logar</button>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Login;
