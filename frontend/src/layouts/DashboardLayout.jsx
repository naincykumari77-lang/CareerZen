import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Sidebar />

      <div className="ml-60">

        <Navbar />

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;