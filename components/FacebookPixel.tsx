'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq: (...args: any[]) => void
    _fbq?: any
  }
}

export default function FacebookPixel() {
  useEffect(() => {
    if (!window.fbq) {
      const n: any = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      n.queue = []
      n.loaded = true
      n.version = '2.0'

      const t = document.createElement('script')
      t.async = true
      t.src = 'https://connect.facebook.net/en_US/fbevents.js'
      const s = document.getElementsByTagName('script')[0]
      s.parentNode?.insertBefore(t, s)

      window.fbq = n
      window._fbq = n
    }

    window.fbq('init', process.env.NEXT_PUBLIC_PIXEL_ID)
    window.fbq('track', 'PageView')
  }, [])

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  )
}
