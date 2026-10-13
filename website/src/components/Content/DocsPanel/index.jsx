import React from "react";
import Actions from "../../Actions";
import docsPreview from "../../../assets/mockup-cluar.jpg";
import "./index.less";

function DocsPanel({ title, content, section, type, actions }) {
    return (
        <section className="home__section home__section--bottom-only">
            <div className="docs-panel">
                <div>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} className="docs-panel__title" />
                    <p dangerouslySetInnerHTML={{ __html: content }} className="docs-panel__text" />
                    <div className="docs-panel__actions">
                        <Actions {... { section, type, actions }} />
                    </div>
                </div>
                <img src={docsPreview}
                    alt="Prévia da documentação do Netuno"
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="docs-panel__image" />
            </div>
        </section>
    );
}
export default DocsPanel;