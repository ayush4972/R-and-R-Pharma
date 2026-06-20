import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/rg-rising-group-logo.jpg"
              alt="R.G. Suppliers / Rising Group"
              className="h-10 w-auto object-contain"
            />
            <div className="font-headline-md text-headline-md font-bold text-on-surface">
              R.G. Suppliers
            </div>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Your reliable partner in medical technology and healthcare supplies in Nepal.
          </p>
        </div>

        {/* Location / Contact */}
        <div className="flex flex-col gap-2">
          <h4 className="font-label-md text-label-md uppercase text-primary mb-2">Location</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Sitapaila, Kathmandu, Nepal
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Ph: +977-01-4037849
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Mob: +977-9851035665, +977-9802500002
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            gyanshankerdeo@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-label-md text-label-md uppercase text-primary mb-2">Quick Links</h4>
          <Link
            to="/about"
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Our Products
          </Link>
          <Link
            to="/partners"
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Our Partners
          </Link>
          <Link
            to="/contact"
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2">
          <h4 className="font-label-md text-label-md uppercase text-primary mb-2">Legal</h4>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Privacy Policy</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Terms of Service
          </span>
          <div className="pt-4 flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">
              public
            </span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">
              photo_camera
            </span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">
              mail
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/30 py-6 px-margin-desktop text-center">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          © 2024 R.G. Suppliers Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
