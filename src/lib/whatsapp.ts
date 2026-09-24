const WHATSAPP_URL = 'https://wa.me/yusufxterzi';

export function whatsappUrl(message?: string) {
  if (!message) return WHATSAPP_URL;

  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
