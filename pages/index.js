import Intro from "../components/Intro.js";
import Team from "../components/team.js";
import Products from "../components/products.js";
import Footer from "../components/footer.js";

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
