const SidebarItems = [
  {
    name: 'Shop Home',
    route: '/shop',
  },
  {
    name: 'Computers & Laptops',
    route: '/shop/computer-laptop',
    nestedRoutes: [
      { name: 'Desktops', route: '/desktops' },
      { name: 'Laptops', route: '/laptops' },
      { name: 'Monitors', route: '/monitors' },
      { name: 'Printers', route: '/printers' },
      { name: 'Data Storage', route: '/data-storage' },
      { name: 'Accessories', route: '/accessories' },
    ],
  },
  {
    name: 'Mobiles &  Tablets',
    route: '/shop/mobile-tablet',
    nestedRoutes: [
      { name: 'Mobile Phones', route: '/mobile-phones' },
      { name: 'Tablets', route: '/tablets' },
      { name: 'Ipads', route: '/ipads' },
      { name: 'Headphones', route: '/headphones' },
      { name: 'Wearable Technology', route: '/wearables' },
      { name: 'Accessories', route: '/accessories' },
    ],
  },
  {
    name: 'Cameras',
    route: '/shop/cameras',
    nestedRoutes: [
      { name: 'DSLR', route: '/dslr' },
      { name: 'Mirror less', route: '/mirror-less' },
      { name: 'Point and Shoot', route: '/point-and-shoot' },
      { name: 'Drones', route: '/drones' },
      { name: 'Lenses', route: '/lenses' },
      { name: 'Accessories', route: '/accessories' },
    ],
  },
  {
    name: 'Television',
    route: '/shop/television',
    nestedRoutes: [
      { name: 'Smart Televisions', route: '/smart-televisions' },
      { name: 'Home Theater Systems', route: '/home-theater-systems' },
      { name: 'Speakers', route: '/speakers' },
      { name: 'DTH Set Top Box', route: '/dth' },
      { name: 'Projectors', route: '/projectors' },
    ],
  },
];

export default SidebarItems;
