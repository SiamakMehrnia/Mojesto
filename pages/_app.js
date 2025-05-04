// pages/_app.js
import Navbar from "../components/Navbat"; // ✅ مسیر درست رو چک کن
import "@/styles/globals.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const isAdminRoute = router.pathname.startsWith("/adminPanel");

  return (
    <div className="bg-black">
      {!isAdminRoute && <Navbar />}
      <main className={!isAdminRoute ? "pt-20" : ""}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
