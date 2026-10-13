import React from "react";
import Item from "./Item";
import "./index.less";

function Polyglot({ type, items }) {
    const children = [];

    if (items && Array.isArray(items)) {
        for (const item of items) {
            children.push(<Item key={item.uid} {...{ type, ...item }} />);
        }
    }

    return (
        <section className="polyglot__section polyglot__section--tight">
            {children}
        </section>
    );
}
export default Polyglot;