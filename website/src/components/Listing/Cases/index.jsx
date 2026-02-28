import React from "react";
import Item from "./Item";
import "./index.less"

const Cases = (
    {
        type,
        title,
        content,
        items,
    }) => {
    const children = [];
    for (const item of items) {
        children.push(<Item key={item.uid} {...{ type, ...item }} />);
    }
    return (
        <div className="cases-container">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className="cases-container__header">
                {children}
            </div>
        </div>
    );
}
export default Cases;
