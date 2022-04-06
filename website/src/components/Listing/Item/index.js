import React from 'react';
import { Col, Space, Row } from 'antd';

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

function Item({ section, type, image, image_title, image_alt, title, content, link }) {
  let layout = null;
  if (type === 'operation-netuno') {
    layout = (
      <Col className={`listing__item__${type}`} >
        <div>
          <span>{title}</span>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          <div className="listing__image">
            <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} />
          </div>
        </div>
      </Col>
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
      <li className="listing__item">
        <div className={`listing__item`}>
          <div className='listing__image'>
            <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} />
          </div>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </li>
    );
  } else if (type === 'funcionality-netuno') {
    layout = (
      <div className="grid-container">
        <div className="grid-text">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className='grid-image'>
          <img src={`/images/${section}/${image}`} alt={image_alt} title={image_title} />
        </div>
      </div>
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