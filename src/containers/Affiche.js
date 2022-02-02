import React, { useState, useContext } from "react";
import CartContext from "../CartContext";
import NumbersBtn from "../components/NumbersBtn";

const Affiche = () => {
  const { cart, setCart } = useContext(CartContext);

  console.log("cart ", cart);

  const displayCart = () => {
    return cart.map((obj, key) => {
      return <p key={key}>{`${obj.type}*${obj.num} ${obj.price}€`}</p>;
    });
  };

  return (
    <>
      <p className="title">AFFICHES</p>
      <div className="vertical-divs">
        <div>
          <div className="size-div">
            <div className="formatbtn">A1</div>
            <div className="formatbtn">A2</div>
          </div>
          <div className="describe-div">
            <p>
              <p>Descriptif</p>
              <p>Pré-presse </p>
              <p>Papier</p>
              <p>Impression</p>
              <p>Emballage</p>
              <p>Livraison</p>
            </p>
            <p>
              <p>59,4 x 84,1 cm à la française</p>
              <p>PAO fournie par vos soins</p>
              <p>Couché moderne demi-mat 135 g/m2 CUBE</p>
              <p>R° Quadri</p>
              <p>Sous film rétractable par 1 ex</p>
              <p>Enlèvement par vos soins</p>
            </p>
          </div>
          <div className="choice-div">
            <button
              className="choiceBtn"
              onClick={() => {
                setCart("set");
              }}
            >
              <line>1 exemplaire</line> <line>19.20€ TTC</line>
            </button>
            <div className="choiceBtn">
              <line>10 exemplaire</line> <line>108.00€ TTC</line>
            </div>

            <NumbersBtn num={2} price={20} type={"Affiche(s)"} />
          </div>
        </div>
        <div>
          <p>right</p>
          <p>{displayCart()}</p>
        </div>
      </div>
    </>
  );
};

export default Affiche;
