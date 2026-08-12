// Typed event tracking layer for Benestudio

export type AnalyticsEvent =
  | { name: "page_view"; path: string }
  | { name: "view_work" }
  | { name: "view_project"; project_name: string }
  | { name: "start_project_click"; location: string }
  | { name: "begin_inquiry" }
  | { name: "submit_inquiry"; service: string; timeline: string }
  | { name: "view_interior_designers" }
  | { name: "view_live_project"; project_name: string; url: string }
  | { name: "email_click"; location: string }
  | { name: "whatsapp_click"; location: string };

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  // Log event in development mode or pass to window.gtag / dataLayer if available
  if (import.meta.env.DEV) {
    console.log("[Analytics Event]:", event);
  }

  // Window dataLayer integration
  const windowWithDataLayer = window as unknown as { dataLayer?: unknown[] };
  if (windowWithDataLayer.dataLayer) {
    windowWithDataLayer.dataLayer.push({
      event: event.name,
      ...event,
    });
  }
}
