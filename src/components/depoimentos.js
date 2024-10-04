import React from 'react';
import styled from 'styled-components';

const Secao = styled.section`
  padding: 3rem 1rem;
  text-align: center;
`;

const Depoimento = styled.div`
  margin: 1rem 0;
  font-style: italic;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

function Depoimentos() {
  return (
    <Secao id="depoimentos">
      <h2>O que nossos clientes dizem?</h2>
      <Depoimento>"A comida chega sempre fresquinha e muito rápido! Recomendo." - Guilherme</Depoimento>
      <Depoimento>"Adoro a variedade de restaurantes. Sempre encontro algo novo!" - Enzo</Depoimento>
      <Depoimento>"Só restaurante de qualidade pae!" - Henrique</Depoimento>
      <Depoimento>"Se quer um aplicativo com comida de qualidade é esse mesmo!" - Luiz</Depoimento>
      <Depoimento>"Entrega mais rápida que já vi, nem deu tempo de ir ao banheiro e já estava na porta da minha casa." - Matheus</Depoimento>
    </Secao>
  );
}

export default Depoimentos