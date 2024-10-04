import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const MenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #EF0C0C;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  margin: 0 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

function Menu() {
  return (
    <MenuContainer>
      <MenuLink to="hero" smooth={true} duration={800}>
        Início
      </MenuLink>
      <MenuLink to="beneficios" smooth={true} duration={800}>
        Benefícios
      </MenuLink>
      <MenuLink to="funcionalidades" smooth={true} duration={800}>
        Funcionalidades
      </MenuLink>
      <MenuLink to="depoimentos" smooth={true} duration={800}>
        Depoimentos
      </MenuLink>
      <MenuLink to="contato" smooth={true} duration={800}>
        Contato
      </MenuLink>
      <MenuLink to="rodape" smooth={true} duration={800}>
        Rodapé
      </MenuLink>
    </MenuContainer>
  );
}

export default Menu