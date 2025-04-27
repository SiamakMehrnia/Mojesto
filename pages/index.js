import Intro from "@/components/Intro";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-48">
        <Intro />
      </section>

      <section id="team" className="scroll-mt-48">
        <Team />
      </section>

      <section id="products" className="scroll-mt-48">
        <Products />
      </section>

      <section id="contact" className="scroll-mt-4">
        <Footer />
      </section>
    </>
  );
}
