export default function Process() {
  const steps = [
    "Você entra em contato",
    "Enviamos o orçamento",
    "Produção do pedido",
    "Entrega / instalação",
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-2xl font-bold text-center mb-8">
          Como funciona
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                {index + 1}
              </div>

              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}