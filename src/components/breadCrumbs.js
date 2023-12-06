// import { Link, useLocation } from "react-router-dom";

// const breadcrumbNameMap = {
//   '/': 'Home',
//   '/shop': 'Shop',
//   '/about': 'About',
//   '/compare': 'Compare',
//   '/wishlist': 'Wishlist',
//   '/contact-us': 'Contact',
//   '/my-account': 'Account',
//   '/cart': 'Cart',
//   '/order': 'Checkout',
//   '/order-history': 'Order History',
//   '/address': 'New Address',
//   '/shop/computer-laptop': 'Computers & Laptops',
//   '/shop/mobile-tablet': 'Mobiles & Tablets',
//   '/shop/photography': 'Photography',
//   '/shop/television': 'Television',
// };

// function Breadcrumbs() {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   return (
//     <div className="breadCrumbs">
//       <ul>
//         <li key="home">
//           <Link to="/">Home</Link>
//         </li>
//         {pathnames.map((name, index) => {
//           const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//           const isLast = index === pathnames.length - 1;
//           return isLast ? (
//             <li key={name}>{breadcrumbNameMap[routeTo]}</li>
//           ) : (
//             <li key={name}>
//               <Link to={routeTo}>{breadcrumbNameMap[routeTo]}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Breadcrumbs;

import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    ...pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;
      return isLast ? { name, path: null } : { name, path: routeTo };
    }),
  ];
  if (location.pathname === '/') {
    return null; // Don't render the component if the path is '/'
  }

  return (
    <div className='breadCrumbs'>
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <span key={breadcrumb.name}>
            {index !== 0 && ' / '}
            {isLast ? (
              <span>{breadcrumb.name}</span>
            ) : breadcrumb.path ? (
              <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
            ) : (
              <span>{breadcrumb.name}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

