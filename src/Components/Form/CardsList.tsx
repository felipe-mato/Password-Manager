/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-cycle */
// CardsList.js
import React, { useState } from 'react';
import { CardType } from './MainComponent';

interface CardsListProps {
  cards: CardType[];
}

function CardsList({ cards }: CardsListProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const deleteBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Encontra o elemento pai do botão clicado
    const parentDiv = e.currentTarget.closest('.card');
  
    // Remove o elemento pai, se encontrado
    if (parentDiv) {
      parentDiv.remove();
    }
  };


  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="cards-container">
      <ul>
        {cards.map((card: CardType, index: number) => (
          <li className="card" key={ index }>
            <label className="card-lable">

              <span>Nome:</span>
              <p>
                {card.nameInput}
              </p>
            </label>
            <label className="card-lable">

              <span>Login:</span>
              <p>
                {card.loginInput}
              </p>
            </label>
            <label className="card-lable">
              <span>Password:</span>
              <div className="input-container">
                <p>
                  {isVisible
                    ? card.passwordInput
                    : '*'.repeat(card.passwordInput.length)}
                </p>
                <button className="toggle-button" onClick={ handleVisible }>
                  {isVisible ? (
                    <img src="./icons/eye-open.png" alt="Visível" />
                  ) : (
                    <img src="./icons/eye-close.png" alt="Não-visível" />
                  )}
                </button>
              </div>
            </label>
            <label className="card-lable">

              <span>URL:</span>
              <p>
                {card.URLInput}
              </p>
            </label>
            <div className="del-btn-container">
              <button className="del-btn" onClick={ deleteBtn }>x</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardsList;
