
# Para Ellen Mayanne ❤️

Um site-presente de aniversário, feito com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra http://localhost:3000

## Antes de publicar — adicione as fotos

Coloque as fotos em `public/images/` seguindo os nomes indicados no arquivo
`public/images/COLOQUE_AS_FOTOS_AQUI.txt`:

- `casal-hero.jpg`
- `garanhuns-1.jpg`, `garanhuns-2.jpg`
- `galeria-1.jpg` até `galeria-10.jpg`

## Estrutura do projeto

```
app/
  layout.tsx          -> fontes (script + corpo) e metadados
  page.tsx             -> monta a experiência: intro -> hero -> ... -> final
  globals.css          -> estilos globais, scrollbar, glass card
components/
  IntroExperience.tsx   -> controla envelope -> carta -> liberação do site
  EnvelopeIntro.tsx      -> tela do envelope com selo de coração
  LoveLetter.tsx         -> carta manuscrita com botão "Continuar"
  Hero.tsx               -> título, subtítulo, foto do casal, parallax
  OurStory.tsx            -> timeline: "o dia em que tudo começou" + "Garanhuns"
  Gallery.tsx              -> galeria de 10 fotos com lightbox em tela cheia
  ReasonsWhyILoveYou.tsx   -> cartões viráveis com os motivos
  FinalDeclaration.tsx     -> declaração final, fundo estrelado
  Ending.tsx                -> chuva de corações/pétalas e mensagem final
  ParticlesBackground.tsx   -> partículas, brilhos e corações discretos
```

## Personalizar

- **Textos**: os textos já estão escritos nos próprios componentes — edite
  diretamente o texto dentro de cada arquivo `.tsx`.
- **Cores**: a paleta (azul claro, rosa claro, branco, dourado) está em
  `tailwind.config.ts`, em `theme.extend.colors`.
- **Fontes**: `Great Vibes` (manuscrita, títulos) e `Poppins` (corpo do texto),
  carregadas via `next/font/google` em `app/layout.tsx`.

## Publicar (deploy)

A forma mais simples é publicar no [Vercel](https://vercel.com):

1. Crie um repositório no GitHub com esta pasta.
2. Importe o repositório em vercel.com (gratuito).
3. Clique em "Deploy". Em poucos minutos você terá um link para enviar a Ellen.

## Acessibilidade e performance

- Todas as animações respeitam `prefers-reduced-motion`.
- Imagens usam `loading="lazy"` na galeria.
- O site é totalmente responsivo (celular, tablet, desktop).
# aniversariododengo
# aniversariododengo
=======
# aniversariododengo
