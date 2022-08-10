import React from 'react';
import { Row, Col,  } from 'antd';

import Item from './Item';

import './index.less';

function Listing({section, type, image, image_title, image_alt, title, content, items}) {
  const children = [];
  for (const item of items) {
    children.push(<Item key={item.uid} {...{type, ...item}} />);
  }

  let listLayout = (
    <div>
        <h1>{ title }</h1>
        {title ? <div className="text__title-border"></div> : null}
        <div dangerouslySetInnerHTML={{__html: content}}></div>
          <ul className={`listing__${type}`}>
            { children }
        </ul>   
    </div>   
  );

  if (type === 'news-at-sitana') {
    listLayout = (
      <div>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
          <ul className={`listing__${type}`}>
            { children }
        </ul>   
      </div>   
    );
  } else if (type === 'funcionality-netuno') {
    listLayout = (
      <div className={`listing__${type}`}>
        { children }
      </div>
    );
  } else if (type === 'OTHER-CUSTOM-TYPE-HERE') {
    listLayout = (
      <Row className={`listing__${type}`}>
        { children }
      </Row>
    );
  } else if (type === 'cases-listing') {
    listLayout = (
      <div>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
        <ul className={`listing__${type}`}>
          { children }
        </ul>   
    </div> 
    );
  } else if (type === 'support-listing') {
    listLayout = (
      <div>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
        <ul className={`listing__${type}`}>
          { children }
        </ul>   
    </div> 
    );
  }
  return (
    <section className="listing">
      { listLayout }
    </section>
  );
}

export default Listing;