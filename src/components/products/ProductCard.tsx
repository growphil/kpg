import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquareText } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className="group bg-white rounded-2xl border border-[#E3EAF0] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:border-slate-300"
      data-reveal
    >
      <div>
        {/* Product Image Container */}
        <div className="relative aspect-[4/3] bg-slate-50/80 overflow-hidden border-b border-slate-100 flex items-center justify-center p-4 sm:p-6">
          <img
            src={product.primaryImage}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-md bg-white/95 text-[#061F49] shadow-2xs border border-slate-200">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2 group-hover:text-[#0874C9] transition-colors leading-snug">
            <Link to={`/products/${product.id}`} className="touch-manipulation">
              {product.name}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-3">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Actions with responsive touch targets */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-50 mt-2 flex items-center gap-2.5 sm:gap-3">
        <Link
          to={`/products/${product.id}`}
          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#F4F8FB] text-[#061F49] hover:bg-slate-200/80 active:bg-slate-200 transition-colors touch-manipulation text-center"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          to={`/contact?type=Product%20Enquiry&product=${encodeURIComponent(product.name)}`}
          className="min-h-[44px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#159A2E] text-white hover:bg-[#118025] active:bg-[#118025] transition-colors touch-manipulation"
          aria-label={`Enquire about ${product.name}`}
        >
          <MessageSquareText className="w-4 h-4" />
          <span className="hidden xs:inline">Enquire</span>
        </Link>
      </div>
    </div>
  );
};
