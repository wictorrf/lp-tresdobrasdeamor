"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      question: "Como recebo o e-book e os bônus após a compra?",
      answer:
        "Após a confirmação do pagamento, você receberá um e-mail com o link para download do e-book em formato PDF, junto com os dois bônus exclusivos: a Planilha de Controle Financeiro e o Desafio Visual de 7 Dias de Oração. O acesso é imediato para pagamentos via cartão de crédito e PIX.",
    },
    {
      question: "O e-book funciona para qualquer fase do casamento?",
      answer:
        "Sim! O conteúdo foi desenvolvido para casais em qualquer fase do relacionamento - recém-casados, casais com filhos pequenos, casais com filhos adultos ou casais mais experientes. Os princípios são universais e podem ser aplicados em qualquer momento da jornada matrimonial.",
    },
    {
      question: "Quais são os capítulos do e-book?",
      answer:
        "O e-book contém 10 capítulos completos: 1) O Propósito do Casamento, 2) A Trindade do Amor, 3) Comunicação que edifica, 4) Finanças no casamento, 5) Papéis no Lar, 6) Intimidade no casamento, 7) Lidando com crises, 8) Sonhos a Dois, 9) Desafios de 7 dias, e 10) Casamento é uma missão divina.",
    },
    {
      question: "Existe garantia de satisfação?",
      answer:
        "Sim, oferecemos garantia de 7 dias. Se você não ficar satisfeito com o conteúdo, basta nos enviar um e-mail solicitando o reembolso dentro desse período.",
    },
    {
      question: "O e-book é baseado em qual denominação cristã?",
      answer:
        "O conteúdo é baseado em princípios bíblicos universais e não está vinculado a nenhuma denominação específica. Cristãos de todas as denominações podem se beneficiar do material.",
    },
    {
      question: "Como funciona a planilha de controle financeiro?",
      answer:
        "A planilha é um arquivo Google Sheets completo com categorias de receitas, despesas e poupança. É uma ferramenta prática para ajudar o casal a organizar suas finanças juntos.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-[#7b4c2d]/20 py-4">
          <button
            className="flex justify-between items-center w-full text-left font-medium text-lg text-[#7b4c2d]"
            onClick={() => toggleFaq(index)}
          >
            {faq.question}
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 flex-shrink-0" />
            )}
          </button>
          {openIndex === index && <div className="mt-2 text-gray-700">{faq.answer}</div>}
        </div>
      ))}
    </div>
  )
}
