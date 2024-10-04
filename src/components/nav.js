import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  height: 100vh;
  background-image: url('/images/delicious-food.jpg'); // Substitua pela imagem que desejar
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const DownloadButton = styled.button`
  background-color: #EF0C0C;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
`;

function HeroSection() {
  return (
    <Hero>
      <Title>GourmetOn - Comida Deliciosa ao seu Alcance</Title>
      <Description>Receba as melhores opções de comida com entrega rápida, onde quer que esteja.</Description>
      <DownloadButton>Baixar o App</DownloadButton>
    </Hero>
  );
}

export default HeroSection;