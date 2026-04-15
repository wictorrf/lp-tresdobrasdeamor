import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Moab e Cristina Santos",
      image: "/casal4.jpg",
      text: "Nosso casamento estava passando por um momento difícil quando encontramos o e-book 'Três Dobras de Amor'. As reflexões sobre comunicação e perdão nos ajudaram a reconstruir nossa relação. Hoje temos um casamento totalmente renovado!",
      stars: 5,
    },
    {
      name: "Pedro e Ana Oliveira",
      image: "/casal2.jpg",
      text: "Compramos o e-book logo após nosso casamento e tem sido um guia incrível. Os capítulos sobre finanças e propósito nos ajudaram a alinhar nossas expectativas. A planilha financeira bônus é excelente!",
      stars: 5,
    },
    {
      name: "Carlos e Juliana Mendes",
      image: "/casal5.jpg",
      text: "Após 5 anos de casados, sentíamos que precisávamos renovar nossa relação. O capítulo sobre intimidade e o desafio de 7 dias transformaram completamente nossa conexão. Recomendamos a todos os casais!",
      stars: 5,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="border-2 border-[#7b4c2d]/20">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#7b4c2d]">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#7b4c2d] text-[#7b4c2d]" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <p className="font-bold text-[#7b4c2d]">{testimonial.name}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
