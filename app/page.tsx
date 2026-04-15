import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, DollarSign, BookOpen, HandIcon as PrayingHands } from "lucide-react"
import { Testimonials } from "@/components/testimonials"
import { VideoPlayer } from "@/components/video-player"
import { PriceCard } from "@/components/price-card"
import { Benefits } from "@/components/benefits"
import { FAQ } from "@/components/faq"
import PixelButton from "@/components/PixelButton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-[#d7e6e6] py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-caio-56926.jpg-eSEG7zRZ12r9QlJH4lBAwDHMTGjvBk.jpeg"
            alt="Alianças sobre a Bíblia"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:w-1/2">
              <div className="inline-block rounded-lg bg-[#7b4c2d]/10 px-3 py-1 text-sm text-[#7b4c2d]">
                E-book Exclusivo para Casais Cristãos
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#7b4c2d]">
                Três Dobras de Amor
              </h1>
              <p className="max-w-[700px] text-gray-700 md:text-xl">
                Espiritualidade, unidade e propósito no casamento
              </p>
              <p className="text-gray-700">
                Você já imaginou como seria o seu casamento se Deus estivesse verdadeiramente no centro?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <PixelButton href={process.env.NEXT_PUBLIC_CHECKOUT_URL!}>
                Quero Transformar Meu Casamento
              </PixelButton>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-96 md:w-80 md:h-[30rem] shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="/images/ebook-cover.jpeg"
                  alt="Capa do e-book Três Dobras de Amor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="w-full bg-[#faf7f6] py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#7b4c2d]">
              Assista e Descubra Como Transformar Seu Casamento
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl">
              Veja como o e-book "Três Dobras de Amor" pode ajudar vocês a construírem um casamento abençoado e
              duradouro.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <VideoPlayer />
          </div>
          <div className="flex justify-center mt-12">
          <PixelButton href={process.env.NEXT_PUBLIC_CHECKOUT_URL!}>
            Quero Esse E-book Agora!
          </PixelButton>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-[#d7e6e6] py-12 md:py-24 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-deesha-chandra-4156-35981.jpg-HhgRMNYXtidnzcjFeMqkr2T3hE0s2w.jpeg"
            alt="Casal trocando alianças"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#7b4c2d]">
              Conteúdo Completo do E-book
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl">
              10 capítulos com conteúdo prático e transformador para fortalecer a aliança do seu casamento:
            </p>
          </div>
          <Benefits />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-[#faf7f6] py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#7b4c2d]">
              O Que Dizem Os Casais Transformados
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl">
              Veja como o e-book "Três Dobras de Amor" já abençoou outros casamentos:
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Product Description */}
      <section className="w-full bg-[#d7e6e6] py-12 md:py-24 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-jeremy-wong-382920-1023233.jpg-aOwBsPLkZn16wsZOr60v7E1n0ATQdx.jpeg"
            alt="Casal abraçado"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#7b4c2d]">
                Você já imaginou como seria o seu casamento se Deus estivesse verdadeiramente no centro?
              </h2>
              <p className="text-gray-700 md:text-lg">
                "Três Dobras de Amor" é mais do que um ebook — é um reencontro com o propósito do casamento.
              </p>
              <p className="text-gray-700 md:text-lg">
                Escrito com sensibilidade, profundidade bíblica e linguagem leve, este guia vai te ajudar a fortalecer a
                sua aliança em áreas como:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#7b4c2d]" />
                  <span>Comunicação</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-[#7b4c2d]" />
                  <span>Finanças</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-[#7b4c2d]" />
                  <span>Intimidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#7b4c2d]" />
                  <span>Propósito</span>
                </li>
                <li className="flex items-center gap-2">
                  <PrayingHands className="h-5 w-5 text-[#7b4c2d]" />
                  <span>Oração a dois</span>
                </li>
              </ul>
              <p className="text-gray-700 md:text-lg">
                São capítulos com reflexões poderosas, versículos marcantes e desafios práticos que vocês podem aplicar
                imediatamente.
              </p>
              <p className="text-gray-700 md:text-lg">
                Se vocês desejam mais conexão, paz e propósito no relacionamento, esse ebook é para vocês.
              </p>
              <p className="text-gray-700 md:text-lg font-bold">
                Casamento não é sobre sobreviver — é sobre construir eternidade juntos.
              </p>
            </div>
            <div className="flex justify-center">
              <PriceCard />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#faf7f6] py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#7b4c2d]">
              Perguntas Frequentes
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl">
              Tire suas dúvidas sobre o e-book "Três Dobras de Amor"
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
     {/* Final CTA */}
    <section className="w-full bg-[#7b4c2d] py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Transforme Seu Casamento Hoje
          </h2>
          <p className="max-w-[700px] text-white/80 md:text-xl">
            Não espere mais para construir o casamento que Deus planejou para vocês.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <PixelButton href={process.env.NEXT_PUBLIC_CHECKOUT_URL!}>
              Quero Transformar Meu Casamento Agora!
            </PixelButton>
          </div>
        </div>
      </div>
    </section>


      {/* Footer */}
      <footer className="w-full bg-[#d7e6e6] py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-700 md:text-left">
              &copy; {new Date().getFullYear()} Três Dobras de Amor. Todos os direitos reservados.
            </p>
            <p className="text-center text-sm text-gray-700 md:text-left">
              Este site não é afiliado a nenhuma denominação específica.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
