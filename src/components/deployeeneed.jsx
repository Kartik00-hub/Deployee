import React from "react";

export default function Deployeeneed() {
  const reasons = [
    {
      title: "🚀 Fast Deployments",
      description:
        "Deployee automates your builds and deployments so you can launch projects quickly without manual setups.",
    },
    {
      title: "📦 CDN Powered",
      description:
        "Your deployed apps are served from a global CDN ensuring lightning-fast performance for users worldwide.",
    },
    {
      title: "🔄 Automatic Queue Handling",
      description:
        "Redis-backed job queues ensure your deployment requests are managed efficiently, even under heavy load.",
    },
    {
      title: "🖼️ Built-in Image Optimization",
      description:
        "Images are automatically processed using JIMP to optimize performance without any extra work from your side.",
    },
    {
      title: "☁️ AWS S3 Storage",
      description:
        "Store all your static assets securely and reliably with Amazon S3 integration.",
    },
    {
      title: "🛡️ Reliable and Scalable",
      description:
        "Deployee is designed for scalability and reliability to handle real-world production workloads.",
    },
  ];

  return (
    <div className=" bg-gray-50 py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-600">
        Why Choose Deployee?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-bold mb-4 text-blue-500">
              {reason.title}
            </h2>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
