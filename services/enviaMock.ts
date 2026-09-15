// DEMO ONLY. Cambiar a "envia" y reemplazar quoteShipping con Envia.com API.
export const shippingProvider: "mock" | "envia" = "mock";
export const mockShippingQuotes = [
  { carrier: "ESTAFETA", service: "Estándar", eta: "3–5 días", price: 99 },
  { carrier: "FEDEX", service: "Express", eta: "1–2 días", price: 179 },
  { carrier: "DHL", service: "Express", eta: "1–2 días", price: 199 },
];
export async function generateMockLabel() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { trackingNumber: "BN239485MX", simulated: true };
}
