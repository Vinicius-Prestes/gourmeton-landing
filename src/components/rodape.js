import React from 'react';
import styled from 'styled-components';

const RodapeContainer = styled.footer`
  padding: 2rem 1rem;
  background-color: #333;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const LinksSociais = styled.div`
  margin: 1rem 0;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Link = styled.a`
  color: white;
  margin: 0 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Rodape() {
  return (
    <RodapeContainer id="rodape">
      <p>© 2024 GourmetOn. Todos os direitos reservados.</p>
      <LinksSociais>
        <Link href="#">Instagram</Link> | <Link href="#">Facebook</Link> | <Link href="#">Twitter</Link>
      </LinksSociais>
      <p><Link href="#">Termos de Uso</Link></p>
    </RodapeContainer>
  );
}

export default Rodape