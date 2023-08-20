import styled from 'styled-components';
import productData from './Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Products = () => {
  return (
    <Conteiner>
      <ProductGrid>
          {productData.map((product) => (
              <Card key={product.title}>
                  <FontAwesomeIcon icon={product.icon} color="#36558f" size="2x" />
                  <h3>{product.title}</h3>
                  <p>{product.subtitle}</p>
              </Card>
          ))}
      </ProductGrid>
    </Conteiner>
);
};

const Conteiner = styled.div`
padding: 48px 0;
`

const ProductGrid = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1200px;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: #f9f9f9;
  padding: 25px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border 0.3s ease; // Adicionei a transição da borda
  border: 2px solid transparent; // Borda transparente

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
    border: 2px solid #36558f; // Borda azul ao pairar
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    max-width: 85%;
  }
`;



export default Products;
