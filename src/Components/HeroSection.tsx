import styled from 'styled-components';

const MainSection = () => {
  return (
    <HeroContent>
      <TextSection>
        <h1>Sua Parceira em Conformidade com a LGPD</h1>
        <h2><span>Protegendo</span> seus dados e <span>fortalecendo</span> sua empresa.</h2>
      </TextSection>
    </HeroContent>
  )
}

const HeroContent = styled.div`
  position: absolute; // Para posicionar-se em relação ao HeroSection
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center; // Centraliza verticalmente
  justify-content: center; // Centraliza horizontalmente
  text-align: center;
  padding: 2rem;
`;

const TextSection = styled.div`
  flex: 1;

  h2 {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px; // Efeito "vivo"
    font-size: 1.5rem;
    font-weight:200;
    color: #EDEDED;
    span {
      color: #e1d00d;
      font-weight: bold;
    }
  }

  h1 {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    font-size: 3rem; // Ajuste conforme necessário
    font-weight: 600;
    color: #EDEDED; // Uma cor clara que contraste bem com azul

    span {
      color: #e1d00d; // Uma cor dourada para destacar "LGPD". Ajuste conforme desejado.
      font-weight: bold;
    }
  }
`;

export default MainSection
