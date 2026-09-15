// DEMO ONLY: no almacena tarjetas ni ejecuta cargos.
// Sustituir con el SDK tokenizado de la pasarela elegida.
export async function processMockPayment() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { approved: true, simulated: true };
}
