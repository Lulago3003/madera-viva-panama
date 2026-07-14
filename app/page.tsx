"use client";

import { FormEvent, useMemo, useState } from "react";

const WHATSAPP = "50769283203";

const projects = [
  {
    title: "Mesa río en negro",
    detail: "Madera natural + resina pigmentada",
    image: "/galeria/rio-negro.png",
    className: "feature-card",
  },
  {
    title: "Mesa río esmeralda",
    detail: "Diseñada para compartir al aire libre",
    image: "/galeria/rio-verde.png",
    className: "project-card tall",
  },
  {
    title: "Canto vivo",
    detail: "El carácter irrepetible de cada árbol",
    image: "/galeria/madera-viva-02.png",
    className: "project-card",
  },
];

export default function Home() {
  const [unit, setUnit] = useState<"cm" | "pulgadas">("cm");
  const [form, setForm] = useState({
    nombre: "",
    proyecto: "Mesa de comedor",
    largo: "",
    ancho: "",
    alto: "",
    personas: "4–6 personas",
    detalle: "",
  });

  const measureLabel = useMemo(() => (unit === "cm" ? "cm" : "pulgadas"), [unit]);

  const update = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  const sendQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hola, quiero cotizar un proyecto personalizado.",
      form.nombre ? `Mi nombre es ${form.nombre}.` : "",
      `Proyecto: ${form.proyecto}`,
      `Medidas: ${form.largo || "—"} × ${form.ancho || "—"} × ${form.alto || "—"} ${measureLabel} (largo × ancho × alto)`,
      `Uso/personas: ${form.personas}`,
      form.detalle ? `Idea y detalles: ${form.detalle}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav shell" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="Madera Viva, inicio">
            <span className="brand-mark">MV</span>
            <span>MADERA <b>VIVA</b></span>
          </a>
          <div className="nav-links">
            <a href="#proyectos">Proyectos</a>
            <a href="#proceso">El proceso</a>
            <a href="#cotiza">Cotiza</a>
          </div>
          <a className="button button-dark nav-cta" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">CARPINTERÍA ARTESANAL · PANAMÁ</p>
            <h1>La madera tiene<br /><em>una historia.</em></h1>
            <p className="lede">La transformamos en una pieza que será parte de la tuya. Mesas y muebles hechos a medida, desde la selección de la madera hasta el último acabado.</p>
            <div className="hero-actions">
              <a className="button button-accent" href="#cotiza">Crea tu pieza <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#proyectos">Ver trabajos <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-image-wrap">
              <img src="/galeria/madera-viva-01.png" alt="Tabla de madera natural con canto vivo en proceso" />
            </div>
            <div className="hero-note"><span>01</span> CADA VETA ES ÚNICA</div>
          </div>
        </div>
        <div className="hero-bottom shell">
          <span>HECHO A MANO, SIN PRISA.</span>
          <span className="scroll-cue">DESLIZA PARA DESCUBRIR <i>↓</i></span>
        </div>
      </section>

      <section className="intro shell">
        <div className="section-kicker"><span>01</span> NUESTRO OFICIO</div>
        <div className="intro-copy">
          <h2>No fabricamos muebles.<br />Creamos <em>piezas con alma.</em></h2>
          <p>Trabajamos la madera respetando sus formas, nudos y vetas naturales. Cada mesa, barra o mueble nace para adaptarse a tu espacio y acompañarte durante años.</p>
          <a className="text-link" href="#proceso">Conoce el proceso <span aria-hidden="true">→</span></a>
        </div>
        <div className="intro-stamp" aria-label="Trabajo artesanal">
          <span>HECHO</span><b>A MANO</b><span>DESDE PANAMÁ</span>
        </div>
      </section>

      <section className="work-section" id="proyectos">
        <div className="shell section-top">
          <div className="section-kicker light"><span>02</span> PROYECTOS RECIENTES</div>
          <p>Una selección de piezas que ya encontraron su lugar.</p>
        </div>
        <div className="work-grid shell">
          {projects.map((project) => (
            <article className={project.className} key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="project-overlay"><span>{project.detail}</span><h3>{project.title}</h3></div>
            </article>
          ))}
        </div>
        <div className="shell work-footer"><p>¿Tienes una idea diferente?</p><a className="button button-outline" href="#cotiza">Hablemos de tu proyecto <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="process shell" id="proceso">
        <div className="section-kicker"><span>03</span> DE ORIGEN A HOGAR</div>
        <div className="process-header"><h2>El tiempo y las manos<br />hacen la <em>diferencia.</em></h2><p>Tu pieza se construye paso a paso, con comunicación clara y atención a cada detalle.</p></div>
        <div className="process-grid">
          <article><span>01</span><h3>Elegimos</h3><p>Seleccionamos madera con personalidad y definimos juntos el diseño ideal para tu espacio.</p></article>
          <article><span>02</span><h3>Diseñamos</h3><p>Revisamos medidas, uso y acabados para que la pieza funcione tan bien como se ve.</p></article>
          <article><span>03</span><h3>Transformamos</h3><p>Trabajamos, lijamos y protegemos cada superficie a mano, cuidando cada veta.</p></article>
          <article><span>04</span><h3>Entregamos</h3><p>Coordinamos contigo para que tu nueva pieza llegue lista para disfrutarse.</p></article>
        </div>
        <div className="origin-images"><img src="/galeria/origen-tronco.png" alt="Tronco de madera en su origen" /><img src="/galeria/origen-cortes.png" alt="Cortes circulares de madera" /></div>
      </section>

      <section className="quote" id="cotiza">
        <div className="quote-inner shell">
          <div className="quote-copy">
            <p className="eyebrow">04 · TU IDEA EMPIEZA AQUÍ</p>
            <h2>Cuéntanos qué<br />quieres <em>crear.</em></h2>
            <p>No necesitas tener todos los detalles. Dinos qué imaginas, para qué espacio es y te ayudamos a convertirlo en una pieza posible.</p>
            <div className="measure-guide">
              <b>¿No sabes las medidas?</b>
              <span>Mide el espacio disponible de pared a pared. Te orientamos con las proporciones y alturas recomendadas.</span>
            </div>
          </div>
          <form className="quote-form" onSubmit={sendQuote}>
            <div className="form-heading"><span>COTIZACIÓN PERSONALIZADA</span><i>↗</i></div>
            <label>Tu nombre<input value={form.nombre} onChange={(e) => update("nombre", e.target.value)} placeholder="¿Cómo te llamas?" required /></label>
            <label>¿Qué quieres crear?
              <select value={form.proyecto} onChange={(e) => update("proyecto", e.target.value)}>
                <option>Mesa de comedor</option><option>Mesa de centro</option><option>Barra / isla</option><option>Escritorio</option><option>Mueble a medida</option><option>Otro proyecto</option>
              </select>
            </label>
            <div className="measure-head"><span>Medidas aproximadas</span><div className="unit-switch" aria-label="Unidad de medida"><button type="button" className={unit === "cm" ? "active" : ""} onClick={() => setUnit("cm")}>cm</button><button type="button" className={unit === "pulgadas" ? "active" : ""} onClick={() => setUnit("pulgadas")}>pulg</button></div></div>
            <div className="measurements">
              <label>Largo<input inputMode="decimal" value={form.largo} onChange={(e) => update("largo", e.target.value)} placeholder="Ej. 180" required /></label>
              <label>Ancho<input inputMode="decimal" value={form.ancho} onChange={(e) => update("ancho", e.target.value)} placeholder="Ej. 90" required /></label>
              <label>Alto<input inputMode="decimal" value={form.alto} onChange={(e) => update("alto", e.target.value)} placeholder="Ej. 75" required /></label>
            </div>
            <small>Escribe largo × ancho × alto en {measureLabel}.</small>
            <label>¿Para cuántas personas o qué uso?
              <select value={form.personas} onChange={(e) => update("personas", e.target.value)}><option>4–6 personas</option><option>6–8 personas</option><option>8–10 personas</option><option>Uso individual / escritorio</option><option>Otro uso</option></select>
            </label>
            <label>Describe tu idea<textarea value={form.detalle} onChange={(e) => update("detalle", e.target.value)} placeholder="Estilo, color de resina, lugar donde irá, fecha aproximada…" rows={3} /></label>
            <button className="button button-accent submit" type="submit">Enviar por WhatsApp <span aria-hidden="true">↗</span></button>
            <p className="privacy">Al enviar, se abrirá WhatsApp con tu solicitud lista para compartir.</p>
          </form>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#inicio"><span className="brand-mark">MV</span><span>MADERA <b>VIVA</b></span></a>
        <p>Carpintería artesanal a medida.<br />Panamá.</p>
        <a className="footer-contact" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">+507 6928-3203 <span>↗</span></a>
      </footer>
    </main>
  );
}
