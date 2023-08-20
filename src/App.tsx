import './App.css'
import ContactForm from './Components/ContactForm';
import MainSection from './Components/HeroSection';
import Navbar from './Components/Navbar'
import Products from './Components/Products';
import QuemSomos from './Components/QuemSomos';
import video from './assets/video.mp4'
import styled from 'styled-components';

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection>
      <HeroVideo autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </HeroVideo>
      <BlueOverlay />
      <HeroContent>
        <MainSection/>
      </HeroContent>
    </HeroSection>
    <QuemSomos/>
    <Products/>
    <ContactForm/>
    </>
  )
}

const BlueOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(32, 50, 84, 0.6);
  z-index: 0;
`;

const HeroSection = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 600px;
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;     /* O vídeo irá ocupar a largura total */
  height: auto;    /* A altura será ajustada proporcionalmente */
  z-index: -1;

  /* Assegura que o vídeo ocupe toda a altura e largura do container */
  min-height: 100%;
  min-width: 100%;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  height: 600px;
  /* Estilize seu conteúdo aqui */
`;

export default App
