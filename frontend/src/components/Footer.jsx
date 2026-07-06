import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Products", to: "/products" },
  { label: "Our Partners", to: "/partners" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-on-background text-inverse-on-surface mt-12">
      {/* Accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-fixed-dim to-primary"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-1.5">
              <img
                src="/images/rr-logo.png"
                alt="R & R Pharma Pvt. Ltd."
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="font-headline-md text-headline-md font-bold text-white">
              R &amp; R Pharma
            </div>
          </div>
          <p className="font-body-sm text-body-sm text-tertiary-fixed-dim leading-relaxed">
            Your reliable partner in medical technology and healthcare supplies in Nepal —
            raising standards so the whole ecosystem rises together.
          </p>
        </div>

        {/* Location / Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim mb-1">
            Location
          </h4>
          <div className="flex items-start gap-2 font-body-sm text-body-sm text-tertiary-fixed-dim">
            <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">
              location_on
            </span>
            Sitapaila, Kathmandu, Nepal
          </div>
          <div className="flex items-start gap-2 font-body-sm text-body-sm text-tertiary-fixed-dim">
            <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">call</span>
            <span>
              +977-01-4037849
              <br />
              +977-9851035665, +977-9802500002
            </span>
          </div>
          <div className="flex items-start gap-2 font-body-sm text-body-sm text-tertiary-fixed-dim">
            <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">mail</span>
            gyanshankerdeo@gmail.com
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim mb-1">
            Quick Links
          </h4>
          {quickLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center gap-1.5 font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-white transition-colors w-fit"
            >
              <span className="material-symbols-outlined text-[14px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary-fixed-dim">
                arrow_forward
              </span>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Group of firms */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim mb-1">
            Our Group
          </h4>
          {["R & R Pharma Pvt. Ltd.", "R.G. Suppliers Pvt. Ltd.", "R Dev Suppliers"].map((firm) => (
            <span key={firm} className="font-body-sm text-body-sm text-tertiary-fixed-dim">
              {firm}
            </span>
          ))}
          <div className="pt-3 flex gap-3">
            {["public", "photo_camera", "mail"].map((icon) => (
              <span
                key={icon}
                className="w-9 h-9 rounded-full border border-tertiary-container/60 flex items-center justify-center text-tertiary-fixed-dim hover:text-white hover:border-primary-fixed-dim hover:bg-primary/30 cursor-pointer transition-all duration-300"
              >
                <span className="material-symbols-outlined text-[18px]">{icon}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-tertiary-container/40 py-6 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body-sm text-body-sm text-tertiary-fixed-dim">
            © 2026 R &amp; R Pharma Pvt. Ltd. All rights reserved.
          </p>
          <p className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim">
            Raise &amp; Rise
          </p>
        </div>
      </div>
    </footer>
  );
}
