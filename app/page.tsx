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
import { pillars, recurring, separate } from "@/data/content";

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
              <img src="/brand/plus-jcb.svg" alt="" width="592" height="198" />
            </h1>
            <h2 className="hero-message">
              <span>Mais informação.</span>
              <span>Mais participação.</span>
              <span>Mais JCB.</span>
            </h2>
            <p className="hero-description">
              Uma nova camada de comunicação, participação e inteligência para o
              Jardim Clube da Barra.
            </p>
            <a className="primary-link" href="#proposta">
              Conheça a proposta <ArrowDown size={18} />
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
                  width="592"
                  height="198"
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
          <span>Uma visão integrada para o condomínio.</span>
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
            <SectionLabel>A oportunidade</SectionLabel>
            <h2 id="opportunity-title">
              Muita coisa acontece no JCB.
              <br />
              <span className="muted-heading">Nem tudo é percebido.</span>
            </h2>
          </div>
          <div className="opportunity-copy">
            <p>
              Obras, melhorias, eventos, decisões e novos projetos fazem parte
              da experiência de quem vive no condomínio.
            </p>
            <p>
              Quando a informação chega fragmentada entre WhatsApp, PDFs, murais
              e mensagens isoladas, parte desse valor se perde.
            </p>
            <p className="emphasis">
              O +JCB organiza a comunicação, cria continuidade e torna mais
              visível tudo o que a administração realiza.
            </p>
          </div>
          <div className="value-flow">
            <span>Organizar melhor</span>
            <ArrowRight aria-hidden="true" />
            <span>Comunicar melhor</span>
            <ArrowRight aria-hidden="true" />
            <span>Aumentar a percepção de valor</span>
          </div>
        </section>
        <section className="role-section" aria-labelledby="role-title">
          <div className="page-width role-inner">
            <div className="role-heading">
              <SectionLabel>O papel do +JCB</SectionLabel>
              <h2 id="role-title">
                Não é apenas produzir mais.
                <br />É organizar melhor.
              </h2>
              <p>
                Uma camada estratégica entre a administração e o morador. Mais
                clareza, consistência e continuidade para o que já acontece.
              </p>
            </div>
            <div
              className="role-diagram"
              data-motion="flow"
              aria-label="Gestão, informação, experiência do morador"
            >
              <div>
                <span>Gestão</span>
                <small>O que o JCB realiza</small>
              </div>
              <ArrowDown size={22} />
              <div className="role-focus">
                <img
                  className="role-brand"
                  src="/brand/plus-jcb-white.svg"
                  alt="+JCB"
                  width="592"
                  height="198"
                />
                <span>
                  Informação<small>O que o +JCB conecta</small>
                </span>
              </div>
              <ArrowDown size={22} />
              <div>
                <span>Experiência do morador</span>
                <small>O valor que se percebe</small>
              </div>
            </div>
            <p className="role-footer">
              O JCB já faz muita coisa. O +JCB ajuda tudo isso a ser melhor
              comunicado, percebido e compartilhado.
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
              <SectionLabel>Uma atuação conectada</SectionLabel>
              <h2 id="pillars-title">
                Cinco pilares.
                <br />
                Uma mesma direção.
              </h2>
            </div>
            <p>
              Da identidade à participação, cada frente contribui para uma
              experiência mais clara e próxima.
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
                <span>Natureza e convívio</span>
                <small>Comunidade que se aproxima.</small>
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
                <span>Experiência de morar</span>
                <small>Valor em cada espaço.</small>
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
                <span>Informação no território</span>
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
                  Um ponto de encontro.
                  <br />
                  Muitas formas de se conectar.
                </h2>
              </div>
              <div>
                <p>
                  Uma futura central de informação, participação e inteligência,
                  complementar aos canais do condomínio.
                </p>
                <span className="outlined-tag">Visualização conceitual</span>
              </div>
            </div>
            <Digital />
            <div className="digital-footnote">
              <p>Explore as abas para conhecer possibilidades da central.</p>
              <p>
                Conceito ilustrativo. Conteúdos, funcionalidades e
                desenvolvimento sujeitos à definição de escopo.
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
            <SectionLabel>Projetos especiais</SectionLabel>
            <h2 id="special-title">
              Quando o projeto pede mais,
              <br />o +JCB pode ir além.
            </h2>
            <p>
              Frentes específicas para demandas de maior complexidade, com a
              mesma linguagem e visão estratégica.
            </p>
            <div className="special-list">
              <span>Arquitetura e renders</span>
              <span>Apresentações para assembleias</span>
              <span>Vídeos e campanhas especiais</span>
              <span>Experiências e eventos</span>
              <span>Landing pages e implantação</span>
            </div>
            <p className="scope-note">
              <Plus size={16} /> Orçamento separado do escopo mensal.
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
              <SectionLabel>Modelo de atuação</SectionLabel>
              <h2 id="operating-title">
                Uma atuação contínua.
                <br />
                Um parceiro próximo.
              </h2>
            </div>
            <p>
              A AERA acompanha a gestão, organiza as prioridades e dá
              continuidade à comunicação do condomínio.
            </p>
          </div>
          <div className="scope-grid">
            <div className="included">
              <div className="scope-heading">
                <h3>No acompanhamento mensal</h3>
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
                <h3>Sob orçamento específico</h3>
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
                Produções adicionais e demandas de maior porte são dimensionadas
                e orçadas separadamente.
              </p>
            </div>
          </div>
        </section>
        <section
          id="investimento"
          className="investment-section page-width"
          aria-labelledby="investment-title"
        >
          <div className="investment-main">
            <SectionLabel>Investimento</SectionLabel>
            <h2 id="investment-title">
              Um começo leve.
              <br />
              Uma visão de continuidade.
            </h2>
            <div className="price">
              <span>R$</span> 2.000<small>/ mês</small>
            </div>
            <p className="price-description">
              Fee inicial de implantação
              <br />e acompanhamento do +JCB.
            </p>
          </div>
          <div className="investment-details">
            <span className="period-tag">Período inicial sugerido</span>
            <div className="period">
              90 <span>dias</span>
            </div>
            <p>
              Começar, acompanhar e evoluir a partir das necessidades reais do
              condomínio.
            </p>
            <div className="investment-divider" />
            <p>
              Ao final desse período, escopo, volume de demandas e modelo de
              atuação podem ser reavaliados em conjunto.
            </p>
            <p className="investment-note">
              O valor cobre a atuação recorrente descrita nesta proposta.
              Projetos especiais e produções adicionais são orçados
              separadamente.
            </p>
          </div>
        </section>
        <section
          className="closing section page-width"
          aria-labelledby="closing-title"
        >
          <div>
            <SectionLabel>+JCB · Uma iniciativa AERA</SectionLabel>
            <h2 id="closing-title">
              Mais informação.
              <br />
              Mais participação.
              <br />
              Mais JCB.
            </h2>
            <p>
              Uma estrutura contínua para apoiar a administração, aproximar
              moradores e fortalecer a percepção de um condomínio cada vez
              melhor.
            </p>
          </div>
          <div className="closing-mark">
            <img
              src="/brand/plus-jcb.svg"
              alt="+JCB"
              width="592"
              height="198"
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
