import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-[#020617] min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Topbar />
        <main className="p-6">
          {children}
        </main>
      </div>

    </div>
  );
};

export default DashboardLayout;
