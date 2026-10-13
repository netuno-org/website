import React from "react";
import "./index.less";

function Ecosystem({ title, content }) {
    return (
        <section className="ecosystem">
            <div className="ecosystem__hero">
                <div className="ecosystem__hero-inner">
                    <div>
                        <span className="ecosystem__eyebrow">ECOSSISTEMA</span>
                        <h1 dangerouslySetInnerHTML={{ __html: title }} className="ecosystem__title" />
                        <p dangerouslySetInnerHTML={{ __html: content }} className="ecosystem__subtitle" />
                    </div>
                </div>
            </div>
        </section >
    );
}
export default Ecosystem;