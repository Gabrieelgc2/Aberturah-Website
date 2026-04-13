import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";

export default function Produtos() {
  return (
    <>
      <Header />

      <section className="py-10 max-w-6xl mx-auto px-4">

        <h1 className="text-2xl font-bold mb-6">Produtos</h1>

        {/* Categorias */}
        <div className="flex gap-4 mb-6">
          <button>Tubos</button>
          <button>Conexões</button>
          <button>Acessórios</button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </section>

      <Footer />
    </>
  );
}