import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Contato() {
  return (
    <>
      <Header />

      <section className="py-10 max-w-6xl mx-auto px-4">

        <h1 className="text-2xl font-bold mb-6">Contato</h1>

        {/* Informações */}
        <div className="mb-6">
          <p>Telefone: (00) 0000-0000</p>
          <p>Email: contato@email.com</p>
        </div>

        {/* CTA WhatsApp */}
        <button className="bg-green-600 text-white px-6 py-3 rounded">
          Falar no WhatsApp
        </button>

      </section>

      <Footer />
    </>
  );
}