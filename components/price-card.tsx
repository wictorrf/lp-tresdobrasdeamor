import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Download, FileSpreadsheet, Calendar } from "lucide-react"

export function PriceCard() {
  return (
    <Card className="w-full max-w-md border-2 border-[#7b4c2d]/20 shadow-lg">
      <CardHeader className="bg-[#7b4c2d] text-white text-center py-6">
        <h3 className="text-2xl font-bold">E-book Três Dobras de Amor</h3>
        <p className="text-white/80">Transforme seu casamento hoje</p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex justify-center mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 line-through">De R$50,00 por apenas:</p>
            <p className="text-5xl font-bold text-[#7b4c2d]">R$37,00</p>
            <p className="text-sm text-gray-500">Pagamento único</p>
          </div>
        </div>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#7b4c2d] mt-0.5 flex-shrink-0" />
            <span>E-book completo com 10 capítulos</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#7b4c2d] mt-0.5 flex-shrink-0" />
            <span>Exercícios práticos para aplicar imediatamente</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#7b4c2d] mt-0.5 flex-shrink-0" />
            <span>Versículos e reflexões bíblicas para cada tema</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#7b4c2d] mt-0.5 flex-shrink-0" />
            <span>Acesso imediato após a compra</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#7b4c2d] mt-0.5 flex-shrink-0" />
            <span>Garantia de 7 dias ou seu dinheiro de volta</span>
          </li>
        </ul>

        <div className="bg-[#d7e6e6]/50 p-4 rounded-lg mb-6">
          <h4 className="font-bold text-[#7b4c2d] mb-2 text-center">BÔNUS EXCLUSIVOS</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FileSpreadsheet className="h-5 w-5 text-[#7b4c2d] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Planilha de Controle Financeiro do Casal</strong> - Organize as finanças do seu lar com
                facilidade
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Calendar className="h-5 w-5 text-[#7b4c2d] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Desafio Visual de 7 Dias de Oração</strong> - Fortaleça sua vida espiritual como casal
              </span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 pb-6">
      <Button asChild className="w-full bg-[#7b4c2d] hover:bg-[#7b4c2d]/90 text-white rounded-full py-6 text-lg">
            <a href={process.env.NEXT_PUBLIC_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Comprar Agora   
            </a>
      </Button>
        <p className="text-xs text-center text-gray-500">Pagamento 100% seguro via PIX, cartão de crédito ou boleto</p>
      </CardFooter>
    </Card>
  )
}
