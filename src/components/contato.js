import React, { useState } from 'react';
import styled from 'styled-components';

const Secao = styled.section`
  padding: 3rem 1rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  width: 80%;
  max-width: 300px;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Botao = styled.button`
  background-color: #EF0C0C;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.6rem 1.3rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

function FormularioContato() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email cadastrado: ${email}`);
    setEmail('');
  };

  return (
    <Secao id="contato">
      <h2>Cadastre-se para futuras promoções!</h2>
      <form onSubmit={handleSubmit}>
        <Input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Seu email" 
          required 
        />
        <Botao type="submit">Cadastrar</Botao>
      </form>
    </Secao>
  );
}

export default FormularioContato