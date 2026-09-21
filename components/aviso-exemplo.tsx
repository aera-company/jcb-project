import { ArrowRight, CalendarDays, FileText, Forward } from "lucide-react";
import ObraVideo from "@/components/obra-video";

/** Illustrative before/after of one notice. Not a real JCB communication. */
export default function AvisoExemplo() {
  return (
    <>
      <div className="aviso-compare" data-motion="flow">
        <figure className="aviso-before">
          <p className="aviso-side">Antes</p>
          <div
            className="chat-frame"
            aria-label="Exemplo de aviso enviado no grupo de WhatsApp"
          >
            <div className="chat-bubble">
              <span className="chat-forwarded">
                <Forward size={13} aria-hidden="true" /> Encaminhada
              </span>
              <p>
                <strong>COMUNICADO</strong>
                <br />
                Prezados condôminos, comunicamos que, em virtude da necessidade
                de adequação do playground às normas de segurança vigentes,
                serão realizados serviços de substituição dos brinquedos e do
                piso emborrachado, motivo pelo qual o espaço permanecerá
                interditado a partir do dia 13 até a conclusão dos serviços.
                Solicitamos a colaboração de todos para que as crianças não
                utilizem a área durante as obras. Maiores informações na
                administração.
                <br />A Administração
              </p>
              <span className="chat-file">
                <FileText size={16} aria-hidden="true" />
                Comunicado_obra_playground_final_v2.pdf
              </span>
              <span className="chat-time">22:47</span>
            </div>
            <div className="chat-reply">
              Dia 13 de qual mês? Fica fechado até quando?
              <span className="chat-time">22:52</span>
            </div>
            <div className="chat-reply">
              Vão trocar todos os brinquedos?
              <span className="chat-time">23:10</span>
            </div>
          </div>
          <figcaption>
            Texto longo, sem datas e com a informação principal num PDF. As
            dúvidas voltam para a gestão.
          </figcaption>
        </figure>

        <div className="aviso-arrow" aria-hidden="true">
          <ArrowRight size={22} />
        </div>

        <figure className="aviso-after">
          <p className="aviso-side">Depois</p>
          <article
            className="aviso-card"
            aria-label="O mesmo aviso no padrão +JCB"
          >
            <header>
              <img
                src="/brand/plus-jcb.svg"
                alt="+JCB"
                width="2580"
                height="748"
              />
              <span>Obras e melhorias</span>
            </header>
            <h3>
              <i>1</i>Reforma do parquinho
            </h3>
            <p className="aviso-dates">
              <i>2</i>
              <CalendarDays size={17} aria-hidden="true" />
              Fechado de 13 de outubro a 6 de novembro
            </p>
            <div className="aviso-block">
              <strong>
                <i>3</i>O que muda para você
              </strong>
              <ul>
                <li>O parquinho fica fechado e isolado durante a obra.</li>
                <li>Evite passar com crianças perto da área isolada.</li>
              </ul>
            </div>
            <div className="aviso-block">
              <strong>Por que</strong>
              <p>
                Troca dos brinquedos e do piso emborrachado, para atender às
                normas de segurança.
              </p>
            </div>
            <div className="aviso-block aviso-next">
              <strong>
                <i>4</i>Próximo passo
              </strong>
              <p>
                Reabertura prevista para segunda, 9/11. Fotos do andamento na
                sexta, 23/10.
              </p>
            </div>
            <footer>Administração do Jardim Clube da Barra</footer>
          </article>
          <figcaption>
            <span>
              <i>1</i>O assunto no título
            </span>
            <span>
              <i>2</i>As datas à vista
            </span>
            <span>
              <i>3</i>O que muda para o morador
            </span>
            <span>
              <i>4</i>O que vem depois
            </span>
          </figcaption>
        </figure>
      </div>
      <figure className="obra-feature">
        <ObraVideo />
        <figcaption>
          <p className="aviso-side">E a obra vira conteúdo</p>
          <p>
            Na atualização seguinte, o morador vê a obra andando: da retirada do
            parquinho antigo ao piso novo e aos brinquedos montados.
          </p>
          <p className="obra-note">
            Vídeo ilustrativo, gerado a partir de uma foto do parquinho atual e
            de uma imagem conceitual do novo.
          </p>
        </figcaption>
      </figure>
    </>
  );
}
