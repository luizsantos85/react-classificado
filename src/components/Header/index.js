import React from 'react';
import { HeaderArea } from './styled';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">Classificados</Link>
        </div>

        <nav className="menu">
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/cadastro">Cadastre-se</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
