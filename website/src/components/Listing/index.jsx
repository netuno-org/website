import React, { useState, useEffect } from 'react';
import Cluar from "../../common/Cluar";
import Default from './Default';
import FuncionalityNetuno from './FuncionalityNetuno';
import HomeHowWorks from './HomeHowWorks';
import Cases from './Cases';
import Support from "./Support";
import "./index.less";

function Listing(props) {
  const [renderedActions, setRenderedActions] = useState(props.actions);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const actionsData = Cluar.actions() || [];
  const actions = (props.action_uids || [])
    .map(uid => actionsData.find(item => item.uid === uid))
    .filter(Boolean);
  console.log("listing props", props)
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
  } else if (props.type === "FuncionalityNetuno") {
    listLayout = (
      <FuncionalityNetuno
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "HomeHowWorks") {
    listLayout = (
      <HomeHowWorks
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "Cases") {
    listLayout = (
      <Cases
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "Support") {
    listLayout = (
      <Support
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