import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
  structuredData?: object;
}

export const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  type = 'website',
  structuredData,
}: SEOProps) => {
  const fullTitle = title
    ? `${title} | KYRA PACIFIC GREEN`
    : `KYRA PACIFIC GREEN — Powering PNG's Next Era of Solar`;
  const metaDesc = description || siteConfig.description;
  const canonicalUrl = canonical || siteConfig.url;
  const image = ogImage || siteConfig.ogImage;

  useEffect(() => {
    // 1. Document Title
    document.title = fullTitle;

    // 2. Meta Description
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.setAttribute('content', metaDesc);

    // 3. OpenGraph Tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', fullTitle);
    updateOrCreateMeta('og:description', metaDesc);
    updateOrCreateMeta('og:type', type);
    updateOrCreateMeta('og:url', canonicalUrl);
    updateOrCreateMeta('og:image', image);

    // 4. Structured Data (JSON-LD)
    const scriptId = 'json-ld-structured-data';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (structuredData) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(structuredData);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [fullTitle, metaDesc, canonicalUrl, image, type, structuredData]);

  return null;
};

