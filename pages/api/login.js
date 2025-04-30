export default function handler(req, res) {
    if (req.method === "POST") {
      const { password } = req.body;
  
      if (password === process.env.ADMIN_PASSWORD) {
        // ست کردن کوکی با مدت 1 روز
        res.setHeader("Set-Cookie", `admin-auth=true; Path=/; Max-Age=86400; HttpOnly`);
        return res.status(200).json({ success: true });
      }
  
      return res.status(401).json({ success: false, message: "Wrong password" });
    }
  
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }