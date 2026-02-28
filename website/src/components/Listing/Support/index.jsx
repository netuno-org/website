import React from "react";
import Item from "./Item";
import "./index.less";

const Support = (
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
        <div className="support">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className="support__header">
                {children}
            </div>
        </div>
    );
}
export default Support;
