import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg",
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to update or create meta tags
    const setMeta = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentVal);
    };

    // Remove keywords meta if present
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.remove();
    }

    // Standard meta
    setMeta("name", "description", description);
    setMeta("name", "author", "Benestudio");
    setMeta("name", "robots", "index, follow");

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // Open Graph
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:site_name", "Benestudio");

    // Twitter Card
    setMeta("property", "twitter:card", "summary_large_image");
    setMeta("property", "twitter:url", canonical);
    setMeta("property", "twitter:title", title);
    setMeta("property", "twitter:description", description);
    setMeta("property", "twitter:image", ogImage);

    // Google Site Verification support (if env variable present or passed)
    const verificationCode = (import.meta as any).env?.VITE_GOOGLE_SITE_VERIFICATION;
    if (verificationCode) {
      setMeta("name", "google-site-verification", verificationCode);
    }

    // JSON-LD Structured Data
    const jsonLdId = "benestudio-json-ld";
    let scriptTag = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = jsonLdId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = typeof jsonLd === "string" ? jsonLd : JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonical, ogType, ogImage, JSON.stringify(jsonLd)]);

  return null;
}
