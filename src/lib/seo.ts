// 📁 lib/seo.ts

export const siteMetadata = {
  title: 'FocusWEB - Landing Pages Personalizadas',
  description:
    'Diseñamos landing pages profesionales, rápidas y enfocadas en conversión. Entrega en 72 horas.',
  siteUrl: 'https://focusweb.vercel.app',
  keywords: [
    'landing pages',
    'landing personalizada',
    'paginas web economicas',
    'diseño web freelance',
    'landing para negocios',
    'landing en 72 horas',
  ],
  author: 'FocusWEB',
  twitterHandle: '@focusweb',
  facebookPage: 'https://www.facebook.com/focusweb',
  instagramHandle: 'https://www.instagram.com/focusweb',
  locale: 'es_CO',
  type: 'website',
};

export function generateMetadata({
  title = siteMetadata.title,
  description = siteMetadata.description,
  url = siteMetadata.siteUrl,
}: {
  title?: string;
  description?: string;
  url?: string;
} = {}) {
  const image = `${siteMetadata.siteUrl}/og-image.jpg`;

  return {
    title,
    description,
    keywords: siteMetadata.keywords.join(', '),
    openGraph: {
      type: siteMetadata.type,
      locale: siteMetadata.locale,
      url,
      title,
      description,
      siteName: siteMetadata.title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'FocusWEB landing preview',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteMetadata.twitterHandle,
      title,
      description,
      images: [image],
    },
    metadataBase: new URL(siteMetadata.siteUrl),
    alternates: {
      canonical: url,
    },
    other: {
      facebookPage: siteMetadata.facebookPage,
      instagram: siteMetadata.instagramHandle,
    },
  };
}
