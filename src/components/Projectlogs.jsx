import React from "react";

export default function Projectlogs() {
  const steps = [
    {
      title: "1. Connect Your GitHub Repo",
      description: "Paste your repository URL into the deployment form.",
    },
    {
      title: "2. Choose a Custom Slug",
      description: "Pick a unique slug for your deployment URL.",
    },
    {
      title: "3. Deploy Automatically",
      description: "Our system queues, builds, and deploys your app instantly.",
    },
    {
      title: "4. Access via CDN",
      description:
        "Your deployed app is served globally through fast CDN delivery.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
        How It Works
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-64 bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="text-blue-600 text-4xl font-bold mb-2">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
