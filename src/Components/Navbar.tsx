import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo1 from '../assets/loco-white.png'

interface StyledNavProps {
  isScrolled: boolean;
}

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
  background-color: var(--color-black2);
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
  height: 60px;
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


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
        <MobileIcon onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MobileIcon>
        <NavLinks open={menuOpen} isScrolled={isScrolled}>
          <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
          <NavLink href="#quemsomos" onClick={closeMenu}>Quem Somos</NavLink>
          <NavLink href="#produtos" onClick={closeMenu}>Produtos</NavLink>
          <NavLink href="#certificados" onClick={closeMenu}>Certificações</NavLink>
          <NavLink href="#contato" onClick={closeMenu}>Contato</NavLink>
        </NavLinks>
      </NavContainer>
    </StyledNav>
  );
};

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    div {
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 5px;
      transition: 0.3s;
    }
  }
`;

const NavLinks = styled.div<{ open: boolean; isScrolled: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    transition: max-height 0.3s ease-out, background-color 0.3s ease-in-out;
    max-height: ${({ open }) => (open ? '300px' : '0')};
    width: 100%;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: ${({ open, isScrolled }) => open || isScrolled ? 'var(--color-black2)' : 'transparent'};
    ${NavLink} {
      margin: 10px 0;
      color: white;
      display: block;
    }
  }
`;



export default Navbar;
