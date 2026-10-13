import React from "react";
import { Button } from "antd";
import { ExportOutlined, AppstoreOutlined, MessageOutlined } from "@ant-design/icons";
import Cluar from '../../../common/Cluar';
import "./index.less";

function OrbitCta({ title, content }) {
    return (
        <section className="home__section home__section--last">
            <div className="orbit-cta">
                <div aria-hidden className="orbit-cta__glow" />
                <div className="orbit-cta__content">
                    <AppstoreOutlined className="orbit-cta__icon" />
                    <h2 dangerouslySetInnerHTML={{ __html: title }} className="orbit-cta__title" />
                    <p dangerouslySetInnerHTML={{ __html: content }} className="orbit-cta__text" />
                    <div className="orbit-cta__button">
                        <Button
                            className="orbit-cta__button-2"
                            href="https://github.com/netuno-org/platform"
                        >
                            {Cluar.plainDictionary('button-orbit-github')}
                        </Button>
                        <Button
                            className="orbit-cta__button-3"
                            href="https://discord.gg/9UzTuNMG"
                        >
                            {Cluar.plainDictionary('button-orbit-discord')}
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    );
}
export default OrbitCta;