import React, { useState, useEffect } from 'react';
import Cluar from "../../common/Cluar";

import "./index.less";
import Default from './Default';
import Reveal from './Reveal/index';
import StatCard from './StatCard';
import MadeWith from './MadeWith';
import Marquee from './Marquee';
import PillarsCard from './PillarsCard';
import ToolCard from './ToolCard';
import Polyglot from './Polyglot';
import TechMarquee from './TechMarquee';

function Listing(props) {
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

  let listLayout = null;

  if (props.type === "Default") {
    listLayout = (
      <Default
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "Reveal") {
    listLayout = (
      <Reveal
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "StatCard") {
    listLayout = (
      <StatCard
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "MadeWith") {
    listLayout = (
      <MadeWith
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "Marquee") {
    listLayout = (
      <Marquee
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "PillarsCard") {
    listLayout = (
      <PillarsCard
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "ToolCard") {
    listLayout = (
      <ToolCard
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "Polyglot") {
    listLayout = (
      <Polyglot
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "TechMarquee") {
    listLayout = (
      <TechMarquee
        {...props}
        actions={renderedActions}
      />
    );
  } else {
    listLayout = (
      <Default
        {...props}
        actions={renderedActions}
      />
    );
  }

  return <section className="listing">{listLayout}</section>;
}

export default Listing;
