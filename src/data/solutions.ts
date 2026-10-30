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
  tag: string;
  iconName: string;
  badgeStyle: {
    bg: string;
    text: string;
    border: string;
    hoverBg: string;
  };
  description: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
  isPartner?: boolean;
}

export const sectorsData: SectorItem[] = [
  {
    id: 'residential',
    title: 'Residential Customers',
    tag: 'Homes & Estates',
    iconName: 'Home',
    badgeStyle: {
      bg: 'bg-emerald-50',
      text: 'text-[#159A2E]',
      border: 'border-emerald-200/80',
      hoverBg: 'group-hover:bg-[#159A2E] group-hover:text-white',
    },
    description: 'Explore solar energy solutions for homes and residential properties seeking reliable electricity and protection against power cuts.',
    highlights: ['Rooftop solar & battery storage', 'Backup power for essential home appliances'],
    ctaText: 'Explore Residential Solutions',
    ctaLink: '/solutions#residential',
  },
  {
    id: 'commercial',
    title: 'Commercial Businesses',
    tag: 'Retail & Office',
    iconName: 'Building2',
    badgeStyle: {
      bg: 'bg-sky-50',
      text: 'text-[#0874C9]',
      border: 'border-sky-200/80',
      hoverBg: 'group-hover:bg-[#0874C9] group-hover:text-white',
    },
    description: 'Discover energy solutions for shops, offices, hotels, restaurants and commercial facilities looking to cut generator fuel bills.',
    highlights: ['Commercial rooftop solar arrays', 'Smart load management & peak shaving'],
    ctaText: 'Explore Commercial Solutions',
    ctaLink: '/solutions#commercial',
  },
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    tag: 'Manufacturing & Plants',
    iconName: 'Factory',
    badgeStyle: {
      bg: 'bg-slate-100',
      text: 'text-[#061F49]',
      border: 'border-slate-300/80',
      hoverBg: 'group-hover:bg-[#061F49] group-hover:text-white',
    },
    description: 'Explore energy solutions for factories, warehouses, cold storage, and processing plants with high or continuous power demands.',
    highlights: ['High-capacity inverter systems', 'Industrial Battery Energy Storage (BESS)'],
    ctaText: 'Explore Industrial Solutions',
    ctaLink: '/solutions#industrial',
  },
  {
    id: 'government',
    title: 'Government Projects',
    tag: 'Public Infrastructure',
    iconName: 'Landmark',
    badgeStyle: {
      bg: 'bg-amber-50',
      text: 'text-[#B87A00]',
      border: 'border-amber-200/80',
      hoverBg: 'group-hover:bg-[#B87A00] group-hover:text-white',
    },
    description: 'Explore solar energy applications for administrative complexes, provincial stations, public utilities, and infrastructure initiatives.',
    highlights: ['Standardized public procurement', 'Turnkey deployment for regional offices'],
    ctaText: 'Explore Government Solutions',
    ctaLink: '/contact?type=Government%20%2F%20Institutional%20Project',
  },
  {
    id: 'institutions',
    title: 'Institutions & Organisations',
    tag: 'Health & Education',
    iconName: 'GraduationCap',
    badgeStyle: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      border: 'border-indigo-200/80',
      hoverBg: 'group-hover:bg-indigo-600 group-hover:text-white',
    },
    description: 'Dependable solar and backup power for rural health posts, provincial hospitals, secondary schools, universities, and church missions.',
    highlights: ['24/7 cold storage for vaccines & clinics', 'Power for classrooms, ICT labs & water pumps'],
    ctaText: 'Explore Institutional Solutions',
    ctaLink: '/contact?type=Government%20%2F%20Institutional%20Project',
  },
  {
    id: 'dealers',
    title: 'Solar Dealers & Distributors',
    tag: 'B2B Distribution',
    iconName: 'Truck',
    badgeStyle: {
      bg: 'bg-orange-50',
      text: 'text-[#FF8500]',
      border: 'border-orange-200/80',
      hoverBg: 'group-hover:bg-[#FF8500] group-hover:text-white',
    },
    description: 'Partner with KYRA Pacific Green to distribute tier-1 solar inverters, high-efficiency panels, and lithium battery storage across PNG.',
    highlights: ['Wholesale equipment availability', 'Technical product support & warranties'],
    ctaText: 'Become a Partner',
    ctaLink: '/partnerships',
    isPartner: true,
  },
  {
    id: 'installers',
    title: 'Solar Installers & EPCs',
    tag: 'Contractors & EPC',
    iconName: 'HardHat',
    badgeStyle: {
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      border: 'border-teal-200/80',
      hoverBg: 'group-hover:bg-teal-700 group-hover:text-white',
    },
    description: 'Access reliable tier-1 equipment supply, engineering design guidance, and logistics support for your solar installation projects.',
    highlights: ['Engineered component compatibility', 'Direct project staging & procurement'],
    ctaText: 'Discuss EPC Partnership',
    ctaLink: '/partnerships',
    isPartner: true,
  },
  {
    id: 'custom-projects',
    title: 'Specialized & Turnkey Projects',
    tag: 'Microgrids & Agriculture',
    iconName: 'Sparkles',
    badgeStyle: {
      bg: 'bg-[#061F49]/5',
      text: 'text-[#061F49]',
      border: 'border-[#061F49]/20',
      hoverBg: 'group-hover:bg-gradient-to-r group-hover:from-[#061F49] group-hover:to-[#0874C9] group-hover:text-white',
    },
    description: 'Have a remote mining camp, agricultural processing site, or off-grid island facility? We engineer customized solar solutions.',
    highlights: ['Custom microgrid engineering', 'Agricultural solar pumping & processing'],
    ctaText: 'Inquire for Custom Project',
    ctaLink: '/contact?type=Custom%20%2F%20Turnkey%20Project',
  },
];
