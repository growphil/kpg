export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'products' | 'solutions' | 'partnerships' | 'general';
}

export const homeFaqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What solar products does KYRA Pacific Green offer?',
    answer:
      'Our product range includes solar panels, inverters, battery energy storage, foldable solar systems and complete solar systems, subject to availability.',
    category: 'products',
  },
  {
    id: 'faq-2',
    question: 'What types of solar solutions can I explore?',
    answer:
      'You can enquire about residential, commercial, industrial, on-grid, off-grid and hybrid solar solutions.',
    category: 'solutions',
  },
  {
    id: 'faq-3',
    question: 'What is the difference between on-grid, off-grid and hybrid solar?',
    answer:
      'On-grid systems connect to the electricity grid. Off-grid systems operate independently of the grid, while hybrid systems combine solar generation with other power sources and may include energy storage.',
    category: 'solutions',
  },
  {
    id: 'faq-4',
    question: 'Can I get help choosing a suitable solar solution?',
    answer:
      'Yes. Contact our team to discuss your energy requirements and explore suitable system options.',
    category: 'general',
  },
  {
    id: 'faq-5',
    question: 'Do you work with solar dealers and installers?',
    answer:
      'We welcome enquiries from dealers, distributors, installers and EPC companies interested in exploring potential partnerships.',
    category: 'partnerships',
  },
  {
    id: 'faq-6',
    question: 'How can I enquire about product pricing?',
    answer:
      'Contact us through WhatsApp or submit an enquiry to ask about product specifications, availability and pricing.',
    category: 'products',
  },
  {
    id: 'faq-7',
    question: 'How can I contact KYRA Pacific Green?',
    answer:
      'You can reach us through WhatsApp at +675 7492 0919 or email kyrapacificgreen@gmail.com.',
    category: 'general',
  },
];

export const contactFaqData: FAQItem[] = [
  {
    id: 'c-faq-1',
    question: 'How can I contact KYRA Pacific Green?',
    answer:
      'You can contact us through WhatsApp at +675 7492 0919 or email kyrapacificgreen@gmail.com.',
  },
  {
    id: 'c-faq-2',
    question: 'Can I enquire about solar products and pricing?',
    answer:
      'Yes. Send us your product enquiry to ask about specifications, availability and pricing.',
  },
  {
    id: 'c-faq-3',
    question: 'Can businesses and solar companies contact you about partnerships?',
    answer:
      'Yes. Dealers, distributors, installers and EPC companies are welcome to enquire about potential business opportunities.',
  },
  {
    id: 'c-faq-4',
    question: 'Can I discuss a government or institutional solar project?',
    answer:
      'You can contact us to discuss your requirements and explore potential solar energy applications.',
  },
];

