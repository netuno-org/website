import React from "react";
import { Row, Col } from "antd";
import Actions from "../../Actions";
import Cluar from "../../../common/Cluar";
import config from "./config.json"
import "./index.less";

function Default({
  section,
  type,
  image,
  title,
  content,
  position,
  actions,
}) {
  let backgroundPositionX = position.x !== "" ? position.x : "50%";
  let backgroundPositionY = position.y !== "" ? position.y : "50%";

  const isMobile = window.innerWidth < 768;

  return (
    <section className="banner">
      <div
        id={type === 'highlight-galaxies' ? 'netuno' : type === 'home-veks' ? 'veks' : type === 'home-team' && 'team'}
        className={`banner__highlight-galaxies`}
        style={{
          backgroundImage:
            image?.indexOf("base64") === -1
              ? `url(/cluar/images/page_${section}/${image})`
              : `url(${image})`,
          backgroundPositionX: backgroundPositionX,
          backgroundPositionY: backgroundPositionY,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}
      >
        <Row
          className="banner__wrapper"
          justify="center"
          align="middle"
          style={{
            minHeight: isMobile ? '100vh' : '100vh',
          }}
        >
          <Col
            xs={24}
            sm={20}
            md={16}
            lg={14}
            xl={12}
            className="banner__content-column"
            style={{
              padding: isMobile ? '20px' : '20px',
              textAlign: 'center',
            }}
          >
            <div className="banner__content">
              <h1
                data-sal="slide-down"
                data-sal-duration="2000"
                data-sal-easing="ease-out-cubic"
                style={{
                  fontSize: isMobile ? '1.8rem' : '3rem',
                  lineHeight: isMobile ? '1.3' : '1.2',
                }}
                dangerouslySetInnerHTML={{ __html: Cluar.plainTitle(title) }}
              />
              <div
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-easing="ease-out-cubic"
                style={{
                  fontSize: isMobile ? '1rem' : '1.2rem',
                  lineHeight: '1.6',
                  marginBottom: isMobile ? '1.5rem' : '3rem',
                }}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>

            {config.action && (
              <Col
                xs={24}
                sm={24}
                md={20}
                lg={18}
                xl={16}
                style={{
                  marginTop: isMobile ? '1rem' : '2rem',
                }}
              >
                <Actions {...{ section, type, actions }} />
              </Col>
            )}
          </Col>
        </Row>
        <div className="banner__darken-bg"></div>
      </div>
    </section>
  );
}

export default Default;