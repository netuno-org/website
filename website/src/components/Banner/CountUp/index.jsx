import { useEffect, useRef, useState } from "react";

function CountUp({ to, from = 0, duration = 1400, suffix = "", prefix = "" }) {
    const ref = useRef(null);
    const [value, setValue] = useState(from);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) return;
                io.disconnect();
                const start = performance.now();
                const tick = (now) => {
                    const p = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - p, 3);
                    setValue(Math.round(from + (to - from) * eased));
                    if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            },
            { threshold: 0.4 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [from, to, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {value}
            {suffix}
        </span>
    );
}
export default CountUp;