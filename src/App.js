import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from './components/nav';
import Beneficios from './components/beneficios';
import Funcionalidades from './components/funcionalidade';
import Depoimentos from './components/depoimentos';
import FormularioContato from './components/contato';
import Rodape from './components/rodape';
import Menu from './components/menulinks';  

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  
`;

function App() {
  const [pratos, setPratos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await
fetch('https://api.spoonacular.com/recipes/random?number=5&apiKey=65ca745477704bc296379893f9e2618c');
      const data = await response.json();
      setPratos(data.recipes);
    };
    fetchData();
    
  }, []);

  return (
    <AppContainer>
      <Menu />  
      <Nav />
      <Beneficios />
      <Funcionalidades pratos={pratos} />
      <Depoimentos />
      <FormularioContato />
      <Rodape />
    </AppContainer>
  );
}

export default App