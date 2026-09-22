import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Check,
  Layers,
  MessageSquare,
  Users,
  Eye,
  Sparkles,
  Plus,
} from "lucide-react";
import Digital from "@/components/jcb-digital";
import BrandFilmPlayer from "@/components/brand-film";
import PageMotion from "@/components/page-motion";
import AvisoExemplo from "@/components/aviso-exemplo";
import {
  problems,
  pillars,
  recurring,
  separate,
  plan,
  nextSteps,
  contact,
} from "@/data/content";

const pillarIcons = [Layers, MessageSquare, Users, Eye, Sparkles];
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  return (
    <>
      <PageMotion />
      <a className="skip-link" href="#proposta">
        Pular para a proposta
      </a>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="+JCB — início">
          <img src="/images/logo.svg" width="27" height="39" alt="" />
          <span>
            Jardim
            <br />
            Clube da Barra
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#proposta">A proposta</a>
          <a href="#digital">+JCB Digital</a>
          <a className="nav-investment" href="#investimento">
            Investimento <ArrowUpRight size={15} />
          </a>
        </nav>
        <img
          className="aera-logo"
          src="/brand/aera-white.webp"
          alt="AERA"
          width="1868"
          height="461"
        />
      </header>
      <main id="inicio">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              AERA <span>×</span> JARDIM CLUBE DA BARRA
            </p>
            <h1 id="hero-title" className="hero-brand">
              <span className="sr-only">+JCB</span>
              <img src="/brand/plus-jcb.svg" alt="" width="2580" height="748" />
            </h1>
            <h2 className="hero-message">
              <span>Mais informação.</span>
              <span>Mais participação.</span>
              <span>Mais JCB.</span>
            </h2>
            <p className="hero-description">
              A AERA organiza os avisos, explica as melhorias e divulga as
              atividades do JCB para facilitar o dia a dia da gestão e dos
              moradores.
            </p>
            <a className="primary-link" href="#proposta">
              Veja como podemos ajudar <ArrowDown size={18} />
            </a>
            <p className="hero-note">Uma iniciativa AERA para o JCB.</p>
          </div>
          <figure className="hero-visual">
            <BrandFilmPlayer />
            <div className="photo-caption">
              <span>Natureza. Convívio. Futuro.</span>
              <span>Referência visual</span>
            </div>
            <a className="hero-preview" href="#digital">
              <div className="preview-top">
                <img
                  className="preview-brand"
                  src="/brand/plus-jcb.svg"
                  alt="+JCB"
                  width="2580"
                  height="748"
                />
                <span className="concept-tag">Conceito digital</span>
              </div>
              <div className="preview-bottom">
                <span>
                  O JCB,
                  <br />
                  mais perto.
                </span>
                <span className="circle-arrow">
                  <ArrowUpRight size={21} />
                </span>
              </div>
              <div className="preview-line">Informação que aproxima.</div>
            </a>
          </figure>
        </section>
        <div className="hero-baseline page-width">
          <span>Comunicação clara para o dia a dia do JCB.</span>
          <span>
            Tradição <i /> Convívio <i /> Natureza <i /> Futuro
          </span>
        </div>
        <section
          id="proposta"
          className="opportunity section page-width"
          aria-labelledby="opportunity-title"
        >
          <div>
            <SectionLabel>O que podemos melhorar</SectionLabel>
            <h2 id="opportunity-title">
              A informação precisa chegar.
              <br />
              <span className="muted-heading">E ser fácil de entender.</span>
            </h2>
          </div>
          <div className="opportunity-copy">
            <p>
              A gestão tem obras, manutenção, eventos e decisões para comunicar.
              O +JCB ajuda a explicar tudo isso de forma simples.
            </p>
            <p>
              A proposta parte de situações que podem dificultar essa rotina:
            </p>
          </div>
          <div className="pain-grid">
            {problems.map((problem) => (
              <article key={problem.title}>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
                <p className="pain-response">
                  <strong>Como ajudamos</strong>
                  {problem.response}
                </p>
              </article>
            ))}
          </div>
          <div className="value-flow">
            <span>A gestão informa</span>
            <ArrowRight aria-hidden="true" />
            <span>A AERA organiza</span>
            <ArrowRight aria-hidden="true" />
            <span>O morador entende</span>
          </div>
        </section>
        <section
          id="exemplo"
          className="example-section section page-width"
          aria-labelledby="example-title"
        >
          <div className="section-heading">
            <div>
              <SectionLabel>Na prática</SectionLabel>
              <h2 id="example-title">
                O mesmo aviso.
                <br />
                <span className="muted-heading">Agora fácil de entender.</span>
              </h2>
            </div>
            <div>
              <p>
                Um exemplo de como a AERA transforma um comunicado da gestão em
                uma informação que o morador lê em segundos.
              </p>
              <span className="outlined-tag">Exemplo ilustrativo</span>
            </div>
          </div>
          <AvisoExemplo />
        </section>
        <section className="role-section" aria-labelledby="role-title">
          <div className="page-width role-inner">
            <div className="role-heading">
              <SectionLabel>Como funciona</SectionLabel>
              <h2 id="role-title">
                A gestão traz a informação.
                <br />A AERA prepara a comunicação.
              </h2>
              <p>
                Organizamos as prioridades com a administração e transformamos
                as informações em textos e materiais visuais. A gestão valida o
                conteúdo para divulgação nos canais do condomínio.
              </p>
            </div>
            <div
              className="role-diagram"
              data-motion="flow"
              aria-label="A gestão informa, a AERA prepara os materiais e o morador acompanha"
            >
              <div>
                <span>Gestão</span>
                <small>Compartilha informações e prioridades</small>
              </div>
              <ArrowDown size={22} />
              <div className="role-focus">
                <img
                  className="role-brand"
                  src="/brand/plus-jcb-white.svg"
                  alt="+JCB"
                  width="2580"
                  height="748"
                />
                <span>
                  Comunicação<small>A AERA prepara os materiais</small>
                </span>
              </div>
              <ArrowDown size={22} />
              <div>
                <span>Morador</span>
                <small>Entende os avisos e acompanha as novidades</small>
              </div>
            </div>
            <p className="role-footer">
              Usamos os canais que o JCB já tem, como WhatsApp e murais, com
              informações mais fáceis de ler e encontrar.
            </p>
          </div>
        </section>
        <section
          id="pilares"
          className="pillars section page-width"
          aria-labelledby="pillars-title"
        >
          <div className="section-heading">
            <div>
              <SectionLabel>Serviços na prática</SectionLabel>
              <h2 id="pillars-title">
                O que a AERA faz
                <br />
                pelo JCB.
              </h2>
            </div>
            <p>
              Da criação de um aviso à apresentação de uma melhoria: veja os
              serviços e exemplos de materiais que podemos preparar.
            </p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <article className="pillar" key={pillar.title}>
                  <Icon size={26} strokeWidth={1.3} aria-hidden="true" />
                  <p className="pillar-brand">+JCB</p>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <ul>
                    {pillar.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <div
            className="applications-grid"
            data-motion="photos"
            aria-label="Referências de aplicação"
          >
            <figure>
              <img
                src="/images/jardins.webp"
                alt="Paisagismo com palmeiras e espaços de convivência, em imagem fornecida"
                width="1448"
                height="1086"
                loading="lazy"
              />
              <figcaption>
                <span>Atividades do condomínio</span>
                <small>Convites, datas e divulgação.</small>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/images/piscina.webp"
                alt="Referência visual da piscina e área de lazer"
                width="1086"
                height="1448"
                loading="lazy"
              />
              <figcaption>
                <span>Uso dos espaços</span>
                <small>Regras e orientações claras.</small>
              </figcaption>
            </figure>
            <figure className="signage-reference">
              <img
                src="/images/sinalizacao-direcional.webp"
                alt="Referência de totem direcional em aço corten, integrado ao paisagismo"
                width="736"
                height="967"
                loading="lazy"
              />
              <figcaption>
                <span>Placas e sinalização</span>
                <small>Referência de sinalização.</small>
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          id="digital"
          className="digital-section section"
          aria-labelledby="digital-title"
        >
          <div className="page-width">
            <div className="section-heading">
              <div>
                <SectionLabel>+JCB Digital</SectionLabel>
                <h2 id="digital-title">
                  Avisos, agenda e dúvidas.
                  <br />
                  Em um lugar fácil de consultar.
                </h2>
              </div>
              <div>
                <p>
                  Uma ideia para reunir comunicados, novidades sobre obras,
                  eventos e perguntas frequentes. Abaixo, você pode testar uma
                  demonstração.
                </p>
                <span className="outlined-tag">
                  Demonstração interativa · proposta futura
                </span>
              </div>
            </div>
            <Digital />
            <div className="digital-footnote">
              <p>Clique nas abas para ver exemplos de conteúdo.</p>
              <p>
                Esta central ainda não está em operação. O desenvolvimento faz
                parte do acompanhamento mensal.
              </p>
            </div>
          </div>
        </section>
        <section
          className="special-section section page-width"
          aria-labelledby="special-title"
        >
          <figure className="moodboard">
            <a
              href="/images/moodboard.webp"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir moodboard +JCB em tamanho completo"
            >
              <img
                src="/images/moodboard.webp"
                alt="Novo moodboard +JCB: símbolo oficial, Playfair Display e Montserrat, paleta natural, fotos e estudos de sinalização"
                width="1448"
                height="1086"
                loading="lazy"
              />
            </a>
            <figcaption>
              <span>Direção visual +JCB · estudo de aplicação</span>
              <a href="/images/moodboard.webp" target="_blank" rel="noreferrer">
                Ampliar <ArrowUpRight size={14} />
              </a>
            </figcaption>
          </figure>
          <div>
            <SectionLabel>Direção visual</SectionLabel>
            <h2 id="special-title">
              O ponto de partida
              <br />
              da identidade +JCB.
            </h2>
            <p>
              O moodboard reúne o símbolo oficial, as fontes, as cores e as
              referências de sinalização. No primeiro mês, ele vira o padrão
              dos comunicados do JCB.
            </p>
          </div>
        </section>
        <section
          id="atuacao"
          className="operating section page-width"
          aria-labelledby="operating-title"
        >
          <div className="section-heading">
            <div>
              <SectionLabel>O que está incluído</SectionLabel>
              <h2 id="operating-title">
                O que entra no mensal.
                <br />O que é cobrado à parte.
              </h2>
            </div>
            <p>
              A rotina de comunicação está no mensal. Uma nova área, um vídeo
              ou um evento maior pede um projeto à parte.
            </p>
          </div>
          <div className="scope-grid">
            <div className="included">
              <div className="scope-heading">
                <h3>Incluído no mensal</h3>
                <span>Escopo inicial</span>
              </div>
              <ul>
                {recurring.map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="excluded">
              <div className="scope-heading">
                <h3>Orçamento separado</h3>
                <span>Conforme a demanda</span>
              </div>
              <ul>
                {separate.map((item) => (
                  <li key={item}>
                    <Plus size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Cada projeto tem entregas, prazo e valor aprovados pela gestão
                antes de começar.
              </p>
            </div>
          </div>
        </section>
        <section
          id="plano"
          className="plan-section section page-width"
          aria-labelledby="plan-title"
        >
          <div className="section-heading">
            <div>
              <SectionLabel>Os primeiros meses</SectionLabel>
              <h2 id="plan-title">
                O que acontece
                <br />
                em cada mês.
              </h2>
            </div>
            <p>
              Como o trabalho começa, com entregas definidas para a gestão
              acompanhar o avanço desde o primeiro mês.
            </p>
          </div>
          <ol className="plan-timeline" data-motion="flow">
            {plan.map((phase) => (
              <li key={phase.month}>
                <span className="plan-month">{phase.month}</span>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
                <ul>
                  {phase.deliverables.map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="plan-milestone">
                  <strong>Ao final do mês</strong>
                  {phase.milestone}
                </p>
              </li>
            ))}
          </ol>
        </section>
        <section
          id="investimento"
          className="investment-section page-width"
          aria-labelledby="investment-title"
        >
          <div className="investment-main">
            <SectionLabel>Investimento</SectionLabel>
            <h2 id="investment-title">
              Comunicação organizada.
              <br />
              Acompanhamento mensal.
            </h2>
            <div className="price-block">
              <div className="price">
                <span>R$</span> 2.160<small>/ mês</small>
              </div>
              <p className="price-description">
                Valor mensal para iniciar e acompanhar
                <br />a comunicação do +JCB.
              </p>
            </div>
          </div>
        </section>
        <section
          className="closing section page-width"
          aria-labelledby="closing-title"
        >
          <div>
            <SectionLabel>Próximos passos</SectionLabel>
            <h2 id="closing-title">
              Para começar,
              <br />
              três passos.
            </h2>
            <ol className="next-steps">
              {nextSteps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-number">{i + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="closing-actions">
              <a
                className="primary-link"
                href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.subject)}`}
              >
                Agendar a conversa de alinhamento <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#plano">
                Rever o plano dos primeiros meses
              </a>
            </div>
          </div>
          <div className="closing-mark">
            <img
              src="/brand/plus-jcb.svg"
              alt="+JCB"
              width="2580"
              height="748"
            />
            <p>
              Fazer também
              <br />é comunicar.
            </p>
          </div>
        </section>
      </main>
      <footer className="page-width">
        <div>
          <img
            className="aera-logo"
            src="/brand/aera-white.webp"
            alt="AERA"
            width="1868"
            height="461"
          />
          <p>Estratégia · Comunicação · Tecnologia</p>
        </div>
        <span>
          Jardim Clube da Barra
          <br />
          Proposta de atuação contínua
        </span>
        <a href="#inicio">
          Voltar ao início <ArrowUpRight size={17} />
        </a>
      </footer>
    </>
  );
}
