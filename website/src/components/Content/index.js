import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import logo from '../../assets/images/netunologolight.svg';

import Actions from '../Actions';

import './index.less';

function Content({ section, type, title, content, image, image_title, image_alt, image_max_width, actions }) {
  let layout = null;
  const imageStyle = {};
  if (image_max_width > 0) {
    imageStyle["maxWidth"] = `${image_max_width}px`;
  }
  if (type === 'text') {
    layout = (
      <div className="content__text">
        <div className="text">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          {title ? <div className="text__title-border"></div> : null}
          {/*
          <div className='ring__container'>
            <div className='ring'></div>
            <div className='ring'></div>
            <div className='ring'></div>
          </div>
        </div>
          */}
        </div>
      </div>
    );
  } else if (type === 'image-left') {
    layout = (
      <div className="content__image-left">
        <Row>
          <Col md={8}>
            <div className="image">
              <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} style={imageStyle} />
            </div>
          </Col>
          <Col md={16}>
            <div className="text">
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else if (type === 'image-right') {
    layout = (
      <div className="content__image-right">
        <Row>
          <Col md={14}>
            <div className="text">
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
              <Button>Junte-se a nós</Button>
            </div>
          </Col>
          <Col md={10}>
            <div className='content_ilustration'>
              <div className="image">
                <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} style={imageStyle} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else if (type === 'image-top') {
    layout = (
      <Row align='middle'>
        <Col span={24}>
          <div className="content__image-top">
            <div className="image">
              <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} style={imageStyle} />
            </div>
            <div className="text">
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
              <Button>Comece já</Button>
            </div>
          </div>
        </Col>
      </Row>
    );
  } else if (type === 'image-bottom') {
    layout = (
      <div className="content__image-bottom">
        <div className="text">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className="image">
          <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} style={imageStyle} />
        </div>
      </div>
    );
  } else if (type === 'customize-netuno') {
    layout = (
      <Row >
        <Col span={24}>
          <div className="content__customize-netuno">
            <div className="image">
              <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} style={imageStyle} />
            </div>
            <div className="text">
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </Col>
      </Row>
    );
  } else if (type === 'call-discord') {
    layout = (
      <div className="content__call-discord">
        <Row align='middle'>
          <Col span={12}>
            <div className='container-img'>
              <div className='content-image'>
                <div className="image">
                  <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} style={imageStyle} />
                </div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="container-text">
              <div className="text">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
                <Button>Junte-se a nós</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else if (type === 'image') {
    layout = (
      <div className="content__image">
        <div className="image">
          <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} style={imageStyle} />
        </div>
      </div>
    );
  } else {
    layout = (
      <div className={`content__${type}`}>
        <div className="image">
          <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} style={imageStyle} />
        </div>
        <div className="text">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    );
  }
  return (
    <section className="content">
      {layout}
      <Actions {... { section, type, actions }} />
    </section>
  );
}

export default Content;