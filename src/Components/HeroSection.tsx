import styled from 'styled-components';

interface HeroProps {
  id?: string;
}

const MainSection: React.FC<HeroProps> = ({ id })=> {
  return (
    <HeroContent id={id}>
      <TextSection>
        <h1>Tuo Sec</h1>
        <h2>Sua Parceira em Conformidade com a LGPD</h2>
        <h3><span>Protegendo</span> seus dados e <span>fortalecendo</span> sua empresa.</h3>
      </TextSection>
    </HeroContent>
  )
}

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const TextSection = styled.div`
  flex: 1;

  h1 {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 600;
    color: #ededed;
    margin: 0;

    @media (max-width: 992px) {
      font-size: 3rem; // Smaller font size for tablets and small desktops
    }

    @media (max-width: 768px) {
      font-size: 2.5rem; // Even smaller font size for landscape phones and small tablets
    }

    @media (max-width: 576px) {
      font-size: 2rem; // Small font size for portrait phones
    }
  }

  h2 {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 400;
    color: #ededed;

    @media (max-width: 992px) {
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }

    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }

  h3 {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: 200;
    color: #ededed;

    @media (max-width: 992px) {
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 576px) {
      font-size: 0.7rem;
    }

    span {
      color: var(--color-gold);
      font-weight: bold;
    }
  }
`

export default MainSection
