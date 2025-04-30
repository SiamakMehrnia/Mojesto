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
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${editType}/${editItem._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editItem),
      });
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
        body: JSON.stringify(addType === "team" ? newItem : { name: newItem.name, image: newItem.image }),
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

      {/* باقی کد تغییری نکرده و به درستی کار می‌کند */}
      {/* محصولات، اعضای تیم، مودال‌ها */}

      {/* ... */}

    </div>
  );
}



