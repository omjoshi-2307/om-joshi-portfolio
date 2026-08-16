import { useEffect } from 'react';
import { siteSeo, getPersonSchema, getProjectSchema, type PageMeta } from '@/config/seo';

/**
 * Dynamic Page Metadata & SEO Hook
 * Updates document.title, canonical link, Open Graph tags, Twitter cards, and JSON-LD schema.
 */
export function usePageMetadata(meta?: Partial<PageMeta>, caseStudySlug?: 'sured' | 'walle' | 'jalsanchaee') {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Resolve active metadata based on page or case study
    let activeTitle: string = siteSeo.title;
    let activeDescription: string = siteSeo.description;
    let activeUrl: string = siteSeo.url;
    let activeImage: string = siteSeo.image;
    let activeType: 'website' | 'article' = 'website';
    let schemaData: object = getPersonSchema();

    if (caseStudySlug && siteSeo.projects[caseStudySlug]) {
      const projMeta = siteSeo.projects[caseStudySlug];
      activeTitle = projMeta.title;
      activeDescription = projMeta.description;
      activeUrl = projMeta.url;
      activeImage = projMeta.image;
      activeType = projMeta.type;
      const projSchema = getProjectSchema(caseStudySlug);
      if (projSchema) {
        schemaData = projSchema;
      }
    } else if (meta) {
      if (meta.title) activeTitle = meta.title;
      if (meta.description) activeDescription = meta.description;
      if (meta.url) activeUrl = meta.url;
      if (meta.image) activeImage = meta.image;
      if (meta.type) activeType = meta.type;
    }

    // 1. Update Document Title
    document.title = activeTitle;

    // Helper to set or create a meta tag
    const setMetaTag = (selector: string, attribute: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMetaTag('meta[name="description"]', 'name', 'description', activeDescription);

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', activeTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', activeDescription);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', activeUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', activeImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', activeType);

    // 4. Twitter / X Cards
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', activeTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', activeDescription);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', activeImage);

    // 5. Canonical Link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', activeUrl);

    // 6. JSON-LD Structured Data
    let scriptTag = document.querySelector<HTMLScriptElement>('#structured-data-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [meta, caseStudySlug]);
}
