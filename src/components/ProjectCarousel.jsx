import { useState, useEffect } from "react";

const projects = [
  {
    title: "Deployee",
    description:
      "Automated GitHub repository deployment with Redis queues and image optimization via JIMP.",
  },
  {
    title: "Image Tweaker",
    description:
      "Image manipulation and optimization tool using JIMP and AWS S3 caching.",
  },
  {
    title: "Vidwave",
    description:
      "Video streaming platform with transcoding and HLS streaming powered by AWS S3 and Docker.",
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    /* Project Carousel Section */
    /* Project Carousel Section */
    <section className="py-12 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Our Projects</h2>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="bg-white shadow-lg hover:shadow-2xl p-8 rounded-2xl border border-gray-100 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center mt-6 gap-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
