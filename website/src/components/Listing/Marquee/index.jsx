import "./index.less";

function Marquee({ items, speed = 40, className = "" }) {
    const loop = [...items, ...items];
    return (
        <div className={`marquee ${className}`.trim()}>
            <div className="marquee__track" style={{ "--marquee-speed": `${speed}s` }}>
                {loop.map((item, i) => (
                    <div className="marquee__item" key={i}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Marquee;