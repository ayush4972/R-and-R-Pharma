import { Link } from "react-router-dom";
import PartnerCard from "../components/PartnerCard.jsx";
import partners from "../data/partners.json";

export default function Partners() {
  return (
    <div className="pb-stack-lg">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-desktop pt-stack-lg mb-stack-lg">
        <div className="relative overflow-hidden rounded-xl bg-primary-container p-12 text-on-primary">
          <div className="relative z-10 max-w-2xl">
            <h1 className="font-display-lg text-display-lg mb-stack-sm">Our Partners</h1>
            <p className="font-body-lg text-body-lg opacity-90">
              Bridging global innovation with local healthcare excellence. We collaborate with
              world-class medical manufacturers to deliver reliable logistical solutions across
              Nepal.
            </p>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
            <span
              className="material-symbols-outlined text-[200px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              handshake
            </span>
          </div>
        </div>
      </section>

      {/* Partner Grid Section */}
      <section className="max-w-container-max mx-auto px-margin-desktop">
        <div className="flex items-center gap-2 mb-stack-md">
          <span className="material-symbols-outlined text-primary">language</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            International Manufacturers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}

          {/* Become a Partner Slot */}
          <Link
            to="/contact"
            className="group border border-dashed border-outline p-gutter rounded-lg hover:bg-surface-container-low transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-4xl text-outline mb-stack-sm">
              add_circle
            </span>
            <h3 className="font-label-md text-label-md text-on-surface-variant">Join Our Network</h3>
            <p className="font-body-sm text-body-sm text-outline">
              Partner with Nepal's leading supplier
            </p>
          </Link>
        </div>
      </section>

      {/* Trust Stats Banner */}
      <section className="max-w-container-max mx-auto px-margin-desktop mt-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-surface-container-low rounded-xl p-stack-lg text-center gap-gutter">
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
      </section>
    </div>
  );
}
