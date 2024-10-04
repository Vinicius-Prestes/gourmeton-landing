import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Fetch data from Spoonacular API (example)
    const fetchDishes = async () => {
      const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=YOUR_API_KEY&number=3');
      const data = await response.json();
      setDishes(data.recipes);
    };

    fetchDishes();
  }, []);

  return (
    <AppContainer>
      <HeroSection />
      <Benefits />
      <Features dishes={dishes} />
      <Testimonials />
      <ContactForm />
      <Footer />
    </AppContainer>
  );
}

export default App