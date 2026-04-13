import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Os produtos de PVC são resistentes?",
      answer: "Sim, possuem alta durabilidade e resistência ao clima.",
    },
    {
      question: "Vocês fazem instalação?",
      answer: "Sim, oferecemos serviço completo com instalação.",
    },
    {
      question: "Tem garantia?",
      answer: "Sim, todos os produtos possuem garantia.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-2xl font-bold text-center mb-8">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded p-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{item.question}</p>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>

              {openIndex === index && (
                <p className="mt-2 text-gray-600">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}