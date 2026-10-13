import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";

import editor from "../../../assets/mockup-editor.jpg";
import form from "../../../assets/mockup-form.jpg";
import Window from "../Window";
import {
  DiagramPanel,
  FormBuilderPanel,
  GeneratedFormPanel,
  OpenApiPanel,
  ServiceClientPanel,
  ServiceCodePanel,
} from "../HeroPanels/index";

import "./index.less";

const slides = [
  {
    caption: "Dos dados à interface",
    windows: [
      { title: "modelo · diagrama", content: <DiagramPanel /> },
      { title: "backoffice · construtor de campos", content: <FormBuilderPanel image={form} /> },
      { title: "backoffice · formulário", content: <GeneratedFormPanel /> },
    ],
  },
  {
    caption: "Do serviço ao consumo",
    windows: [
      { title: "servico/pedidos.js", content: <ServiceCodePanel image={editor} /> },
      { title: "openapi · pedidos", content: <OpenApiPanel /> },
      { title: "website · fetch", content: <ServiceClientPanel /> },
    ],
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged: (slider) => setCurrent(slider.track.details.rel),
  });

  return (
    <div className="hero-slider">
      <div ref={sliderRef} className="keen-slider hero-slider__track">
        {slides.map((slide) => (
          <div key={slide.caption} className="keen-slider__slide">
            <p className="hero-slider__caption">{slide.caption}</p>
            <div className="hero-slider__windows">
              {slide.windows.map((w) => (
                <Window key={w.title} title={w.title}>
                  {w.content}
                </Window>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hero-slider__dots">
        {slides.map((slide, i) => (
          <button
            key={slide.caption}
            type="button"
            aria-label={`Ir para "${slide.caption}"`}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            className={`hero-slider__dot ${current === i ? "hero-slider__dot--active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
export default HeroSlider;