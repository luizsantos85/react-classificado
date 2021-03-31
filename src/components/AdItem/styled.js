import styled from 'styled-components';

export const Item = styled.div`
  a {
    display: block;
    padding: 10px;
    margin: 10px;
    color: #333;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: all ease .4s;

    &:hover{
    background-color:#ccc;
    border: 1px solid #555;
    transform: scale(1.1);
    }

    .item-image img {
      border-radius: 5px;
      width: 100%;
    }

    .item-name {
      font-weight: bold;
      font-size: 1rem;
      margin: 5px 0;
    }
    .item-price {
    }
  }
`;
