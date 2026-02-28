import React from 'react';
import { Row, Col } from 'antd';

import Cluar from '../../../common/Cluar';
import Actions from '../../Actions';
import config from './config.json';

import './index.less';

const ImageTop = ({ section, type, title, content, image, image_title, image_alt, imageSrc, imageStyle, actions }) => {
    return (
        <div className="content-image-top">
            <Row align='middle'>
                <Col span={24}>
                    <div className="content-image-top__subcontent">
                        <div className="image">
                            <img
                                src={imageSrc}
                                alt={image_alt}
                                title={image_title}
                                style={imageStyle}
                            />
                        </div>
                        <div className="text">
                            <h1
                                data-sal="slide-down"
                                data-sal-duration="2000"
                                data-sal-easing="ease-out-cubic"
                                dangerouslySetInnerHTML={{ __html: Cluar.plainTitle(title) }}
                            />
                            <div
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-easing="ease-out-cubic"
                                dangerouslySetInnerHTML={{ __html: content }}
                            ></div>
                                <Actions {... { section, type, actions }} />
                        </div>
                    </div>
                </Col>
            </Row>
            {config.action && (
                <div>
                    <Actions {... { section, type, actions }} />
                </div>
            )}
        </div>
    );
};

export default ImageTop;