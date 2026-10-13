import React from "react";
import "./index.less";

function Item({ title, content, section, image, image_alt, image_title }) {
    const imageSrc =
        image?.indexOf("base64") === -1
            ? `/cluar/images/page_${section}/${image}`
            : image;

    return (
        <article className="tool-card">
            <img
                className="tool-card__image"
                src={imageSrc}
                alt={image_alt}
                title={image_title}
                loading="lazy"
            />
            <div className="tool-card__body">
                <h3 dangerouslySetInnerHTML={{ __html: title }} className="tool-card__title" />
                <p dangerouslySetInnerHTML={{ __html: content }} className="tool-card__text" />
                <div className="tool-card__stack"></div>
            </div>
        </article>
    );
}
export default Item;