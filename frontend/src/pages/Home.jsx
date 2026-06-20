import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-stack-md">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase bg-primary-fixed/30 px-3 py-1 rounded-full">
              Authorized Distributor
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              R.G. Suppliers Pvt. Ltd.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Providing the Best Health through the Best Medical Technology. We bridge the gap
              between global innovations and local healthcare excellence.
            </p>
            <div className="pt-stack-sm flex gap-4">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-8 py-4 font-headline-md text-body-md rounded-lg hover:clinical-shadow transition-all duration-300"
              >
                Contact Our Team
              </Link>
              <Link
                to="/products"
                className="bg-surface-container-lowest border border-outline-variant text-on-surface px-8 py-4 font-headline-md text-body-md rounded-lg hover:bg-surface-container transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="w-full aspect-[4/3] bg-white rounded-xl border border-outline-variant overflow-hidden clinical-shadow">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrztQtXhE6fb8zIU8IIB3jR3jDyU2bBGclEOZNzPH1GC29DOnyJ9FsD0tPclVfq11biQkwFyh0-O2bEt6uD9I4UpnhIlrN-cpzJcu5GalWDET5eh3YfxWljNx_Cv5frT9IH3RpZXrCdeFZ5BCyoGG9zhZsgYxeZW-U9bpjVaR4VjfdyhVCS4_a7AgWxc5jPmguoB-GdKxnImiZHgvfvVG6FztBd4WqgTtFuBKVrOXb1jXwdIpPmB4LRYrE4bSWJdv6SYA2CQGLWRs')",
                }}
              ></div>
            </div>
            {/* Floating Stat Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 border border-outline-variant rounded-xl clinical-shadow hidden md:block">
              <div className="text-primary font-bold text-headline-md">2014</div>
              <div className="text-on-surface-variant text-label-md uppercase tracking-tighter">
                Established
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-24 border-b border-outline-variant">
        <div className="max-w-3xl mx-auto px-margin-desktop text-center space-y-stack-md">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Trusted Partner in Healthcare
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Since 2014, R.G. Suppliers Pvt. Ltd. has stood as a pillar of reliability in Nepal's
            medical landscape. As a premier authorized importer and distributor, we specialize in
            delivering cutting-edge medical technology and laboratory equipment to hospitals,
            research centers, and diagnostic clinics across the nation.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Why Choose Us</h2>
            <p className="text-on-surface-variant font-body-md">
              The foundation of our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 border border-outline-variant rounded-xl hover:clinical-shadow transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">
                  {feature.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="bg-primary rounded-2xl p-12 text-center text-on-primary relative overflow-hidden">
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
              className="inline-block bg-white text-primary px-10 py-4 font-headline-md text-body-md rounded-lg hover:clinical-shadow transition-all duration-300 relative z-10"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
