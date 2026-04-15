'use client'

import { Button } from "@/components/ui/button"

export default function PixelButton({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart')
    }
  }

  return (
    <Button asChild className="bg-[#7b4c2d] hover:bg-[#7b4c2d]/90 text-white rounded-full px-8 py-6 text-lg">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </a>
    </Button>
  )
}
