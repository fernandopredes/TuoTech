import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedinIn, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logobranco.png'

const Footer = () => {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={logo} alt="Logo" />
        <Copyright>
          © {getCurrentYear()} Tuo. Todos os direitos reservados.
        </Copyright>
        <FooterLinks>

          <SocialMediaLinks>
            <SocialIconLink href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} color="white" size="lg" />
            </SocialIconLink>
            <SocialIconLink href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
            </SocialIconLink>
            <SocialIconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} color="white" size="lg" />
            </SocialIconLink>
            <SocialIconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} color="white" size="lg" />
            </SocialIconLink>
          </SocialMediaLinks>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #36558f;
  padding: 60px 0;
  border-radius:5px 5px 0 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  max-height: 160px;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: white;
  margin-top: 20px;
  text-align: center; // centraliza o texto
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const SocialIconLink = styled.a`
  color: white;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
  font-size: 1.6rem;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Footer;
