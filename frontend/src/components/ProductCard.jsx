// Status badge styling mirrors the Stitch inventory legend.
const statusStyles = {
  "In Stock": "bg-primary-container/90 text-on-primary-container",
  "Low Stock": "bg-secondary-container/90 text-on-secondary-container",
  "Out of Stock": "bg-error-container/90 text-on-error-container",
};

export default function ProductCard({ name, description, status, image }) {
  return (
    <div className="card-lift h-full bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
      <div className="aspect-[4/3] bg-surface-dim flex items-center justify-center relative overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={name}
        />
        <div
          className={`absolute top-3 right-3 font-label-md px-2 py-1 rounded ${
            statusStyles[status] || statusStyles["In Stock"]
          }`}
        >
          {status}
        </div>
      </div>
      <div className="p-stack-md flex flex-col flex-grow">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">{name}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">{description}</p>
        <button className="mt-stack-md flex items-center gap-stack-sm font-label-md text-primary hover:gap-stack-md transition-all">
          VIEW SPECIFICATIONS{" "}
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
