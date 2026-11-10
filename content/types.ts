import type { Locale } from "@/lib/site";

export type FaqItem = { q: string; a: string };
export type TitleText = { title: string; text: string };
export type Meta = { title: string; description: string };

export type FaqGroupKey = "general" | "setup" | "billing" | "troubleshooting";

export type Dict = {
  locale: Locale;
  nav: {
    home: string;
    pricing: string;
    channels: string;
    guide: string;
    faq: string;
    blog: string;
    contact: string;
    cta: string;
    menu: string;
    language: string;
  };
  common: {
    orderNow: string;
    seePlans: string;
    contactSupport: string;
    readMore: string;
    whatsapp: string;
    breadcrumbHome: string;
  };
  footer: {
    tagline: string;
    explore: string;
    help: string;
    legal: string;
    terms: string;
    privacy: string;
    refund: string;
    rights: string;
    disclaimer: string;
    payments: string;
  };
  home: {
    meta: Meta;
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      chips: string[];
      stats: { value: string; label: string }[];
      mock: {
        live: string;
        categories: string[];
        channels: string[];
        nowPlaying: string;
        programme: string;
      };
    };
    features: { kicker: string; title: string; intro: string; items: TitleText[] };
    content: {
      kicker: string;
      title: string;
      intro: string;
      liveTitle: string;
      liveItems: TitleText[];
      vodTitle: string;
      vodText: string;
      topPicks: string;
      titlesPill: string;
      genres: string[];
    };
    steps: { kicker: string; title: string; intro: string; items: TitleText[] };
    pricing: {
      kicker: string;
      title: string;
      intro: string;
      standard: string;
      premium: string;
      delivery: string;
      discount: string;
      /** 8 names: standard 1/3/6/12 then premium 1/3/6/12 */
      planNames: string[];
      /** 4 period suffixes: 1, 3, 6, 12 months */
      periods: string[];
      badgeStandard: string;
      badgePremium: string;
      standardFeatures: string[];
      premiumFeatures: string[];
      paymentNote: string;
      guarantee: string;
    };
    devices: {
      kicker: string;
      title: string;
      intro: string;
      labels: string[];
      appsTitle: string;
      appsText: string;
      familyTitle: string;
      familyText: string;
    };
    reviews: {
      kicker: string;
      title: string;
      intro: string;
      items: { text: string; author: string; tag: string }[];
    };
    about: { kicker: string; title: string; paragraphs: string[] };
    faq: { kicker: string; title: string; intro: string; more: string };
    blog: { kicker: string; title: string; intro: string };
    cta: { title: string; text: string; button: string; secondary: string };
  };
  faqGroups: Record<FaqGroupKey, string>;
  faqs: Record<FaqGroupKey, FaqItem[]>;
  faqPage: {
    meta: Meta;
    kicker: string;
    title: string;
    intro: string;
    stillTitle: string;
    stillText: string;
  };
  channels: {
    meta: Meta;
    kicker: string;
    title: string;
    intro: string;
    categories: TitleText[];
    regionsTitle: string;
    regionsText: string;
    regions: string[];
    extras: TitleText[];
    ctaTitle: string;
    ctaText: string;
  };
  guide: {
    meta: Meta;
    kicker: string;
    title: string;
    intro: string;
    jump: string;
    beforeTitle: string;
    before: string[];
    devices: { id: string; title: string; steps: TitleText[] }[];
    tipsTitle: string;
    tips: TitleText[];
    helpTitle: string;
    helpText: string;
  };
  contact: {
    meta: Meta;
    kicker: string;
    title: string;
    intro: string;
    form: {
      title: string;
      name: string;
      email: string;
      message: string;
      namePh: string;
      emailPh: string;
      messagePh: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    panels: TitleText[];
    whatsappTitle: string;
    whatsappText: string;
    emailTitle: string;
    emailText: string;
  };
  legal: { privacy: string; terms: string; refund: string; updated: string };
};
