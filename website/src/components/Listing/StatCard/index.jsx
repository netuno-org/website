import CountUp from "../../Banner/CountUp";

import "./index.less";

function StatCard({ from, to, suffix = "%", label, note }) {
    return (
        <div className="stat-card">
            <div className="stat-card__value">
                <div className="stat-card__gradient">
                    <CountUp from={0} to={from} suffix="" />
                    {"–"}
                    <CountUp to={to} suffix={suffix} />
                </div>
            </div>
            <p className="stat-card__label">{label}</p>
            {note ? <p className="stat-card__note">{note}</p> : null}
        </div>
    );
}
export default StatCard;