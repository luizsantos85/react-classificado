import Cookies from 'js-cookie';

export const isLogged = () => {
  let token = Cookies.get('token');
  return (token) ? true : false;
};

export const doLogin = (token, rememberPass = false) => {
  if(rememberPass){
    Cookies.set('token',token, {expires:30});
  }else{
    Cookies.set('token',token);
  }
};

export const logout = () => {
  Cookies.remove('token');
  window.location.href="/"
};