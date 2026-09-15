// SHOPIFY DEMO / SIMULATION MODE.
// Reemplazar estas funciones con Shopify Storefront API en producción.
export const commerceProvider: "mock" | "shopify" = "mock";
export const createMockOrder = () => ({ orderNumber: "BN-1048", simulated: true });
