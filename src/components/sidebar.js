// import React, { useEffect, useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import SidebarItems from './shopSidebarItems';

// const Sidebar = () => {
//   const location = useLocation();
//   const lastActiveIndexString = localStorage.getItem('lastActiveIndex');
//   const lastActiveIndex = Number(lastActiveIndexString);
//   const [activeIndex, setActiveIndex] = useState(lastActiveIndex || 0);

//   function changeActiveIndex(newIndex) {
//     localStorage.setItem('lastActiveIndex', newIndex);
//     setActiveIndex(newIndex);
//   }

//   function getPath(path) {
//     if (path.charAt(0) !== '/') {
//       return '/' + path;
//     }
//     return path;
//   }

//   useEffect(() => {
//     const activeItem = SidebarItems.findIndex(
//       (item) =>
//         getPath(item.route) === getPath(location.pathname) ||
//         (item.nestedRoutes &&
//           item.nestedRoutes.findIndex((nestedItem) => getPath(`${item.route}${nestedItem.route}`) === getPath(location.pathname)) !== -1)
//     );
//     changeActiveIndex(activeItem);
//   }, [location]);

//   return (
//     <div style={{ background: '#db0d15', position: 'fixed', width: '240px', height: '100vh' }}>
//       {SidebarItems.map((item, index) => (
//         <div key={item.name}>
//           <NavLink
//             to={item.route}
//             style={{
//               textDecoration: 'none',
//             }}
//           >
//             <div
//               style={{
//                 padding: '16px 24px',
//                 transition: 'all 0.25s ease-in-out',
//                 background: index === activeIndex ? 'black' : '',
//                 margin: '4px 12px',
//                 borderRadius: '4px',
//                 color: 'white',
//                 fontWeight: 'bold',
//               }}
//             >
//               {item.name}
//             </div>
//           </NavLink>
//           {item.nestedRoutes && (
//             <div style={{ marginLeft: '20px' }}>
//               {item.nestedRoutes.map((nestedItem) => (
//                 <NavLink
//                   to={`${item.route}${nestedItem.route}`}
//                   key={nestedItem.name}
//                   style={{
//                     textDecoration: 'none',
//                     color: 'white',
//                     fontWeight: getPath(`${item.route}${nestedItem.route}`) === getPath(location.pathname) ? 'bold' : 'normal',
//                   }}
//                 >
//                   <div style={{ padding: '8px 24px', fontWeight: 'bold' }}>{nestedItem.name}</div>
//                 </NavLink>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       <div className="behind-the-scenes" style={{ width: '240px' }} />
//     </div>
//   );
// };

// export default Sidebar;

import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarItems from './shopSidebarItems';

const Sidebar = () => {
  const location = useLocation();
  const lastActiveIndexString = localStorage.getItem('lastActiveIndex');
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || 0);
  const [expandedCategories, setExpandedCategories] = useState({});

  function changeActiveIndex(newIndex) {
    localStorage.setItem('lastActiveIndex', newIndex);
    setActiveIndex(newIndex);
  }

  function toggleCategory(category) {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  }

  function getPath(path) {
    if (path.charAt(0) !== '/') {
      return '/' + path;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(
      (item) =>
        getPath(item.route) === getPath(location.pathname) ||
        (item.nestedRoutes &&
          item.nestedRoutes.findIndex(
            (nestedItem) => getPath(`${item.route}${nestedItem.route}`) === getPath(location.pathname)
          ) !== -1)
    );
    changeActiveIndex(activeItem);

    const initialExpandedCategories = {};
    SidebarItems.forEach((item) => {
      if (item.nestedRoutes && location.pathname.includes(item.route)) {
        initialExpandedCategories[item.name] = true;
      }
    });
    setExpandedCategories(initialExpandedCategories);
  }, [location]);

  return (
    <div style={{ background: '#db0d15', position: 'sticky', top: 0, width: '240px', height: '100vh' }}>
      {SidebarItems.map((item, index) => (
        <div key={item.name}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 24px',
              transition: 'all 0.25s ease-in-out',
              background: index === activeIndex ? 'black' : '',
              margin: '4px 12px',
              borderRadius: '4px',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => changeActiveIndex(index)}
          >
            <NavLink
              to={item.route}
              style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              onClick={() => changeActiveIndex(index)}
            >
              {item.name}
            </NavLink>
            {item.nestedRoutes && (
              <div
                onClick={() => toggleCategory(item.name)}
                style={{ fontSize: '1.2em', cursor: 'pointer' }}
              >
                {expandedCategories[item.name] ? '-' : '+'}
              </div>
            )}
          </div>
          {item.nestedRoutes && expandedCategories[item.name] && (
            <div style={{ marginLeft: '20px' }}>
              {item.nestedRoutes.map((nestedItem) => (
                <NavLink
                  to={`${item.route}${nestedItem.route}`}
                  key={nestedItem.name}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight:
                      getPath(`${item.route}${nestedItem.route}`) === getPath(location.pathname)
                        ? 'bold'
                        : 'normal',
                    display: 'block',
                    padding: '8px 24px',
                  }}
                  activeStyle={{ fontWeight: 'bold' }}
                >
                  {nestedItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="behind-the-scenes" style={{ width: '240px' }} />
    </div>
  );
};

export default Sidebar;
