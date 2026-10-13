import React from "react";
import Item from "./Item";
import "./index.less";

function ToolCard({ items, type }) {
    const children = [];

    for (const item of items) {
        children.push(<Item key={item.uid} {...{ type, ...item }} />);
    }

    return (
        <section className="home__section home__section--wide">
            <div className="ecosystem__tools">
                {children}
            </div>
        </section>
    );
}
export default ToolCard;