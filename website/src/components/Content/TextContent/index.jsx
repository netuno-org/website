import React from 'react';
import { Row, Col } from 'antd';
import Cluar from '../../../common/Cluar';
import Actions from '../../Actions';
import config from './config.json';
import './index.less';

function TextContent({ section, type, title, content, actions }) {
    return (
        <div className="content-text">
            <Row>
                <Col>
                    <div className="text">
                        <h1 dangerouslySetInnerHTML={{ __html: Cluar.plainTitle(title) }} />
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </Col>
            </Row>
            {config.action && (
                <Row>
                    <Col>
                        <Actions {...{ section, type, actions }} />
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default TextContent;