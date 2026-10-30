export const siteConfig = {
  name: 'KYRA PACIFIC GREEN',
  url: 'https://kyrapacificgreen.com',
  ogImage: '/branding/kyra-logo.png',
  description:
    "Powering PNG's Next Era of Solar. Discover smarter solar energy solutions for homes, businesses and industries across Papua New Guinea with KYRA Pacific Green.",
  copyright: '© 2026 KYRA Pacific Green. All rights reserved.',
  
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Partnerships', path: '/partnerships' },
    { label: 'Contact', path: '/contact' },
  ],

  footerSolutions: [
    { label: 'Residential Energy', path: '/solutions#residential' },
    { label: 'Commercial Energy', path: '/solutions#commercial' },
    { label: 'Industrial Energy', path: '/solutions#industrial' },
    { label: 'On-Grid Solar', path: '/solutions#on-grid' },
    { label: 'Off-Grid Solar', path: '/solutions#off-grid' },
    { label: 'Hybrid Solar', path: '/solutions#hybrid' },
    { label: 'Backup Power', path: '/solutions#backup' },
    { label: 'Solar Consultancy', path: '/solutions#consultancy' },
  ],

  footerProducts: [
    { label: 'Foldable Solar Systems', path: '/products#foldable-solar-systems' },
    { label: 'Solar Inverters', path: '/products#solar-inverters' },
    { label: 'Battery Energy Storage (BESS)', path: '/products#battery-storage' },
    { label: 'Solar Panels', path: '/products#solar-panels' },
    { label: 'Complete Solar Systems', path: '/products#complete-solar-systems' },
    { label: 'All-in-One ESS Units', path: '/products#all-in-one-ess' },
  ],
} as const;

