import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-16 py-5 border-b bg-white">

        <h1
          className="text-2xl font-bold text-purple-700 cursor-pointer"
          onClick={() => navigate("/")}
        >
          CareerZen AI
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700">
          <button onClick={() => window.scrollTo(0, 0)}>
            Home
          </button>

          <button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Features
          </button>

          <button
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            How It Works
          </button>

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="border border-purple-600 text-purple-600 px-5 py-2 rounded-lg"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-16 py-20">

        <div>
          <h1 className="text-6xl font-bold leading-tight">
            AI Resume Analyzer
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            Get AI-powered resume insights, ATS score analysis,
            career guidance, job matching and interview preparation.
          </p>

          <div className="flex gap-4 mt-8">

            <button
              onClick={() => navigate("/register")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg"
            >
              Analyze My Resume
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-gray-300 px-8 py-4 rounded-lg"
            >
              See How It Works
            </button>

          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="CareerZen AI"
            className="w-full max-w-lg rounded-xl shadow-lg"
          />
        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="px-16 py-20 bg-gray-50"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            🤖 AI Resume Analysis
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            📈 ATS Optimization
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            🎯 Job Match Score
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            🎤 Mock Interviews
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="px-16 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center">
            <h3 className="font-bold text-xl">
              1. Upload Resume
            </h3>

            <p className="mt-3 text-gray-600">
              Upload your resume in PDF format.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-xl">
              2. AI Analysis
            </h3>

            <p className="mt-3 text-gray-600">
              Get ATS score and detailed feedback.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-xl">
              3. Improve & Apply
            </h3>

            <p className="mt-3 text-gray-600">
              Improve your resume and apply confidently.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-16 py-20 bg-gray-50"
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          About CareerZen AI
        </h2>

        <p className="max-w-4xl mx-auto text-center text-gray-600">
          CareerZen AI helps students and job seekers improve
          their resumes using Artificial Intelligence. Get ATS
          scores, skill-gap analysis, interview preparation and
          personalized career roadmaps.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center py-6">
        © 2026 CareerZen AI. All Rights Reserved.
      </footer>

    </div>
  );
};

export default LandingPage;