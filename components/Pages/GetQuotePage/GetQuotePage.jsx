"use client";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";
import { lightTheme } from "@/utils/themeSettings";
import HeroImage from "@/components/UI/Hero/OptimizedHero/HeroImage";
import Video from "@/components/UI/Video/Video";
import USP from "@/components/UI/USP/USP";
import GetQuoteForm from "@/components/UI/Forms/GetQuoteForm";
import HeroUSP from "@/components/UI/USP/HeroUSP";
import Image from "next/image";
import { useEffect, useMemo } from 'react';

function generateSubtitle(keyword, defaultSubtitle) {
  if (!keyword) return defaultSubtitle || 'Get a Quote'
  
  // Create more engaging subtitles based on the keyword
  const keywordLower = keyword.toLowerCase()
  
  if (keywordLower.includes('house moving') || keywordLower.includes('home moving')) {
    return `Professional ${keyword} Services`
  } else if (keywordLower.includes('office moving') || keywordLower.includes('commercial')) {
    return `Expert ${keyword} Solutions`
  } else if (keywordLower.includes('furniture')) {
    return `Reliable ${keyword} Services`
  } else if (keywordLower.includes('storage')) {
    return `Secure ${keyword} Solutions`
  } else {
    return `${keyword}`
  }
}

function generateDescription(keyword, defaultDescription) {
  if (!keyword) return defaultDescription
  
  const keywordLower = keyword.toLowerCase()
  
  if (keywordLower.includes('house moving') || keywordLower.includes('home moving')) {
    return `Get professional ${keyword.toLowerCase()} services in Auckland. Our experienced team handles everything from packing to unpacking, ensuring your belongings are moved safely and efficiently.`
  } else if (keywordLower.includes('office moving') || keywordLower.includes('commercial')) {
    return `Minimize downtime with our expert ${keyword.toLowerCase()} services. We specialize in relocating businesses of all sizes with minimal disruption to your operations.`
  } else if (keywordLower.includes('furniture')) {
    return `Trust our skilled movers for your ${keyword.toLowerCase()} needs. We handle all types of furniture with care, from delicate antiques to heavy appliances.`
  } else if (keywordLower.includes('storage')) {
    return `Secure ${keyword.toLowerCase()} facilities available. Whether you need short-term or long-term storage, we provide safe and accessible solutions.`
  } else {
    return `Get professional ${keyword.toLowerCase()} services from Auckland's trusted moving experts. Contact us today for a free quote tailored to your specific needs.`
  }
}

export default function GetQuotePage({ data, heroUSP, keyword }) {
  const displaySubtitle = generateSubtitle(keyword, data.acf.hero_section.subtitle)
  const displayDescription = generateDescription(keyword, data.acf.hero_section.description)
  
  // Enhanced form title based on keyword
  const formTitle = useMemo(() => {
    if (keyword) {
      return `Get Your Free ${keyword} Quote`
    }
    return data.acf.hero_section.title
  }, [keyword, data.acf.hero_section.title])

  return (
    <ThemeProvider theme={lightTheme}>
      <Section>
        <Container maxWidth="lg" className="container">
          <div className="content-container">
            <Typography
              variant="h4"
              component="h1"
              className="subtitle"
              style={{ textTransform: 'capitalize' }}
            >
              {displaySubtitle}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className="description mt-8"
            >
              {"We specialize in stress-free moves anywhere in Auckland or nationwide. Our 24/7 availability, professional team, and transparent pricing ensure a smooth experience—no hidden costs, ever."}
            </Typography>
            

            <HeroUSP data={heroUSP} />
            <div className="graphic-wrapper mt-24">
              <HeroImage image={data.acf.hero_section.image} />
            </div>
          </div>

          <div className="form-container">
            <GetQuoteForm
              className="row-max form-component"
              title={formTitle}
              keyword={keyword} // Pass keyword to form if needed
            />
          </div>
        </Container>
      </Section>
    </ThemeProvider>
  )
}

const Section = styled.section`
  background: var(--light-surface-container-low);
  padding: 120px 0 40px 0;
  @media (max-width: 600px) {
    padding: 80px 0 24px 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--light-surface-container-low);
    gap: 16px;
    align-items: start;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 600px) {
      padding: 0;
    }
    .subtitle {
       font-weight: 600;
    }
    .form-container {
      border: 1px solid var(--light-outline-variant);
      background: var(--light-surface-container-lowest);
      border-radius: 12px;
    }
    .content-container {
      @media (min-width: 1000px) {
        position: sticky;
        top: 80px;
      }
       
      padding: 24px;
      background: var(--light-surface-container-lowest);
      border-radius: 12px;
      border: 1px solid var(--light-outline-variant);
      @media (max-width: 600px) {
        padding: 24px 16px;
      }
      .title {
        margin: 8px 0;
      }
      .image-wrapper {
        position: relative;
        width: 100%;
      }
      .MuiContainer-root {
        padding: 0 !important;
        margin-top: 16px;
      }
      .keyword-highlight {
        padding: 8px 12px;
        background: var(--light-primary-container);
        border-radius: 8px;
        margin-top: 12px;
        border-left: 3px solid var(--light-primary);
      }
    }
  }
`;