import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "JCB+ · Mais informação. Mais participação. Mais JCB.",
  description: "Uma iniciativa AERA: comunicação, participação e inteligência para aproximar a administração dos moradores do Jardim Clube da Barra.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
