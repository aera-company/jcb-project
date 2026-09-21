"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Home,
  Leaf,
  MessageCircle,
  MessageSquare,
  ClipboardList,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "agora", title: "Agora", icon: Home },
  { id: "melhorias", title: "Melhorias", icon: ClipboardList },
  { id: "agenda", title: "Agenda", icon: CalendarDays },
  { id: "participar", title: "Participar", icon: Users },
  { id: "pergunte", title: "Pergunte", icon: MessageCircle },
];

export default function Digital() {
  const [tab, setTab] = useState("agora");
  const [choice, setChoice] = useState<string | null>(null);
  return (
    <div className="digital-browser">
      <div className="browser-chrome">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>Central +JCB</span>
        <span>Demonstração</span>
      </div>
      <div className="digital-brandbar">
        <div>
          <img
            className="digital-lockup"
            src="/brand/plus-jcb.svg"
            alt="+JCB"
            width="2580"
            height="748"
          />
        </div>
        <span>Seu condomínio, mais próximo.</span>
        <span className="demo-label">Conteúdo ilustrativo</span>
      </div>
      <Tabs value={tab} onValueChange={setTab} className="demo-tabs">
        <TabsList
          className="demo-nav"
          aria-label="Áreas da central digital conceitual"
        >
          {tabs.map(({ id, title, icon: Icon }) => (
            <TabsTrigger className="demo-nav-item" value={id} key={id}>
              <Icon size={18} aria-hidden="true" />
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="demo-content">
          <TabsContent value="agora">
            <div className="demo-title">
              <div>
                <p>JCB Agora</p>
                <h3>Veja o que acontece no JCB.</h3>
              </div>
              <Leaf size={28} strokeWidth={1.2} />
            </div>
            <div className="demo-home-grid">
              <article className="demo-feature">
                <img
                  src="/images/convivencia.webp"
                  alt="Imagem fornecida da área de convivência, usada nesta demonstração"
                  width="1448"
                  height="1086"
                  loading="lazy"
                />
                <div>
                  <span className="demo-kicker">Obras e melhorias</span>
                  <h4>Melhorias que fazem parte do dia a dia.</h4>
                  <Button
                    className="demo-text-button"
                    variant="ghost"
                    onClick={() => setTab("melhorias")}
                  >
                    Ver exemplo de projeto <ArrowUpRight size={16} />
                  </Button>
                </div>
              </article>
              <div className="demo-side">
                <button
                  className="demo-shortcut"
                  onClick={() => setTab("participar")}
                >
                  <Users size={23} strokeWidth={1.5} />
                  <span>
                    <small>Sua participação</small>
                    <strong>
                      O que você gostaria
                      <br />
                      de viver no JCB?
                    </strong>
                  </span>
                  <ArrowUpRight size={17} />
                </button>
                <button
                  className="demo-shortcut"
                  onClick={() => setTab("agenda")}
                >
                  <CalendarDays size={23} strokeWidth={1.5} />
                  <span>
                    <small>Agenda JCB</small>
                    <strong>
                      Veja os eventos
                      <br />e as próximas datas.
                    </strong>
                  </span>
                  <ArrowUpRight size={17} />
                </button>
                <button
                  className="demo-question"
                  onClick={() => setTab("pergunte")}
                >
                  <MessageCircle size={19} />
                  <span>Pergunte ao JCB</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="melhorias">
            <div className="demo-title">
              <div>
                <p>Em andamento e próximos passos</p>
                <h3>Entenda cada etapa do projeto.</h3>
              </div>
              <ClipboardList size={27} strokeWidth={1.2} />
            </div>
            <p className="demo-intro">
              Exemplo de como organizar as informações de um projeto, da
              proposta à entrega.
            </p>
            <article className="project-example">
              <div className="project-photo">
                <img
                  src="/images/sinalizacao-ambiente.webp"
                  alt="Referência de sinalização em aço corten para exemplificar a apresentação de uma proposta"
                  width="736"
                  height="1051"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="demo-pill">Exemplo · proposta em estudo</span>
                <h4>Placas para orientar os moradores</h4>
                <p>
                  Exemplo de como apresentar uma proposta de sinalização: o que
                  muda, onde as placas ficam e quais são os próximos passos.
                </p>
                <ol className="project-steps">
                  <li>
                    <span>1</span>Apresentar a proposta
                  </li>
                  <li>
                    <span>2</span>Definir escopo e cronograma
                  </li>
                  <li>
                    <span>3</span>Acompanhar e comunicar a entrega
                  </li>
                </ol>
              </div>
            </article>
            <p className="demo-disclaimer">
              Projeto ilustrativo. Não representa uma obra contratada ou em
              execução.
            </p>
          </TabsContent>
          <TabsContent value="agenda">
            <div className="demo-title">
              <div>
                <p>Agenda JCB</p>
                <h3>Eventos e reuniões do condomínio.</h3>
              </div>
              <CalendarDays size={27} strokeWidth={1.2} />
            </div>
            <p className="demo-intro">
              Possibilidades para um calendário compartilhado com os moradores.
            </p>
            <div className="agenda-list">
              {[
                {
                  title: "Encontro com a administração",
                  type: "Conversa e participação",
                  description:
                    "Um espaço para acompanhar prioridades e próximos passos.",
                },
                {
                  title: "Um dia ao ar livre",
                  type: "Comunidade e convivência",
                  description:
                    "Uma possibilidade de encontro nos espaços do condomínio.",
                },
                {
                  title: "Apresentação de projetos",
                  type: "Informação e transparência",
                  description:
                    "Ideias e propostas explicadas de um jeito simples.",
                },
              ].map((item) => (
                <article key={item.title}>
                  <div className="agenda-icon">
                    <CalendarDays size={23} strokeWidth={1.3} />
                  </div>
                  <div>
                    <small>{item.type}</small>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <span className="demo-pill">Data a definir</span>
                </article>
              ))}
            </div>
            <p className="demo-disclaimer">
              Eventos ilustrativos, sujeitos ao planejamento e à aprovação da
              administração.
            </p>
          </TabsContent>
          <TabsContent value="participar">
            <div className="demo-title">
              <div>
                <p>Enquetes e consultas</p>
                <h3>Dê sua opinião nas consultas.</h3>
              </div>
              <Users size={27} strokeWidth={1.2} />
            </div>
            <div className="poll-layout">
              <div>
                <span className="demo-pill">Exemplo de consulta</span>
                <h4>Que tipo de encontro você gostaria de ver no JCB?</h4>
                <p>
                  Consultas simples ajudam a conhecer interesses e orientar
                  conversas com a gestão.
                </p>
                <small>
                  Esta é uma demonstração. Sua escolha não será enviada nem
                  salva.
                </small>
              </div>
              <div className="poll-options">
                {[
                  "Atividades ao ar livre",
                  "Encontros culturais",
                  "Conversas com a gestão",
                ].map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    className="poll-option"
                    aria-pressed={choice === option}
                    onClick={() => setChoice(option)}
                  >
                    {option}
                    {choice === option ? (
                      <Check size={18} />
                    ) : (
                      <span className="radio-outline" />
                    )}
                  </Button>
                ))}
                <p className="poll-feedback" role="status">
                  {choice
                    ? "Opção selecionada nesta demonstração. Nenhum voto foi enviado."
                    : "Selecione uma opção para experimentar."}
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="pergunte">
            <div className="demo-title">
              <div>
                <p>Pergunte ao JCB</p>
                <h3>Clareza para as dúvidas do dia a dia.</h3>
              </div>
              <MessageSquare size={27} strokeWidth={1.2} />
            </div>
            <div className="faq-layout">
              <div>
                <span className="demo-pill">Possibilidade futura</span>
                <p>
                  Um assistente com IA poderia consultar informações
                  disponibilizadas pela administração.
                </p>
                <small>
                  Nesta demonstração, as respostas já estão escritas. Um
                  assistente com IA dependeria de um projeto separado.
                </small>
              </div>
              <Accordion type="single" collapsible className="demo-faq">
                <AccordionItem value="projetos">
                  <AccordionTrigger>
                    Onde acompanhar as melhorias?
                  </AccordionTrigger>
                  <AccordionContent>
                    A aba “Melhorias” poderia reunir o objetivo, as etapas e os
                    próximos passos de cada projeto, com informações validadas
                    pela administração.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="participacao">
                  <AccordionTrigger>
                    Como participar das consultas?
                  </AccordionTrigger>
                  <AccordionContent>
                    A área “Participar” poderia reunir enquetes e consultas
                    abertas. Critérios e dinâmica de participação seriam
                    definidos com a gestão.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="avisos">
                  <AccordionTrigger>
                    Onde encontrar os comunicados?
                  </AccordionTrigger>
                  <AccordionContent>
                    Um arquivo organizado poderia facilitar a consulta de avisos
                    e documentos disponibilizados pela administração,
                    complementando os canais existentes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </div>
      </Tabs>
      <div className="demo-bottom">
        <span>Informação · Participação · Proximidade</span>
        <span>
          Também poderia reunir documentos, fotos de antes e depois e resumos da
          gestão.
        </span>
      </div>
    </div>
  );
}
