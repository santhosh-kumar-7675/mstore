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
    return null; 
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

