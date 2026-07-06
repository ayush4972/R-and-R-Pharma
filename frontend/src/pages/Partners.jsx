import { Link } from "react-router-dom";
import PartnerCard from "../components/PartnerCard.jsx";
import Reveal from "../components/Reveal.jsx";
import partners from "../data/partners.json";

export default function Partners() {
  return (
    <div className="pb-stack-lg">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-lg mb-stack-lg">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-container p-12 md:p-16 text-on-primary shadow-soft">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
                backgroundSize: "36px 36px",
              }}
            ></div>
            <div className="relative z-10 max-w-2xl">
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed">
                Global Network
              </span>
              <h1 className="font-display-lg text-headline-lg md:text-display-lg font-bold mb-stack-sm mt-2">Our Partners</h1>
              <p className="font-body-lg text-body-lg opacity-90">
                Bridging global innovation with local healthcare excellence. We collaborate with
                world-class medical manufacturers to deliver reliable logistical solutions across
                Nepal.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
              <span
                className="material-symbols-outlined text-[220px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                handshake
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Partner Grid Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal className="flex items-center gap-2 mb-stack-md">
          <span className="material-symbols-outlined text-primary">language</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            International Manufacturers
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={(i % 3) * 100}>
              <PartnerCard {...partner} />
            </Reveal>
          ))}

          {/* Become a Partner Slot */}
          <Reveal delay={200}>
            <Link
              to="/contact"
              className="card-lift group h-full border-2 border-dashed border-outline/60 p-gutter rounded-xl hover:bg-surface-container-low hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer min-h-[260px]"
            >
              <span className="material-symbols-outlined text-4xl text-outline mb-stack-sm group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                add_circle
              </span>
              <h3 className="font-label-md text-label-md text-on-surface-variant">
                Join Our Network
              </h3>
              <p className="font-body-sm text-body-sm text-outline">
                Partner with Nepal's leading supplier
              </p>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Trust Stats Banner */}
      <Reveal className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-surface-container-low border border-outline-variant rounded-2xl p-stack-lg text-center gap-gutter">
          <div>
            <p className="text-primary font-display-lg text-display-lg">15+</p>
            <p className="font-label-md text-on-surface-variant">Years of Excellence</p>
          </div>
          <div className="border-y md:border-y-0 md:border-x border-outline-variant py-stack-md md:py-0">
            <p className="text-primary font-display-lg text-display-lg">500+</p>
            <p className="font-label-md text-on-surface-variant">Medical Facilities Served</p>
          </div>
          <div>
            <p className="text-primary font-display-lg text-display-lg">100%</p>
            <p className="font-label-md text-on-surface-variant">Quality Compliance</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
