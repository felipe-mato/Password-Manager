/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-multi-spaces */
/* eslint-disable react/jsx-indent */

import React, { useState } from 'react'

type FormProps = {
  submitFunction: (info: any) => void;
};

export default function Form({ submitFunction }: FormProps) {
  const [emptyNameError, setEmptyNameError] = useState('');
  const [emptyLoginError, setEmptyLoginError] = useState('');
  const [emptyURLError, setEmptyURLError] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [info, setInfo] = useState({
    nameInput: '',
    loginInput: '',
    passwordInput: '',
    URLInput: '',
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const setState = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setInfo({
      nameInput: '',
      loginInput: '',
      passwordInput: '',
      URLInput: '',
    })
  };
  
  const increaseWidth = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    
    const numberOfCharacters: number = target.value.length;
    if (numberOfCharacters > 30) {
      const length = (`${numberOfCharacters}ch`);
      target.style.width = length;
    }
    if (numberOfCharacters === 0) {
      target.style.width = '30ch'
    }
  };
      
  const handeChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setState(e);
    increaseWidth(e);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errorNMsg = validateEmpty(info.nameInput);
    if (errorNMsg) {
      setEmptyNameError(errorNMsg);
      console.log(emptyNameError);
      return;
    }
    setEmptyNameError('');
    
    const errorLMsg = validateEmpty(info.loginInput);
    if (errorLMsg) {
      setEmptyLoginError(errorLMsg);
      console.log(emptyLoginError);
      return;
    }
    setEmptyLoginError('');

    const errorPMsg = validatePassword(info.passwordInput);
    if (errorPMsg) {
      setErrorPassword(errorPMsg);
      return;
    }
    setErrorPassword('');

    const errorURLMsg = validateEmpty(info.URLInput);
    if (errorURLMsg) {
      setEmptyURLError(errorURLMsg);
      console.log(emptyURLError);
      return;
    }
    setEmptyURLError('');
    submitFunction(info)
    resetForm();
  };
  
  const validateEmpty = (name: string) => {
    if (name.trim() === '') {
      return '*Campo obrigatório.';
    }
    return '';
  };

  const validatePassword = (pwd: string) => {
    // const hasUpperCase = /[A-Z]/.test(pwd);
    // const hasLowerCase = /[a-z]/.test(pwd);
    // const hasNumber = /[0-9]/.test(pwd);
    // const hasSpecialChar = /[+=\-!]/.test(pwd);
    const hasMinLength = pwd.length >= 7;

    // if (!hasUpperCase) {
    //   return 'A senha deve conter pelo menos uma letra maiúscula.';
    // } if (!hasLowerCase) {
    //   return 'A senha deve conter pelo menos uma letra minúscula.';
    // } if (!hasNumber) {
    //   return 'A senha deve conter pelo menos um número.';
    // } if (!hasSpecialChar) {
    //   return 'A senha deve conter pelo menos um dos caracteres especiais: +, =, -, !';
    // } 
    if (!hasMinLength) {
      return '*A senha deve ter no mínimo 7 caracteres.';
    } 
    // if (pwd.includes(' ')) {
    //   return 'A senha não pode conter espaços em branco.';
    // }
      return ''; 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevenir comportamento padrão do Enter

      const target = e.target as HTMLInputElement;
      const form = target.form;

      if (form) {
        const index = Array.prototype.indexOf.call(form.elements, target);
        const nextElement = form.elements[index + 1] as HTMLElement;

        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  };
  
  return (

    <>
<form className='darkModeForm' onSubmit={handleSubmit}>
        {showForm ? (<><button className='showFormBtn' type='button' onClick={toggleForm}>Cadastrar nova senha</button></>) : (
          <>
        <label htmlFor='nameInput'>
          {emptyNameError && <span className='errorSpan'>{emptyNameError}</span>}
          <br />
          <input
            onChange={handeChange}
            value={info.nameInput}
            type="text"
            placeholder='Nome do serviço'
            name='nameInput'
            className='formInput'
            id='nameInput'
            // onKeyDown={handleKeyDown}
          />
        </label>
        <label htmlFor='loginInput'>
        {emptyLoginError && <span className='errorSpan'>{emptyLoginError}</span>}
        <br />
          <input
            onChange={handeChange}
            value={info.loginInput}
            type="text"
            placeholder='Login'
            name='loginInput'
            className='formInput'
            id='loginInput'
            // onKeyDown={handleKeyDown}
          />
        </label>
        <label htmlFor='password'>
          {errorPassword && <span className='errorSpan'>{errorPassword}</span>}
          <br />
          <input
            // onKeyDown={handleKeyDown}
            onChange={setState}
            value={info.passwordInput}
            type="password"
            placeholder='Senha'
            name='passwordInput'
            className='formInput'
            id='passwordInput'
          />
        </label>
        <label htmlFor='URLInput'>
        {emptyURLError && <span className='errorSpan'>{emptyURLError}</span>}
        <br />
          <input
            value={info.URLInput}
            onChange={handeChange}
            type="text"
            placeholder='URL'
            name='URLInput'
            className='formInput'
            id='URLInput'
            // onKeyDown={handleKeyDown}
          />
        </label>
        <div className="button-container">
          <button type="submit">Adicionar</button>
          <button type="button" onClick={resetForm}>Cancelar</button>
        </div>
        </>)}
      </form>
</>
  )
}