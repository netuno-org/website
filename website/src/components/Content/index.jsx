import React, { useState, useEffect } from 'react';
import Cluar from '../../common/Cluar';

import './index.less';

import TextContent from './TextContent';
import ImageLeft from './ImageLeft';
import ImageRight from './ImageRight';
import ImageTop from './ImageTop';
import ImageBottom from './ImageBottom';
import ImageContent from './ImageContent';
import Default from './Default';
import DocsPanel from './DocsPanel';
import OrbitCta from './OrbitCta';
import Ecosystem from './Ecosystem';
import CluarFeature from './CluarFeature';
import Features from './Features';
import OrbitVisual from './OrbitVisual';

const Content = (props) => {
  const [renderedActions, setRenderedActions] = useState(props.actions);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const actionsData = Cluar.actions() || [];
  const actions = (props.action_uids || [])
    .map(uid => actionsData.find(item => item.uid === uid))
    .filter(Boolean);

  useEffect(() => {
    if (!isFirstRender) {
      setRenderedActions(actions);
    } else {
      setIsFirstRender(false);
    }
  }, [props.action_uids]);

  let layout = null;

  const imageStyle = {};

  const imageSrc =
    props.image?.indexOf("base64") === -1
      ? `/cluar/images/page_${props.section}/${props.image}`
      : props.image;

  if (props.image_max_width > 0) {
    imageStyle["maxWidth"] = `${props.image_max_width}px`;
  }

  if (props.type === 'TextContent') {
    layout = (
      <TextContent
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === 'ImageLeft') {
    layout = (
      <ImageLeft
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'ImageRight') {
    layout = (
      <ImageRight
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'ImageTop') {
    layout = (
      <ImageTop
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'ImageBottom') {
    layout = (
      <ImageBottom
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'ImageContent') {
    layout = (
      <ImageContent
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'DocsPanel') {
    layout = (
      <DocsPanel
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'OrbitCta') {
    layout = (
      <OrbitCta
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'Ecosystem') {
    layout = (
      <Ecosystem
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'CluarFeature') {
    layout = (
      <CluarFeature
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'Features') {
    layout = (
      <Features
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else if (props.type === 'OrbitVisual') {
    layout = (
      <OrbitVisual
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  } else {
    layout = (
      <Default
        {...props}
        actions={renderedActions}
        imageSrc={imageSrc}
        imageStyle={imageStyle}
      />
    );
  }

  return (
    <section className="content">
      <div className="content__wrapper">
        {layout}
      </div>
    </section>
  );
};

export default Content;
