import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AdminForm() {
  const [view, setView] = useState(null);
  const [products, setProducts] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
      if (!res.ok) throw new Error("Fehler beim Laden der Produkte");
      const data = await res.json();
      setProducts(data);
      setView("products");
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const fetchTeam = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team`);
      if (!res.ok) throw new Error("Fehler beim Laden des Teams");
      const data = await res.json();
      setTeamMembers(data);
      setView("team");
    } catch (error) {
      console.error("Failed to fetch team:", error);
    }
  };

  const handleDelete = async (id, type) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${type}/${id}`, {
        method: "DELETE",
      });
      type === "product" ? fetchProducts() : fetchTeam();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleEditChange = (e) => {
    setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${editingProduct._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingProduct),
      });
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">👨‍💼 Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mb-12">
        <motion.div
          onClick={fetchProducts}
          className="bg-white text-black rounded-2xl shadow-xl p-10 flex flex-col items-center text-center cursor-pointer"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-5xl mb-4">🧴</span>
          <h2 className="text-2xl font-bold mb-4">Produkte verwalten</h2>
          <p className="text-gray-600">Liste der Produkte anzeigen und bearbeiten</p>
        </motion.div>

        <motion.div
          onClick={fetchTeam}
          className="bg-white text-black rounded-2xl shadow-xl p-10 flex flex-col items-center text-center cursor-pointer"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <span className="text-5xl mb-4">👥</span>
          <h2 className="text-2xl font-bold mb-4">Team verwalten</h2>
          <p className="text-gray-600">Mitglieder anzeigen, bearbeiten oder löschen</p>
        </motion.div>
      </div>

      {view === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <motion.div
            className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-xl"
            onClick={() => router.push("/adminpanel/product-form")}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-5xl mb-4">➕</span>
            <h3 className="text-lg font-semibold">Neues Produkt</h3>
          </motion.div>

          {products.length === 0 ? (
            <p className="text-white col-span-full text-center">Keine Produkte gefunden.</p>
          ) : (
            products.map((product) => (
              <motion.div
                key={product._id}
                className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <img
                  src={product.image || "/default.jpg"}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex gap-2 mt-4">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => handleEditClick(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(product._id, "product")}
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      )}

      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Produkt bearbeiten</h2>
            <input
              type="text"
              name="name"
              value={editingProduct.name}
              onChange={handleEditChange}
              placeholder="Produktname"
              className="w-full p-2 border rounded mb-3"
            />
            <input
              type="text"
              name="image"
              value={editingProduct.image}
              onChange={handleEditChange}
              placeholder="Bild-URL"
              className="w-full p-2 border rounded mb-3"
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => setEditingProduct(null)}
              >
                Abbrechen
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleEditSubmit}
              >
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}

      {view === "team" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <motion.div
            className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-xl"
            onClick={() => router.push("/adminpanel/team-form")}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-5xl mb-4">➕</span>
            <h3 className="text-lg font-semibold">Neues Teammitglied</h3>
          </motion.div>

          {teamMembers.length === 0 ? (
            <p className="text-white col-span-full text-center">Keine Mitglieder gefunden.</p>
          ) : (
            teamMembers.map((member) => (
              <motion.div
                key={member._id}
                className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <img
                  src={member.image || "/default.jpg"}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="flex gap-2 mt-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(member._id, "team")}
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      )}
    </div>
  );
}


