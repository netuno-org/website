import React from "react";
import Item from "./Item";
import "./index.less";

const FuncionalityNetuno = (
    {
        type,
        items,
    }) => {
    const children = [];
    for (const item of items) {
        children.push(<Item key={item.uid} {...{ type, ...item }} />);
    }

    return (
        <div className="funcionality">
            <div className='funcionality__container'>
                {children}
            </div>
        </div>
    );
}
export default FuncionalityNetuno;
