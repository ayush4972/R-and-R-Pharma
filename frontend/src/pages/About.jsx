export default function About() {
  return (
    <>
      {/* Page Header */}
      <header className="relative py-24 bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 gap-4 h-full w-full">
            <div className="col-span-1 border-r border-outline-variant h-full"></div>
            <div className="col-span-1 border-r border-outline-variant h-full"></div>
            <div className="col-span-1 border-r border-outline-variant h-full"></div>
            <div className="col-span-1 border-r border-outline-variant h-full"></div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop relative">
          <nav className="flex mb-stack-md text-label-md text-on-surface-variant space-x-2">
            <span>Company</span>
            <span>/</span>
            <span className="text-primary font-bold">About Us</span>
          </nav>
          <h1 className="font-display-lg text-display-lg text-on-background tracking-tight">
            About Us
          </h1>
          <p className="mt-stack-sm font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Setting the gold standard in medical distribution and B2B supply chain management across
            Nepal since 2014.
          </p>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 space-y-stack-md">
              <div className="inline-block bg-primary-container/10 text-primary-container px-3 py-1 rounded-full font-label-md">
                ESTABLISHED 2014
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-background">
                Our Legacy of Excellence
              </h2>
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  Founded in 2014, R.G. Suppliers Pvt. Ltd. was built on a foundation of
                  professional integrity and deep domain expertise. While our official incorporation
                  dates back a decade, our core leadership brings over{" "}
                  <span className="font-bold text-on-surface">18+ years of industry experience</span>{" "}
                  to the medical procurement landscape.
                </p>
                <p>
                  We operate under a unique philosophy:{" "}
                  <span className="text-primary font-semibold italic">"Raise &amp; Rise"</span>. This
                  guiding principle dictates that we only succeed when we raise the operational
                  standards of our partners. By elevating the quality of medical supplies available,
                  we help the entire healthcare ecosystem of Nepal rise together.
                </p>
                <p>
                  Based in Sitapaila, Kathmandu, we have grown from a local supplier to a nationwide
                  distributor, trusted by the country's leading hospitals, clinical laboratories, and
                  research institutions.
                </p>
              </div>
            </div>
            <div className="md:col-span-6">
              <div
                className="relative rounded-lg overflow-hidden border border-outline-variant bg-surface-container-low aspect-video clinical-shadow"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFWFC-1ZXAZ1Z80LCpAd7dMNlpxWArTg-mHLlBuKtiOY9BazY9Tgzt98lGY_pj5A8p4j4J05geYCi62khnyZcfaK_bdbpPQ75ksfs0IUOpxCja2id7AUJmxAXuoTQ48UhGy-BbjtY6_14WP_ttywXn78zx9yiqYLHc64Z4iMOYiGlsRqDL-V6IoWyix0KB-xbs--gIb8AGa6SK5Y0MYRqZ2mjYotG2jNdDNVsDaaWL7hHx7XCmjz0Zn3vK4_Pb9FySeD-8U7GBnDo')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-20 bg-primary-container relative">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop text-center relative">
          <div className="flex justify-center mb-6">
            <span className="material-symbols-outlined text-on-primary-container text-5xl">
              handshake
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-primary-container mb-4">
            Our Commitment
          </h2>
          <p className="font-display-lg text-3xl md:text-5xl text-on-primary font-bold italic tracking-tight">
            "To Treat Every Customer's Business as if it's Our Own."
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-background">Our Core Values</h2>
            <p className="font-body-md text-on-surface-variant mt-2">
              The pillars that sustain our clinical and logistical operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                icon: "verified",
                title: "Uncompromising Quality",
                text: "We curate our product catalog from globally recognized manufacturers. Every syringe, diagnostic reagent, and surgical instrument undergoes rigorous quality verification before reaching our warehouse.",
              },
              {
                icon: "local_shipping",
                title: "Service Excellence",
                text: "Logistics in medical supply isn't just about moving boxes; it's about life-saving timing. Our distribution network is optimized for speed and cold-chain integrity across difficult terrains.",
              },
              {
                icon: "gavel",
                title: "Ethical Integrity",
                text: "Transparency is our default setting. We maintain clear pricing, honest lead times, and ethical business practices that respect the delicate nature of the healthcare industry.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8 border border-outline-variant rounded-lg bg-surface transition-all duration-300 hover:clinical-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-primary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {value.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
                  {value.title}
                </h3>
                <p className="font-body-sm text-on-surface-variant">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="pb-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              Our Leadership &amp; Team
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2">
              The people driving R.G. Suppliers' commitment to clinical and logistical excellence.
            </p>
          </div>

          {/* Leadership cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-lg">
            <div className="p-8 border border-outline-variant rounded-lg bg-surface flex gap-stack-md items-start transition-all duration-300 hover:clinical-shadow">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md flex-shrink-0">
                GS
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background">
                  Mr. Gyan Shanker Deo
                </h3>
                <p className="font-label-md text-label-md text-primary uppercase tracking-wider mb-stack-sm">
                  Chief Executive Officer &amp; Managing Director
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Over 18 years of experience in Nepal's medical and surgical market. Before
                  founding the group in 2014, he served as Country Manager at Marketing House of
                  Nepal and as Regional Manager at Tablets (India) Ltd., building deep expertise
                  across the country's healthcare supply chain.
                </p>
              </div>
            </div>

            <div className="p-8 border border-outline-variant rounded-lg bg-surface flex gap-stack-md items-start transition-all duration-300 hover:clinical-shadow">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-md text-headline-md flex-shrink-0">
                RB
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background">
                  Mrs. Rachana Bartaula
                </h3>
                <p className="font-label-md text-label-md text-primary uppercase tracking-wider mb-stack-sm">
                  Finance Manager
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Oversees the group's financial operations — ensuring transparent pricing,
                  reliable lead times and sound fiscal management across every territory we serve.
                </p>
              </div>
            </div>
          </div>

          {/* Team strength */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-surface-container-low rounded-xl p-stack-lg text-center gap-gutter">
            <div>
              <p className="text-primary font-display-lg text-display-lg">6</p>
              <p className="font-label-md text-on-surface-variant">Marketing Officers</p>
            </div>
            <div>
              <p className="text-primary font-display-lg text-display-lg">4</p>
              <p className="font-label-md text-on-surface-variant">Office Assistants</p>
            </div>
            <div>
              <p className="text-primary font-display-lg text-display-lg">2</p>
              <p className="font-label-md text-on-surface-variant">Warehouses — Kathmandu &amp; Nepalgunj</p>
            </div>
            <div>
              <p className="text-primary font-headline-lg text-headline-lg mt-3">All Nepal</p>
              <p className="font-label-md text-on-surface-variant">Distribution Coverage</p>
            </div>
          </div>

          {/* Group of firms */}
          <div className="mt-stack-lg text-center">
            <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-stack-md">
              Our Group of Firms
            </h4>
            <div className="flex flex-wrap justify-center gap-stack-md">
              {["R.G. Suppliers Pvt. Ltd.", "R Dev Suppliers", "R & R Pharma Pvt. Ltd."].map(
                (firm) => (
                  <span
                    key={firm}
                    className="bg-surface border border-outline-variant rounded-full px-5 py-2 font-body-sm text-body-sm text-on-surface"
                  >
                    {firm}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
