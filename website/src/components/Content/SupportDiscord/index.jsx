import React from "react";
import { Row, Col } from "antd";
import { FaDiscord } from "react-icons/fa"
import { WechatOutlined } from '@ant-design/icons';
import "./index.less";

function SupportDiscord({ content, Cluar, imageSrc, image_alt, image_title, imageStyle, title }) {
    return (
        <div className="content__support-discord">
            <Row align='middle'>
                <Col xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={12}>
                    <div className='container-img'>
                        <div className='content-image'>
                            <div className="image">
                                <img src={imageSrc}
                                    alt={image_alt}
                                    title={image_title}
                                    style={imageStyle} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={12}>
                    <div className="container-text">
                        <div className="text">
                            <h1 dangerouslySetInnerHTML={{ __html: title }} />
                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                            <div>
                                <a className='discord' href='https://discord.com/channels/898684423116038154/910649961891381267'><FaDiscord /></a>
                                <a className='forum' href='https://forum.netuno.org/'><WechatOutlined /></a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default SupportDiscord;
