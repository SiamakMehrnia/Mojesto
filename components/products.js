// components/Products.js
export default function Products() {
    const products = [
      {
        name: "Wachs für Herren",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16JPAlPdADfJKBrGqcq7Ndbv7pGTgg-nmog&s",
      },
      {
        name: "After Shave Balm",
        image:
          "https://odessos-store.de/cdn/shop/files/Volcano350.jpg?v=1700170022&width=600",
      },
      {
        name: "Bartöl Premium",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkstKqmpPsPgctKz_qbvyaW2FBuWJzLwQhWQ&s",
      },
    ];
  
    return (
      <section id="products" className="bg-black py-12 px-6 scroll-mt-32">
        <h2 className="text-3xl font-bold text-center mb-8 text-white" data-aos="fade-down">
          Unsere Produkte
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-once="true"
              className="bg-white text-black border border-black rounded-lg p-6 flex flex-col items-center shadow-md z-10"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-48 h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
