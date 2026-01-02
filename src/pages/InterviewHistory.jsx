import DashboardLayout from "../components/layout/DashboardLayout";
import { useInterview } from "../context/InterviewContext";

const InterviewHistory = () => {
  const { history } = useInterview();

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-white mb-6">
        Interview History
      </h1>

      {history.length === 0 ? (
        <p className="text-slate-400">
          No interviews taken yet.
        </p>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex justify-between items-center"
            >
              <div>
                <p className="text-white font-semibold">
                  {item.role || "Interview"}
                </p>
                <p className="text-slate-400 text-sm">
                  Date: {item.date}
                </p>
              </div>

              <div className="text-right">
                <p className="text-green-400 font-bold">
                  {item.score}
                </p>
                <button className="text-blue-400 text-sm hover:underline">
                  View Result
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default InterviewHistory;
