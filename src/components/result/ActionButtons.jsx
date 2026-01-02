import { useNavigate } from "react-router-dom";
const ActionButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
      <button
      onClick={() => navigate("/setup")}
      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
        🔁 Retry Interview
      </button>
      <button 
      onClick={() => navigate("/dashboard")}
      className="border border-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800">
        📂 Go Dashboard
      </button>
    </div>
  );
};

export default ActionButtons;
