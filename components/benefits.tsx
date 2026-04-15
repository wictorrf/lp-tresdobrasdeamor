import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Heart,
  MessageCircle,
  DollarSign,
  HandIcon as PrayingHands,
  Users,
  ShieldCheck,
  Sparkles,
  CalendarClock,
  Target,
} from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: <BookOpen className="h-10 w-10 text-[#7b4c2d]" />,
      title: "Introdução: O Propósito do Casamento",
      description:
        'O que é casamento aos olhos de Deus? Gênesis 2:24 — "Por isso, deixa o homem pai e mãe e se une à sua mulher..."',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-[#7b4c2d]" />,
      title: "A Trindade do Amor",
      description:
        'A importância de colocar Deus no centro. Eclesiastes 4:12 — "Um cordão de três dobras não se rompe facilmente"',
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-[#7b4c2d]" />,
      title: "Comunicação que edifica",
      description: 'Como ter conversas que constroem e não ferem. Provérbios 15:1 — "A resposta branda desvia o furor"',
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#7b4c2d]" />,
      title: "Finanças no casamento",
      description:
        'O perigo de esconder gastos e as "pequenas raposas" que destroem o lar. Provérbios 21:5 — "Os planos bem elaborados levam à fartura"',
    },
    {
      icon: <Users className="h-10 w-10 text-[#7b4c2d]" />,
      title: "Papéis no Lar",
      description:
        "Efésios 5:22-33 com uma interpretação prática e equilibrada. Como servir um ao outro com amor, sem disputas de poder.",
    },
    {
      icon: <Heart className="h-10 w-10 text-[#7b4c2d]" />,
      title: "Intimidade no casamento",
      description:
        "Cânticos dos Cânticos como inspiração. Conversas sobre sexualidade com sabedoria. A importância da intimidade emocional e física.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#7b4c2d]" />,
      title: "Lidando com crises",
      description: 'Como enfrentar lutas sem "ameaçar com separação". O perdão como estilo de vida — Colossenses 3:13',
    },
    {
      icon: <Target className="h-10 w-10 text-[#7b4c2d]" />,
      title: "Sonhos a Dois",
      description: 'Como alinhar sonhos pessoais com a missão do casal. Habacuque 2:2 — "Escreve a visão..."',
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-[#7b4c2d]" />,
      title: "Desafios de 7 dias",
      description: "Um desafio prático de 7 dias com orações e tarefas leves para fortalecer o relacionamento.",
    },
    {
      icon: <PrayingHands className="h-10 w-10 text-[#7b4c2d]" />,
      title: "Casamento é uma missão divina",
      description: "Uma mensagem inspiradora final + chamada para recomeçar com propósito todos os dias.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <Card key={index} className="border-2 border-[#7b4c2d]/20 bg-white/80">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-2 rounded-full bg-[#d7e6e6]">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#7b4c2d]">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
