import React from 'react';
import styled from 'styled-components';

const Secao = styled.section`
  padding: 3rem 1rem;
  text-align: center;
`;

const Beneficio = styled.div`
  margin: 1rem 0;
`;

function Beneficios() {
  return (
    <Secao id="beneficios">
      <h2>Por que usar o GourmetOn?</h2>
      <Beneficio>🍔 Entrega rápida em menos de 30 minutos!</Beneficio>
      <Beneficio>🥘 Variedade de restaurantes e tipos de cozinha.</Beneficio>
      <Beneficio>💳 Pagamento fácil e seguro diretamente pelo app.</Beneficio>
    </Secao>
  );
}

export default Beneficios