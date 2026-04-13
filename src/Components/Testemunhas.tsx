export default function Testimonials() {
  const testimonials = [
    {
      name: "João Silva",
      city: "Recife",
      text: "Excelente qualidade, recomendo muito!",
    },
    {
      name: "Maria Souza",
      city: "Olinda",
      text: "Entrega rápida e ótimo atendimento.",
    },
    {
      name: "Carlos Lima",
      city: "Jaboatão",
      text: "Produtos duráveis e bem acabados.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl font-bold text-center mb-8">
          O que nossos clientes dizem
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <p className="text-gray-600 mb-4">"{item.text}"</p>

              <div className="font-bold">
                {item.name}
              </div>

              <div className="text-sm text-gray-500">
                {item.city}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}