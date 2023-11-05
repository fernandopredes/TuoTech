import './App.css'
import Certification from './Components/Certification';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import MainSection from './Components/HeroSection';
import Navbar from './Components/Navbar'
import Products from './Components/Products';
import QuemSomos from './Components/QuemSomos';
import video from './assets/compressed.mp4'
import styled from 'styled-components';

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection id="home">
      <HeroVideo autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </HeroVideo>
      <BlueOverlay />
      <HeroContent>
        <MainSection/>
      </HeroContent>
    </HeroSection>
    <QuemSomos id="quemsomos"/>
    <Products id="produtos"/>
    <Certification id="certificados"/>
    <ContactForm id="contato"/>
    <Footer/>
    </>
  )
}

const BlueOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(54, 53, 39, 0.6);
  z-index: 0;
`;

const HeroSection = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 600px;

  @media (max-width: 1000px) {
    height: 500px;
  }
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  z-index: -1;

  /* Assegura que o vídeo ocupe toda a altura e largura do container */
  min-height: 100%;
  min-width: 100%;
  @media (max-width: 1000px) {
    width: auto;
    height: 100%;
    /* Faz o vídeo cobrir toda a área disponível, mantendo a proporção */
    object-fit: cover;
    /* Alinha o vídeo ao centro do container em todos os momentos */
    object-position: center;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  height: 600px;
  /* Estilize seu conteúdo aqui */
`;

export default App
