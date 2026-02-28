import React from "react";
import { Row, Col } from "antd";
import "./index.less";

function Item({ section, image,  image_title, image_alt, index, title, content }) {
    const imageSrc =
        image?.indexOf("base64") === -1
            ? `/cluar/images/page_${section}/${image}`
            : image;

    return (
        <Row className="grid-container" justify={'space-between'} gutter={[10, 14]} wrap={true}>
            <Col xxl={10} xl={10} lg={10} md={10} sm={24} xs={24} className="grid-container-text">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
                {index == 2 && <a>Saiba Mais</a>}
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} className='grid-container-image'>
                <img src={imageSrc}
                    alt={image_alt}
                    title={image_title} />
            </Col>
        </Row >
    );
}
export default Item;
