import names from "lib/utility/names";

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "MegaSolanaDash",
  titleTemplate: "%s | Business Intelligence Dashboard Solana",
  defaultTitle: "MegaSolanaDash | Business Intelligence Dashboard Solana ",
  description:
    "Best Business Intelligence Dashboard Solana by MetricsDao, Flipside Crypto and Setbap ",
  canonical: "https://MegaSolanaDash.vercel.app/",
  openGraph: {
    url: "https://MegaSolanaDash.vercel.app/",
    title: "MegaSolanaDash",
    description:
      "Best Business Intelligence Dashboard Solana by MetricsDao, Flipside Crypto and Setbap ",
    images: [
      {
        url: `https://${names.SITE_URL}/og.png`,
        alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
      },
    ],
    site_name: "MegaSolanaDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
