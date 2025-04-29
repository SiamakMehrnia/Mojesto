import { useEffect, useState } from "react";

export default function TeamContactForm() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    role: "",
    image: "",
    email: "",
  });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team`);
        const data = await res.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Failed to fetch team:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json();
        setTeamMembers((prev) => [...prev, data]); // به لیست اضافه کن
        setForm({ name: "", role: "", image: "", email: "" }); // پاک کردن فرم
      } else {
        alert("Fehler beim Speichern");
      }
    } catch (error) {
      console.error("POST error:", error);
      alert("Fehler beim Senden der Daten");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Teammitglieder verwalten 👥</h1>

      <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded shadow max-w-xl mx-auto space-y-4 mb-12">
        <h2 className="text-xl font-semibold mb-2">Neues Teammitglied hinzufügen</h2>
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="z. B. Sara Mehrnia"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Rolle</label>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="z. B. Designerin"
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
        <div>
          <label className="block mb-1 font-semibold">E-Mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="name@example.com"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
          Hinzufügen
        </button>
      </form>

      {/* نمایش اعضای تیم */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Wird geladen...</p>
        ) : (
          teamMembers.map((member) => (
            <div key={member._id} className="bg-white text-black p-4 rounded shadow text-center">
              <img
                src={member.image || "/default.jpg"}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}