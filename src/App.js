import './App.css';
import { Routes, Route   } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Compare from './pages/compare';
import Wishlist from './pages/wishlist';
import Contact from './pages/contact'
import MyAccount from './pages/account';
import Cart from './pages/cart';
import ShopWithSidebar from './pages/shopSidebar';
import Checkout from './pages/checkout';
import Orderhistory from './pages/orderHistory';
import NewAddress from './pages/newAddress';
import PageNotFound from './pages/notFound';
import ProductDetailLayout from './components/productDetails';
import Breadcrumbs from './components/breadCrumbs';
import Products from './components/Products';
import Footer from './components/Footer';
function App() {

  return (
    <div className="App">
      <Header/>
      {/* <div className='navigation-wrapper'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/compare">Compare</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/my-account">Account</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/order">Checkout</Link>
            </li>
            <li>
              <Link to="/order-history">Order-History</Link>
            </li>
            <li>
              <Link to="/address">New-Address</Link>
            </li>
          </ul>  
        </nav>
        <div className='discount'> 
            <span style={{fontSize:'30px' , padding:'0px 2px', display:'flex', alignContent:'center'}}><BiSolidDiscount/></span>  Get 30% Off On Selected Items
          </div>
      </div> */}
        <Breadcrumbs/>
        <Routes>
          <Route path="/" element={<Home prop1={Products} />} />

          <Route path="/shop/*" element={<ShopWithSidebar />} />
          <Route path="/shop/:category/:subcategory/:id" element={<ProductDetailLayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path='/my-account' element={<MyAccount/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Checkout/>}/>
          <Route path='/order-history' element={<Orderhistory/>}/>
          <Route path='/address' element={<NewAddress/>}/>
          <Route path='/*' element={<PageNotFound/>}/>

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
