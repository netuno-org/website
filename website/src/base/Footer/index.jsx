import React from 'react';
import { Layout, Row, Col } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { FaYoutube, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

import './index.less';

const { Footer } = Layout;

function BaseFooter() {
  return (
    <Footer>
      <Row className="ant-layout-footer__wrapper" align="middle" gutter={[0, 10]}>
        <Col xs={24} lg={8}>
          <div className="logo" data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-cubic">
            <img alt="logo" src="/images/netuno-logo.svg" />
            <div className="ant-layout-footer__meta">
              <span className="ant-layout-footer__badge">Open Source</span>
              <a className="ant-layout-footer__link" href="https://wa.me/351910000000">
                WhatsApp
              </a>
              <a className="ant-layout-footer__link ant-layout-footer__link--mail" href="mailto:suporte@netuno.org">
                <MailOutlined className="ant-layout-footer__mail-icon" /> suporte@netuno.org
              </a>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8, offset: 8 }}>
          <p className="footer__social-links">
            <a href="https://github.com/netuno-org/platform" className="share-icons">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/@netuno-org" className="share-icons">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/netuno_org" className="share-icons">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/netuno-org/" className="share-icons">
              <FaLinkedin />
            </a>
            <a href="https://discord.gg/9UzTuNMG" className="share-icons">
              <FaDiscord />
            </a>
            <a href="https://www.instagram.com/netuno_org/" className="share-icons">
              <FaInstagram />
            </a>
          </p>
        </Col>
      </Row>
      <div className="footer__bottom">
        © {new Date().getFullYear()} Netuno — plataforma open source, livre e gratuita.
      </div>
    </Footer>
  );
}

export default BaseFooter;