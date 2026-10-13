import React from "react";
import { useEffect, useRef, useState } from "react";
import cluarImage from "../../../assets/mockup-cluar.jpg";
import dashboard from "../../../assets/mockup-dashboard.jpg";
import editor from "../../../assets/mockup-editor.jpg";
import form from "../../../assets/mockup-form.jpg";
import Window from "../../Banner/Window";
import Cluar from '../../../common/Cluar';
import "./index.less";

const steps = [
    { n: "01", key: "features-step-1", image: form },
    { n: "02", key: "features-step-2", image: editor },
    { n: "03", key: "features-step-3", image: dashboard },
    { n: "04", key: "features-step-4", image: cluarImage },
    { n: "05", key: "features-step-5", image: editor },
];

// Traduz a cada render, para respeitar o idioma atual
const t = (key) => Cluar.plainDictionary(key);

function Features({ title, content }) {
    const [active, setActive] = useState(0);
    const refs = useRef([]);

    useEffect(() => {
        const onScroll = () => {
            let best = 0;
            let bestDistance = Infinity;
            refs.current.forEach((el, i) => {
                if (!el) return;
                const d = Math.abs(el.getBoundingClientRect().top - window.innerHeight * 0.34);
                if (d < bestDistance) {
                    bestDistance = d;
                    best = i;
                }
            });
            setActive(best);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const current = steps[active];
    const currentCap = t(`${current.key}-cap`);

    return (
        <div className="features">
            <section className="features__hero">
                <div className="features__hero-inner">
                    <div>
                        <span dangerouslySetInnerHTML={{ __html: content }} className="features__eyebrow" />
                        <h1 dangerouslySetInnerHTML={{ __html: title }} className="features__title" />
                    </div>
                </div>
            </section>
            <section className="features__steps-section">
                <div className="features__steps-grid">
                    <div>
                        {steps.map((step, i) => {
                            const on = i === active;
                            const cap = t(`${step.key}-cap`);
                            return (
                                <div
                                    key={step.n}
                                    ref={(el) => {
                                        refs.current[i] = el;
                                    }}
                                    onClick={() => setActive(i)}
                                    className="step"
                                >
                                    <div className="step__head">
                                        <span className={`step__num ${on ? "step__num--active" : ""}`}>{step.n}</span>
                                        <span className={`step__title ${on ? "step__title--active" : ""}`}>
                                            {t(`${step.key}-title`)}
                                        </span>
                                    </div>
                                    <p className="step__body">{t(`${step.key}-body`)}</p>
                                    <div className="step__mockup">
                                        <Window title={cap}>
                                            <div className="step__mockup-content">
                                                <div className="step__mockup-kicker">{t(`${step.key}-kicker`)}</div>
                                                <img src={step.image} alt={cap} loading="lazy" className="step__mockup-image" />
                                                <div className="step__mockup-caption">{t(`${step.key}-caption`)}</div>
                                            </div>
                                        </Window>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="step__closing-border" />
                    </div>

                    <div className="features__sticky-mockup">
                        <Window title={currentCap}>
                            <div className="features__mockup-content">
                                <div className="features__mockup-kicker">{t(`${current.key}-kicker`)}</div>
                                <img src={current.image} alt={currentCap} loading="lazy" className="features__mockup-image" />
                                <div className="features__mockup-caption">{t(`${current.key}-caption`)}</div>
                            </div>
                        </Window>
                        <p className="features__mockup-hint">{t("features-hint")}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Features;