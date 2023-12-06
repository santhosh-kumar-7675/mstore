import { Container, Row, Col } from 'react-bootstrap';
import PCardTop from './PcardTop';
import PCardLarge from './PcardLarge';

const ProductsGrid = ({ products }) => {
  const [largeCardProduct, ProductsList] = products;

  return (
    <Container>
      <Row>
        <Col lg={4} md={12} sm={12} xs={12} >
          <PCardLarge product={largeCardProduct} />
        </Col>
        <Col lg={8} md={12} sm={12} xs={12} >
          <Row>
            {ProductsList.map((product) => (
              <PCardTop key={product.id} product={product} lgValue={3} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsGrid;
