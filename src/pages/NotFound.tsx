import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, MessageCircle, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { SecondaryButton } from '@/components/common/SecondaryButton';
import { SEOHead } from '@/components/common/SEOHead';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found"
        description="The page you requested could not be found. Return to KYRA Pacific Green homepage."
      />

      <div className="min-h-[75vh] flex items-center justify-center py-24 bg-[#F4F8FB]">
        <Container size="narrow">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3EAF0] shadow-sm text-center max-w-xl mx-auto">
            <span className="text-5xl sm:text-7xl font-extrabold text-[#0874C9] font-mono tracking-tight block mb-4">
              404
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#061F49] mb-3">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8">
              The page you are looking for does not exist or may have been moved. Explore our solar solutions or contact our team for assistance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <PrimaryButton
                to="/"
                variant="navy"
                size="md"
                icon={<Home className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Return Home
              </PrimaryButton>
              <SecondaryButton
                to="/solutions"
                size="md"
                icon={<Compass className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Explore Solutions
              </SecondaryButton>
              <SecondaryButton
                to="/contact"
                size="md"
                icon={<MessageCircle className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Contact Us
              </SecondaryButton>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

