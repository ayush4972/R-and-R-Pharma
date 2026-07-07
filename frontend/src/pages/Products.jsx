import ProductCard from "../components/ProductCard.jsx";
import Reveal from "../components/Reveal.jsx";
import products from "../data/products.json";

export default function Products() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      {/* Page Header */}
      <Reveal className="mb-stack-lg border-l-4 border-primary pl-stack-md">
        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
          Catalog
        </span>
        <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface tracking-tight mt-1">
          Our Products
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-3xl">
          Providing high-precision medical instruments and hospital consumables to healthcare
          facilities across Nepal.
        </p>
      </Reveal>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {products.map((product, i) => (
          <Reveal key={product.name} delay={(i % 3) * 100}>
            <ProductCard {...product} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
