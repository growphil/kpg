import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Share2,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { WhatsAppLink } from '@/components/common/WhatsAppLink';
import { SEOHead } from '@/components/common/SEOHead';
import { ProductCard } from '@/components/products/ProductCard';
import { productsData } from '@/data/products';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productsData.find(p => p.id === id);

  const [activeImage, setActiveImage] = useState<string>(product?.primaryImage || '');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = productsData
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <>
      <SEOHead
        title={`${product.name} — Solar Specifications`}
        description={product.shortDescription}
        ogImage={product.primaryImage}
      />

      <div className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#F4F8FB] border-b border-[#E3EAF0]">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Products', path: '/products' },
              { label: product.name },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start mt-4 sm:mt-6">
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <div className="relative aspect-[4/3] bg-white rounded-2xl border border-[#E3EAF0] p-4 sm:p-6 shadow-xs flex items-center justify-center overflow-hidden">
                <img
                  src={activeImage || product.primaryImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold bg-[#061F49] text-white">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {product.galleryImages.length > 1 && (
                <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 scrollbar-none touch-pan-x">
                  {product.galleryImages.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border p-1 shrink-0 overflow-hidden cursor-pointer transition-all touch-manipulation ${
                        activeImage === img
                          ? 'border-[#0874C9] ring-2 ring-[#0874C9]/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} preview ${i + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info & Actions */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#159A2E] block mb-1.5 sm:mb-2">
                  {product.category}
                </span>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#061F49] tracking-tight mb-3 sm:mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="border-t border-[#E3EAF0] pt-5 sm:pt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#061F49] mb-3 sm:mb-4">
                  Key Features &amp; Design Highlights
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {product.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#10233F]">
                      <CheckCircle2 className="w-4 h-4 text-[#159A2E] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Callout */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-[#E3EAF0] space-y-2 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <FileSpreadsheet className="w-5 h-5 text-[#0874C9] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#061F49]">
                      Technical Datasheets &amp; Engineering Specifications
                    </h4>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      {product.specificationsNotice ||
                        'Detailed dimensional drawings, input/output voltage windows, and load capacities are issued based on project requirements.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Full Width on Mobile */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <PrimaryButton
                  to={`/contact?type=Product%20Enquiry&product=${encodeURIComponent(product.name)}`}
                  variant="green"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Specifications &amp; Quote
                </PrimaryButton>
                <WhatsAppLink
                  variant="solid"
                  size="lg"
                  className="w-full sm:w-auto"
                  message={`Hello KYRA Pacific Green, I would like to request technical specifications and pricing for: ${product.name}`}
                  label="Enquire via WhatsApp"
                />
                <button
                  type="button"
                  onClick={handleShare}
                  className="min-h-[44px] min-w-[44px] p-3 rounded-xl border border-[#E3EAF0] bg-white text-slate-600 hover:text-[#0874C9] hover:bg-slate-50 transition-colors touch-manipulation flex items-center justify-center gap-2"
                  aria-label="Share product link"
                  title="Share link"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs sm:hidden">Share Product</span>
                </button>
              </div>
              {copiedLink && (
                <p className="text-xs font-medium text-[#159A2E] text-center sm:text-left">
                  Link copied to clipboard!
                </p>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Applications Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0874C9] block mb-1.5 sm:mb-2">
              APPLICATIONS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#061F49]">
              Typical Energy Applications
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#64748B] mt-2 leading-relaxed">
              Where this product is deployed across residential, commercial, industrial, and rural energy projects in Papua New Guinea.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {product.applications.map((app, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-xl bg-[#F4F8FB] border border-[#E3EAF0]"
              >
                <span className="text-xs font-mono font-bold text-[#0874C9] block mb-1.5">
                  0{index + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#061F49] leading-snug">
                  {app}
                </p>
              </div>
            ))}
          </div>

          {/* Related Products */}
          <div className="border-t border-[#E3EAF0] pt-10 sm:pt-12">
            <h3 className="text-lg sm:text-xl font-bold text-[#061F49] mb-6 sm:mb-8">
              Related Solar Equipment &amp; Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedProducts.map(relProduct => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
