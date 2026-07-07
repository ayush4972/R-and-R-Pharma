export default function ProductCard({ name, company, description, image }) {
  return (
    <div className="card-lift h-full bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
      <div className="aspect-[4/3] bg-white border-b border-outline-variant/60 flex items-center justify-center relative overflow-hidden group">
        <img
          className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-stack-md flex flex-col flex-grow">
        <h3 className="font-headline-md text-headline-md text-on-surface">{name}</h3>
        <p className="font-body-sm text-body-sm text-primary font-semibold flex items-center gap-1 mt-1 mb-stack-sm">
          <span className="material-symbols-outlined text-[14px]">factory</span>
          {company}
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">{description}</p>
      </div>
    </div>
  );
}
