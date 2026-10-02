const APP_SERVICE_WORKER_PATH = "/sw.js";

function isPreviewOrDevelopment() {
  if (!import.meta.env.PROD || typeof window === "undefined") return true;

  const { hostname, search } = window.location;
  return (
    window.self !== window.top ||
    hostname.startsWith("id-preview--") ||
    hostname.startsWith("preview--") ||
    hostname === "lovableproject.com" ||
    hostname.endsWith(".lovableproject.com") ||
    hostname === "lovableproject-dev.com" ||
    hostname.endsWith(".lovableproject-dev.com") ||
    hostname === "beta.lovable.dev" ||
    hostname.endsWith(".beta.lovable.dev") ||
    (new URLSearchParams(search).has("sw") &&
      new URLSearchParams(search).get("sw") === "off")
  );
}

async function unregisterAppWorker() {
  if (!("serviceWorker" in navigator)) return;
  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(
    registrations
      .filter((registration) => registration.active?.scriptURL.endsWith(APP_SERVICE_WORKER_PATH))
      .map((registration) => registration.unregister()),
  );
}

export async function registerOfflineSupport() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  if (isPreviewOrDevelopment()) {
    await unregisterAppWorker();
    return;
  }

  const { registerSW } = await import("virtual:pwa-register");
  registerSW({ immediate: true });
}