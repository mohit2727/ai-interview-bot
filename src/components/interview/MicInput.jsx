import { useEffect, useRef, useState } from "react";
import { useInterview } from "../../context/InterviewContext";



const MicInput = ({ onResult }) => {
  const recognitionRef = useRef(null);
  const finalTranscriptRef = useRef("");
  const [isListening, setIsListening] = useState(false);
  const [preview, setPreview] = useState("");
  const { voiceState, setVoiceState} = useInterview();

  const interview = useInterview();
  if(!interview) {
    throw new Error("useInterview must be used within an InterviewProvider");
  
  }

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      let interimText = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalTranscriptRef.current += transcript + " ";
        } else {
          interimText += transcript;
        }
      }

      setPreview(finalTranscriptRef.current + interimText);
    };

    recognition.onend = () => {
      setIsListening(false);
      setVoiceState("idle");

      const finalText = finalTranscriptRef.current.trim();

      if (finalText) {
        onResult(finalText);
      }

      // 🔥 HARD RESET — THIS FIXES YOUR BUG
      finalTranscriptRef.current = "";
      setPreview("");
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [onResult]);

  const startListening = () => {
    if (!recognitionRef.current || isListening) return;

    setVoiceState("listening");
    finalTranscriptRef.current = "";
    setPreview("");
    setIsListening(true);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`w-20 h-20 rounded-full text-white text-3xl transition ${
          isListening ? "bg-red-600 animate-pulse" : "bg-blue-600"
        }`}
      >
        🎤
      </button>

      <p className="text-slate-400 text-sm">
        {isListening ? "Listening..." : "Click to speak"}
      </p>

      {preview && (
        <div className="bg-slate-800 p-4 rounded-lg text-white text-sm w-full max-w-xl">
          {preview}
        </div>
      )}
    </div>
  );
};

export default MicInput;

