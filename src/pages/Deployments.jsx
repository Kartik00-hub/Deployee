import { useEffect, useState } from "react";
import axios from "axios";

export default function Deployments() {
  const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    const fetchDeployments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/deployments");
        setDeployments(res.data);
      } catch (err) {
        console.error("Failed to fetch deployments", err);
      }
    };

    fetchDeployments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Stored Deployments
      </h1>
      <div className="grid gap-4 max-w-2xl mx-auto">
        {deployments.length === 0 ? (
          <p className="text-center text-gray-600">No deployments found.</p>
        ) : (
          deployments.map((deploy, idx) => (
            <div
              key={idx}
              className="p-4 border bg-white rounded-xl shadow hover:shadow-md transition-all"
            >
              <p>
                <strong>Repo:</strong> {deploy.repo}
              </p>
              <p>
                <strong>Slug:</strong> {deploy.slug}
              </p>
              <p>
                <strong>Status:</strong> {deploy.status || "Pending"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
