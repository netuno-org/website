import React from "react";
import "./index.less";

function Item({ section, type, image, image_title, image_alt, title, content, link }) {
    const imageSrc =
        image?.indexOf("base64") === -1
            ? `/cluar/images/page_${section}/${image}`
            : image;

    return (
        <div className="cases__items">
        <a href={link} target="_blank" rel="noopener noreferrer" className="cases__link">
            <div className="cases__item">
                <div className='cases__image'>
                    <img
                        src={imageSrc}
                        alt={image_alt}
                        title={image_title}
                    />
                </div>
                <h2
                    dangerouslySetInnerHTML={{ __html: title }}
                    className="cases__title"
                />
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    className="cases__description"
                ></div>
            </div>
        </a>
        </div>
    );
}

export default Item;
