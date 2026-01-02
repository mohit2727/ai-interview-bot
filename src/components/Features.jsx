const features = [
  {
    icon: "🎙",
    title: "Voice-Based Interviews",
    description:
      "Answer interview questions using your voice just like a real interview and improve your speaking confidence.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Questions",
    description:
      "Get role-specific and experience-based interview questions generated intelligently by AI.",
  },
  {
    icon: "📊",
    title: "Instant Feedback & Scoring",
    description:
      "Receive real-time evaluation, scores, and detailed feedback after every answer you give.",
  },
  {
    icon: "🧠",
    title: "Communication Analysis",
    description:
      "Improve clarity, confidence, and explanation skills with AI-driven communication insights.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#020617]">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Why Choose <span className="text-blue-500">InterviewAI</span>?
        </h2>
        <p className="mt-4 text-slate-400">
          Practice interviews in a real-world environment powered by voice and artificial intelligence.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-14 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-600 transition"
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-slate-400 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
