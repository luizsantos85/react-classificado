import React from 'react';
import { HeaderArea } from './styled';
import { NavLink, Link } from 'react-router-dom';

import { isLogged, doLogout } from '../../helpers/AuthHandler';

const Header = () => {
  const logged = isLogged();

  const handleLogout = () => {
    doLogout();
    window.location.href = '/';
  };

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">Classificados</Link>
        </div>

        <nav className="menu">
          <ul>
            {!logged && (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/cadastro">Cadastre-se</NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="btn">
                    Poste um anúncio
                  </NavLink>
                </li>
              </>
            )}
            {logged && (
              <>
                <li>
                  <NavLink to="/my-account">Minha conta</NavLink>
                </li>
                <li>
                  <div className="btn-logout" onClick={handleLogout}>
                    Sair
                  </div>
                </li>
                <li>
                  <NavLink to="/post-an-ad" className="btn">
                    Poste um anúncio
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
