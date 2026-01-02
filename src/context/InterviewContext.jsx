import { createContext, useContext, useState, useEffect } from "react";

const InterviewContext = createContext(null);

export const useInterview = () => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error("useInterview must be used within an InterviewProvider");
  }
  return context;
}

export const InterviewProvider = ({ children }) => {



  // Interview configuration
  const [config, setConfig] = useState({
    role: "",
    experience: "",
    interviewType: "",
    difficulty: "",
    duration: "",
  });

  // Interview flow
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [voiceState, setVoiceState] = useState("idle");

  // ✅ Interview history (loaded from localStorage)
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("interviewHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Sync history to localStorage
  useEffect(() => {
    localStorage.setItem("interviewHistory", JSON.stringify(history));
  }, [history]);

  // ✅ Save completed interview
  const saveInterviewToHistory = (result) => {
    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        role: config.role || "Interview",
        score: result.score,
        answers,
      },
    ]);
  };

  return (
    <InterviewContext.Provider
      value={{
        config,
        setConfig,
        questions,
        setQuestions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        answers,
        setAnswers,
        history,
        saveInterviewToHistory,
        voiceState,
        setVoiceState,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};


