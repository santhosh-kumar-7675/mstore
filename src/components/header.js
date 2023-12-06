import React, { useState , useEffect , useMemo , useRef  } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';
import { FaBalanceScale } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { BiSolidDiscount } from 'react-icons/bi';                                                                                                  
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { LiaSearchSolid , LiaMapMarkedAltSolid} from 'react-icons/lia'; 
import {AiOutlineUser , AiOutlineShoppingCart} from 'react-icons/ai'; 
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import logo from '../images/logo.jpg';

const Header = () => {
    const placeholderWords = useMemo(() => ['Search', 'entire', 'store', 'here ...'], []);
    const [displayedWords, setDisplayedWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedWords((prevWords) => {
                if (prevWords.length === placeholderWords.length) {
                    return [];
                } else {
                    const newIndex = prevWords.length;
                    return [...prevWords, placeholderWords[newIndex]];
                }
            });
            setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholderWords.length);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, placeholderWords]);
  
    const placeholderText = displayedWords.join(' ');
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
    const [showShopDropdown, setShowShopDropdown] = useState(false);
    const [showProductDropdown, setShowProductDropdown] = useState(false);
   
    const toggleLanguageDropdown = () => {
        setShowLanguageDropdown(!showLanguageDropdown);
    };

    const toggleCurrencyDropdown = () => {
        setShowCurrencyDropdown(!showCurrencyDropdown);
    };

    const handleLanguageSelect = (language) => {
        console.log(`Selected language: ${language}`);
        setShowLanguageDropdown(false); 
    };
    const handleCurrencySelect = (currency) => {
        console.log(`Selected currency: ${currency}`);
        setShowCurrencyDropdown(false); 
    };

    const toggleShopDropdown = () => {
        setShowShopDropdown(!showShopDropdown);
    };
    const toggleProductDropdown = () => {
        setShowProductDropdown(!showProductDropdown);
    };


    const languageDropdownRef = useRef(null);
    const currencyDropdownRef = useRef(null);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            const isOutsideLanguageDropdown = languageDropdownRef.current && !languageDropdownRef.current.contains(event.target);
            const isOutsideCurrencyDropdown = currencyDropdownRef.current && !currencyDropdownRef.current.contains(event.target);

            if (isOutsideLanguageDropdown) {
                setShowLanguageDropdown(false);
            }

            if (isOutsideCurrencyDropdown) {
                setShowCurrencyDropdown(false);
            }
        };

        window.addEventListener('mousedown', handleDocumentClick);

        return () => {
            window.removeEventListener('mousedown', handleDocumentClick);
        };
    }, [showLanguageDropdown, showCurrencyDropdown]);

    const closeShopDropdown = () => {
        setShowShopDropdown(false);
    };
   
    const languages = ['English', 'Spanish', 'French']; 

    return (
        <>
        <div className="header-container">
            <div className='nav-wrapper'>
                <div className='left-nav'>
                    <ul className="list-unstyled">
                        <li><BsTelephone/> Phone</li>
                        <li><HiOutlineMail/> Email</li>
                    </ul>
                </div>
                <div className='right-nav'>
                    <ul className="list-unstyled">
            
                        <li> 
                            <a href='#' style={{ textDecoration: 'none', color: 'inherit' }} >
                                <LiaMapMarkedAltSolid/>Store Location</a>
                        </li>
                        <li> 
                            <a href='#' style={{ textDecoration: 'none', color: 'inherit' }} >
                                <FaTruckFast/>Track your order</a>
                        </li>
                        <li>
                            <Link to="/compare" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <FaBalanceScale/> My compare</Link>
                        </li>
                        <li> 
                            <Link to="/wishlist" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <FiHeart/> My wishlist</Link>
                        </li>
                        
                        <li className="dropdown-button" onClick={toggleLanguageDropdown}>
                            Language  <IoIosArrowDown style={{ verticalAlign: 'middle' }} />
                        </li>
                        <li className="dropdown-button" onClick={toggleCurrencyDropdown}>
                            Currency  <IoIosArrowDown style={{ verticalAlign: 'middle' }} />
                        </li>
                    </ul>
                </div>
            </div>
            {showLanguageDropdown && (
                <ul className="language-dropdown-content" ref={languageDropdownRef}>
                    {languages.map((language, index) => (
                        <li key={index} onClick={() => handleLanguageSelect(language)}>{language}</li>
                    ))}
                </ul>
            )}
            {showCurrencyDropdown && (
                <ul className="currency-dropdown-content"  ref={currencyDropdownRef}>
                    <li onClick={() => handleCurrencySelect("USD")}>USD</li>
                    <li onClick={() => handleCurrencySelect("EUR")}>EUR</li>
                    <li onClick={() => handleCurrencySelect("GBP")}>GBP</li>
                </ul>
            )}
        </div>
        <div className='navBar-wrapper py-4'>
                <Container>
                    <Row>
                        <Col className='col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6'>
                            <div className='searchImg'>
                                <Link to='/'><img src={logo}/></Link>
                            </div>
                        </Col>
                        <Col className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                            <div className="search-container">
                                <div className="search-bar">
                                    <div className="search-icon">
                                        <LiaSearchSolid/>
                                    </div>
                                    <div className="search-input">
                                        <input type="text" placeholder={placeholderText} />
                                    </div>
                                    <div className="search-button">
                                        <button>Search</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6'>
                        <div className='navModalContainer'>
                            <Link path='/my-account' style={{ textDecoration: 'none', color: 'inherit' }} >
                                <div className='navModalButtons'>
                                    <div className='navIcon'>
                                        <AiOutlineUser/>
                                    </div>      
                                    <div className='navModalText'>
                                        <p>Account</p>
                                        <p>Username</p>
                                    </div>
                                </div>
                            </Link>
                            <div className='navModalButtons'>
                                <Link to="/cart"  style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className='navIcon'>
                                        <AiOutlineShoppingCart/>
                                        <span className='badge'>3</span>

                                    </div>   
                                </Link>  
                                <div className='navModalText'>
                                    <p>Cart</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </div>

        
                        </Col>
                    </Row>
                </Container>
        </div>
        <Container>
            <div  className='menubar-wrapper'>
                <div className='menuBar-left'>
                    <Link to='/'>Home</Link>
                    <Link to='/shop' onMouseEnter={toggleShopDropdown} onMouseLeave={() => setShowShopDropdown(false)}>Shop</Link>
                    <Link to='/product' onMouseEnter={toggleProductDropdown} onMouseLeave={() => setShowProductDropdown(false)}>Product</Link>

                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact-us'>Contact</Link>
                </div>
                <div className='menuBar-right'>
                    <Link to='/'><BiSolidDiscount  style={{fontSize:'30px'}}/> Get 30% Off On Selected Items</Link>
                </div>
            </div>
            {showShopDropdown && (
  <div
    className="dropdown-content"
    onMouseEnter={() => setShowShopDropdown(true)}
    onMouseLeave={() => setShowShopDropdown(false)}
  >
    <div className="dropdown-container">
      <Container>
        <Row>
            <Col lg={3}>
                <ul>
                    <li onClick={closeShopDropdown}><Link to="/shop/computer-laptop">Computers & Laptops</Link></li>
                    <li onClick={closeShopDropdown}><Link to="/shop/computer-laptop/laptops">Laptops</Link></li>
                    <li onClick={closeShopDropdown}><Link to="/shop/computer-laptop/desktops">Desktops</Link></li>
                    <li onClick={closeShopDropdown}><Link to="/shop/computer-laptop/monitors">Monitors</Link></li>
                    <li onClick={closeShopDropdown}><Link to="/shop/computer-laptop/printers">Printers</Link></li>
                    <li onClick={closeShopDropdown}><Link to="/shop/computer-laptop/data-storage">Data Storage</Link></li>
                    <li onClick={closeShopDropdown}><Link to="/shop/computer-laptop/accessories">Accessories</Link></li>
                </ul>
            </Col>
            <Col lg={3}>
                <ul>
                    <li onClick={closeShopDropdown}><Link to="shop/mobile-tablet">Mobiles & Tablets</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/mobile-tablet/mobile-phones">Mobile Phones</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/mobile-tablet/tablets">Tablets</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/mobile-tablet/ipads">Ipads</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/mobile-tablet/headphones">Headphones</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/mobile-tablet/wearables">Wearable Technology</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/mobile-tablet/accessories">Accessories</Link></li>
                </ul>
            </Col>
            <Col lg={3}>
                <ul>
                    <li onClick={closeShopDropdown}><Link to="shop/cameras">Cameras</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/cameras/dslr">DSLR</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/cameras  /mirror-less">Mirror less</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/cameras/point-and-shoot">Point and Shoot</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/cameras/drones">Drones</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/cameras/lenses">Lenses</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/cameras/accessories">Accessories</Link></li>
                </ul>
            </Col>
            <Col lg={3}>
                <ul>
                    <li onClick={closeShopDropdown}><Link to="shop/television">Television</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/television/smart-televisions">Smart Televisions</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/television/home-theater-systems">Home Theater Systems</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/television/speakers">Speakers</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/television/dth">DTH Set Top Box</Link></li>
                    <li onClick={closeShopDropdown}><Link to="shop/television/projectors">Projectors</Link></li>
                </ul>
            </Col>

        </Row>       
      </Container>
    </div>
  </div>
)}

{showProductDropdown && (
  <div
    className="dropdown-content"
    onMouseEnter={() => setShowProductDropdown(true)}
    onMouseLeave={() => setShowProductDropdown(false)}
  >
    <div className="dropdown-container">
      <p>asssssss</p>
      <p>asssssssssda</p>
      <p>asfa</p>
    </div>
  </div>
)}
        </Container>
        </>

    );
};

export default Header;
