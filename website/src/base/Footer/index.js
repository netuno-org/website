import React from 'react';
import { Layout, Row, Col } from 'antd';
import { PhoneOutlined, HomeOutlined, MailOutlined } from '@ant-design/icons';
import { RiOpenSourceFill } from 'react-icons/ri';
import Configuration from '../../components/Configuration';
import logo from '../../assets/images/netunologolight.svg';
import { DiOpensource } from "react-icons/di"
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
  FaWhatsapp,
} from "react-icons/fa"


import './index.less';

const { Footer } = Layout;

function BaseFooter() {
  return (
    <Footer>
      <div className='container'>
        <Row className="ant-layout-footer__wrapper" align="middle">
          <Col xs={24} lg={8}>
            <div className="logo" data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-cubic">
              <a
                href="https://github.com/netuno-org/platform"
                className="open-source"
                target="_blank"
              >
                <DiOpensource size={40} color="#68a2ff" />
                Open Source
              </a>
            </div>
            <div className='container-links'>
              <div className="social-links">
                <a href="https://github.com/netuno-org" className="share-icons" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://www.youtube.com/channel/UCYY1Nz6T2NJtP29vba2fqkg" className="share-icons" target="_blank">
                  <FaYoutube />
                </a>
                <a href="https://twitter.com/netuno_org" className="share-icons" target="_blank">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/company/netuno-org/" className="share-icons" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="https://discord.gg/4sfXG6YWFu" className="share-icons" target="_blank">
                  <FaDiscord />
                </a>
                <a href="https://www.facebook.com/netuno.org/" className="share-icons" target="_blank">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/netuno_org/" className="share-icons" target="_blank">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8, offset: 8 }}>
            <Row>
              <Col>
                <Col>
                  <p>
                    <FaWhatsapp style={{ fontSize: 20, marginRight: 10 }} />
                    <span>
                      <a netuno-mail="admin" href="https://wa.me/+351912524751">
                        WhatsApp
                      </a>
                    </span>
                  </p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <FaEnvelope style={{ fontSize: 20, marginRight: 10 }} />
                  <span>
                    <a netuno-mail="support" href="mailto:support@netuno.org">
                      support@netuno.org
                    </a>
                  </span>
                </p>
              </Col>
            </Row>
            {/* <Row>
            <Col>
              <p>
                <FaEnvelope style={{ fontSize: 20, marginRight: 10 }} />
                <span>
                  <a netuno-mail="support" href="mailto:support@netuno.org">
                    support@netuno.org
                  </a>
                </span>
              </p>
            </Col>
          </Row> */}
            <Row>
              <Col>
                <p className="netuno-copyright">
                  Copyright © &nbsp;
                  <a
                    href="https://www.sitana.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sitana
                  </a>
                  &nbsp; {new Date().getFullYear()}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Footer>
  );
}

export default BaseFooter;