import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Bot,
  Mic,
  Map,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-white border-r fixed left-0 top-0">

      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-purple-700">
          CareerZen AI
        </h1>
      </div>

      <div className="flex flex-col gap-2 p-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
        >
          <FileText size={18} />
          Resumes
        </Link>

        <Link
          to="/jobmatch"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
        >
          <Briefcase size={18} />
          Job Match
        </Link>

        <Link
          to="/analysis"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
        >
          <Bot size={18} />
          AI Tools
        </Link>

        <Link
          to="/interview"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
        >
          <Mic size={18} />
          Mock Interview
        </Link>

        <Link
          to="/roadmap"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
        >
          <Map size={18} />
          Career Roadmap
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;