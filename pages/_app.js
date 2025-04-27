// pages/_app.js
import Navbar from "@/components/Navbat"; // مسیر درست بده
import "@/styles/globals.css"; // اگر styles داری
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدت زمان انیمیشن (ms)
      easing: 'ease-in-out', // نرمی انیمیشن
      once: true, // فقط یکبار انیمیشن اجرا بشه
    });
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <main className="pt-20"> {/* بخاطر fixed بودن navbar باید فاصله بدیم */}
        <Component {...pageProps} />
      </main>
    </div>
  );
}
