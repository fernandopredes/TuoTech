import { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const CookieModal = styled.div`
  background-color: var(--color-white);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  z-index: 1000;
`;

const Button = styled.button`
  background-color: var(--color-gold);
  color: var(--color-black);
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-gold3);
  }
`;

export const CookieConsent = () => {
  const [consent, setConsent] = useState(localStorage.getItem('cookieConsent') === 'true');

  const giveConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setConsent(true);
  };

  if (consent) return null;

  return (
    <ModalBackground>
      <CookieModal>
        <p>Nós usamos cookies para garantir que você obtenha a melhor experiência em nosso site. Ao continuar a navegar, você concorda com o uso de cookies conforme nossa política.</p>
        <Button onClick={giveConsent}>Aceitar</Button>
      </CookieModal>
    </ModalBackground>
  );
};
