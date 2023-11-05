import styled from 'styled-components';
import image from '../assets/hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface QuemSomosProps {
  id?: string;
}

const SolutionItem = styled.div`
  display: flex;
  align-items: center;
  color: #555;
  margin-bottom: 20px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const SolutionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const CheckCircle = styled.span`
color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #D4AF37;
  padding: .5rem;
`;

const SolutionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #333;
  margin-bottom: 4px;
`;

const QuemSomos: React.FC<QuemSomosProps> = ({ id })=> {
  return (
    <SectionContainer id={id}>
      <Title>Principais Serviços</Title>
      <SolutionsContainer>
      <SolutionItem>
        <CheckCircle>
          <FontAwesomeIcon icon={faCheck} size="sm" />
        </CheckCircle>
        <SolutionContent>
          <SolutionTitle>DPO as a Service</SolutionTitle>
          Oferecemos consultoria especializada em DPO as a Service, atuando como o Encarregado de Dados Pessoais exigido pela LGPD, garantindo a conformidade das empresas com as normas de proteção de dados de forma eficiente e segura, e sem incorrer nas obrigações trabalhistas típicas
        </SolutionContent>
      </SolutionItem>
      <SolutionItem>
        <CheckCircle>
          <FontAwesomeIcon icon={faCheck} size="sm" />
        </CheckCircle>
        <SolutionContent>
          <SolutionTitle>Sistema para Adequação à LGPD</SolutionTitle>
          Tenha um sistema de controle de adequação avançado e personalizado que auxilie sua empresa na implementação e gestão de processos para atender plenamente às exigências da LGPD, assegurando conformidade, segurança dos dados e tranquilidade operacional; o sistema inclui treinamento e um canal de denúncias.
        </SolutionContent>
      </SolutionItem>
      <SolutionItem>
        <CheckCircle>
          <FontAwesomeIcon icon={faCheck} size="sm" />
        </CheckCircle>
        <SolutionContent>
          <SolutionTitle>Análise e Melhoria de Processos de Negócio</SolutionTitle>
          Conheça nosso serviço de mapeamento, análise e melhoria de processos de negócio, que visa otimizar a eficiência operacional e promover a excelência na gestão empresarial, apoiado por um Escritório de Processos experiente e por profissionais certificados.
        </SolutionContent>
      </SolutionItem>
      <SolutionItem>
        <CheckCircle>
          <FontAwesomeIcon icon={faCheck} size="sm" />
        </CheckCircle>
        <SolutionContent>
          <SolutionTitle>Gerenciamento de Riscos e Segurança da Informação</SolutionTitle>
          Nossa consultoria oferece um serviço abrangente de Gerenciamento de Riscos e Segurança da Informação, que ajuda as empresas a identificar, avaliar e mitigar ameaças, além de proteger seus dados por meio de testes de invasão, fortalecendo assim a postura de segurança no ambiente digital.
        </SolutionContent>
      </SolutionItem>
      </SolutionsContainer>
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

const SolutionsContainer = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

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
