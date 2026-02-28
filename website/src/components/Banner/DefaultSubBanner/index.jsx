import React from "react";
import { Row, Col } from "antd";

import Actions from "../../Actions";
import Cluar from "../../../common/Cluar";
import config from "./config.json"

import "./index.less";

function DefaultSubBanner({
  section,
  type,
  title,
  image,
  content,
  position,
  actions,
}) {
  let backgroundPositionX = position.x !== "" ? position.x : "50%";
  let backgroundPositionY = position.y !== "" ? position.y : "50%";

  return (
    <section className="sub-banner">
      <div id={type === 'highlight-galaxies' ? 'netuno' : type === 'home-veks' ? 'veks' : type === 'home-team' && 'team'} className={`sub-banner__highlight-galaxies`}
        style={{
          backgroundImage:
            image?.indexOf("base64") === -1
              ? `url(/cluar/images/page_${section}/${image})`
              : `url(${image})`,
          backgroundPositionX: backgroundPositionX,
          backgroundPositionY: backgroundPositionY,
        }}>
      </div>
      <Row className="sub-banner__wrapper" justify="center">
        <Col span={24}>
          <div>
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
          </div>
        </Col>
        {config.action && (
          <Col lg={6} sm={24}>
            <Actions {...{ section, type, actions }} />
          </Col>
        )}
      </Row>
    </section >
  );
}

export default DefaultSubBanner;
