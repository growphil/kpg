import React, { useState, useMemo } from 'react';
import { ArrowRight, Filter, Phone, Mail, HelpCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ProductCard } from '@/components/products/ProductCard';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { WhatsAppLink } from '@/components/common/WhatsAppLink';
import { SEOHead } from '@/components/common/SEOHead';
import { productsData } from '@/data/products';
import { contactConfig } from '@/config/contact';

const CATEGORIES = [
  'All Products',
  'Solar Inverters',
  'Battery Energy Storage',
  'Foldable Solar Systems',
  'Solar Panels',
  'Complete Solar Systems',
  'All-in-One ESS',
] as const;

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All Products') {
      return productsData;
    }
    return productsData.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <SEOHead
        title="Solar Products & Energy Storage Catalogue"
        description="Explore our solar products: solar inverters, battery storage, foldable systems, panels, and complete systems for Papua New Guinea applications."
      />

      {/* Hero */}
      <PageHero
        badge="SOLAR PRODUCTS"
        title="Explore Our Solar Products"
        description="Discover solar products for residential, commercial and industrial applications across Papua New Guinea. Explore available product specifications and find options suited to your requirements."
      >
        <PrimaryButton to="#catalogue" variant="green" size="md" className="w-full sm:w-auto">
          Browse Products
        </PrimaryButton>
        <PrimaryButton to="/contact" variant="navy" size="md" className="w-full sm:w-auto">
          Request a Quote
        </PrimaryButton>
      </PageHero>

      <Container className="pt-4 sm:pt-6">
        <Breadcrumbs items={[{ label: 'Products' }]} />
      </Container>

      {/* Product Filter Tabs & Grid */}
      <section id="catalogue" className="py-8 sm:py-16 md:py-20 bg-white">
        <Container>
          {/* Mobile-optimized Category Filter Pills */}
          <div className="relative mb-8 sm:mb-10">
            <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
              <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5 mr-1 shrink-0">
                <Filter className="w-3.5 h-3.5 text-[#0874C9]" />
                Filter:
              </span>
              {CATEGORIES.map(category => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`min-h-[40px] px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
                      isSelected
                        ? 'bg-[#061F49] text-white shadow-2xs font-bold'
                        : 'bg-[#F4F8FB] text-[#10233F] hover:bg-slate-200/70 border border-slate-200/60 active:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Responsive Product Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Informational Guidance Box: Find the Right Products for Your Needs */}
          <div className="bg-[#F4F8FB] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E3EAF0] text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <div className="w-12 h-12 bg-white rounded-xl shadow-2xs text-[#0874C9] flex items-center justify-center mx-auto">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#061F49]">
              Find the Right Products for Your Needs
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-xl mx-auto">
              Not sure which products are suitable for your application? Share your energy requirements with our team to discuss available options.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
              <PrimaryButton
                to="/contact?type=Product%20Enquiry"
                variant="green"
                size="md"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Quote
              </PrimaryButton>
              <WhatsAppLink
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                label="Chat With Us on WhatsApp"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Product Enquiries / Datasheet Box */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#061F49] text-white">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#FFCA05] block mb-1">
                PRODUCT ENQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
                Need Product Specifications or Pricing?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl leading-relaxed">
                Contact KYRA Pacific Green for enquiries about product details, availability, technical specifications and official project quotations.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mt-4 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#159A2E] shrink-0" />
                  {contactConfig.phone.display}
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0874C9] shrink-0" />
                  {contactConfig.email.address}
                </span>
              </div>
            </div>

            <div className="w-full sm:w-auto shrink-0 pt-2 md:pt-0">
              <PrimaryButton
                to="/contact?type=Product%20Enquiry"
                variant="green"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Enquire Now
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
