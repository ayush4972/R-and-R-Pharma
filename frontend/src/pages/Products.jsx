import ProductCard from "../components/ProductCard.jsx";
import products from "../data/products.json";

export default function Products() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      {/* Page Header */}
      <div className="mb-stack-lg border-l-4 border-primary pl-stack-md">
        <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface tracking-tight">
          Our Products
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-3xl">
          Providing high-precision medical instruments and hospital consumables to healthcare
          facilities across Nepal.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      {/* Inventory Status Legend */}
      <div className="mt-stack-lg p-stack-md bg-surface-container-low rounded-lg border border-outline-variant flex flex-wrap gap-stack-lg items-center justify-center">
        <span className="font-label-md text-on-surface-variant">INVENTORY STATUS:</span>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary-container"></div>
          <span className="font-body-sm text-on-surface-variant">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
          <span className="font-body-sm text-on-surface-variant">
            Low Stock / Lead Time Required
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-error-container border border-error"></div>
          <span className="font-body-sm text-on-surface-variant">Currently Out of Stock</span>
        </div>
      </div>
    </div>
  );
}
