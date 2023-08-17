import React from 'react';
import { Col, Space, Row, link } from 'antd';

import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaYoutube,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa"
import { DiOpensource } from "react-icons/di"


import './index.less';
import Actions from '../../Actions';

function Item({ section, type, image, image_title, image_alt, title, content, link, button, index }) {
  let layout = null;
  if (type === 'operation-netuno') {
    layout = (
      <li className={`listing__item__${type}`}>
        <span>{title}</span>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className="listing__image">
          <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} />
        </div>
      </li>
    );
  } else if (type === 'news-at-sitana') {
    layout = (
      <li className="listing__item">
        <div className={`listing__item`}>
          <div className='listing__image'>
            <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} />
          </div>
          <div className='listing__text'>
            <h1>{title}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </li>
    );
  } else if (type === 'cases-listing') {
    layout = (
      <a href={link} target="_blank">
        <li className="listing__item">
          <div>
            <div className='listing__image'>
              <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} />
            </div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </li>
      </a>
    );
  } else if (type === 'support-listing') {
    layout = (
      <div className='support'>
        <div data-sal="slide-up" data-sal-duration="1200" data-sal-delay="50" data-sal-easing="ease-out-bounce" className="support-text">
          <h1 className="text-xxs fw-700">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className="support-image">
          <div className='styles-img'>
            <img
              src={`/images/${section}/${image}`} alt={image_alt} />
          </div>
        </div>
      </div>
    );
  } else if (type === 'tab-list') {
    layout = (
      <Row className='listing_tab-list' gutter={[10, 14]} align="center" justify="space-between">
        <Col span={12} className="listing_tab-list-image">
          <img src={`/images/${section}/${image}`} alt={image_alt} />
        </Col>
        <Col span={10} data-sal="slide-up" data-sal-duration="1200" data-sal-delay="50" data-sal-easing="ease-out-bounce" className="listing_tab-list-text">
          <h1 className="text-xxs fw-700">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          {link && <a href={link} target="_blank">Explore Agora</a>}
        </Col>
      </Row>
    );
  }
  else if (type === 'funcionality-netuno') {
    layout = (
      <Row className="grid-container" justify={'space-between'} gutter={[10, 14]} wrap={true}>
        <Col xxl={10} xl={10} lg={10} md={10} sm={24} xs={24} className="grid-container-text">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          {index == 2 && <a>Saiba Mais</a>}
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} className='grid-container-image'>
          <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} />
        </Col>
      </Row >
    );
  } else if (type === 'listing-sociais') {
    layout = (
      <li className="listing__item">
        <div className={`listing__item`}>
          <h1>{title}</h1>
        </div>
        <div className='sitemap'>
          <a href="https://github.com/netuno-org" className="share-icons">
            <FaGithub />
          </a>
          <a href="https://www.youtube.com/channel/UCYY1Nz6T2NJtP29vba2fqkg" className="share-icons">
            <FaYoutube />
          </a>
          <a href="https://twitter.com/netuno_org" className="share-icons">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/netuno-org/" className="share-icons">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/netuno.org/" className="share-icons">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/netuno_org/" className="share-icons">
            <FaInstagram />
          </a>
        </div>
      </li>
    );
  } else {
    layout = (
      <li className="listing__item">
        <div className={`listing__item`}>
          <h1>{title}</h1>
          <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} />
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </li>
    );
  }
  return (
    layout
  );
}

export default Item;