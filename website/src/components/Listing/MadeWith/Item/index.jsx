import React from "react";
import Marquee from "../../Marquee/index";
import "./index.less";

const madeWith = ["Navigator", "LusoPanarcos", "AdvanceCare", "Sipla Votos", "Cuidados", "Sitana", "Veks", "C+D"];

function Item({ title }) {
    return (
        <section className="made-with">
            <div>
                <div className="made-with__label" dangerouslySetInnerHTML={{ __html: title }}></div>
                <Marquee
                    className="made-with__marquee"
                    speed={45}
                    items={madeWith.map((name) => (
                        <span key={name} className="made-with__item">
                            {name}
                        </span>
                    ))}
                />
            </div>
        </section>
    );
}
export default Item;