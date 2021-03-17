import { createGlobalStyle } from 'styled-components';
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
`;

export const Template = styled.div``;

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

export const PageBody = styled.div``;
