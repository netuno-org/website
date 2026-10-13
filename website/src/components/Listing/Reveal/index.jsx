import { useEffect, useRef, useState } from "react";
import Item from "./Item";

import "./index.less";

function Reveal({ items, type, delay = 0, className = "" }) {
    const children = [];

    if (items && Array.isArray(items)) {
        for (const item of items) {
            children.push(<Item key={item.uid} {...{ type, ...item }} />);
        }
    }

    const ref = useRef(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.15 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal ${shown ? "reveal--shown" : "reveal--hidden"} ${className}`.trim()}
        >
            {children}
        </div>
    );
}
export default Reveal;