import React from 'react';
import { Row, Col, } from 'antd';
import RocketIsometric from '../../assets/rocket-isometric.png'
import Item from './Item';

import './index.less';

function Listing({ section, type, image, image_title, image_alt, title, content, items, index }) {
  console.log(items)

  const children = items.map((item, i) => (
    <Item
      key={item.uid + i}
      index={i}
      total={items.length}
      type={type}
      {...item}
    />
  ));



  let listLayout = (
    <div className='container'>
      <h1>{title}</h1>
      {title ? <div className="text__title-border"></div> : null}
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <ul className={`listing__${type}`}>
        {children}
      </ul>
    </div>
  );

  if (type === 'news-at-sitana') {
    listLayout = (
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <ul className={`listing__${type}`}>
          {children}
        </ul>
      </div>
    );
  } else if (type === 'funcionality-netuno') {
    listLayout = (
      <div className={`listing__${type}`}>
        <div className='container'>
          {children}
        </div>
      </div>
    );
  }
  else if (type === 'operation-netuno') {
    listLayout = (
      <div className={`listing__${type}`}>
        <div className='container'>
          <h1>{title}</h1>
          {title ? <div className="text__title-border"></div> : null}
          <ul className={`listing_${type}`}>
            {children}
          </ul>
        </div>
      </div>
    );
  }

  else if (type === 'OTHER-CUSTOM-TYPE-HERE') {
    listLayout = (
      <Row className={`listing__${type}`}>
        {children}
      </Row>
    );
  } else if (type === 'cases-listing') {
    listLayout = (
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <ul className={`listing__${type}`}>
          {children}
        </ul>
      </div>
    );
  } else if (type === 'support-listing') {
    listLayout = (
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <ul className={`listing__${type}`}>
          {children}
        </ul>
      </div>
    );
  } else if (type === 'tab-list') {
    listLayout = (
      <div className={`listing__${type}`}>
        <div className='listing-background' />
        <div className='listing-background-bottom' />
        <div className='container'>
          {children}
        </div>
      </div>
    );
  }
  return (
    <section className="listing">
      {listLayout}
    </section>
  );
}

export default Listing;