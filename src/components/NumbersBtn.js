import CartContext from "../CartContext";
import React, { useState, useContext } from "react";

const NumbersBtn = ({ num, price, type }) => {
  const { cart, setCart } = useContext(CartContext);

  const articleObj = {
    type,
    num,
    price,
  };

  const addArticle = () => {
    const newCart = [...cart];

    newCart.push(articleObj);

    setCart(newCart);
  };

  return (
    <button
      className="choiceBtn"
      onClick={() => {
        addArticle();
        //setCart("set");
      }}
    >
      <line>{num} exemplaire</line> <line>{price}€ TTC</line>
    </button>
  );
};

export default NumbersBtn;
