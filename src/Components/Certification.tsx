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
      <ImagesGrid>
        <CertificationImage src={estrela1} alt="Certificado 1" />
        <CertificationImage src={estrela2} alt="Certificado 2" />
        <CertificationImage src={certificado} alt="Certificado 3" />
      </ImagesGrid>
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

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  align-items: center;
  
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const CertificationImage = styled.img`
  width: 200px;
  height: auto;
`;

export default Certification;
