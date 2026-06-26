import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalysis();
  }, []);

  const fetchAnalysis = async () => {
    try {
      const res = await api.get("/ai/latest");

      console.log("FULL RESPONSE:", res.data);

      if (res.data && res.data.analysis) {
        setAnalysis(res.data.analysis);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        <h1 className="text-4xl font-bold">Loading Dashboard...</h1>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      {/* User Logged In */}
      <div className="bg-white shadow rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-green-600">
          Successfully Logged In
        </h2>

        <p className="mt-2">
          Welcome to CareerZen 🚀
        </p>
      </div>

      {analysis ? (
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold">
            ATS Score: {analysis.atsScore}
          </h2>

          <h3 className="mt-5 font-semibold">
            Skills
          </h3>

          <ul>
            {analysis.detectedSkills?.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h3 className="mt-5 font-semibold">
            Suggestions
          </h3>

          <ul>
            {analysis.suggestions?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold">
            No Resume Analysis Yet
          </h2>

          <p className="mt-2">
            Upload a resume to generate ATS analysis.
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;