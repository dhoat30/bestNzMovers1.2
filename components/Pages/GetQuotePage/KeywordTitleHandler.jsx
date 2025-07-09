'use client'

import { useEffect } from 'react'

export default function KeywordTitleHandler() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)
    const rawKeyword = params.get('keyword') || ''

    const isValidKeyword = (input) => {
      if (!input) return false
      const trimmed = input.trim()
      const wordCount = trimmed.split(/\s+/).length
      return /^[a-zA-Z0-9\s]+$/.test(trimmed) && wordCount >= 2 && trimmed.length <= 40
    }

    const toTitleCase = (str) =>
      str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())

    const title = isValidKeyword(rawKeyword)
      ? `${toTitleCase(rawKeyword)} | Best NZ Movers`
      : 'Reliable & Affordable Moving Services in Auckland | Best NZ Movers'

    document.title = title
  }, [])

  return null
}
