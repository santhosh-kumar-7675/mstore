import { Container, Row, Col, Card } from 'react-bootstrap';
import PCardLeftSmall from './PcardLeftSmall';

const ProductsGridRow = ({ products }) => {
    const [ list , Products] = products;

  return (
    <Container>
      <Row>
        {list.map((product) => (
          <PCardLeftSmall key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductsGridRow;
