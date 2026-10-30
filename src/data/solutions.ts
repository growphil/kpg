export interface Solution {
  id: string;
  title: string;
  category: 'Scale' | 'Grid Connection' | 'Specialized';
  shortDescription: string;
  detailedDescription: string;
  image: string;
  potentialApplications: string[];
  relevantProducts: string[];
  keyBenefits: string[];
  ctaText: string;
}

export const solutionsData: Solution[] = [
  {
    id: 'residential',
    title: 'Residential Energy Solutions',
    category: 'Scale',
    shortDescription: 'Explore energy solutions designed around everyday household electricity needs and energy reliability.',
    detailedDescription: 'From urban homes looking to manage high utility bills to properties in provincial centres seeking consistent power for appliances, lighting, and refrigeration, our residential solar options are tailored to practical household routines.',
    image: '/images/Home page images/Residential Energy Solutions.webp',
    potentialApplications: [
      'Single-family homes and residential compounds',
      'Urban residences with intermittent utility supply',
      'Suburban and provincial housing estates',
      'Rural family properties needing baseline electricity',
    ],
    relevantProducts: ['Complete Solar Systems', 'Solar Inverters', 'Battery Energy Storage'],
    keyBenefits: [
      'Tailored to domestic electricity consumption patterns',
      'Option for energy storage during evening hours',
      'Quiet, clean alternative to diesel generators',
      'Scalable design to match growing home needs',
    ],
    ctaText: 'Explore Residential Solutions',
  },
  {
    id: 'commercial',
    title: 'Commercial Energy Solutions',
    category: 'Scale',
    shortDescription: 'Find energy solutions suited to shops, offices, hotels, restaurants and other commercial facilities.',
    detailedDescription: 'Commercial operations require reliable power during peak business hours. Solar systems help business operators mitigate rising electricity rates and safeguard commercial operations across PNG.',
    image: '/images/Home page images/Commercial Energy Solutions.webp',
    potentialApplications: [
      'Retail shops, supermarkets, and shopping plazas',
      'Hotels, coastal eco-resorts, and hospitality venues',
      'Corporate offices and business headquarters',
      'Medical clinics and private health practices',
    ],
    relevantProducts: ['Solar Inverters', 'Solar Panels', 'Battery Energy Storage'],
    keyBenefits: [
      'Daytime solar generation aligns with peak commercial operating hours',
      'Supports operational continuity during daytime grid outages',
      'Demonstrates environmental responsibility to clients and stakeholders',
      'Customized system engineering for commercial roof structures',
    ],
    ctaText: 'Explore Commercial Solutions',
  },
  {
    id: 'industrial',
    title: 'Industrial Energy Solutions',
    category: 'Scale',
    shortDescription: 'Discover energy solutions for factories, warehouses and industrial operations with varying power demands.',
    detailedDescription: 'Heavy machinery, warehousing, processing lines, and logistics hubs need robust power configurations that handle heavy inductive loads and optimize energy efficiency at scale.',
    image: '/images/Home page images/Industrial Energy Solution.webp',
    potentialApplications: [
      'Manufacturing facilities and assembly plants',
      'Cold-storage warehouses and distribution centres',
      'Agricultural processing and milling mills',
      'Mining and maritime support facilities',
    ],
    relevantProducts: ['Complete Solar Systems', 'Solar Inverters', 'Battery Energy Storage'],
    keyBenefits: [
      'High-capacity solar arrays engineered for large industrial footprints',
      'Stabilization of critical equipment and three-phase power supplies',
      'Hybrid integration with existing commercial generators',
      'Structured technical planning for inductive starting surges',
    ],
    ctaText: 'Explore Industrial Solutions',
  },
  {
    id: 'on-grid',
    title: 'On-Grid Solar Solutions',
    category: 'Grid Connection',
    shortDescription: 'Explore solar energy systems connected to the electricity grid to support energy needs and potentially reduce grid electricity consumption.',
    detailedDescription: 'Grid-connected systems work in tandem with the local utility network. When solar is generating power during the day, your facility consumes clean solar energy first, drawing from the grid only when required.',
    image: '/images/Home page images/On-Grid Solar Solutions.webp',
    potentialApplications: [
      'Properties in Port Moresby, Lae, and connected urban centres',
      'Commercial facilities operating predominantly during daylight hours',
      'Educational institutions and government offices on the power grid',
    ],
    relevantProducts: ['Solar Inverters', 'Solar Panels'],
    keyBenefits: [
      'Most cost-effective initial capital layout without immediate battery necessity',
      'Seamless automated transition between solar and grid electricity',
      'Minimal maintenance requirements with solid-state grid-tied inverters',
    ],
    ctaText: 'Explore On-Grid Solutions',
  },
  {
    id: 'off-grid',
    title: 'Off-Grid Solar Solutions',
    category: 'Grid Connection',
    shortDescription: 'Discover energy solutions for remote locations and areas without reliable access to grid electricity.',
    detailedDescription: 'Stand-alone solar power systems independent of any electrical grid. Ideal for remote communities, islands, provincial stations, and agricultural outposts across Papua New Guinea.',
    image: '/images/Home page images/Tropical Solar Sunset Sanctuary.webp',
    potentialApplications: [
      'Remote islands and maritime coastal communities',
      'Highland agricultural farms and processing outposts',
      'Rural health posts, schools, and mission stations',
      'Eco-lodges and conservation research bases',
    ],
    relevantProducts: ['Foldable Solar Systems', 'Battery Energy Storage', 'Complete Solar Systems'],
    keyBenefits: [
      'Complete energy independence from grid infrastructure',
      'Dependable 24/7 electricity when paired with energy storage',
      'Eliminates constant reliance on costly fuel transport and diesel generators',
    ],
    ctaText: 'Explore Off-Grid Solutions',
  },
  {
    id: 'hybrid',
    title: 'Hybrid Solar Solutions',
    category: 'Grid Connection',
    shortDescription: 'Explore solar energy systems that combine solar generation with grid or other available power sources and, where configured, energy storage.',
    detailedDescription: 'The ultimate in flexibility and security. Hybrid setups intelligently coordinate solar panels, the public electricity grid, backup diesel generators, and battery banks to ensure uninterrupted power.',
    image: '/images/Home page images/Hybrid Solar Solutions.webp',
    potentialApplications: [
      'Businesses requiring zero downtime during frequent brownouts',
      'Homes wanting both daytime bill reduction and nighttime blackout protection',
      'Mission-critical facilities with multi-source energy needs',
    ],
    relevantProducts: ['Solar Inverters', 'Battery Energy Storage', 'Complete Solar Systems'],
    keyBenefits: [
      'Smart multi-source energy prioritization',
      'Instantaneous switchover during utility interruptions',
      'Maximizes self-consumption of generated solar energy',
    ],
    ctaText: 'Explore Hybrid Solutions',
  },
  {
    id: 'backup',
    title: 'Backup Power Solutions',
    category: 'Specialized',
    shortDescription: 'Explore energy solutions designed to help maintain essential electricity supply during power interruptions.',
    detailedDescription: 'Unpredictable power outages can disrupt businesses and comfort. Our backup power solutions keep lights, internet routers, refrigeration, computers, and medical equipment operational without interruption.',
    image: '/images/Home page images/Backup Power Solutions.webp',
    potentialApplications: [
      'Homes safeguarding food preservation and security lighting',
      'Pharmacies and clinics preserving temperature-sensitive medicines',
      'Offices protecting server hardware and active workstations',
    ],
    relevantProducts: ['Battery Energy Storage', 'Solar Inverters', 'All-in-One ESS'],
    keyBenefits: [
      'Silent, automated operation during grid failure',
      'Zero fumes or hazardous fuel handling indoors',
      'Recharges automatically from solar or utility power when restored',
    ],
    ctaText: 'Explore Backup Solutions',
  },
  {
    id: 'consultancy',
    title: 'Solar Consultancy',
    category: 'Specialized',
    shortDescription: 'Get guidance on solar energy planning, system requirements and suitable solutions for your home or business.',
    detailedDescription: 'Navigating solar decisions can be complex. We assist clients in evaluating site feasibility, calculating realistic energy loads, comparing system topologies, and structuring procurement plans.',
    image: '/images/Home page images/Solar Consultancy.webp',
    potentialApplications: [
      'Commercial property developers planning rooftop arrays',
      'Government agencies drafting renewable community tenders',
      'NGOs and development partners planning rural energy access',
      'Solar installation contractors seeking equipment specification support',
    ],
    relevantProducts: ['Complete Solar Systems', 'Solar Inverters'],
    keyBenefits: [
      'Objective, practical guidance tailored to PNG conditions',
      'Clear evaluation of on-grid, off-grid, and hybrid tradeoffs',
      'Assistance with component sizing and equipment matching',
    ],
    ctaText: 'Discuss Your Requirements',
  },
];

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const sectorsData: SectorItem[] = [
  {
    id: 'residential',
    title: 'Residential Customers',
    description: 'Explore solar energy solutions for homes and residential properties seeking reliable electricity options.',
    ctaText: 'Explore Residential Solutions',
    ctaLink: '/solutions#residential',
  },
  {
    id: 'commercial',
    title: 'Commercial Businesses',
    description: 'Discover energy solutions for shops, offices, hotels, restaurants and other commercial facilities.',
    ctaText: 'Explore Commercial Solutions',
    ctaLink: '/solutions#commercial',
  },
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    description: 'Explore energy solutions for factories, warehouses and industrial operations with varying power requirements.',
    ctaText: 'Explore Industrial Solutions',
    ctaLink: '/solutions#industrial',
  },
  {
    id: 'government',
    title: 'Government Projects',
    description: 'Explore solar energy applications for government buildings, public infrastructure and community development initiatives across Papua New Guinea.',
    ctaText: 'Explore Government Solutions',
    ctaLink: '/contact?type=Government%20%2F%20Institutional%20Project',
  },
  {
    id: 'institutions',
    title: 'Institutions & Organisations',
    description: 'Discover energy solutions for schools, healthcare facilities, community centres and other institutional buildings.',
    ctaText: 'Explore Institutional Solutions',
    ctaLink: '/contact?type=Government%20%2F%20Institutional%20Project',
  },
  {
    id: 'dealers',
    title: 'Solar Dealers & Distributors',
    description: 'Explore potential product supply and business partnership opportunities with KYRA Pacific Green.',
    ctaText: 'Become a Partner',
    ctaLink: '/partnerships',
  },
  {
    id: 'installers',
    title: 'Solar Installers & EPC Companies',
    description: 'Connect with KYRA Pacific Green to discuss product requirements and potential opportunities for solar projects.',
    ctaText: 'Discuss Partnership',
    ctaLink: '/partnerships',
  },
];
