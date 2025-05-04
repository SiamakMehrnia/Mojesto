// Admin Panel with Add, Edit, Delete (modal-based) for Products & Team
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
  const [editItem, setEditItem] = useState(null);
  const [editType, setEditType] = useState("");
  const [addType, setAddType] = useState("");
  const [newItem, setNewItem] = useState({ name: "", image: "", role: "" });
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
      const data = await res.json();
      setProducts(data);
      setView("products");
    } catch (err) {
      console.error("Produkte konnten nicht geladen werden", err);
    }
  };

  const fetchTeam = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team`);
      const data = await res.json();
      setTeamMembers(data);
      setView("team");
    } catch (err) {
      console.error("Team konnte nicht geladen werden", err);
    }
  };

  const handleDelete = async (id, type) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${type}/${id}`, {
        method: "DELETE",
      });
      type === "product" ? fetchProducts() : fetchTeam();
    } catch (err) {
      console.error("Fehler beim Löschen", err);
    }
  };

  const handleEditSubmit = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/${editType}/${editItem._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editItem),
        }
      );
      setEditItem(null);
      editType === "product" ? fetchProducts() : fetchTeam();
    } catch (err) {
      console.error("Fehler beim Bearbeiten", err);
    }
  };

  const handleAddSubmit = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${addType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          addType === "team"
            ? newItem
            : { name: newItem.name, image: newItem.image }
        ),
      });
      setNewItem({ name: "", image: "", role: "" });
      setAddType("");
      addType === "product" ? fetchProducts() : fetchTeam();
    } catch (err) {
      console.error("Fehler beim Hinzufügen", err);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/adminPanel/login");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center relative">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        LogOut
      </button>

      <h1 className="text-3xl font-bold mb-8">👨‍💼 Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
        <motion.div
          onClick={fetchProducts}
          className="bg-white text-black rounded-2xl shadow-xl p-10 flex flex-col items-center text-center cursor-pointer"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-5xl mb-4">🧴</span>
          <h2 className="text-2xl font-bold mb-4">Produkte anzeigen</h2>
          <p className="text-gray-600">Alle Produkte aus der Datenbank laden</p>
        </motion.div>

        <motion.div
          onClick={fetchTeam}
          className="bg-white text-black rounded-2xl shadow-xl p-10 flex flex-col items-center text-center cursor-pointer"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-5xl mb-4">👥</span>
          <h2 className="text-2xl font-bold mb-4">Team anzeigen</h2>
          <p className="text-gray-600">Alle Teammitglieder anzeigen</p>
        </motion.div>
      </div>

      {view === "products" && (
        <>
          <button
            onClick={() => setAddType("product")}
            className="mb-6 bg-green-600 text-white px-4 py-2 rounded"
          >
            ➕ Neues Produkt hinzufügen
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center"
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
                    onClick={() => {
                      setEditItem(product);
                      setEditType("product");
                    }}
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
              </div>
            ))}
          </div>
        </>
      )}

      {view === "team" && (
        <>
          <button
            onClick={() => setAddType("team")}
            className="mb-6 bg-green-600 text-white px-4 py-2 rounded"
          >
            ➕ Neues Teammitglied hinzufügen
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {teamMembers.map((member) => (
              <div
                key={member._id}
                className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={member.image || "/default.jpg"}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="flex gap-2 mt-4">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => {
                      setEditItem(member);
                      setEditType("team");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(member._id, "team")}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Add Modal */}
      {addType && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Neues {addType === "product" ? "Produkt" : "Teammitglied"}
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full p-2 border mb-3 rounded"
            />
            {addType === "team" && (
              <input
                type="text"
                placeholder="Position"
                value={newItem.role}
                onChange={(e) =>
                  setNewItem({ ...newItem, role: e.target.value })
                }
                className="w-full p-2 border mb-3 rounded"
              />
            )}
            <input
              type="text"
              placeholder="Bild-URL"
              value={newItem.image}
              onChange={(e) =>
                setNewItem({ ...newItem, image: e.target.value })
              }
              className="w-full p-2 border mb-3 rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setAddType("")}
              >
                Abbrechen
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleAddSubmit}
              >
                Hinzufügen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editItem && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Bearbeiten</h2>
            <input
              type="text"
              placeholder="Name"
              value={editItem.name || ""}
              onChange={(e) =>
                setEditItem({ ...editItem, name: e.target.value })
              }
              className="w-full p-2 border mb-3 rounded"
            />
            {editType === "team" && (
              <input
                type="text"
                placeholder="Position"
                value={editItem.role || ""}
                onChange={(e) =>
                  setEditItem({ ...editItem, role: e.target.value })
                }
                className="w-full p-2 border mb-3 rounded"
              />
            )}
            <input
              type="text"
              placeholder="Bild-URL"
              value={editItem.image || ""}
              onChange={(e) =>
                setEditItem({ ...editItem, image: e.target.value })
              }
              className="w-full p-2 border mb-3 rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setEditItem(null)}
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
    </div>
  );
}
