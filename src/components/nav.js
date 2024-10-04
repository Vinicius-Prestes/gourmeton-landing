import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavStyle = styled.section`
  height: 100vh;
  background-image: url(src/imagens/prato_delicioso.jpeg); 
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Descricao = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const BotaoDownload = styled.button`
  background-color: #EF0C0C;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  padding-top: -20px;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

function Nav() {
  return (
    <NavStyle>
      <Titulo>GourmetOn - Comida Deliciosa ao seu Alcance</Titulo>
      <Descricao>Receba as melhores opções de comida com entrega rápida, onde quer que esteja.</Descricao>
      <BotaoDownload>Baixar o App</BotaoDownload>
      <Link to="beneficios" smooth={true} duration={800}>
        <BotaoDownload>Descubra Mais</BotaoDownload>
      </Link>
    </NavStyle>
  );
}

export default Nav