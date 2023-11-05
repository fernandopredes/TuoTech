import styled from 'styled-components';
import estrela1 from '../assets/estrela1.png';
import estrela2 from '../assets/estrela2.png';
import certificado from '../assets/apdados.png';


type Props = {
  id?: string;
}

const Certification = ({ id }: Props) => {
  return (
    <CertificationsContainer id={id}>
      <Title>Certificações</Title>
      <ImageRow>
        <CertificationImage src={estrela1} alt="Certificado 1" />
        <CertificationImage src={estrela2} alt="Certificado 2" />
        <CertificationImage src={certificado} alt="Certificado 3" />
      </ImageRow>
    </CertificationsContainer>
  );
}

const CertificationsContainer = styled.div`
  padding: 20px 20px 64px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
`;

const CertificationImage = styled.img`
  width: 100%;
  max-width: 10vw;
  height: auto;

  @media (max-width: 768px) {
    max-width: 30vw;
  }

  @media (max-width: 480px) {
    max-width: 40vw;
  }
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
 

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export default Certification;
