import React from 'react';
import { HeaderArea } from './styled';
import { NavLink, Link } from 'react-router-dom';

import { isLogged,logout } from '../../helpers/AuthHandler';

const Header = () => {
  const logged = isLogged();


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
                  <NavLink to="" >
                    Sair
                  </NavLink>
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
