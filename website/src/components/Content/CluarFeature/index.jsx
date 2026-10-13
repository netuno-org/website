import React from "react";
import Window from "../../Banner/Window";
import Actions from "../../Actions";
import cluar from "../../../assets/mockup-cluar.jpg";
import "./index.less";

const cluarStack = ["Netuno", "React", "Ant Design", "PostgreSQL", "Multilíngue"];

function CluarFeature({ title, content, section, type, actions }) {
    return (
        <div className="ecosystem__body">
            <article className="cluar-feature">
                <div className="cluar-feature__content">
                    <div className="cluar-feature__badges">
                        <span className="cluar-feature__badge">DESTAQUE</span>
                        <span className="cluar-feature__url">cluar.netuno.org</span>
                    </div>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} className="cluar-feature__title" />
                    <p dangerouslySetInnerHTML={{ __html: content }} className="cluar-feature__text" />
                    <div className="cluar-feature__stack">
                        {cluarStack.map((t) => (
                            <span key={t} className="cluar-feature__tag">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="cluar-feature__actions">
                        <Actions {... { section, type, actions }} />
                    </div>
                </div>
                <div className="cluar-feature__visual">
                    <Window title="CLUAR · editor de conteúdo" className="cluar-feature__window">
                        <img src={cluar} alt="Interface do CLUAR" loading="lazy" className="cluar-feature__image" />
                    </Window>
                </div>
            </article>
        </div>
    );
}
export default CluarFeature;