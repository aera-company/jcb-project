# +JCB — AERA × Jardim Clube da Barra

Versão visual atualizada da proposta executiva +JCB, conforme o briefing V2.

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
- public/images: símbolo oficial, novo moodboard e imagens fornecidas

O valor proposto é R$ 2.160/mês, sem período mínimo. Apresentações para assembleias e o desenvolvimento do +JCB Digital estão no mensal; impressão, placas, eventos e outras produções especiais são orçados separadamente.

## Limites da demonstração
Não há backend de produto, autenticação de moradores, banco de dados ou IA funcional. A enquete mantém uma seleção apenas em memória, sem enviar dados. As perguntas frequentes usam respostas fixas. Eventos e projetos da demonstração são ilustrativos. As referências de sinalização não representam obras contratadas.

A marca oficial, as fotografias/referências e o moodboard foram fornecidos na pasta do projeto. O símbolo oficial aparece só no cabeçalho. O +JCB é uma assinatura tipográfica em Montserrat Bold, com o sinal de mais desenhado no peso das letras e o J sem a bandeira superior; as versões em public/brand têm o texto convertido em curvas. Playfair Display e Montserrat são servidas localmente, com licenças incluídas em public/fonts.

## Marca e Remotion

- public/brand/plus-jcb.svg: assinatura +JCB oliva
- public/brand/plus-jcb-white.svg: assinatura +JCB branca
- scripts/create-brand.mjs: geração reprodutível a partir de scripts/assets/montserrat-bold.ttf (instância wght 700 da Montserrat local)
- public/video/parquinho-obra.mp4: timelapse ilustrativo da reforma do parquinho (Kling 3.0), sem autoplay
- remotion/BrandFilm.tsx: filme editorial de 9 segundos, 1080×1200, 30 fps
- public/video/plus-jcb.mp4: versão renderizada, sem áudio
- public/video/plus-jcb.vtt: texto equivalente em português

Recriar a marca: npm run brand:build.
Abrir o Remotion Studio: npm run video:studio.
Renderizar o filme: npm run video:render.

O vídeo é iniciado somente por ação do usuário, sem autoplay. Há controles nativos; a reprodução pausa fora de vista ou ao mudar de aba. Nenhum código de renderização Remotion é carregado na página de apresentação.

## Movimento na interface

A abertura revela a marca e o título uma vez. O fluxo de gestão e as fotografias recebem entradas sutis ao aparecer na tela; as abas usam transições de 180 ms. Os efeitos de hover ficam restritos a dispositivos com ponteiro preciso. A navegação por teclado interrompe os movimentos, e a preferência de movimento reduzido mantém o conteúdo estático. O conteúdo permanece visível sem JavaScript.
