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
        font-size: 1.4rem;
        font-weight: 600;
        color: #2c3e50;
        transition: all 0.4s;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    nav {
      padding-bottom: 10px;
      padding-top: 10px;
      ul {
        display: flex;
        align-items: center;
        height: 40px;
      }
      li {
        list-style: none;
        margin: 0 20px;

        a {
          font-size: 1rem;
          color: #2c3e50;
          font-weight: 500;
          transition: all ease 0.4s;

          &:hover {
            color: #7f8c8d;
          }
          &.btn {
            background-color: #f39c12;
            color: #fff;
            padding: 5px 10px;
            border-radius: 10px;
          }
          &.btn:hover {
            background-color: #d35400;
            color: #ddd;
          }
        }
      }
    }
  }
`;
