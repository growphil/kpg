export interface Product {
  id: string;
  name: string;
  category: 'Foldable Solar Systems' | 'Solar Inverters' | 'Battery Energy Storage' | 'Solar Panels' | 'Complete Solar Systems' | 'All-in-One ESS';
  shortDescription: string;
  fullDescription: string;
  primaryImage: string;
  galleryImages: string[];
  keyFeatures: string[];
  applications: string[];
  isFeatured?: boolean;
  specificationsNotice?: string;
}

export const productsData: Product[] = [
  {
    id: 'solar-inverters',
    name: 'KYRA Solar Inverter Series',
    category: 'Solar Inverters',
    shortDescription: 'Discover inverter models with different capacities and technical specifications for a range of solar applications.',
    fullDescription: 'Our solar inverters are designed to deliver reliable power conversion with advanced system intelligence, pure sine-wave output, and compatibility across on-grid, off-grid, and hybrid installations in Papua New Guinea.',
    primaryImage: '/images/our products/KYRA Solar Inverter Series.webp',
    galleryImages: [
      '/images/our products/KYRA Solar Inverter Series.webp',
      '/images/products/inverter-showcase.png',
      '/images/products/inverter-exploded.png',
      '/images/products/inverter-unit.png',
    ],
    keyFeatures: [
      'Advanced digital MPPT tracking algorithms',
      'Engineered for tropical high-ambient temperature stability',
      'Comprehensive overload, short circuit, and surge protection',
      'Clean LED / LCD status interface and remote monitoring readiness',
      'Seamless synchronization with battery energy storage systems',
    ],
    applications: [
      'Residential rooftop solar setups',
      'Commercial office buildings and retail outlets',
      'Rural schools, health clinics, and government centres',
      'Industrial backup and hybrid microgrid operations',
    ],
    isFeatured: true,
    specificationsNotice: 'Exact rated wattages, voltage windows, and model sheets are provided on request based on project requirements.',
  },
  {
    id: 'battery-energy-storage',
    name: 'KYRA Battery Energy Storage (BESS)',
    category: 'Battery Energy Storage',
    shortDescription: 'Explore battery storage options, available capacities and technical specifications.',
    fullDescription: 'Energy storage solutions engineered to keep critical operations running smoothly during grid disruptions and store surplus daytime solar generation for evening and nighttime use.',
    primaryImage: '/images/our products/KYRA Battery Energy Storage (BESS).webp',
    galleryImages: [
      '/images/our products/KYRA Battery Energy Storage (BESS).webp',
      '/images/products/inverter-exploded.png',
      '/images/products/inverter-showcase.png',
    ],
    keyFeatures: [
      'High-cycle lithium chemistry readiness',
      'Integrated Battery Management System (BMS) for thermal and cell safety',
      'Modular rack and wall-mount installation architectures',
      'Compatible with hybrid solar inverters and backup transfer systems',
    ],
    applications: [
      'Residential nighttime load powering',
      'Commercial uninterrupted operations',
      'Off-grid remote site electrification',
      'Essential telecommunications and server backup',
    ],
    isFeatured: true,
    specificationsNotice: 'Nominal kWh capacities and voltage configurations vary by system size. Request full engineering datasheets.',
  },
  {
    id: 'foldable-solar-systems',
    name: 'Foldable Solar Systems',
    category: 'Foldable Solar Systems',
    shortDescription: 'Explore foldable solar products designed for convenient transport, deployment and suitable solar applications.',
    fullDescription: 'Portable, rugged foldable solar arrays built for mobility and rapid energy access in remote areas, field expeditions, temporary clinics, and mobile energy workstations across Papua New Guinea.',
    primaryImage: '/images/our products/Foldable Solar Panel Systems.webp',
    galleryImages: [
      '/images/our products/Foldable Solar Panel Systems.webp',
      '/images/solutions/agriculture-solar.png',
      '/images/hero/hero-pacific-valley.png',
    ],
    keyFeatures: [
      'Lightweight, durable protective fabric enclosure',
      'High-conversion monocrystalline solar cells',
      'Integrated kickstands for optimal solar angle alignment',
      'Plug-and-play connection leads for battery banks and portable power stations',
    ],
    applications: [
      'Remote field missions and community outreach',
      'Emergency humanitarian and disaster response kits',
      'Mobile power for field communications and research',
      'Eco-tourism and outdoor camping installations',
    ],
    isFeatured: true,
    specificationsNotice: 'Folded dimensions, unfolded wattage ratings, and connector types available upon enquiry.',
  },
  {
    id: 'solar-panels',
    name: 'High-Performance Solar Panels',
    category: 'Solar Panels',
    shortDescription: 'Browse solar panel models and compare their available specifications for different installation requirements.',
    fullDescription: 'Durable, high-efficiency photovoltaic panels constructed with anti-reflective tempered glass and corrosion-resistant aluminium frames to withstand coastal humidity, heavy rainfall, and intense tropical sunlight.',
    primaryImage: '/images/our products/High-Performance Solar Panels.webp',
    galleryImages: [
      '/images/our products/High-Performance Solar Panels.webp',
      '/images/hero/hero-pacific-valley.png',
      '/images/about/about-solar-landscape.png',
    ],
    keyFeatures: [
      'High-efficiency monocrystalline cell architecture',
      'Robust frame designed for strong tropical wind loads',
      'IP68 rated junction boxes with bypass diodes',
      'Low degradation rate under elevated ambient temperatures',
    ],
    applications: [
      'Residential rooftop solar arrays',
      'Commercial warehouse and industrial facility roofs',
      'Ground-mount rural utility installations',
      'Off-grid agricultural pump stations',
    ],
    isFeatured: true,
    specificationsNotice: 'Specific panel wattage ratings, module dimensions, and mechanical specifications available on request.',
  },
  {
    id: 'complete-solar-systems',
    name: 'Complete Solar Systems',
    category: 'Complete Solar Systems',
    shortDescription: 'Explore available solar system configurations and their included components for different energy requirements.',
    fullDescription: 'Comprehensive bundled solar energy kits pre-engineered with matched photovoltaic panels, solar inverters, safety switchgear, mounting hardware, and optional energy storage.',
    primaryImage: '/images/our products/WHO WE SERVE.webp',
    galleryImages: [
      '/images/our products/WHO WE SERVE.webp',
      '/images/about/about-solar-landscape.png',
      '/images/solutions/commercial-resort.png',
    ],
    keyFeatures: [
      'Harmonized component selection for optimal efficiency',
      'Includes safety isolators, circuit breakers, and cabling guidance',
      'Scalable design allowing future expansion',
      'Streamlined planning for homeowners and installation contractors',
    ],
    applications: [
      'Turnkey residential energy independence',
      'Commercial office energy offset packages',
      'Off-grid remote facility power kits',
      'School and health post electrification',
    ],
    isFeatured: true,
    specificationsNotice: 'Complete bill of materials and component ratings are customized to site requirements.',
  },
  {
    id: 'all-in-one-ess',
    name: 'All-in-One ESS Solar Power Bank',
    category: 'All-in-One ESS',
    shortDescription: 'Integrated solar energy storage and inverter unit pending technical release in the active catalogue.',
    fullDescription: 'An all-in-one Energy Storage System (ESS) combining solar charging, battery storage, and AC output into a single compact housing for seamless plug-and-play energy reliability.',
    primaryImage: '/images/our products/Foldable Solar Panel Systems.webp',
    galleryImages: [
      '/images/our products/Foldable Solar Panel Systems.webp',
      '/images/products/inverter-unit.png',
      '/images/products/inverter-showcase.png',
    ],
    keyFeatures: [
      'Unified enclosure with zero complex external wiring',
      'Integrated inverter and lithium storage cells',
      'Multiple AC and DC output interfaces',
      'Compact footprint suitable for indoor residential or office placement',
    ],
    applications: [
      'Instant home emergency backup power',
      'Retail point-of-sale and refrigeration protection',
      'Mobile power for off-grid operations',
    ],
    isFeatured: false,
    specificationsNotice: 'Provisional product entry featured in company promotional assets. Official catalogue datasheet pending verification.',
  },
];
