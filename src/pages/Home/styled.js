import styled from 'styled-components';

export const PageArea = styled.div`
  min-height: 80vh;

  .list {
    display: flex;
    flex-wrap: wrap;

    .aditem {
      width: 25%;
    }
  }
  .seeAllLink {
    display: inline-block;
    font-weight: 600;
    margin: 10px 0;
    color: #555;
  }
`;

export const SearchArea = styled.div`
  background-color: #ddd;
  border-bottom: 1px solid #ccc;
  /* padding: 20px 0; */

  .searchBox {
    background-color: #1abc9c;
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.3);
    display: flex;

    form {
      flex: 1;
      display: flex;

      input,
      select {
        height: 30px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: #000;
        margin-right: 20px;
      }
      input {
        padding: 0 10px;
        flex: 1;
      }
      select {
        width: 100px;
      }
      button {
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #2980b9;
        color: #fff;
        font-weight: 600;
        transition: all ease 0.4s;

        &:hover {
          opacity: 0.6;
          color: #222;
        }
      }
    }
  }

  .categoryList {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .category-item {
      display: flex;
      width: 25%;
      align-items: center;
      justify-content: center;
      height: 50px;
      margin-bottom: 10px;
      transition: all ease 0.4s;
      color: #555;

      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }

      &:hover {
        transform: scale(0.9);
        opacity: 0.7;
      }
    }
  }
`;
