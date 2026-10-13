import React from "react";
import Cluar from '../../../common/Cluar';
import "./index.less";

function OrbitVisual({ title }) {

    const capabilities = [
        {
            title: Cluar.plainDictionary('orbit-visual-data-bases'),
            items: "MariaDB · PostgreSQL · Microsoft SQL Server · H2 · CockroachDB"
        },
        {
            title: Cluar.plainDictionary('orbit-visual-languages'),
            items: "JavaScript · Kotlin · Groovy · Python · Ruby · Java"
        },
        {
            title: Cluar.plainDictionary('orbit-visual-integrations'),
            items: "Firebase · REST · SOAP · Excel · Mail · SMS · PDF"
        },
        {
            title: Cluar.plainDictionary('orbit-visual-frontend'),
            items: "React · Webpack · Sass/Less · Ant Design"
        },
    ];
    
    return (
        <div className="orbit-visual-grid">
            <div className="orbit-visual">
                <div className="orbit-visual__ring">
                    <span className="orbit-visual__dot" />
                </div>
                <div className="orbit-visual__planet" />
            </div>
            <div className="orbit-visual-grid__content">
                <h2 dangerouslySetInnerHTML={{ __html: title }} className="orbit-visual-grid__box-title" />
                <div className="orbit-visual-grid__capabilities">
                    {capabilities.map((cap) => (
                        <div key={cap.title}>
                            <div className="orbit-visual-grid__capability-title">{cap.title}</div>
                            <div className="orbit-visual-grid__capability-items">{cap.items}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default OrbitVisual;