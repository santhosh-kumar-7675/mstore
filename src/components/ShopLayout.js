import { Container, Row , Tab, Tabs } from 'react-bootstrap';
import PCardTop from '../components/PcardTop';
import PCardTopLarge from '../components/PcartTopLarge';
import { BiGridVertical , BiSolidGrid } from "react-icons/bi";
import { TfiLayoutListThumb } from "react-icons/tfi";
import PCardDetail from '../components/PcardDetail';
import { Link   } from 'react-router-dom';
const ShopLayout = ({ bannerImage, title, description, products }) => {
    return (
      <div className='shop-layout px-2' style={{ flex: 1 }}>
        <div className='shop-banner'>
          <div className='shop-banner-image-div' >
            <img src={bannerImage} alt='Shop Banner' className="img-fluid" />
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        <div>
          <Container className='shop-tab-wrapper'>
           <Tabs defaultActiveKey="tab1" id="tabs-example">
            <Tab eventKey="tab1" title={<p><BiGridVertical/></p>}>
              <Container>
                <Row>
                  {products.map((product) => (
                    // <Link to={`/products/${product.id}`} key={product.id}>
                      <PCardTopLarge product={product} />
                    // </Link>
                  ))}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="tab2" title={<p><BiSolidGrid/></p>}>
              <Container>
                <Row>
                  {products.map((product) => (
                    <PCardTop key={product.id} product={product} lgValue={4} />
                  ))}
                </Row>
              </Container>
            </Tab>

            <Tab eventKey="tab3" title={
              <p style={{position:'relative' , marginRight:'12px'}}><BiGridVertical/>
              <BiGridVertical style={{position:"absolute" , bottom:'2px' , left:'13px'}}/></p>}>
                <Container>
                <Row>
                  {products.map((product) => (
                    <PCardTop key={product.id} product={product} lgValue={3} />
                  ))}
                </Row>
              </Container>
            </Tab>

            <Tab eventKey="tab4" title={<p><TfiLayoutListThumb/></p>}>
              <Container>
                  <Row>
                    {products.map((product) => (
                      <PCardDetail key={product.id} product={product} />
                    ))}
                  </Row>
                </Container>
            </Tab>
          </Tabs>
          </Container>

          
        </div>
      </div>
    );
  };
  
  export default ShopLayout;
  