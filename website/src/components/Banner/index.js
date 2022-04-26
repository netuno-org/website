import React from 'react';
import { Row, Col } from 'antd';

import Actions from '../Actions';
import Cluar from '../../common/Cluar';

import './index.less';

function Banner({ section, type, image, image_title, image_alt, title, content, position, actions }) {
  let backgroundPositionX = position.x !== "" ? position.x : "50%";
  let backgroundPositionY = position.y !== "" ? position.y : "50%";

  return (
    <section className="banner">
      <div id={type === 'highlight-galaxies' ? 'netuno' : type === 'home-veks' ? 'veks' : type === 'home-team' && 'team'} className={`banner__${type}`} style={{
        backgroundImage: `url(/images/${section}/${image})`,
        backgroundPositionX: backgroundPositionX,
        backgroundPositionY: backgroundPositionY
      }}>
        {type === 'highlight-galaxies' ?
          <>
            <Row align="middle">
              <Col span={24}>
                <h1 data-sal="slide-down" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: title }} />
                <div data-sal="fade" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: content }}></div>
                <Actions {... { section, type, actions }} />
              </Col>
              <div className="highlight-galaxies__orbit"></div>
            </Row>
          </>
          : type === 'home-sitana' ?
            <>
              <div className="banner__home-sitana--blobs__desktop">
                <img alt="blob" src="/images/blob.svg" />
                <img alt="blob1" src="/images/blob1.svg" />
                <img alt="blob2" src="/images/blob2.svg" />
              </div>
              <Row align="middle">
                <Col xs={24} sm={24} md={12} lg={12}>
                  <h1 data-sal="slide-down" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: title }} />
                  <div data-sal="fade" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: content }}></div>
                  <Actions {... { section, type, actions }} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <img alt={image} src={`/images/${section}/${image}`} />
                  <div className="banner__home-sitana--blobs__mobile">
                    <img alt="blob" src="/images/blob.svg" />
                    <img alt="blob1" src="/images/blob1.svg" />
                    <img alt="blob2" src="/images/blob2.svg" />
                  </div>
                </Col>
              </Row>
            </>
            : type === 'home-about' ?
              <Row align="middle" justify="center">
                <Col /* span={24} */>
                  <img alt={image_alt} title={image_title} src={`/images/${section}/${image}`} />
                  <h3 data-sal="slide-down" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: title }} />
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                  <Actions {... { section, type, actions }} />
                </Col>
              </Row>
              : type === 'home-shop-hook' ?
                <>
                  <Row align="middle" style={{ backgroundImage: `url(/images/${section}/${image})` }}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <h1 data-sal="slide-down" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: title }} />
                      <div data-sal="fade" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: content }}></div>
                      <Actions {... { section, type, actions }} />
                    </Col>
                  </Row>
                </>
                : type === 'about-about-us' ?
                  <>
                    <Row align="middle">
                      <Col xs={24} sm={24} md={12} lg={12}>
                        <h1 data-sal="slide-down" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: title }} />
                        <div data-sal="fade" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: content }}></div>
                        <Actions {... { section, type, actions }} />
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12}>
                        <img alt={image_alt} title={image_title} src={`/images/${section}/${image}`} />
                      </Col>
                    </Row>
                  </>
                  : type === 'banner-client' ?
                    <>
                      <Row>
                        <Col xs={24} sm={24} md={12} lg={12}>
                          <img alt={image_alt} />
                          <Actions {... { section, type, actions }} />
                        </Col>
                      </Row>
                    </>
                    :
                    <>
                      <Row>
                        <Col lg={24} sm={(type === 'default-sub-banner') ? (24) : (24)} xs={(type === 'default-sub-banner') ? (24) : (24)}>
                          <div>
                            <h1 data-sal="slide-down" data-sal-duration="2000" data-sal-easing="ease-out-cubic">{title}</h1>
                            <div data-sal="fade" data-sal-duration="2000" data-sal-easing="ease-out-cubic" dangerouslySetInnerHTML={{ __html: content }}></div>
                          </div>
                        </Col>
                      </Row>
                    </>
        }
      </div>
    </section >
  );
}

export default Banner;



