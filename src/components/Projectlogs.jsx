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
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-600">
        How Deployee Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-bold mb-4 text-blue-500">
              {step.title}
            </h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
