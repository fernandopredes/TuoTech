import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedinIn, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo3.png'

const Footer = () => {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={logo} alt="Logo" />
        <Copyright>
          © {getCurrentYear()} TUO SEC. Todos os direitos reservados.
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
  background-color: var(--color-black2);
  padding: 40px 20px;
  border-radius:5px 5px 0 0;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = styled.img`
  max-height: 120px;
  @media (max-width: 768px) {
    max-height: 80px;
  }
`;


const FooterLinks = styled.div`
  @media (max-width: 768px) {
    order: -1;
    width: 100%;
    justify-content: center;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: white;
  margin-top: 20px;
  text-align: center;
`;

const SocialMediaLinks = styled.div`
  visibility: hidden;
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    visibility: hidden;
  }
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
