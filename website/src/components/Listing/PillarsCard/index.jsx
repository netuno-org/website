import React from "react";
import Reveal from "../Reveal";
import Item from "./Item";
import "./index.less";

function PillarsCard({ title, content, items, type }) {
    const children = [];

    for (const item of items) {
        children.push(<Item key={item.uid} {...{ type, ...item }} />);
    }

    return (
        <section className="home__section home__section--wide">
            <div>
                <span dangerouslySetInnerHTML={{ __html: content }} className="home__eyebrow" />
                <h2 dangerouslySetInnerHTML={{ __html: title }} className="home__section-title" />
            </div>
            <Reveal />
            {children}
        </section>
    );
}
export default PillarsCard;