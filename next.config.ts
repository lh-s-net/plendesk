import type {NextConfig} from "next";

// @ts-expect-error okErr
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    // Entfernt `console`-Aufrufe in der Produktionsumgebung
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

// Exportieren der erweiterten Konfiguration mit PWA
export default withPWA({
  dest: "public", // Zielordner für PWA-Dateien
  disable: process.env.NODE_ENV === "development", // PWA im Entwicklungsmodus deaktivieren
  register: true, // Automatische Registrierung des Service Workers
  skipWaiting: true, // Überspringen von Wartezeiten beim Aktivieren des Service Workers
})(nextConfig);