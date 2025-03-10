const { siteUrl } = require('./next-sitemap.config');

// bundle analyzer 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfigp} */
const nextConfig = {

    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cms.bestnzmovers.co.nz',
            port: '',
            pathname: '/**'
        },
        {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/**'
        }
        
    ],
    },
    env: {
        url: "https://cms.bestnzmovers.co.nz",
        siteUrl: "https://bestnzmovers.co.nz",
        name: "Best NZ Movers Auckland",
        GOOGLE_REDIRECT_URI: process.env.NODE_ENV === 'production' ? 'https://bestnzmovers.co.nz' : 'http://localhost:3000'
    },

}

module.exports = withBundleAnalyzer(nextConfig)
