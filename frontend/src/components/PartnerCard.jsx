export default function PartnerCard({ name, country, description, logo }) {
  return (
    <div className="group bg-surface-container-lowest border border-outline-variant p-gutter rounded-lg hover:shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-surface-container mb-stack-md rounded flex items-center justify-center overflow-hidden">
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain p-2" />
        ) : (
          // Erenler Medikal has no logo file — keep the placeholder box blank.
          <span className="sr-only">{name}</span>
        )}
      </div>
      <div>
        <h3 className="font-label-md text-label-md text-on-surface mb-1">{name}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          {country}
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{description}</p>
      </div>
    </div>
  );
}
