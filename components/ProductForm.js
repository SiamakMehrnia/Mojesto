import { useState, useEffect } from "react";

export default function ProductForm() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Produkte konnten nicht geladen werden:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json();
        setProducts((prev) => [...prev, data]);
        setForm({ name: "", image: "" });
      } else {
        alert("Fehler beim Speichern des Produkts");
      }
    } catch (error) {
      console.error("POST-Fehler:", error);
      alert("Serverfehler beim Speichern");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Produkte verwalten 🧴</h1>

      <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded shadow max-w-xl mx-auto space-y-4 mb-12">
        <h2 className="text-xl font-semibold mb-2">Neues Produkt hinzufügen</h2>
        <div>
          <label className="block mb-1 font-semibold">Produktname</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="z. B. Bartöl Premium"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Bild-URL</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://..."
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
          Produkt speichern
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Lade Produkte...</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="bg-white text-black p-4 rounded shadow text-center">
              <img
                src={product.image || "/default.jpg"}
                alt={product.name}
                className="w-24 h-24 object-cover rounded mb-4 mx-auto"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}