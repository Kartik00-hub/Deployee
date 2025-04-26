import { useState } from "react";
import axios from "axios";

import ProjectCarousel from "../components/ProjectCarousel.jsx";
import Projectlogs from "../components/Projectlogs.jsx";

const Home = () => {
  const [repo, setRepo] = useState("");
  const [slug, setSlug] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Repo:", repo, "Slug:", slug); // Debugging
    setMessage("Submitting deployment request...");
    try {
      const res = await axios.post("http://localhost:5000/api/deploy", {
        repo,
        slug,
      });
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
      setMessage("Deployment failed. Please try again.");
    } finally {
      setLoading(false); // Stop loading after request finishes
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 shadow-lg py-4 px-6 flex justify-between items-center rounded-b-xl">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Deployee
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a
            href="/"
            className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/deployments"
            className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300"
          >
            Deployments
          </a>
        </nav>
      </header>

      <main className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4">
          Deploy Your React Projects with Ease
        </h1>
        <p className="text-xl mb-8">
          Streamline your deployment process, customize your project, and share
          with confidence.
        </p>

        <section className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Deploy Your Repository
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* GitHub Repo URL Input */}
            <div>
              <label
                htmlFor="repo"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                GitHub Repo URL
              </label>
              <input
                type="text"
                id="repo"
                placeholder="https://github.com/username/repo"
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Custom Slug Input */}
            <div>
              <label
                htmlFor="slug"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Custom Slug
              </label>
              <input
                type="text"
                id="slug"
                placeholder="my-app"
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-40 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold disabled:opacity-50 disabled:pointer-events-none"
                disabled={loading}
              >
                {loading ? (
                  <div className="spinner-border animate-spin h-5 w-5 border-4 border-solid border-white border-t-transparent rounded-full" />
                ) : (
                  "🚀 Deploy Now"
                )}
              </button>
            </div>
          </form>
        </section>

        {message && <p>{message}</p>}
      </main>
      <section>
        <ProjectCarousel />
      </section>
      <section>
        <Projectlogs />
      </section>

      <footer className="bg-gray-100 text-center py-4">
        &copy; {new Date().getFullYear()} Kartik Saxena. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
