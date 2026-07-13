import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import partners from "../data/partners.json";

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "5", label: "Global Partners" },
  { value: "100%", label: "Nepal Coverage" },
];

const features = [
  {
    icon: "map",
    title: "Nationwide Coverage",
    text: "Extensive distribution network reaching health facilities in all major cities and remote districts of Nepal.",
  },
  {
    icon: "handshake",
    title: "Trusted Partners",
    text: "Exclusive collaborations with world-class international medical manufacturers to bring top-tier technology to Nepal.",
  },
  {
    icon: "inventory_2",
    title: "Reliable Supply Chain",
    text: "Optimized logistics and cold-chain management ensuring medical supplies arrive in pristine condition, every time.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative py-20 md:py-28 overflow-hidden">
        {/* Decorative background */}
        <div className="hero-blob w-96 h-96 bg-primary-fixed -top-24 -left-24"></div>
        <div className="hero-blob w-[28rem] h-[28rem] bg-surface-container-highest top-32 -right-32"></div>
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none"></div>

        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-stack-md">
            <Reveal>
              <h1 className="font-display-lg text-headline-lg md:text-display-lg font-bold text-on-surface leading-tight">
                R &amp; R Pharma <span className="text-primary">Pvt. Ltd.</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Providing the Best Health through the Best Medical Technology. We bridge the gap
                between global innovations and local healthcare excellence.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="pt-stack-sm flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-lift group flex items-center gap-2 bg-primary text-on-primary px-8 py-4 font-headline-md text-body-md rounded-lg"
                >
                  Contact Our Team
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/products"
                  className="bg-surface-container-lowest border border-outline-variant text-on-surface px-8 py-4 font-headline-md text-body-md rounded-lg hover:bg-surface-container hover:border-primary/40 transition-all duration-300"
                >
                  View Products
                </Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-stack-lg grid grid-cols-3 max-w-md divide-x divide-outline-variant border border-outline-variant rounded-xl bg-white/70 backdrop-blur-sm overflow-hidden">
                {stats.map((s) => (
                  <div key={s.label} className="px-4 py-4 text-center">
                    <div className="text-primary font-bold text-headline-md">{s.value}</div>
                    <div className="text-on-surface-variant text-label-md uppercase tracking-tight mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative group flex justify-center lg:justify-end">
            <div className="relative inline-block float-slow">
              <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-soft">
                <img
                  src="/images/front-page-image.jpeg"
                  alt="R & R Pharma medical product range — sutures, surgical solutions, gloves and drapes"
                  className="block h-auto w-auto max-h-[420px] md:max-h-[520px]"
                />
              </div>
              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 border border-outline-variant rounded-xl shadow-soft hidden md:block">
                <div className="text-primary font-bold text-headline-md">2014</div>
                <div className="text-on-surface-variant text-label-md uppercase tracking-tighter">
                  Established
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partner logo marquee */}
      <section className="bg-white border-y border-outline-variant py-10 overflow-hidden">
        <p className="text-center font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-8">
          Exclusive partners of world-class manufacturers
        </p>
        <div className="marquee">
          <div className="marquee-track gap-20 pr-20">
            {[...Array(6)].flatMap(() => partners).map((p, i) => (
              <div key={`${p.name}-${i}`} className="shrink-0" title={p.name}>
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-10 md:h-12 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-24 border-b border-outline-variant">
        <Reveal className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-stack-md">
          <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
            Since 2014
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Trusted Partner in Healthcare
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Since 2014, R &amp; R Pharma Pvt. Ltd. has stood as a pillar of reliability in Nepal's
            medical landscape. As a premier authorized importer and distributor, we specialize in
            delivering cutting-edge medical technology and laboratory equipment to hospitals,
            research centers, and diagnostic clinics across the nation.
          </p>
        </Reveal>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden">
        <div className="hero-blob w-80 h-80 bg-primary-fixed -bottom-24 -right-24 opacity-20"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative">
          <Reveal className="mb-16 text-center">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
              Why Choose Us
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
              The foundation of our commitment
            </h2>
            <p className="text-on-surface-variant font-body-md mt-2">
              Built on quality, service and integrity — across every delivery.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 120}>
                <div className="card-lift h-full bg-white p-8 border border-outline-variant rounded-xl group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">
                    {feature.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{feature.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <Reveal className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-12 md:p-16 text-center text-on-primary relative overflow-hidden shadow-soft">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -right-20 -top-20 w-80 h-80 border-8 border-white rounded-full"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 border-8 border-white rounded-full"></div>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-6 relative z-10">
              Ready to enhance your medical services?
            </h2>
            <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-90 relative z-10">
              Our expert team is ready to assist you with technical consultation, product inquiries,
              and supply chain solutions.
            </p>
            <Link
              to="/contact"
              className="btn-lift group inline-flex items-center gap-2 bg-white text-primary px-10 py-4 font-headline-md text-body-md rounded-lg relative z-10"
            >
              Contact Our Team
              <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
