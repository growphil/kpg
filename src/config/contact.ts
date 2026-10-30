/**
 * Central Configuration for KYRA Pacific Green Business Contact Information.
 * 
 * Note on Source of Truth:
 * - Current values are derived from official website content documents (KYRA PACIFIC GREEN home page.docx, CONTACT PAGE FOR KYRA.docx).
 * - Marked as: PROVISIONAL_PENDING_CLIENT_SIGN_OFF
 * - Secondary promotional assets (e.g. GCC/UAE distributor poster) contained differing contact coordinates and have been quarantined.
 */

export const contactConfig = {
  status: 'PROVISIONAL_PENDING_CLIENT_SIGN_OFF' as const,
  verificationNotice:
    'Provisional contact details sourced from approved corporate documents. Verify before final production launch.',
  
  phone: {
    display: '+675 7492 0919',
    raw: '+67574920919',
    countryCode: '675', // Papua New Guinea
  },

  whatsapp: {
    display: '+675 7492 0919',
    number: '67574920919',
    getLink: (defaultMessage?: string) => {
      const base = 'https://wa.me/67574920919';
      if (!defaultMessage) {
        return `${base}?text=${encodeURIComponent(
          'Hello KYRA Pacific Green, I would like to enquire about your solar energy solutions.'
        )}`;
      }
      return `${base}?text=${encodeURIComponent(defaultMessage)}`;
    },
  },

  email: {
    address: 'kyrapacificgreen@gmail.com',
    mailtoLink: 'mailto:kyrapacificgreen@gmail.com',
  },

  location: {
    town: 'Kasupe',
    country: 'Papua New Guinea',
    fullAddress: 'Kasupe, Papua New Guinea',
    region: 'Pacific',
  },

  operatingHours: 'Monday – Friday: 8:00 AM – 5:00 PM (PGT)',
} as const;

