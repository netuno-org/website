import React from "react";
import Item from "./Item";
import { Row, Col } from "antd";
import "./index.less";



const HomeHowWorks = (
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
        <Row className="home-how-works" justify="start">
            <Col span={24} className="home-how-works__header">
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                {title ? <div className="text__title-border"></div> : null}
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </Col>
            <Col span={24} className="home-how-works__items-container">
                <Row gutter={[20, 20]}>
                    {children}
                </Row>
            </Col>
        </Row>
    );
}

export default HomeHowWorks;
