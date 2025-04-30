import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
      credentials: "include", // ✅ برای اینکه کوکی‌ها ذخیره بشن
    });

    if (res.ok) {
      // ✅ تاخیر کوتاه برای اینکه کوکی آماده بشه
      setTimeout(() => {
        router.push("/adminPanel");
      }, 300);
    } else {
      alert("Falsch Gehimzahl");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">🔐 Admin Login</h2>
        <input
          type="password"
          placeholder="Passwort eingeben"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Wird geprüft..." : "Einloggen"}
        </button>
      </div>
    </div>
  );
}