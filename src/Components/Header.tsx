import { Link } from "react-router-dom";
import AberturaImagem from "../img/Aberturah.png"
export default function Header() {
  return (
    <header className="bg-blue-600 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <img src={AberturaImagem} alt="Logo" className="h-8" />

        <nav className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <Link to="/contato" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded">
          Fale conosco
        </Link>

        <div className="md:hidden">☰</div>

      </div>
    </header>
  );
}