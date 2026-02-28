import React from "react";
import Cluar from '../../../common/Cluar';
import { Row, Col, Button } from "antd";
import "./index.less";

function CallDiscord({ content, imageSrc, imageStyle, image_alt, image_title, title }) {
    return (
        <div className="content__call-discord">
            <Row align='middle' justify="center">
                <Col xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={12}>
                    <div className="container-text">
                        <h1 data-sal="slide-down"
                            data-sal-duration="2000"
                            data-sal-easing="ease-out-cubic"
                            dangerouslySetInnerHTML={{ __html: Cluar.plainTitle(title) }}
                        />
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                        <Button>Junte-se a nós</Button>
                    </div>
                </Col>
                <Col xs={24}
                    sm={24}
                    md={16}
                    lg={14}
                    xl={12}>
                    <div className="content__call-discord-image">
                        <img src={imageSrc}
                            alt={image_alt}
                            title={image_title}
                            style={imageStyle} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default CallDiscord;
