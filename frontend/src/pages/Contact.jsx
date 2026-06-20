import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({
          state: "success",
          message:
            data.message ||
            "Thank you. Your inquiry has been received. A procurement specialist will contact you shortly.",
        });
        setForm(initialForm);
      } else {
        setStatus({
          state: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        state: "error",
        message: "Unable to reach the server. Please try again later.",
      });
    }
  };

  const isLoading = status.state === "loading";

  return (
    <div className="pb-stack-lg max-w-container-max mx-auto px-margin-desktop min-h-screen pt-stack-lg">
      {/* Page Header */}
      <section className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">Contact Us</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Partner with Nepal's leading medical supply chain experts. Reach out for procurement
          inquiries, technical support, or partnership opportunities.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-lg clinical-shadow">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-lg">
            Send an Inquiry
          </h2>
          <form className="space-y-stack-md" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-unit">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">
                FULL NAME
              </label>
              <input
                className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md text-on-surface form-input"
                id="name"
                name="name"
                placeholder="e.g. Dr. Sameer Thapa"
                required
                type="text"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-unit">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">
                EMAIL
              </label>
              <input
                className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md text-on-surface form-input"
                id="email"
                name="email"
                placeholder="hospital@example.com.np"
                required
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-unit">
              <label
                className="font-label-md text-label-md text-on-surface-variant"
                htmlFor="message"
              >
                MESSAGE
              </label>
              <textarea
                className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md text-on-surface form-input"
                id="message"
                name="message"
                placeholder="Provide details about your medical supply requirements..."
                required
                rows="5"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Status message */}
            {status.state === "success" && (
              <div className="flex items-start gap-2 p-3 rounded-lg bg-green-100 text-primary font-body-sm">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span>{status.message}</span>
              </div>
            )}
            {status.state === "error" && (
              <div className="flex items-start gap-2 p-3 rounded-lg bg-error-container text-on-error-container font-body-sm">
                <span className="material-symbols-outlined text-[18px]">error</span>
                <span>{status.message}</span>
              </div>
            )}

            <div className="pt-stack-sm">
              <button
                className="w-full md:w-auto bg-primary hover:bg-primary-container text-on-primary px-margin-desktop py-4 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all clinical-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Submit Inquiry"}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Sidebar */}
        <div className="lg:col-span-5 space-y-gutter">
          <div className="bg-surface-container border border-outline-variant p-stack-lg rounded-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-lg">
              Contact Information
            </h2>
            <div className="space-y-stack-md">
              <div className="flex gap-stack-md items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface-variant">
                    OFFICE ADDRESS
                  </h3>
                  <p className="font-body-md text-on-surface">Sitapaila, Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex gap-stack-md items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">phone</span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface-variant">
                    PHONE &amp; MOBILE
                  </h3>
                  <p className="font-body-md text-on-surface">+977-01-4037849 (Landline)</p>
                  <p className="font-body-md text-on-surface">+977-9851035665 (Mobile)</p>
                  <p className="font-body-md text-on-surface">+977-9802500002 (Mobile)</p>
                </div>
              </div>
              <div className="flex gap-stack-md items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface-variant">EMAIL</h3>
                  <p className="font-body-md text-on-surface">gyanshankerdeo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-surface-container-low border border-outline-variant p-stack-lg rounded-lg">
            <h3 className="font-label-md text-label-md text-on-surface-variant mb-stack-sm">
              OPERATING HOURS
            </h3>
            <div className="space-y-unit">
              <div className="flex justify-between font-body-sm text-body-sm">
                <span className="text-on-surface-variant">Sun - Fri:</span>
                <span className="text-on-surface font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between font-body-sm text-body-sm">
                <span className="text-on-surface-variant">Sat:</span>
                <span className="text-on-surface font-semibold text-secondary">
                  Emergency Dispatch Only
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map View */}
      <section className="mt-gutter">
        <div className="w-full h-96 bg-surface-dim border border-outline-variant rounded-lg relative overflow-hidden group">
          <iframe
            title="R.G. Suppliers Pvt. Ltd. office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324.3207925319914!2d85.26435665094778!3d27.716664668162856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb22705e5eebf3%3A0xcfee80d408f79934!2sP787%2BPPM%2C%20Nagarjun%2044600!5e0!3m2!1sen!2snp!4v1781951411495!5m2!1sen!2snp"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-6 right-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=27.716664668162856,85.26435665094778"
              target="_blank"
              rel="noreferrer"
              className="bg-surface-container-lowest border border-outline-variant text-on-surface px-6 py-3 rounded-full font-label-md text-label-md clinical-shadow hover:bg-surface transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined">directions</span>
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
