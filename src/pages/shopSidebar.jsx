import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import CL from '../shopPages/computerLaptop';
import MT from '../shopPages/mobileTable';
import PH from '../shopPages/photography';
import TV from '../shopPages/television';
import ShopHome from '../shopPages/shopHome';
import Desktops from '../shopPages/computers_Laptops/desktops';
import Mac from '../shopPages/computers_Laptops/mac';
import CLHardware from '../shopPages/computers_Laptops/CLHardware';
import CLAccess from '../shopPages/computers_Laptops/CLAccessories';
import Ipads from '../shopPages/mobile-tablet/ipads';
import Tablets from '../shopPages/mobile-tablet/tablets';
import MTAccess from '../shopPages/mobile-tablet/MTAccessories';
import mobilebanner from '../images/shop-banners/mobile banner.jpg';
import ShopLayout from '../components/ShopLayout';
import Products from '../components/Products';


function ShopWithSidebar() {
  function filterProductsByCategory(products, category, subcategory) {
    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase() &&
      (!subcategory || product.subcategory.toLowerCase() === subcategory.toLowerCase())
    );
  }
  

  const mobileProducts = filterProductsByCategory(Products, 'mobile-tablet', 'mobile-phones');
  const laptopProducts = filterProductsByCategory(Products, 'computer-laptop' ,'laptops');
  const headphonesProducts = filterProductsByCategory(Products, 'mobile-tablet' , 'headphones');
  const televisionProducts = filterProductsByCategory(Products,'television' , 'tvs');
  
  const LaptopProps = {
    bannerImage: mobilebanner,
    title: 'Laptops Section',
    description: 'Explore our range of laptops',
    products: laptopProducts
  };

  const MobileProps = {
    bannerImage: mobilebanner,
    title: 'Mobile Phones Section',
    description: 'Explore our range of mobile phones',
    products: mobileProducts
  };

  const TelevisonProps = {
    bannerImage: mobilebanner,
    title: 'Mobile Phones Section',
    description: 'Explore our range of televisons',
    products: televisionProducts
  };

  const HeadphoneProps = {
    bannerImage: mobilebanner,
    title: 'Headphones Section',
    description: 'Explore our range of headphones',
    products: headphonesProducts
  };

  console.log('Mobile Products:', mobileProducts);
  console.log('Laptop Products:', laptopProducts);
  console.log('Television Products:', televisionProducts);
  console.log('Headphones Products:', headphonesProducts);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
        <div className='shop-layout' style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<ShopHome />} />
            <Route path="computer-laptop" element={<CL/>}/>
            <Route path="/computer-laptop/desktops" element={<Desktops />} />
            <Route path="/computer-laptop/laptops" element={<ShopLayout  {...LaptopProps}/>} />
            <Route path="/computer-laptop/mac" element={<Mac />} />
            <Route path="/computer-laptop/hardware" element={<CLHardware />} />
            <Route path="/computer-laptop/accessories" element={<CLAccess />} />
            <Route path="mobile-tablet" element={<MT />} />
            <Route path="/mobile-tablet/mobile-phones" element={<ShopLayout {...MobileProps} />} />
            <Route path="/mobile-tablet/ipads" element={<Ipads />} />
            <Route path="/mobile-tablet/tablets" element={<Tablets />} />
            <Route path="/mobile-tablet/headphones" element={<ShopLayout  {...HeadphoneProps}/>}  />
            <Route path="/mobile-tablet/accessories" element={<MTAccess />} />
            <Route path="photography" element={<PH />} />
            <Route path="television" element={<TV />} />
            <Route path="/television/tvs" element={<ShopLayout {...TelevisonProps} />} />

  
          </Routes>

        </div>
    </div>
  );
}

export default ShopWithSidebar;
