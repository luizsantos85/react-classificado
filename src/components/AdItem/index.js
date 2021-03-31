import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

const AdItem = (props) => {
  let price = '';
  if (props.data.priceNegotiable) {
    price = 'Preço negociável';
  } else {
    price = parseInt(props.data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  }
  
  return (
    <Item className="aditem">
      <Link to={`/ad/${props.data.id}`}>
        <div className="item-image">
          <img src={props.data.image} alt="" />
        </div>
        <div className="item-name">
          <h2>{props.data.title}</h2>
        </div>
        <div className="item-price">
          <p>{price}</p>
        </div>
      </Link>
    </Item>
  );
};

export default AdItem;
