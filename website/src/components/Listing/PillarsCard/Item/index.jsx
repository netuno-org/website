import React from "react";
import "./index.less";

const pillars = [
    {
        num: "01",
        title: "Formulários e campos",
        body: "O formulário define o modelo: tabelas, CRUD e permissões por utilizador e grupo geradas automaticamente.",
        tags: ["MariaDB", "PostgreSQL", "SQL Server", "H2", "CockroachDB"],
        more: "Ver como o CRUD é gerado",
    },
    {
        num: "02",
        title: "Frontend poderoso",
        body: "React, Webpack e Sass/Less ligados de origem, com Ant Design incluído.",
        tags: ["React", "Webpack", "Sass", "Less", "Ant Design"],
        more: "Ver estrutura do projeto",
    },
    {
        num: "03",
        title: "REST poliglota",
        body: "Serviços em seis linguagens, recarregados em tempo real sem reiniciar o servidor.",
        tags: ["JavaScript", "Kotlin", "Groovy", "Python", "Ruby", "Java"],
        more: "Ver documentação poliglota",
    },
    {
        num: "04",
        title: "Integre com o mundo",
        body: "Firebase, REST, SOAP, Excel, Mail, SMS e PDF prontos a chamar.",
        tags: ["Firebase", "SOAP", "Excel", "Mail", "SMS", "PDF"],
        more: "Ver bibliotecas",
    },
];

function Item({ }) {
    return (
        <div className="pillars">
            {pillars.map((p, i) => (
                <div key={p.title} delay={i * 80}>
                    <article className="pillar-card">
                        <div aria-hidden className="pillar-card__orbit">
                            <span className="pillar-card__dot" />
                        </div>

                        <span className="pillar-card__num">{p.num}</span>
                        <h3 className="pillar-card__title">{p.title}</h3>
                        <p className="pillar-card__body">{p.body}</p>
                        <div className="pillar-card__tags">
                            {p.tags.map((t) => (
                                <span key={t} className="pillar-card__tag">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="pillar-card__more">{p.more} →</div>
                    </article>
                </div>
            ))}
        </div>
    );
}
export default Item;