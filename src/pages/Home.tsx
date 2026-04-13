import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import ProductCard from "../Components/ProductCard";
import Caracteristicas from "../Components/Caracteristicas";
import Testimonials from "../Components/Testemunhas";
import Process from "../Components/Processo";
import FAQ from "../Components/FAQ";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import photo from "../img/foto-grande.jpg"
import photo2 from "../img/background-photo.jpg"

export default function Home() {
  return (
    <>
      <Header />

      <Parallax pages={7.2}>

        {/* HERO */}
        <ParallaxLayer offset={0} speed={1}
        >
          <section className="py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
              <div>
                <h1 className="text-3xl font-bold mb-4">
                  Soluções em PVC
                </h1>
                <p className="mb-4">Qualidade para sua obra</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded">
                  Ver produtos
                </button>
              </div>
              <div className="bg-gray-200 h-40 w-full"></div>
            </div>
          </section>

        </ParallaxLayer>

        {/* PRODUTOS */}
        <ParallaxLayer offset={1} speed={0.5}>
          <section className="py-10">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </section>
        </ParallaxLayer>

        {/* CARACTERÍSTICAS */}
        <ParallaxLayer offset={2} speed={1}>
          <Caracteristicas />
        </ParallaxLayer>
        {/* TESTEMUNHAS */}

        <ParallaxLayer offset={3} speed={0.5}>
          <Testimonials />
        </ParallaxLayer>
        {/* PROCESSO */}

        <ParallaxLayer offset={4} speed={0.5}>
          <Process />
        </ParallaxLayer>
        {/* FAQ */}

        <ParallaxLayer offset={5} speed={0.5}>
          <FAQ />
        </ParallaxLayer>

        {/* CTA */}
        <ParallaxLayer offset={6} speed={0.5}>
          <CTA />
        </ParallaxLayer>

        <ParallaxLayer offset={7}>
          <Footer />
          </ParallaxLayer>

        </Parallax>
    
    </>
  );
}