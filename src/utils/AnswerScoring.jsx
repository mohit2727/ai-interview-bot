export const scoreAnswer = (answer) => {
  if (!answer) {
    return {
      score: 0,
      feedback: "No answer provided.",
    };
  }

  const words = answer.trim().split(/\s+/);
  const wordCount = words.length;

  let score = 0;
  let feedback = [];

  // Length-based scoring
  if (wordCount < 5) {
    score += 10;
    feedback.push("Answer is too short. Try to explain more.");
  } else if (wordCount < 15) {
    score += 30;
    feedback.push("Decent answer, but you can add more details.");
  } else {
    score += 50;
    feedback.push("Good explanation length.");
  }

  // Confidence words
  const confidenceWords = ["experience", "implemented", "designed", "worked", "built"];
  const hasConfidence = confidenceWords.some((w) =>
    answer.toLowerCase().includes(w)
  );

  if (hasConfidence) {
    score += 20;
    feedback.push("Shows confidence and experience.");
  }

  return {
    score: Math.min(score, 100),
    feedback: feedback.join(" "),
  };
};
