import Marquee from "../Marquee";

import "./index.less";

function TechMarquee({ items, speed = 34 }) {
    return (
        <Marquee
            speed={speed}
            items={items.map((name) => (
                <span key={name} className="tech-marquee__tag">
                    {name}
                </span>
            ))}
        />
    );
}
export default TechMarquee;