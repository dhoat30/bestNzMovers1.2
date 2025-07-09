// If you want to use App Router's generateMetadata (put this in app/contact/page.js)
import { Suspense } from 'react'
import Header from '@/components/UI/Header/Header'
import GetQuotePage from '@/components/Pages/GetQuotePage/GetQuotePage'
import { uspData } from '@/utils/staticData/uspData'
import { quotePageTitleData } from '@/utils/staticData/quotePageTitleData'
import Footer from '@/components/UI/Footer/Footer'

function isValidKeyword(input) {
  if (!input) return false
  const trimmed = input.trim()
  const wordCount = trimmed.split(/\s+/).length
  return /^[a-zA-Z0-9\s]+$/.test(trimmed) && wordCount >= 2 && trimmed.length <= 40
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
}

function generateSEOTitle(keyword) {
  if (!keyword) return 'Reliable & Affordable Moving Services in Auckland | Best NZ Movers'
  
  const keywordLower = keyword.toLowerCase()
  
  if (keywordLower.includes('house moving') || keywordLower.includes('home moving')) {
    return `${keyword} Services in Auckland | Best NZ Movers`
  } else if (keywordLower.includes('office moving') || keywordLower.includes('commercial')) {
    return `Professional ${keyword} Services | Best NZ Movers`
  } else if (keywordLower.includes('furniture')) {
    return `${keyword} Services in Auckland | Best NZ Movers`
  } else if (keywordLower.includes('storage')) {
    return `${keyword} Solutions in Auckland | Best NZ Movers`
  } else {
    return `${keyword} | Best NZ Movers - Auckland Moving Services`
  }
}

function generateMetaDescription(keyword) {
  if (!keyword) return 'Get reliable and affordable moving services in Auckland with Best NZ Movers. Professional movers for house, office, and furniture moving. Get your free quote today!'
  
  return `Professional ${keyword.toLowerCase()} services in Auckland. Get a free quote from Best NZ Movers - trusted, reliable, and affordable moving solutions tailored to your needs.`
}

// This is the App Router way to handle metadata
export async function generateMetadata({ searchParams }) {
  const rawKeyword = searchParams.keyword || ''
  const keyword = isValidKeyword(rawKeyword) ? toTitleCase(rawKeyword.trim()) : null
  
  const title = generateSEOTitle(keyword)
  const description = generateMetaDescription(keyword)
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    keywords: keyword ? 
      `${keyword.toLowerCase()}, moving services, auckland movers, professional movers, house moving, office moving` : 
      'moving services, auckland movers, professional movers, house moving, office moving'
  }
}

// Loading component for Suspense fallback
function LoadingFallback() {
  return (
    <>
      <Header />
      <main>
        <div style={{ padding: '120px 0 40px 0', textAlign: 'center' }}>
          <p>Loading...</p>
        </div>
      </main>
      <Footer showFooterCta={false} />
    </>
  )
}

// Component that handles the search params
function ContactContent({ searchParams }) {
  const rawKeyword = searchParams.keyword || ''
  const keyword = isValidKeyword(rawKeyword) ? toTitleCase(rawKeyword.trim()) : null

  return (
    <>
      <Header />
      <main>
        <GetQuotePage
          data={quotePageTitleData}
          heroUSP={uspData}
          keyword={keyword}
        />
      </main>
      <Footer showFooterCta={false} />
    </>
  )
}

export default function Contact({ searchParams }) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ContactContent searchParams={searchParams} />
    </Suspense>
  )
}