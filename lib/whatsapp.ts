export function createWhatsAppLink(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, "") // Remove non-digits
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/55${cleanPhone}?text=${encodedMessage}`
}

export const WHATSAPP_NUMBER = "79936181578"
export const WHATSAPP_MESSAGE =
  "Olá! Tudo bem? Gostaria de falar com um especialista da NOC SERVIÇOS para tirar dúvidas ou saber mais sobre os serviços."
