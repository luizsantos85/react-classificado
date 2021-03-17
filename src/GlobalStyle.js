import { createGlobalStyle, keyframes } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
  outline:0;
}
html, body, #root{
  min-height: 100%;
}
body{
  font-family: 'Roboto', sans-serif;
  background-color:#eee;
}
button{
  cursor:pointer;
  border: 0;
}
a{
  text-decoration: none;
}
.animeLeft {
  opacity: 0;
  transform: translateX(-30px);
  animation: animeLeft 0.5s forwards;
}
@keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
}
`;

// export const animeLeft = keyframes`
//   to {
//     opacity: 1;
//     transform: initial;
//   }
// `;

export const Template = styled.div``;
export const PageBody = styled.div``;

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 40px 0;
`;

export const PageTitle = styled.h1`
  font-size: 2.3rem;
  text-align: center;
  padding: 10px 0;
`;

export const ErrorMessage = styled.div`
  padding: 5px 0;
  margin: 10px 0;
  background-color: #e74c3c;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
`;
