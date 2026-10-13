import React from "react";
import TechMarquee from "../../TechMarquee";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from "antd";
import Cluar from '../../../../common/Cluar';
import "./index.less";

function Item({ title, content }) {
    return (
        <section>
            <div className="polyglot-panel">
                <h2 dangerouslySetInnerHTML={{ __html: title }} className="polyglot-panel__title" />
                <p dangerouslySetInnerHTML={{ __html: content }} className="polyglot-panel__text" />
                <div className="polyglot-panel__marquee">
                    <TechMarquee items={["JavaScript", "Kotlin", "Groovy", "Python", "Ruby", "Java"]} speed={28} />
                </div>
                <Button type="link" href="https://doc.netuno.org" target="_blank" rel="noreferrer" className="polyglot-panel__link">
                    {Cluar.plainDictionary('polyglot-doc-link')} <ArrowRightOutlined className="polyglot-panel__icon" />
                </Button>
            </div>
        </section>
    );
}
export default Item;