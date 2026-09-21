import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "+JCB · Mais informação. Mais participação. Mais JCB.",
  description:
    "A AERA organiza avisos, explica melhorias e divulga atividades para facilitar a comunicação entre a gestão e os moradores do Jardim Clube da Barra.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
