const steps = [
  {
    step: "01",
    title: "Set Up Your Interview",
    description:
      "Choose your job role, experience level, and interview type to personalize your interview.",
  },
  {
    step: "02",
    title: "AI Asks Questions",
    description:
      "Our AI interviewer asks role-specific questions using both voice and text.",
  },
  {
    step: "03",
    title: "Answer Using Voice",
    description:
      "Speak your answers naturally using your microphone just like a real interview.",
  },
  {
    step: "04",
    title: "Get Feedback & Score",
    description:
      "Receive instant evaluation, feedback, and suggestions to improve your performance.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#020617]">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          How It <span className="text-blue-500">Works</span>
        </h2>
        <p className="mt-4 text-slate-400">
          Practice interviews in four simple steps using our AI-powered voice interviewer.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {steps.map((item, index) => (
          <div
            key={index}
            className="relative bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-600 transition"
          >
            {/* Step Number */}
            <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
              {item.step}
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-slate-400 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
