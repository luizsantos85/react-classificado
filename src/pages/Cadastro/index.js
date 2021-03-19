import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import { ErrorMessage, PageContainer, PageTitle } from '../../GlobalStyle';
import useApi from '../../helpers/Api';
import { doLogin } from '../../helpers/AuthHandler';

const Cadastro = () => {
  const api = useApi();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [estado, setEstado] = useState('');
  const [estadoList, setEstadoList] = useState([]);
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const getEstado = async () => {
      const slist = await api.getEstado();
      setEstadoList(slist);
    };
    getEstado();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError('');
    if (password !== confirmPass) {
      setError('Senhas não conferem.');
      setDisabled(false);
      return;
    }
    const json = await api.register(name, email, password, estado);
    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token);
      window.location.href = '/';
    }
    setDisabled(false);
  };

  return (
    <PageContainer className="animeLeft">
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        <form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <label className="area">
            <div className="area-title">Nome</div>
            <div className="area-input">
              <input
                type="text"
                value={name}
                disabled={disabled}
                onChange={({ target }) => setName(target.value)}
                placeholder="Nome completo"
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area-title">Estado</div>
            <div className="area-input">
              <select
                value={estado}
                onChange={({ target }) => setEstado(target.value)}
                required
              >
                <option value="" disabled></option>
                {estadoList.map((item) => (
                  <option value={item._id} key={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </label>

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
            <div className="area-title">Confirmar senha</div>
            <div className="area-input">
              <input
                type="password"
                value={confirmPass}
                disabled={disabled}
                onChange={({ target }) => setConfirmPass(target.value)}
                placeholder="******"
                required
              />
            </div>
          </label>

          {disabled ? (
            <button disabled={disabled}>Cadastrando...</button>
          ) : (
            <button>Cadastrar</button>
          )}
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Cadastro;
