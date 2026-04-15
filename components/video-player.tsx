"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative w-full aspect-video bg-black/5 rounded-xl overflow-hidden border-2 border-[#7b4c2d]/20">
      {!isPlaying ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-jeremy-wong-382920-1023233.jpg-aOwBsPLkZn16wsZOr60v7E1n0ATQdx.jpeg"
              alt="Thumbnail do vídeo"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center px-4">
                Descubra como transformar seu casamento com princípios bíblicos
              </h3>
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-[#7b4c2d] hover:bg-[#7b4c2d]/90 text-white rounded-full p-6 transition-all duration-300 hover:scale-110"
              >
                <Play className="h-12 w-12 fill-current" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <video
          className="w-full h-full"
          controls
          autoPlay
          playsInline
        >
          <source src={process.env.NEXT_PUBLIC_VIDEO_URL} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      )}
    </div>
  )
}
