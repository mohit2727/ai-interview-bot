import StartInterviewCard from "../components/dashboard/StartInterviewCard";
import StatsCard from "../components/dashboard/StatsCard";
import RecentInterviews from "../components/dashboard/RecentInterviews";
import DashboardLayout from "../components/layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
    <div className="min-h-screen bg-[#020617] px-6 py-8 text-white">
      
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">Welcome back 👋</h1>
      <p className="text-slate-400 mb-8">
        Ready to practice your next interview?
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatsCard title="Total Interviews" value="5" />
        <StatsCard title="Average Score" value="76%" />
        <StatsCard title="Last Interview" value="Frontend Dev" />
      </div>

      {/* Start Interview */}
      <StartInterviewCard />

      {/* Recent Interviews */}
      <RecentInterviews />

    </div>
    </DashboardLayout>
  );
};

export default Dashboard;
