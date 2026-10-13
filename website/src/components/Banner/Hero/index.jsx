import { useEffect, useState } from "react";
import Actions from "../../Actions";

import planet from "../../../assets/netuno-hero-planet.png";
import HeroSlider from "../HeroSlider";
import "./index.less";

function Hero({ section, type, actions, title, content }) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="hero">
            <img
                src={planet}
                alt=""
                aria-hidden
                className="hero__planet"
                style={{ transform: `translateY(${offset * 0.15}px) scale(1.06)` }}
            />
            <div aria-hidden className="hero__glow" />
            <div aria-hidden className="hero__fade" style={{ transform: `translateY(${offset * -0.05}px)` }} />

            <div className="hero__content">
                <span className="hero__badge">
                    <span className="hero__badge-tag">OPEN SOURCE</span>
                    Low-code, poliglota, autoalojado
                </span>
                <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="hero__subtitle" dangerouslySetInnerHTML={{ __html: content }} />
                <div className="hero__actions">
                    <Actions {... { section, type, actions }} />
                </div>
            </div>
            <HeroSlider />
        </section >
    );
}
export default Hero;