import React from "react";

const faqs = [
  {
    question: "What is Deployee?",
    answer:
      "Deployee is a simple platform that lets you deploy your GitHub repositories automatically with CDN delivery.",
  },
  {
    question: "How fast are deployments?",
    answer: "Most deployments happen within seconds after pushing your code.",
  },
  {
    question: "Do I need to configure anything manually?",
    answer:
      "No! Just paste your repo URL and choose a slug. We handle build, deploy, and serve.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, Deployee has a free tier. Premium options may be available in the future.",
  },
];

export default function Faq() {
  return (
    <section className="w-full px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
