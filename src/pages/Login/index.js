import React, { useState } from 'react';
import { PageArea } from './styled';
import { ErrorMessage, PageContainer, PageTitle } from '../../GlobalStyle';
import useApi from '../../helpers/Api';
import { doLogin } from '../../helpers/AuthHandler';

const Login = () => {
  const api = useApi();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPass, setRememberPass] = useState(false);
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError('');
    const json = await api.login(email, password);
    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPass);
      window.location.href = '/';
    }
    setDisabled(false);
  };

  return (
    <PageContainer className="animeLeft">
      <PageArea>
      <PageTitle>Login</PageTitle>
        <form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <label className="area">
            <div className="area-title">E-mail</div>
            <div className="area-input">
              <input
                type="email"
                value={email}
                disabled={disabled}
                onChange={({ target }) => setEmail(target.value)}
                placeholder="exemplo@exemplo.com"
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area-title">Senha</div>
            <div className="area-input">
              <input
                type="password"
                value={password}
                disabled={disabled}
                onChange={({ target }) => setPassword(target.value)}
                placeholder="******"
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area-title">Lembrar senha</div>
            <input
              type="checkbox"
              checked={rememberPass}
              disabled={disabled}
              onChange={() => setRememberPass(!rememberPass)}
            />
          </label>

          {disabled ? (
            <button disabled={disabled}>Entrando...</button>
          ) : (
            <button>Entrar</button>
          )}
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Login;
