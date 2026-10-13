import React from "react";
import Item from "./Item";
import "./index.less";

function MadeWith({ type, items }) {
    const children = [];

    if (items && Array.isArray(items)) {
        for (const item of items) {
            children.push(<Item key={item.uid} {...{ type, ...item }} />);
        }
    }

    return (
        <section className="home__section home__section--tight">
            {children}
        </section>
    );
}
export default MadeWith;