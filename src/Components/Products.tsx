import styled from 'styled-components';
import productData from './Product'

const Products = () => {
  return (
    <ProductGrid>
        {productData.map((product) => (
            <Card key={product.title}>
                <Icon src={product.icon} alt={product.title} />
                <h3>{product.title}</h3>
            </Card>
        ))}
    </ProductGrid>
);
};

const ProductGrid = styled.div`
display: grid;
margin: 0 auto; // Centraliza o grid
max-width: 1200px; // Define a largura máxima para o grid
display: grid;
grid-template-columns: repeat(4, 1fr); // 4 cards por linha
gap: 20px; // espaço entre os cards
padding: 20px;
grid-template-columns: repeat(1, 1fr); // 1 card por linha em telas muito pequenas

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr); // 2 cards por linha em telas pequenas
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); // 3 cards por linha em telas médias
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); // 4 cards por linha em telas grandes
  }
`

const Card = styled.div`
background: #f9f9f9; // Uma cor neutra de fundo
padding: 15px;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); // Sombra sutil
transition: box-shadow 0.3s ease; // Transição suave na sombra (opcional)

&:hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15); // Uma sombra um pouco mais intensa no hover
}
`

const Icon = styled.img`
height: 60px;
width: 60px;
margin-bottom: 10px;
`;
export default Products;
