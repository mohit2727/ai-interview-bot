import { useEffect, useState } from "react";
import { useInterview } from "../../context/InterviewContext";
import { speak, stopSpeaking } from "../../utils/botSpeech";


const QuestionCard = () => {
  const { questions, currentQuestionIndex, voiceState, setVoiceState} = useInterview();
  

  const question = questions[currentQuestionIndex];

  useEffect(() => {
    if (!question) return;

    setVoiceState("bot-speaking");

    speak(question, () => {
      setVoiceState("idle");
    });

    return () => stopSpeaking();
  }, [question]);

  if (!question) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-white w-full max-w-4xl mt-6">
        <p className="text-lg font-medium">Preparing next question…</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-white w-full max-w-4xl mt-6">
      <p className="text-lg font-medium">{question}</p>

        {voiceState === "bot-speaking" && (
          <p className="text-sm text-blue-400 mt-2">
            🤖 Bot is asking the question…
          </p>
        )}

    {voiceState === "listening" && (
      <p className="text-sm text-green-400 mt-2">
        🎤 Listening to your answer…
      </p>
    )}

    </div>
  );
};

export default QuestionCard;
