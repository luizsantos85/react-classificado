import styled from 'styled-components';

export const HeaderArea = styled.section`
  height: 60px;
  background-color: #ddd;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    .logo {
      height: 60px;
      display: flex;
      align-items: center;

      a {
        font-size: 24px;
        font-weight: 600;
        color: #555;
        transition: all 0.4s;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    nav ul {
      display: flex;
      align-items: center;
      height: 60px;

      li {
        list-style: none;
        margin-right: 15px;

        a {
          color: #555;
          font-weight: 500;
        }
      }
    }
  }
`;
