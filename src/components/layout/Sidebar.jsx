import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen p-6 hidden md:block">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-white mb-10">
        Interview<span className="text-blue-500">AI</span>
      </h1>

      {/* Nav Links */}
      <nav className="space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          📊 Dashboard
        </NavLink>

        <NavLink
          to="/setup"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          🎤 Start Interview
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          📁 Interview History
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          👤 Profile
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
