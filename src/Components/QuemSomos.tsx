import styled from 'styled-components';
import image from '../assets/hero.jpg'

interface QuemSomosProps {
  id?: string;
}

const QuemSomos: React.FC<QuemSomosProps> = ({ id })=> {
  return (
    <SectionContainer id={id}>
      <Title>Quem Somos</Title>
      <FlexContainer>
        <Description>
        A Tuo Sec Secure Privacy dedica-se a orientar empresas através das exigências da LGPD. Nossa visão é transformar a conformidade em vantagem competitiva, ressaltando sempre a integridade e transparência. Com uma equipe de especialistas, temos elevado o padrão de privacidade e proteção de dados para diversas organizações, reafirmando nosso compromisso com a excelência no mercado.
        </Description>
        <CompanyImage src={image} alt="imagem de cadeado" />
      </FlexContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const FlexContainer = styled.section`
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CompanyImage = styled.img`
  max-width: 30%;
  height: auto;
  margin-bottom: 30px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 80%;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  max-width: 70%;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  color: #555;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
    text-align: left;
    margin-bottom: 20px;
  }
`;


export default QuemSomos;
