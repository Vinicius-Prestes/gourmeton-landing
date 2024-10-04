import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import HeroSection from './components/HeroSection';
import Beneficios from './components/Beneficios';
import Funcionalidades from './components/Funcionalidades';
import Depoimentos from './components/Depoimentos';
import FormularioContato from './components/FormularioContato';
import Rodape from './components/Rodape';
import Nav from './components/nav';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

function App() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    const buscarPratos = async () => {
      const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=YOUR_API_KEY&number=3');
      const data = await response.json();
      setPratos(data.recipes);
    };

    buscarPratos();
  }, []);

  return (
    <AppContainer>
      <Nav />
      <Link to="beneficios" smooth={true} duration={800}>
        <button>Ver Benefícios</button>
      </Link>
      <Beneficios />
      <Funcionalidades pratos={pratos} />
      <Depoimentos />
      <FormularioContato />
      <Rodape />
    </AppContainer>
  );
}

export default App