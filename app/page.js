// import Layout from '@/components/UI/Layout/Layout'
// import OptimizedHero from '@/components/UI/Hero/OptimizedHero/OptimizedHero'
// import TechLogos from '@/components/UI/TechLogos/TechLogos'
// import USP from '@/components/UI/USP/USP'
import Header from '@/components/UI/Header/Header'
import GetQuotePage from '@/components/Pages/GetQuotePage/GetQuotePage'
import { uspData } from '@/utils/staticData/uspData'
import {quotePageTitleData} from '@/utils/staticData/quotePageTitleData'
import Footer from '@/components/UI/Footer/Footer'

export const metadata = {
    title: 'Reliable & Affordable Moving Services in Auckland | Best NZ Movers',
    description: 'Get hassle-free house moving across Auckland and nationwide with Best NZ Movers. Enjoy 24/7 availability, professional movers, and rates starting from $55/hour. Request a free quote now!',
  }
   


export default  function Contact() {
    return (
        <>
            <Header />
            <main>
                <GetQuotePage data={quotePageTitleData}  heroUSP={uspData}  />
                
                {/* <Layout sections={postData[0]?.acf?.sections} /> */}
                {/* <USP showTitle={true} statsArray={options.stats.items} cards={options.usp.items} title={options.usp.section_title} description={options.usp.section_description} /> */}

            </main>
            {/* <Footer footerCtaData={options.footer_cta} certifications={options.certifications} contactInfo={options.contact_info} socialData={options.social_links} showFooterCta={false} /> */}
            <Footer showFooterCta={false} />
        </>
    )
}
