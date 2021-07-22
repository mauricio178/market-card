import React, { useState } from 'react'
import { Container, DivIcons } from './styled'
import Input from '../../components/Input/index'
import { useHistory } from 'react-router-dom';
import ButtonPrimary from '../../components/ButtonPrimary'
import DefaultBackground from '../../components/DefaultBackgroundLogin';
import Alert from '../../components/Alert';
import { useAlert } from '../../hooks/alertHook';
import mrkLogo from '../../assets/mrkLogo.png'
import PasswordInput from '../../components/PasswordInput';
import { api } from '../../services/api';

export default function Login() {

  const { turnOnAlert } = useAlert()

  const history = useHistory()

  async function handleSubmit(data: any) {
    data.preventDefault()

    try {

      api.get('/login', data)
      console.log("Entrou")
      
      // let email = document.getElementById("email");
      
      // if (email === null) turnOnAlert('Email Null', 3000)
      
    } catch (err) {
      console.log("Erro")

    }

  }
  const handleGoToProducts = () => {
    history.push('/productList')
  }

  const handleGoToRegister = () => {
    history.push('/register')
  }

  return (
    <DefaultBackground>

      <Alert />

      <Container>
        <img src={mrkLogo} alt="Market" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input placeholder="E-mail" type="email" name="email" />
          <PasswordInput 
            placeholder="Senha"
            type="password"
            name="password"
          />
          <ButtonPrimary label="Entrar" type="submit" />
        </form>
        <DivIcons>
          <button onClick={handleGoToRegister}>Registrar-se</button>
        </DivIcons>
      </Container>
    </DefaultBackground >
  );
}