# JCB+ — AERA × Jardim Clube da Barra

Primeira versão visual da proposta executiva JCB+, conforme o briefing V2.

## Desenvolvimento
Requer Node.js 22.13 ou superior.

- Instalação: npm ci
- Prévia: npm run dev
- Compilação: npm run build
- Verificação de tipos: npx tsc --noEmit

React, TypeScript e Tailwind, com estrutura App Router compatível com Next.js e execução Vinext. Os componentes interativos usam Radix/shadcn e Lucide.

## Conteúdo
- app/page.tsx: nove blocos da apresentação
- app/globals.css: identidade visual e adaptações de tela
- components/jcb-digital.tsx: demonstração da central digital
- data/content.ts: pilares e escopos
- public/images: marca fornecida, moodboard e imagem conceitual

O valor proposto é R$ 2.000/mês, com período inicial sugerido de 90 dias. Projetos especiais e produções adicionais são orçados separadamente.

## Limites da demonstração
Não há backend de produto, autenticação de moradores, banco de dados ou IA funcional. A enquete mantém uma seleção apenas em memória, sem enviar dados. As perguntas frequentes usam respostas fixas. Eventos, projetos e a imagem do jardim são ilustrativos.

A marca e o moodboard vieram dos arquivos fornecidos no projeto. A imagem do jardim foi gerada como referência visual e não é uma fotografia do condomínio. Manrope via Google Fonts, com fallback local de sistema.
