import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/product");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="bg-black py-12 px-6 scroll-mt-32">
      <h2
        className="text-3xl font-bold text-center mb-8 text-white"
        data-aos="fade-down"
      >
        Unsere Produkte
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Array.isArray(products) &&
          products.map((product, index) => (
            <div
              key={product._id || index}
              data-aos="fade-up"
              data-aos-once="true"
              className="bg-white text-black border border-black rounded-lg p-6 flex flex-col items-center shadow-md z-10"
            >
              <img
                src={product.image || "/default.jpg"}
                alt={product.name || "Product"}
                className="w-48 h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">
                {product.name || "Unnamed Product"}
              </h3>
            </div>
          ))}
      </div>
    </section>
  );
}

