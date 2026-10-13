// Painéis ilustrativos (sem screenshot real ainda) usados dentro do HeroSlider.
// Seguem o mesmo espírito dos "campos falsos" do projeto de mockups: formas
// simples em CSS/SVG que comunicam a ideia sem precisar de uma captura real.

import "./index.less";

/** 1. Diagrama — entidades ligadas, representando o modelo de dados. */
export function DiagramPanel() {
    const boxes = [
        { label: "Cliente", x: 10, y: 14 },
        { label: "Pedido", x: 88, y: 60 },
        { label: "Produto", x: 10, y: 106 },
    ];
    return (
        <div className="hero-panel hero-panel--diagram">
            <svg className="hero-panel__lines" aria-hidden>
                <line x1="46" y1="26" x2="140" y2="72" stroke="rgba(120,190,255,.25)" strokeDasharray="3 4" />
                <line x1="46" y1="118" x2="140" y2="80" stroke="rgba(120,190,255,.25)" strokeDasharray="3 4" />
            </svg>
            {boxes.map((b) => (
                <div key={b.label} className="hero-panel__box" style={{ left: b.x, top: b.y }}>
                    {b.label}
                </div>
            ))}
        </div>
    );
}

/** 2. Form/Fields Builder — usa a captura real que já temos. */
export function FormBuilderPanel({ image }) {
    return <img src={image} alt="Construtor de campos" loading="lazy" className="hero-panel__image" />;
}

/** 3. Form no Backoffice — a listagem gerada automaticamente. */
export function GeneratedFormPanel() {
    return (
        <div className="hero-panel hero-panel--list">
            <div className="hero-panel__list-head">
                <span>CLIENTE</span>
                <span>ESTADO</span>
            </div>
            {[70, 55, 82].map((w, i) => (
                <div key={i} className="hero-panel__list-row">
                    <div className="hero-panel__list-bar" style={{ maxWidth: `${w}%` }} />
                    <span className={`hero-panel__badge ${i === 1 ? "hero-panel__badge--active" : ""}`}>
                        {i === 1 ? "ativo" : "pendente"}
                    </span>
                </div>
            ))}
        </div>
    );
}

/** 4. Service-Code — usa a captura real do editor. */
export function ServiceCodePanel({ image }) {
    return <img src={image} alt="Código do serviço" loading="lazy" className="hero-panel__image" />;
}

/** 5. OpenAPI — lista de endpoints gerados automaticamente. */
export function OpenApiPanel() {
    const routes = [
        { method: "GET", path: "/services/pedidos", tone: "cyan" },
        { method: "POST", path: "/services/pedidos", tone: "green" },
        { method: "DELETE", path: "/services/pedidos/{id}", tone: "red" },
    ];
    return (
        <div className="hero-panel hero-panel--api">
            {routes.map((r) => (
                <div key={r.method + r.path} className="hero-panel__route">
                    <span className={`hero-panel__method hero-panel__method--${r.tone}`}>{r.method}</span>
                    <span className="hero-panel__path">{r.path}</span>
                </div>
            ))}
        </div>
    );
}

/** 6. Service-Client — trecho a consumir o serviço a partir do frontend. */
export function ServiceClientPanel() {
    const lines = [
        { t: "const res = await fetch(", c: "#7FA0C8" },
        { t: "  '/services/pedidos'", c: "#7FE7F5" },
        { t: ")", c: "#7FA0C8" },
        { t: "const data = await res.json()", c: "#7FA0C8" },
    ];
    return (
        <div className="hero-panel hero-panel--code">
            {lines.map((l, i) => (
                <span key={i} style={{ color: l.c }}>
                    {l.t}
                </span>
            ))}
        </div>
    );
}
