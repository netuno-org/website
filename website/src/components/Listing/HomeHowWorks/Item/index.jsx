import React from "react";
import { Col } from "antd";
import "./index.less";

function Item({ section, type, image, image_title, image_alt, title, content, link }) {
    const imageSrc =
        image?.indexOf("base64") === -1
            ? `/cluar/images/page_${section}/${image}`
            : image;

    return (
        <Col span={12} className={`how-works__item how-works__item--${type}`}>
            <div className="how-works__item-card">
                <span className="how-works__item-title">{title}</span>
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    className="how-works__item-p"
                />
                <div className="how-works__item-image">
                    <img
                        className="how-works__item-bgimage"
                        src={imageSrc}
                        alt={image_alt}
                        title={image_title}
                    />
                </div>
            </div>
        </Col>
    );
}

export default Item;
