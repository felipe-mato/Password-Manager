/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Form from './Form';
import CardsList from './CardsList';

export type CardType = {
  nameInput: string;
  loginInput: string;
  passwordInput: string;
  URLInput: string;
};

export default function MainComponent() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [cards, setCards] = useState<CardType[]>([]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  function updateState({ nameInput, loginInput, passwordInput, URLInput } : CardType) {
    const newCard = {
      nameInput,
      loginInput,
      passwordInput,
      URLInput,
    };
    setCards([...cards, newCard]);
    console.log(cards);
  }

  return (
    <>
      <h1 className={ darkMode ? 'darkModeH1' : '' }>Gerenciador de senhas</h1>
      <div className="dark-mode-btn-container">
        <button onClick={ toggleDarkMode }>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <main className={ darkMode ? 'darkModeMain' : '' }>
        <Form submitFunction={ updateState } />
        <CardsList cards={ cards } />
      </main>
    </>
  );
}
