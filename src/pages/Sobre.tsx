import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Sobre() {
  return (
    <>
      <Header />

      <section className="py-10 max-w-6xl mx-auto px-4">

        <h1 className="text-2xl font-bold mb-6">Sobre Nós</h1>

        {/* História */}
        <p className="mb-6">
          Somos uma empresa especializada em soluções em PVC...
        </p>

        {/* Missão / Valores */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>Missão</div>
          <div>Visão</div>
          <div>Valores</div>
        </div>

        {/* Diferenciais */}
        <div>
          <h2 className="font-bold mb-2">Diferenciais</h2>
          <p>Produtos de alta durabilidade...</p>
        </div>

      </section>

      <Footer />
    </>
  );
}