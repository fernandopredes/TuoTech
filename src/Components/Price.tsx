
import styled from 'styled-components';

const Price = () => {
    return (
        <PriceSection>
            <h2>Solicite agora sua consultoria LGPD 100% gratuita</h2>
        </PriceSection>
    );
};

const PriceSection = styled.section`
    background-color: #f5f5fa;
    padding: 120px 0;
    text-align: center;

    h2 {
        font-size: 3rem;  // Aumentando o tamanho da fonte
        letter-spacing: 1.2px;  // Adicionando espaçamento entre letras
        font-weight: 700;  // Peso da fonte mais forte
        margin: 0;
        color: #36558f;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);  // Adicionando uma leve sombra
    }
`;


export default Price
