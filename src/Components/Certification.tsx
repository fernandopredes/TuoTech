import styled from 'styled-components';
import estrela1 from '../assets/estrela1.png';
import estrela2 from '../assets/estrela2.png';
import certificado from '../assets/professional.png';
import certificado2 from '../assets/professional2.png';
import certificado3 from '../assets/professional3.png';
import certificado4 from '../assets/professional4.png';

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
      </ImageRow>
      <ImageRow>
        <CertificationImage src={certificado} alt="Certificado 3" />
        <CertificationImage src={certificado2} alt="Certificado 4" />
        <CertificationImage src={certificado3} alt="Certificado 5" />
        <CertificationImage src={certificado4} alt="Certificado 6" />
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

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Espaçamento entre as imagens
  margin-bottom: 20px; // Espaçamento entre as linhas de imagens

  &:last-child {
    margin-bottom: 0; // Remove o espaço extra na última linha
  }
`;

const CertificationImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

export default Certification;
