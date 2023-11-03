import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo1 from '../assets/loco-white.png'

interface StyledNavProps {
  isScrolled: boolean;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNav isScrolled={isScrolled}>
      <NavContainer>
        <Logo src={logo1} alt="Logo" />
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#quemsomos">Quem Somos</NavLink>
          <NavLink href="#produtos">Produtos</NavLink>
          <NavLink href="#certificados">Certificações</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </NavLinks>
      </NavContainer>
    </StyledNav>
  );
};

const StyledNav = styled.nav<StyledNavProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  position: fixed;
  border-radius:0 0 5px 5px;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ isScrolled }) => (isScrolled ? 'var(--color-black2)' : 'transparent')};
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: var(--color-gold);
  }
`;

export default Navbar;
