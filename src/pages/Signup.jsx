import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <div className="bg-slate-900 p-8 rounded-xl w-full max-w-md">
        <h1 className="text-white text-2xl mb-6">Sign Up</h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 bg-slate-800 text-white rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-slate-800 text-white rounded"
        />

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
