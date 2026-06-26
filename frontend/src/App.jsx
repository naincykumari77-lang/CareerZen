import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/UploadResume";
import Analysis from "./pages/Analysis";
import JobMatch from "./pages/JobMatch";
import MockInterview from "./pages/MockInterview";
import CareerRoadmap from "./pages/CareerRoadmap";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/upload" element={<UploadResume />} />

        <Route path="/analysis" element={<Analysis />} />

        <Route path="/jobmatch" element={<JobMatch />} />

        <Route
          path="/interview"
          element={<MockInterview />}
        />

        <Route
          path="/roadmap"
          element={<CareerRoadmap />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;