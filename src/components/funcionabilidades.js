import React from 'react';
import styled from 'styled-components';

const Secao = styled.section`
  padding: 3rem 1rem;
  background-color: #f5f5f5;
  text-align: center;
`;

const Prato = styled.div`
  margin: 1rem 0;
`;

const Imagem = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
  }
`;

function Funcionalidades({ pratos }) {
  return (
    <Secao>
      <h2>Funcionalidades</h2>
      <p>Busque por tipos de comida, aplique filtros e descubra novos pratos deliciosos.</p>
      <div>
        {pratos.map((prato) => (
          <Prato key={prato.id}>
            <h3>{prato.title}</h3>
            <Imagem src={prato.image} alt={prato.title} />
          </Prato>
        ))}
      </div>
    </Secao>
  );
}

export default Funcionalidades;