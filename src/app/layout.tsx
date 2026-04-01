import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rtoplanning.vercel.app'),

  title: 'RTO Planning — Free Return to Office Tracker & Attendance Calculator',
  description:
    'Track office days, check RTO mandate compliance (3 days in 8 of 12 rolling weeks), and plan your schedule with our free return-to-office calculator.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'RTO Planning — Return to Office Tracker & Calculator',
    description:
      'Free tool to track office attendance, verify RTO mandate compliance, and plan vacation around your return-to-office schedule.',
    url: 'https://rtoplanning.vercel.app',
    siteName: 'RTO Planning',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'RTO Planning — Office Attendance Tracker',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RTO Planning — Return to Office Tracker',
    description:
      'Track office attendance, check RTO compliance, and plan your schedule. Free, shareable, no sign-up.',
    images: ['/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'RTO Planning',
  url: 'https://rtoplanning.vercel.app',
  description:
    'A free return-to-office planning and attendance tracking tool. Checks compliance with RTO mandates requiring 3+ office days in 8 of 12 rolling weeks.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an RTO mandate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An RTO (Return to Office) mandate is a company policy requiring employees to work from a physical office a minimum number of days per week or rolling window. Many organizations adopted RTO mandates after remote-work periods, specifying rules like "3 days in the office in 8 of every 12 rolling weeks."',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I am going to the office enough?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This return-to-office calculator tracks each week you mark office days and checks whether you meet the required threshold (e.g., 3 days in 8 of 12 rolling weeks). Weeks shown in amber are at risk; weeks in green are compliant.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the "3 days in 8 of 12 weeks" rule mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This RTO compliance rule requires that within any rolling 12-week window, at least 8 of those weeks must have 3 or more office days. It is a rolling average, so each week the oldest week drops off and a new week is added to the window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this tool free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. RTO Planning is completely free with no account or sign-up required. Your schedule is saved in your browser and can be shared via a URL.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I share my RTO schedule with others?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The tool generates a shareable URL that encodes your full attendance schedule, so you can send it to a manager or colleague without any account or export step.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </body>
    </html>
  )
}
