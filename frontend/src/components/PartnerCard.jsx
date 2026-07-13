export default function PartnerCard({ name, country, description, logo }) {
  return (
    <div className="card-lift group relative h-full bg-surface-container-lowest border border-outline-variant p-gutter rounded-xl flex flex-col items-center text-center">
      <div className="w-28 h-28 bg-white border border-outline-variant/60 mb-stack-md rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain p-3" />
        ) : (
          <span className="sr-only">{name}</span>
        )}
      </div>
      <div>
        <h3 className="font-headline-md text-[17px] leading-6 font-semibold text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="font-body-sm text-body-sm text-primary font-semibold flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          {country}
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">{description}</p>
      </div>
    </div>
  );
}
