import React from 'react';
import styled from 'styled-components';

const Secao = styled.section`
  padding: 3rem 1rem;
  text-align: center;
`;

const GridPratos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;  // Espaçamento entre os itens
`;

const Prato = styled.div`
  flex: 0 1 calc(50% - 2rem);  // 50% da largura com margem de 2rem
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #fff;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex: 0 1 100%;  // Ocupa 100% da largura em telas menores
  }
`;

function Funcionalidades({ pratos }) {
  return (
    <Secao id="funcionalidades">
      <h2>Funcionalidades do App</h2>
      <p>Nosso app permite buscar pratos deliciosos de diferentes restaurantes e filtrar pelas suas preferências.</p>

      <GridPratos>
        {/* Verificando se pratos é um array antes de mapear */}
        {pratos && pratos.length > 0 ? (
          pratos.map((prato) => (
            <Prato key={prato.id}>
              <h3>{prato.title}</h3>
              <img src={prato.image} alt={prato.title} />
            </Prato>
          ))
        ) : (
          <p>Carregando pratos...</p>
        )}
      </GridPratos>
    </Secao>
  );
}

export default Funcionalidades